import { procedures } from './src/data.js';
import fs from 'fs';
import { GoogleGenAI, Type } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  console.log('Starting refinement of motivos...');
  const updatedProcedures = [...procedures];
  
  // Process in batches of 10
  const batchSize = 10;
  for (let i = 0; i < updatedProcedures.length; i += batchSize) {
    const batch = updatedProcedures.slice(i, i + batchSize);
    console.log(`Processing batch ${i / batchSize + 1} of ${Math.ceil(updatedProcedures.length / batchSize)}...`);
    
    const prompt = `Você é um especialista em faturamento e procedimentos do SUS (SIGTAP).
Melhore e refine o "motivo" (razão/justificativa) para a realização de cada um dos seguintes procedimentos médicos.
O motivo atual pode ser muito curto ou genérico. Torne-o mais profissional, claro e detalhado, explicando o contexto clínico ou administrativo do SUS para a realização deste procedimento.
Mantenha a resposta em português.

Procedimentos:
${JSON.stringify(batch.map((p, index) => ({ id: index, nome: p.nome, motivo_atual: p.motivo })), null, 2)}
`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.INTEGER },
                motivo_refinado: { type: Type.STRING, description: "O motivo melhorado e detalhado" }
              },
              required: ["id", "motivo_refinado"]
            }
          }
        }
      });

      const refinedData = JSON.parse(response.text);
      
      for (const item of refinedData) {
        if (item.id >= 0 && item.id < batch.length) {
          updatedProcedures[i + item.id].motivo = item.motivo_refinado;
        }
      }
    } catch (error) {
      console.error(`Error processing batch ${i / batchSize + 1}:`, error);
    }
  }

  // Write back to src/data.ts
  const fileContent = `export const procedures = ${JSON.stringify(updatedProcedures, null, 2)};\n`;
  fs.writeFileSync('./src/data.ts', fileContent);
  console.log('Finished updating src/data.ts');
}

run();
