/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { Search, Filter, Stethoscope, Users, Activity, X, Sparkles, Loader2, Info, ChevronRight, FileText, HeartPulse, Stethoscope as StethoscopeIcon } from 'lucide-react';
import { procedures } from './data';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import ReactMarkdown from 'react-markdown';

// Define the Procedure type based on data.ts
interface Procedure {
  ord: number;
  codigo: string;
  nome: string;
  modalidade: string;
  cenario: string;
  motivo: string;
  equipeMedica: string[];
  equipeAssistência: string[];
}

const SCENARIOS: Record<string, string> = {
  '1': 'Avaliação, Exames e Testes',
  '2': 'Reavaliação, Exames e Testes',
  '3': 'Acompanhamento',
  '4': 'Diagnóstico',
  '5': 'Orientação',
  '6': 'Telemonitoramento',
  '7': 'Alta',
  '8': 'OPMALs'
};

const getCenariosList = (cenario: string) => {
  if (!cenario) return [];
  return cenario
    .split('/')
    .filter(Boolean)
    .map(c => c.trim())
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map(id => ({ id, label: SCENARIOS[id] || id }));
};

const formatCenarioText = (cenario: string) => {
  const list = getCenariosList(cenario);
  if (list.length === 0) return 'Não especificado';
  return list.map(c => `${c.id} - ${c.label}`).join(', ');
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModalidade, setSelectedModalidade] = useState<string>('Todas');
  const [selectedProfessional, setSelectedProfessional] = useState<string>('');
  
  // Modal State
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);
  
  // AI State
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const modalidades = ['Todas', ...Array.from(new Set(procedures.map(p => p.modalidade)))];
  
  const allProfessionals = useMemo(() => {
    const profs = new Set<string>();
    procedures.forEach(p => {
      p.equipeMedica.forEach(m => profs.add(m));
      p.equipeAssistência.forEach(a => profs.add(a));
    });
    return Array.from(profs).sort();
  }, []);

  const filteredProcedures = useMemo(() => {
    return procedures.filter(p => {
      const matchesSearch = p.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            p.codigo.includes(searchTerm);
      const matchesModalidade = selectedModalidade === 'Todas' || p.modalidade === selectedModalidade;
      const matchesProfessional = selectedProfessional === '' || 
                                  p.equipeMedica.includes(selectedProfessional) || 
                                  p.equipeAssistência.includes(selectedProfessional) ||
                                  (selectedProfessional !== 'Todos' && (p.equipeMedica.includes('Todos') || p.equipeAssistência.includes('Todos')));

      return matchesSearch && matchesModalidade && matchesProfessional;
    });
  }, [searchTerm, selectedModalidade, selectedProfessional]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeModal = () => {
    setSelectedProcedure(null);
    setAiQuery('');
    setAiResponse('');
  };

  const handleAskAI = async () => {
    if (!aiQuery.trim() || !selectedProcedure) return;
    
    setIsAiLoading(true);
    setAiResponse('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const prompt = `Você é um assistente especialista em faturamento e procedimentos do SUS (SIGTAP).
Estou analisando o seguinte procedimento:
- Nome: ${selectedProcedure.nome}
- Código: ${selectedProcedure.codigo}
- Modalidade: ${selectedProcedure.modalidade}
- Cenário: ${formatCenarioText(selectedProcedure.cenario)}
- Motivo: ${selectedProcedure.motivo}
- Equipe Médica: ${selectedProcedure.equipeMedica.join(', ') || 'Nenhuma'}
- Equipe de Assistência: ${selectedProcedure.equipeAssistência.join(', ') || 'Nenhuma'}

Pergunta do usuário: ${aiQuery}

Por favor, forneça uma resposta útil, profissional e direta baseada nas regras do SUS e nas informações fornecidas. Formate a resposta em Markdown.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: prompt,
        config: {
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH }
        }
      });
      
      setAiResponse(response.text || 'Não foi possível gerar uma resposta.');
    } catch (error) {
      console.error("Error calling Gemini AI:", error);
      setAiResponse("Ocorreu um erro ao consultar a inteligência artificial. Verifique se a chave da API está configurada corretamente.");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2.5 rounded-xl shadow-sm border border-indigo-700">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-slate-900">GUIA SIGTAP - PROCEDIMENTOS</h1>
                <p className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-0.5">Sistema de Gerenciamento</p>
              </div>
            </div>
            <div className="text-sm text-slate-500 flex items-center gap-2 bg-slate-50 py-1.5 px-3 rounded-full border border-slate-200">
              <Info className="w-4 h-4 text-indigo-500" />
              <span className="font-medium">Base atualizada</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Consulta de Procedimentos</h2>
          <p className="text-slate-600 max-w-2xl text-lg">
            Encontre rapidamente os procedimentos permitidos por modalidade e profissionais de saúde no SUS.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8 transition-all hover:shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Search */}
            <div className="md:col-span-5 space-y-2">
              <label htmlFor="search" className="block text-sm font-semibold text-slate-700">
                Buscar Procedimento
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                </div>
                <input
                  type="text"
                  id="search"
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none placeholder:text-slate-400"
                  placeholder="Nome ou código do procedimento..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Modalidade Filter */}
            <div className="md:col-span-3 space-y-2">
              <label htmlFor="modalidade" className="block text-sm font-semibold text-slate-700">
                Modalidade
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                </div>
                <select
                  id="modalidade"
                  className="block w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none appearance-none cursor-pointer text-slate-700 font-medium"
                  value={selectedModalidade}
                  onChange={(e) => setSelectedModalidade(e.target.value)}
                >
                  {modalidades.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                  <ChevronRight className="h-5 w-5 text-slate-400 rotate-90" />
                </div>
              </div>
            </div>

            {/* Professional Filter */}
            <div className="md:col-span-4 space-y-2">
              <label htmlFor="professional" className="block text-sm font-semibold text-slate-700">
                Profissional (CBO)
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <StethoscopeIcon className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                </div>
                <select
                  id="professional"
                  className="block w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none appearance-none cursor-pointer text-slate-700 font-medium"
                  value={selectedProfessional}
                  onChange={(e) => setSelectedProfessional(e.target.value)}
                >
                  <option value="">Todos os Profissionais</option>
                  {allProfessionals.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                  <ChevronRight className="h-5 w-5 text-slate-400 rotate-90" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-500" />
              Resultados Encontrados
              <span className="bg-indigo-100 text-indigo-700 py-0.5 px-2.5 rounded-full text-sm font-bold ml-2">
                {filteredProcedures.length}
              </span>
            </h2>
          </div>

          {filteredProcedures.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 border-dashed p-16 text-center flex flex-col items-center justify-center">
              <div className="bg-slate-50 p-5 rounded-full mb-5">
                <Search className="h-10 w-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Nenhum procedimento encontrado</h3>
              <p className="text-slate-500 max-w-md mx-auto">
                Não conseguimos encontrar nenhum procedimento que corresponda aos filtros atuais. Tente usar termos diferentes ou limpar os filtros.
              </p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedModalidade('Todas'); setSelectedProfessional(''); }}
                className="mt-8 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                Limpar Todos os Filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredProcedures.map((proc, idx) => (
                <div 
                  key={`${proc.codigo}-${idx}`} 
                  onClick={() => setSelectedProcedure(proc as Procedure)}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all cursor-pointer group overflow-hidden"
                >
                  <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="font-mono text-sm font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                          {proc.codigo}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100">
                          {proc.modalidade}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors truncate">
                        {proc.nome}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm">
                      <div className="hidden md:flex flex-col items-end">
                        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Equipe Médica</span>
                        <span className="text-slate-700 font-medium truncate max-w-[180px]">
                          {proc.equipeMedica.length > 0 ? proc.equipeMedica[0] + (proc.equipeMedica.length > 1 ? '...' : '') : 'N/A'}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-indigo-600 flex items-center justify-center border border-slate-200 group-hover:border-indigo-600 transition-colors shrink-0">
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {selectedProcedure && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 sm:p-8 border-b border-slate-100 bg-white relative z-10">
              <div className="pr-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                    {selectedProcedure.codigo}
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800">
                    {selectedProcedure.modalidade}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {selectedProcedure.nome}
                </h2>
              </div>
              <button 
                onClick={closeModal}
                className="p-2.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors absolute top-6 right-6 sm:top-8 sm:right-8 bg-white border border-slate-200 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-slate-50/50">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                
                {/* Left Column: Details */}
                <div className="lg:col-span-7 space-y-8">
                  
                  {/* Context Section */}
                  <section>
                    <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-4">
                      <Info className="w-5 h-5 text-indigo-500" /> Contexto do Procedimento
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Cenário</span>
                        {selectedProcedure.cenario ? (
                          <ul className="space-y-2 mt-1">
                            {getCenariosList(selectedProcedure.cenario).map(c => (
                              <li key={c.id} className="text-sm font-medium text-slate-700 flex items-start gap-2.5">
                                <span className="flex items-center justify-center w-5 h-5 rounded bg-indigo-100 text-indigo-700 font-bold text-xs shrink-0">
                                  {c.id}
                                </span>
                                <span className="leading-snug">{c.label}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-base font-medium text-slate-800 leading-relaxed">Não especificado</span>
                        )}
                      </div>
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Motivo</span>
                        <span className="text-base font-medium text-slate-800 leading-relaxed">{selectedProcedure.motivo || 'Não especificado'}</span>
                      </div>
                    </div>
                  </section>

                  <hr className="border-slate-200" />

                  {/* Teams Section */}
                  <section>
                    <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-indigo-500" /> Profissionais Autorizados
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Equipe Médica */}
                      <div>
                        <h4 className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-3">
                          <Stethoscope className="w-4 h-4 text-indigo-600" />
                          Equipe Médica
                        </h4>
                        {selectedProcedure.equipeMedica.length > 0 ? (
                          <ul className="space-y-2.5">
                            {selectedProcedure.equipeMedica.map((med, i) => (
                              <li key={i} className="text-sm font-medium text-slate-700 flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></span>
                                <span className="leading-snug">{med}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-slate-500 italic bg-white p-4 rounded-xl border border-slate-200 border-dashed text-center">Não especificada</p>
                        )}
                      </div>

                      {/* Equipe Assistência */}
                      <div>
                        <h4 className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-3">
                          <Users className="w-4 h-4 text-emerald-600" />
                          Equipe Assistência (CBO)
                        </h4>
                        {selectedProcedure.equipeAssistência.length > 0 ? (
                          <ul className="space-y-2.5">
                            {selectedProcedure.equipeAssistência.map((ast, i) => (
                              <li key={i} className="text-sm font-medium text-slate-700 flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                                <span className="leading-snug">{ast}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-slate-500 italic bg-white p-4 rounded-xl border border-slate-200 border-dashed text-center">Não especificada</p>
                        )}
                      </div>
                    </div>
                  </section>
                </div>

                {/* Right Column: AI Assistant */}
                <div className="lg:col-span-5 flex flex-col h-full min-h-[500px]">
                  <div className="flex flex-col h-full bg-white rounded-3xl border border-indigo-100 overflow-hidden shadow-lg shadow-indigo-100/50">
                    <div className="p-5 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white flex items-center gap-3">
                      <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base">Assistente IA</h3>
                        <p className="text-xs text-indigo-200 font-medium tracking-wide">Tire dúvidas sobre o procedimento</p>
                      </div>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col bg-slate-50/50">
                      <div className="flex-1 overflow-y-auto mb-5">
                        {aiResponse ? (
                          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                            <div className="prose prose-sm prose-slate max-w-none prose-headings:text-indigo-900 prose-a:text-indigo-600 prose-strong:text-slate-800">
                              <ReactMarkdown>{aiResponse}</ReactMarkdown>
                            </div>
                          </div>
                        ) : isAiLoading ? (
                          <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-5">
                            <div className="relative">
                              <div className="w-14 h-14 border-4 border-indigo-100 rounded-full"></div>
                              <div className="w-14 h-14 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
                            </div>
                            <p className="text-sm font-semibold text-slate-600">Analisando regras do SUS...</p>
                          </div>
                        ) : (
                          <div className="h-full flex flex-col items-center justify-center text-slate-500 px-6 text-center">
                            <div className="bg-indigo-50 p-5 rounded-full mb-5">
                              <Sparkles className="w-10 h-10 text-indigo-400" />
                            </div>
                            <p className="text-base font-bold text-slate-700 mb-2">Como posso ajudar?</p>
                            <p className="text-sm text-slate-500 max-w-xs">Faça perguntas sobre faturamento, compatibilidades ou regras específicas deste procedimento.</p>
                          </div>
                        )}
                      </div>

                      <div className="mt-auto relative">
                        <input
                          type="text"
                          className="w-full bg-white border border-slate-300 rounded-2xl pl-5 pr-14 py-4 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm outline-none transition-all placeholder:text-slate-400 font-medium"
                          placeholder="Ex: Quais são os pré-requisitos?"
                          value={aiQuery}
                          onChange={(e) => setAiQuery(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                          disabled={isAiLoading}
                        />
                        <button
                          onClick={handleAskAI}
                          disabled={isAiLoading || !aiQuery.trim()}
                          className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 text-white w-12 rounded-xl flex items-center justify-center transition-colors shadow-sm"
                        >
                          {isAiLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ChevronRight className="w-6 h-6" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
