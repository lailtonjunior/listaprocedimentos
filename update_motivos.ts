import { procedures } from './src/data.js';
import fs from 'fs';

const motivoMap: Record<string, string> = {
  "Sem indicação de OPMAL": "Procedimento indicado para pacientes que necessitam de reabilitação física intensiva, mas não possuem indicação clínica para o uso de Órteses, Próteses ou Meios Auxiliares de Locomoção (OPMAL).",
  "Com indicação de OPMAL": "Procedimento indicado para pacientes em reabilitação física intensiva que possuem indicação clínica e necessidade de adaptação ou uso de Órteses, Próteses ou Meios Auxiliares de Locomoção (OPMAL).",
  "Orientações": "Realizado para fornecer orientações clínicas, terapêuticas e de autocuidado ao paciente ou seus responsáveis, visando a continuidade do tratamento e a promoção da saúde.",
  "Estomas": "Procedimento voltado para o cuidado, avaliação e orientação de pacientes portadores de estomas, garantindo a manutenção adequada e prevenindo complicações.",
  "Covid": "Indicado para a reabilitação de pacientes que apresentam sequelas ou disfunções (físicas ou cardiorrespiratórias) decorrentes da infecção por COVID-19.",
  "Pós Operatório": "Atendimento fisioterapêutico focado na recuperação funcional, alívio da dor e prevenção de complicações em pacientes no período pré ou pós-operatório de cirurgias musculoesqueléticas.",
  "Reabilitação Física em Geral": "Atendimento fisioterapêutico destinado à reabilitação de alterações motoras e disfunções físicas gerais, buscando restaurar a mobilidade e a qualidade de vida do paciente.",
  "Atendimento para paciente neurofuncional": "Focado na reabilitação de pacientes com distúrbios neuro-cinético-funcionais (como sequelas de AVC ou lesões neurológicas) que não apresentam complicações sistêmicas graves.",
  "Reabilitação Infantil em paciente participativo": "Atendimento fisioterapêutico voltado para crianças com desordens do desenvolvimento neuromotor que possuem capacidade de participação ativa nas terapias.",
  "Reabilitação em paciente pós cirúrgico neurológico": "Atendimento especializado para a recuperação motora e funcional de pacientes que foram submetidos a procedimentos neurocirúrgicos.",
  "Reabilitação em paciente não participativo": "Fisioterapia adaptada para pacientes com comprometimento cognitivo severo, que não conseguem participar ativamente dos exercícios propostos, focando em prevenção de deformidades e manutenção de funções vitais.",
  "Analgesia/Estimulação muscular": "Uso de recursos de eletroestimulação para promover analgesia (alívio da dor) ou fortalecimento/estimulação muscular em pacientes em processo de reabilitação.",
  "Avaliação de marcha - idade a partir de 04 anos": "Avaliação biomecânica (cinética e cinemática) da marcha para identificar alterações no padrão de caminhada, indicada para pacientes a partir de 4 anos de idade.",
  "Avaliação de equilíbrio estático - idade a partir de 04 anos": "Avaliação do controle postural e equilíbrio estático utilizando placa de força, essencial para diagnosticar e tratar disfunções de equilíbrio em pacientes a partir de 4 anos.",
  "Dificuldade comunicação": "Acompanhamento especializado para pacientes com dificuldades severas de comunicação, visando a introdução e adaptação de métodos de Comunicação Alternativa e Ampliada (CAA).",
  "Estimulação cognitiva": "Acompanhamento neuropsicológico focado na avaliação e estimulação das funções cognitivas (memória, atenção, raciocínio) de pacientes em processo de reabilitação.",
  "Ensino Pedagógico": "Acompanhamento psicopedagógico para auxiliar pacientes em reabilitação a superar dificuldades de aprendizagem decorrentes de suas condições de saúde.",
  "Avaliação e acompanhamento": "Procedimento destinado à avaliação global e ao acompanhamento contínuo do desenvolvimento neuropsicomotor do paciente ao longo do seu processo de reabilitação.",
  "Realização de testes": "Aplicação de testes padronizados para auxiliar no psicodiagnóstico, permitindo uma avaliação mais precisa das condições psicológicas e cognitivas do paciente.",
  "Diagnóstico": "Procedimento realizado com finalidade diagnóstica, visando identificar, confirmar ou descartar patologias, alterações funcionais ou deficiências específicas do paciente.",
  "Avaliação Multi Pacientes Regulados": "Avaliação multiprofissional abrangente, realizada por uma equipe interdisciplinar, para pacientes com deficiência visual encaminhados via regulação do SUS.",
  "Acompanhamento": "Acompanhamento terapêutico contínuo para monitorar a evolução clínica do paciente, ajustar condutas e garantir a eficácia do plano de reabilitação.",
  "Estimulação": "Atendimento fisioterapêutico focado na estimulação e reabilitação de pacientes com alterações oculomotoras de origem central, frequentemente associadas a comprometimentos sistêmicos.",
  "Fisioterapia Oculomotora Periférica": "Atendimento fisioterapêutico específico para o tratamento de disfunções oculomotoras de origem periférica, visando melhorar a coordenação e o controle dos movimentos oculares.",
  "Avaliação/Consulta Médica": "Consulta médica especializada para avaliação clínica detalhada e estabelecimento de diagnóstico diferencial, fundamental para direcionar o plano terapêutico.",
  "Triagem/Diagnóstico": "Procedimento de triagem (como o Teste da Orelhinha) para detecção precoce de alterações, ou para confirmação diagnóstica de deficiências auditivas.",
  "Acompanhamento de OPMAL": "Procedimento para avaliar o ganho de inserção e a eficácia do uso de Órteses, Próteses ou Meios Auxiliares de Locomoção (OPMAL), garantindo a adaptação adequada do paciente.",
  "Retorno de pacientes": "Reavaliação diagnóstica periódica de pacientes (especialmente crianças menores de 3 anos) para monitorar o desenvolvimento e ajustar intervenções precoces.",
  "Preparação OPMAL": "Procedimento de seleção, indicação e verificação do benefício de Aparelhos de Amplificação Sonora Individual (AASI), preparando o paciente para o uso da prótese.",
  "Teste durante consulta": "Realização de testes clínicos rápidos (como testes acumétricos com diapasão) durante a consulta para auxiliar na avaliação imediata da função auditiva.",
  "Diagnóstico / Carol": "Procedimento diagnóstico especializado (como testes de processamento auditivo ou vestibulares) para identificar disfunções específicas, conforme protocolo técnico.",
  "Reteste Triagem Neonatal": "Realização de reteste das emissões otoacústicas (Teste da Orelhinha) em recém-nascidos que apresentaram falha na primeira triagem, para confirmação diagnóstica.",
  "Reteste PEATE-BERA": "Reteste do Potencial Evocado Auditivo de Tronco Encefálico (PEATE/BERA) para confirmação de diagnóstico audiológico após falha na triagem inicial.",
  "Acompanhamento de paciente protetizado": "Acompanhamento clínico e terapêutico de pacientes que já utilizam Aparelho de Amplificação Sonora Individual (AASI), visando otimizar a adaptação e o uso do dispositivo.",
  "Grupos Psicologia Estagiários": "Atividade educativa e de orientação em grupo, conduzida com o apoio de estagiários de psicologia sob supervisão, para promoção de saúde mental e troca de experiências.",
  "Avaliação/Diagnóstico": "Avaliação antropométrica detalhada para diagnóstico do estado nutricional e físico do paciente, base para o planejamento de intervenções de saúde.",
  "Oficinas": "Atendimento em grupo através de oficinas terapêuticas, visando a socialização, o desenvolvimento de habilidades e a reabilitação psicossocial de pessoas com deficiência.",
  "Avaliação": "Procedimento de avaliação clínica ou instrumental específica para identificar alterações funcionais, cognitivas ou sensoriais, subsidiando o plano de tratamento.",
  "Atendimento - Orientação somente para ED. FÍSICO e NUTRI": "Consulta com profissionais de nível superior (Educação Física ou Nutrição) focada exclusivamente em orientações e prescrições específicas de suas áreas de atuação.",
  "Consulta médica Psiquiatria": "Consulta médica especializada em psiquiatria para avaliação, diagnóstico e acompanhamento de transtornos mentais e comportamentais.",
  "Teleconsulta médica": "Consulta médica realizada de forma remota (telessaúde) na atenção especializada, garantindo acesso ao cuidado e monitoramento à distância.",
  "Eventos/Estratégia de metas": "Sessões de terapia em grupo focadas no estabelecimento de estratégias, alcance de metas terapêuticas e suporte mútuo entre os participantes.",
  "Atendimento": "Sessão de terapia individual (psicológica, fonoaudiológica, etc.) para intervenção clínica direta e personalizada de acordo com as necessidades do paciente.",
  "Encaminhamentos e orientações com relatório": "Atividade de matriciamento onde a equipe especializada fornece suporte, orientações e relatórios técnicos para outras equipes da rede de atenção à saúde.",
  "Alta": "Procedimento administrativo e clínico que registra a alta do paciente do serviço de reabilitação após o alcance dos objetivos terapêuticos propostos.",
  "Grupo Psicologia - Renata (a partir de 6 anos)": "Atendimento psicoterapêutico em grupo direcionado a crianças a partir de 6 anos, focado no desenvolvimento emocional e social.",
  "Orientações apenas para os responsáveis": "Atendimento focado exclusivamente em fornecer orientações, treinamento e suporte emocional aos familiares e cuidadores de pessoas com deficiência.",
  "Atendimento/Estratégia de metas": "Atendimento e acompanhamento global de pacientes com múltiplas deficiências, focando na definição e execução de estratégias para alcançar metas de reabilitação complexas."
};

function run() {
  const updatedProcedures = procedures.map(p => {
    return {
      ...p,
      motivo: motivoMap[p.motivo] || p.motivo
    };
  });

  const fileContent = `export const procedures = ${JSON.stringify(updatedProcedures, null, 2)};\n`;
  fs.writeFileSync('./src/data.ts', fileContent);
  console.log('Finished updating src/data.ts');
}

run();
