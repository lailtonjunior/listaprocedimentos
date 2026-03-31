export const procedures = [
  // FÍSICA
  {
    ord: 1,
    codigo: "03.01.07.005-9",
    nome: "ATENDIMENTO/ACOMPANHAMENTO INTENSIVO DE PACIENTE EM REABILITAÇÃO FÍSICA (1 TURNO PACIENTE-DIA - 15 ATENDIMENTOS-MÊS)",
    modalidade: "FÍSICA",
    cenario: "1/2/3/5",
    motivo: "Sem indicação de OPMAL",
    equipeMedica: ["225160 Médico fisiatra", "225270 Médico ortopedista e traumatologista"],
    equipeAssistência: ["223505 Enfermeiro", "223710 Nutricionista", "251510 Psicólogo clínico", "251605 Assistente social"]
  },
  {
    ord: 2,
    codigo: "03.01.07.010-5",
    nome: "TRATAMENTO INTENSIVO DE PACIENTE EM REABILITAÇÃO FÍSICA (1 TURNO PACIENTE-DIA - 20 ATENDIMENTOS-MÊS)",
    modalidade: "FÍSICA",
    cenario: "1/2/3/5",
    motivo: "Com indicação de OPMAL",
    equipeMedica: ["225112 Médico neurologista", "225160 Médico fisiatra", "225270 Médico ortopedista e traumatologista"],
    equipeAssistência: ["223505 Enfermeiro", "223710 Nutricionista", "223905 Fisioterapeuta", "251510 Psicólogo clínico", "251605 Assistente social", "313501 Técnico em reabilitação"]
  },
  {
    ord: 3,
    codigo: "03.01.07.022-9",
    nome: "TELEATENDIMENTO/TELEMONITORAMENTO EM REABILITAÇÃO FÍSICA",
    modalidade: "FÍSICA",
    cenario: "3/5/6/",
    motivo: "Orientações",
    equipeMedica: ["225112 Médico neurologista", "225160 Médico fisiatra", "225270 Médico ortopedista e traumatologista"],
    equipeAssistência: ["223505 Enfermeiro", "223710 Nutricionista", "223905 Fisioterapeuta", "251510 Psicólogo clínico", "251605 Assistente social", "313501 Técnico em reabilitação"]
  },
  {
    ord: 4,
    codigo: "03.01.10.006-3",
    nome: "CUIDADOS COM ESTOMAS",
    modalidade: "FÍSICA",
    cenario: "1/2/3/5",
    motivo: "Estomas",
    equipeMedica: ["Todos"],
    equipeAssistência: ["223505 Enfermeiro"]
  },
  {
    ord: 5,
    codigo: "03.01.07.021-0",
    nome: "REABILITAÇÃO DE PACIENTES PÓS COVID-19",
    modalidade: "FÍSICA",
    cenario: "3/5",
    motivo: "Covid",
    equipeMedica: ["Todos"],
    equipeAssistência: ["Todos"]
  },
  {
    ord: 6,
    codigo: "03.01.07.020-2",
    nome: "REABILITAÇÃO CARDIORRESPIRATÓRIA DE PACIENTES PÓS COVID-19",
    modalidade: "FÍSICA",
    cenario: "3/5",
    motivo: "Covid",
    equipeMedica: ["Todos"],
    equipeAssistência: ["Todos"]
  },
  {
    ord: 7,
    codigo: "03.02.05.005-9",
    nome: "ATENDIMENTO FISIOTERAPÊUTICO EM PACIENTES NO PRÉ E PÓS-OPERATÓRIO NAS DISFUNÇÕES MÚSCULO ESQUELÉTICAS",
    modalidade: "FÍSICA",
    cenario: "3/5",
    motivo: "Pós Operatório",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral"]
  },
  {
    ord: 8,
    codigo: "03.02.05.002-4",
    nome: "ATENDIMENTO FISIOTERAPÊUTICO NAS ALTERAÇÕES MOTORAS",
    modalidade: "FÍSICA",
    cenario: "3/5",
    motivo: "Reabilitação Física em Geral",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral"]
  },
  {
    ord: 9,
    codigo: "03.02.06.001-1",
    nome: "ATENDIMENTO FISIOTERAPÊUTICO EM PACIENTES COM DISTÚRBIOS NEURO-CINÉTICO-FUNCIONAIS SEM COMPLICAÇÕES SISTÊMICAS",
    modalidade: "FÍSICA",
    cenario: "3/5",
    motivo: "Atendimento para paciente neurofuncional",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral"]
  },
  {
    ord: 10,
    codigo: "03.02.06.003-8",
    nome: "ATENDIMENTO FISIOTERAPÊUTICO NAS DESORDENS DO DESENVOLVIMENTO NEURO MOTOR",
    modalidade: "FÍSICA",
    cenario: "3/5",
    motivo: "Reabilitação Infantil em paciente participativo",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral"]
  },
  {
    ord: 11,
    codigo: "03.02.06.005-4",
    nome: "ATENDIMENTO FISIOTERAPÊUTICO EM PACIENTE NO PRÉ/PÓS-OPERATÓRIO DE NEUROCIRURGIA",
    modalidade: "FÍSICA",
    cenario: "3/5",
    motivo: "Reabilitação em paciente pós cirúrgico neurológico",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral"]
  },
  {
    ord: 12,
    codigo: "03.02.06.004-6",
    nome: "ATENDIMENTO FISIOTERAPÊUTICO EM PACIENTE C/ COMPROMETIMENTO COGNITIVO",
    modalidade: "FÍSICA",
    cenario: "3/5",
    motivo: "Reabilitação em paciente não participativo",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral"]
  },
  {
    ord: 13,
    codigo: "03.09.05.003-0",
    nome: "SESSÃO DE ELETROESTIMULAÇÃO",
    modalidade: "FÍSICA",
    cenario: "3/5",
    motivo: "Analgesia/Estimulação muscular",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral"]
  },
  {
    ord: 14,
    codigo: "02.11.03.002-8",
    nome: "AVALIAÇÃO CINÉTICA, CINEMÁTICA E DE PARÂMETROS LINEARES",
    modalidade: "FÍSICA",
    cenario: "1/2",
    motivo: "Avaliação de marcha - idade a partir de 04 anos",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral"]
  },
  {
    ord: 15,
    codigo: "02.11.03.003-6",
    nome: "AVALIAÇÃO DE EQUILÍBRIO ESTÁTICO EM PLACA DE FORÇA",
    modalidade: "FÍSICA",
    cenario: "1/2",
    motivo: "Avaliação de equilíbrio estático - idade a partir de 04 anos",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral"]
  },
  
  // INTELECTUAL
  {
    ord: 1,
    codigo: "03.01.07.002-4",
    nome: "ACOMPANHAMENTO DE PACIENTE EM REABILITAÇÃO EM COMUNICAÇÃO ALTERNATIVA",
    modalidade: "INTELECTUAL",
    cenario: "3/5",
    motivo: "Dificuldade comunicação",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral", "223905 Terapeuta ocupacional", "223810 Fonoaudiólogo geral", "239415 Pedagogo"]
  },
  {
    ord: 2,
    codigo: "03.01.07.004-0",
    nome: "ACOMPANHAMENTO NEUROPSICOLÓGICO DE PACIENTE EM REABILITAÇÃO",
    modalidade: "INTELECTUAL",
    cenario: "3/5",
    motivo: "Estimulação cognitiva",
    equipeMedica: [],
    equipeAssistência: ["251510 Psicólogo clínico"]
  },
  {
    ord: 3,
    codigo: "03.01.07.005-9",
    nome: "ACOMPANHAMENTO PSICOPEDAGÓGICO DE PACIENTE EM REABILITAÇÃO",
    modalidade: "INTELECTUAL",
    cenario: "3/5",
    motivo: "Ensino Pedagógico",
    equipeMedica: [],
    equipeAssistência: ["239415 Pedagogo"]
  },
  {
    ord: 4,
    codigo: "03.01.07.006-7",
    nome: "ATENDIMENTO / ACOMPANHAMENTO DE PACIENTE EM REABILITAÇÃO DO DESENVOLVIMENTO NEUROPSICOMOTOR",
    modalidade: "INTELECTUAL",
    cenario: "1/2/3/5",
    motivo: "Avaliação e acompanhamento",
    equipeMedica: [],
    equipeAssistência: ["251605 Assistente social", "223605 Fisioterapeuta geral", "223905 Terapeuta ocupacional", "239415 Pedagogo"]
  },
  {
    ord: 5,
    codigo: "03.01.07.026-1",
    nome: "TELEATENDIMENTO/TELEMONITORAMENTO EM REABILITAÇÃO INTELECTUAL",
    modalidade: "INTELECTUAL",
    cenario: "3/5/6/",
    motivo: "Orientações",
    equipeMedica: ["Todos"],
    equipeAssistência: ["Todos"]
  },
  {
    ord: 6,
    codigo: "02.11.09.003-3",
    nome: "APLICAÇÃO DE TESTE P/ PSICODIAGNÓSTICO",
    modalidade: "INTELECTUAL",
    cenario: "1/2",
    motivo: "Realização de testes",
    equipeMedica: [],
    equipeAssistência: ["251510 Psicólogo clínico"]
  },

  // VISUAL
  {
    ord: 1,
    codigo: "02.11.06.003-4",
    nome: "CAMPIMETRIA COMPUTADORIZADA OU MANUAL COM GRÁFICO",
    modalidade: "VISUAL",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: ["225265 Médico oftalmologista"],
    equipeAssistência: []
  },
  {
    ord: 2,
    codigo: "02.11.06.002-6",
    nome: "BIOMICROSCOPIA DE FUNDO DE OLHO",
    modalidade: "VISUAL",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: ["225265 Médico oftalmologista"],
    equipeAssistência: []
  },
  {
    ord: 3,
    codigo: "02.11.06.005-0",
    nome: "CERATOMETRIA",
    modalidade: "VISUAL",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: ["225265 Médico oftalmologista"],
    equipeAssistência: []
  },
  {
    ord: 4,
    codigo: "02.11.06.010-7",
    nome: "FUNDOSCOPIA",
    modalidade: "VISUAL",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: ["225265 Médico oftalmologista"],
    equipeAssistência: []
  },
  {
    ord: 5,
    codigo: "02.11.06.012-3",
    nome: "MAPEAMENTO DE RETINA",
    modalidade: "VISUAL",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: ["225265 Médico oftalmologista"],
    equipeAssistência: []
  },
  {
    ord: 6,
    codigo: "02.11.06.022-0",
    nome: "TESTE DE VISÃO DE CORES",
    modalidade: "VISUAL",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: ["225265 Médico oftalmologista"],
    equipeAssistência: []
  },
  {
    ord: 7,
    codigo: "02.11.06.025-5",
    nome: "TONOMETRIA",
    modalidade: "VISUAL",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: ["225265 Médico oftalmologista"],
    equipeAssistência: []
  },
  {
    ord: 8,
    codigo: "02.11.06.023-9",
    nome: "TESTE ORTÓPTICO",
    modalidade: "VISUAL",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: ["225265 Médico oftalmologista"],
    equipeAssistência: []
  },
  {
    ord: 9,
    codigo: "02.11.06.015-8",
    nome: "POTENCIAL DE ACUIDADE VISUAL",
    modalidade: "VISUAL",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: ["225265 Médico oftalmologista"],
    equipeAssistência: []
  },
  {
    ord: 10,
    codigo: "03.01.07.014-8",
    nome: "TREINO DE ORIENTAÇÃO E MOBILIDADE",
    modalidade: "VISUAL",
    cenario: "3",
    motivo: "Acompanhamento",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral", "223905 Terapeuta ocupacional", "224140 Profissional de educação física na saúde"]
  },
  {
    ord: 11,
    codigo: "03.01.07.015-6",
    nome: "AVALIAÇÃO MULTIPROFISSIONAL EM DEFICIÊNCIA VISUAL",
    modalidade: "VISUAL",
    cenario: "1/2",
    motivo: "Avaliação Multi Pacientes Regulados",
    equipeMedica: ["225265 Médico oftalmologista"],
    equipeAssistência: ["251510 Psicólogo clínico", "251605 Assistente social", "223605 Fisioterapeuta geral", "223810 Fonoaudiólogo geral", "223905 Terapeuta ocupacional", "223910 Ortoptista", "239425 Psicopedagogo", "224140 Profissional de educação física na saúde"]
  },
  {
    ord: 12,
    codigo: "03.01.07.004-0",
    nome: "ATENDIMENTO/ACOMPANHAMENTO EM REABILITAÇÃO VISUAL",
    modalidade: "VISUAL",
    cenario: "3/5",
    motivo: "Acompanhamento",
    equipeMedica: [],
    equipeAssistência: ["223505 Enfermeiro", "251510 Psicólogo clínico", "251605 Assistente social", "322305 Técnico em óptica e optometria", "226320 Optometrista", "223605 Fisioterapeuta geral", "223810 Fonoaudiólogo geral", "223905 Terapeuta ocupacional", "239425 Psicopedagogo", "224140 Profissional de educação física na saúde"]
  },
  {
    ord: 13,
    codigo: "03.01.07.024-5",
    nome: "TELEATENDIMENTO/TELEMONITORAMENTO EM REABILITAÇÃO VISUAL",
    modalidade: "VISUAL",
    cenario: "3/5/6/",
    motivo: "Orientações",
    equipeMedica: ["Todos"],
    equipeAssistência: ["Todos"]
  },
  {
    ord: 14,
    codigo: "03.02.06.003-8",
    nome: "ATENDIMENTO FISIOTERAPÊUTICO EM PACIENTES COM ALTERAÇÕES OCULOMOTORAS CENTRAIS C/ COMPROMETIMENTO SISTÊMICO",
    modalidade: "VISUAL",
    cenario: "3",
    motivo: "Estimulação",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral"]
  },
  {
    ord: 15,
    codigo: "03.02.06.002-0",
    nome: "ATENDIMENTO FISIOTERAPÊUTICO EM PACIENTES COM ALTERAÇÕES OCULOMOTORAS PERIFÉRICAS",
    modalidade: "VISUAL",
    cenario: "3",
    motivo: "Fisioterapia Oculomotora Periférica",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral"]
  },

  // AUDITIVA
  {
    ord: 1,
    codigo: "02.11.05.011-0",
    nome: "POTENCIAL EVOCADO AUDITIVO",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 2,
    codigo: "02.11.07.002-5",
    nome: "AUDIOMETRIA DE REFORÇO VISUAL (VIA AÉREA / ÓSSEA)",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 3,
    codigo: "02.11.07.003-3",
    nome: "AUDIOMETRIA EM CAMPO LIVRE",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 4,
    codigo: "02.11.07.004-1",
    nome: "AUDIOMETRIA TONAL LIMIAR (VIA AÉREA / ÓSSEA)",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 5,
    codigo: "02.11.07.005-0",
    nome: "AVALIAÇÃO AUDITIVA COMPORTAMENTAL",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 6,
    codigo: "02.11.07.010-6",
    nome: "AVALIAÇÃO P/ DIAGNÓSTICO DIFERENCIAL DE DEFICIÊNCIA AUDITIVA",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Avaliação/Consulta Médica",
    equipeMedica: ["225275 Médico otorrinolaringologista"],
    equipeAssistência: []
  },
  {
    ord: 7,
    codigo: "02.11.07.014-9",
    nome: "EMISSÕES OTOACÚSTICAS EVOCADAS PARA TRIAGEM AUDITIVA (TESTE DA ORELHINHA)",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Triagem/Diagnóstico",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 8,
    codigo: "02.11.07.015-7",
    nome: "ESTUDO DE EMISSÕES OTOACÚSTICAS EVOCADAS TRANSITÓRIAS E PRODUTOS DE DISTORÇÃO (EOA)",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 9,
    codigo: "02.11.07.020-3",
    nome: "IMITANCIOMETRIA",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 10,
    codigo: "02.11.07.021-1",
    nome: "LOGOAUDIOMETRIA (LDV-IRF-LRF)",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 11,
    codigo: "02.11.07.024-6",
    nome: "PESQUISA DE GANHO DE INSERÇÃO",
    modalidade: "AUDITIVA",
    cenario: "3",
    motivo: "Acompanhamento de OPMAL",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 12,
    codigo: "02.11.07.026-2",
    nome: "POTENCIAL EVOCADO AUDITIVO DE CURTA MÉDIA E LONGA LATÊNCIA",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 13,
    codigo: "02.11.07.027-0",
    nome: "POTENCIAL EVOCADO AUDITIVO PARA TRIAGEM AUDITIVA (TESTE DA ORELHINHA)",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 14,
    codigo: "02.11.07.030-0",
    nome: "REAVALIAÇÃO DIAGNÓSTICA DE DEFICIÊNCIA AUDITIVA EM PACIENTE MENOR DE 3 ANOS",
    modalidade: "AUDITIVA",
    cenario: "2",
    motivo: "Retorno de pacientes",
    equipeMedica: ["225275 Médico otorrinolaringologista"],
    equipeAssistência: []
  },
  {
    ord: 15,
    codigo: "02.11.07.031-9",
    nome: "SELEÇÃO E VERIFICAÇÃO DE BENEFÍCIO DO AASI",
    modalidade: "AUDITIVA",
    cenario: "3",
    motivo: "Preparação OPMAL",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 16,
    codigo: "02.11.07.032-7",
    nome: "TESTES ACUMÉTRICOS (DIAPASÃO)",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Teste durante consulta",
    equipeMedica: ["225275 Médico otorrinolaringologista"],
    equipeAssistência: []
  },
  {
    ord: 17,
    codigo: "02.11.07.033-5",
    nome: "TESTES AUDITIVOS SUPRALIMINARES",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Diagnóstico",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 18,
    codigo: "02.11.07.034-3",
    nome: "TESTES DE PROCESSAMENTO AUDITIVO",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Diagnóstico / Carol",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 19,
    codigo: "02.11.07.035-1",
    nome: "TESTES VESTIBULARES / OTONEUROLÓGICOS",
    modalidade: "AUDITIVA",
    cenario: "1/2/4/",
    motivo: "Diagnóstico / Carol",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 20,
    codigo: "02.11.07.014-9",
    nome: "EMISSÕES OTOACÚSTICAS EVOCADAS PARA TRIAGEM AUDITIVA (TESTE DA ORELHINHA/RETESTE)",
    modalidade: "AUDITIVA",
    cenario: "2/4/",
    motivo: "Reteste Triagem Neonatal",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 21,
    codigo: "02.11.07.027-0",
    nome: "POTENCIAL EVOCADO AUDITIVO P/ TRIAGEM AUDITIVA (TESTE DA ORELHINHA/RETESTE)",
    modalidade: "AUDITIVA",
    cenario: "2/4/",
    motivo: "Reteste PEATE-BERA",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 22,
    codigo: "03.01.07.003-2",
    nome: "ACOMPANHAMENTO DE PACIENTE P/ ADAPTAÇÃO DE APARELHO DE AMPLIFICAÇÃO SONORA INDIVIDUAL (AASI) UNI / BILATERAL",
    modalidade: "AUDITIVA",
    cenario: "3",
    motivo: "Acompanhamento de paciente protetizado",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 23,
    codigo: "03.01.07.025-3",
    nome: "TELEATENDIMENTO/TELEMONITORAMENTO EM REABILITAÇÃO AUDITIV",
    modalidade: "AUDITIVA",
    cenario: "3/5/6/",
    motivo: "Orientações",
    equipeMedica: ["Todos"],
    equipeAssistência: ["Todos"]
  },

  // COMUM
  {
    ord: 1,
    codigo: "01.01.01.002-8",
    nome: "ATIVIDADE EDUCATIVA / ORIENTAÇÃO EM GRUPO NA ATENÇÃO ESPECIALIZADA",
    modalidade: "COMUM(F/I)",
    cenario: "5",
    motivo: "Grupos Psicologia Estagiários",
    equipeMedica: [],
    equipeAssistência: ["251510 Psicólogo clínico"]
  },
  {
    ord: 2,
    codigo: "01.01.04.002-4",
    nome: "AVALIAÇÃO ANTROPOMÉTRICA",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "1/2",
    motivo: "Avaliação/Diagnóstico",
    equipeMedica: [],
    equipeAssistência: ["223505 Enfermeiro", "223710 Nutricionista"]
  },
  {
    ord: 3,
    codigo: "03.01.07.009-1",
    nome: "ATENDIMENTO EM OFICINA TERAPÊUTICA II EM GRUPO PARA PESSOAS COM DEFICIÊNCIA (POR OFICINA TERAPÊUTICA)",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "3",
    motivo: "Oficinas",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral", "223810 Fonoaudiólogo geral", "223905 Terapeuta ocupacional", "251510 Psicólogo clínico"]
  },
  {
    ord: 4,
    codigo: "02.11.07.006-8",
    nome: "AVALIAÇÃO DE LINGUAGEM ESCRITA / LEITURA",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "1/2",
    motivo: "Avaliação",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 5,
    codigo: "02.11.07.007-6",
    nome: "AVALIAÇÃO DE LINGUAGEM ORAL",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "1/2",
    motivo: "Avaliação",
    equipeMedica: ["225275 Médico otorrinolaringologista"],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 6,
    codigo: "02.11.07.008-4",
    nome: "AVALIAÇÃO MIOFUNCIONAL DE SISTEMA ESTOMATOGNÁTICO",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "1/2",
    motivo: "Avaliação",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 7,
    codigo: "02.11.07.011-4",
    nome: "AVALIAÇÃO VOCAL",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "1/2",
    motivo: "Avaliação",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 8,
    codigo: "02.11.07.017-3",
    nome: "EXAME DE ORGANIZAÇÃO PERCEPTIVA",
    modalidade: "COMUM",
    cenario: "1/2",
    motivo: "Avaliação",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 9,
    codigo: "02.11.07.018-1",
    nome: "EXAME NEUROPSICOMOTOR EVOLUTIVO",
    modalidade: "COMUM",
    cenario: "1/2",
    motivo: "Avaliação",
    equipeMedica: ["225275 Médico otorrinolaringologista"],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 10,
    codigo: "02.11.07.019-0",
    nome: "GUSTOMETRIA",
    modalidade: "COMUM (A)",
    cenario: "1/2",
    motivo: "Avaliação",
    equipeMedica: ["225275 Médico otorrinolaringologista"],
    equipeAssistência: []
  },
  {
    ord: 11,
    codigo: "02.11.07.022-0",
    nome: "OLFATOMETRIA",
    modalidade: "COMUM (A)",
    cenario: "1/2",
    motivo: "Avaliação",
    equipeMedica: ["225275 Médico otorrinolaringologista"],
    equipeAssistência: []
  },
  {
    ord: 12,
    codigo: "03.01.01.004-3",
    nome: "CONSULTA DE PROFISSIONAIS DE NÍVEL SUPERIOR NA ATENÇÃO ESPECIALIZADA (EXCETO MÉDICO)",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "3/5",
    motivo: "Atendimento - Orientação somente para ED. FÍSICO e NUTRI",
    equipeMedica: [],
    equipeAssistência: ["223710 Nutricionista", "224140 Profissional de educação física na saúde"]
  },
  {
    ord: 13,
    codigo: "03.01.01.007-8",
    nome: "CONSULTA MÉDICA EM ATENÇÃO ESPECIALIZADA",
    modalidade: "COMUM (I)",
    cenario: "1/2/4/",
    motivo: "Consulta médica Psiquiatria",
    equipeMedica: ["225133 Médico psiquiatra"],
    equipeAssistência: []
  },
  {
    ord: 14,
    codigo: "03.01.01.030-2",
    nome: "TELECONSULTA MÉDICA NA ATENÇÃO ESPECIALIZADA",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "1/2/5/",
    motivo: "Teleconsulta médica",
    equipeMedica: ["225133 Médico psiquiatra", "225160 Médico fisiatra", "225265 Médico oftalmologista", "225270 Médico ortopedista e traumatologista", "225275 Médico otorrinolaringologista"],
    equipeAssistência: []
  },
  {
    ord: 15,
    codigo: "03.01.04.003-6",
    nome: "TERAPIA EM GRUPO",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "3/5/8/",
    motivo: "Eventos/Estratégia de metas",
    equipeMedica: [],
    equipeAssistência: ["226305 Musicoterapeuta", "251510 Psicólogo clínico", "251605 Assistente social", "223810 Fonoaudiólogo geral", "223905 Terapeuta ocupacional"]
  },
  {
    ord: 16,
    codigo: "03.01.04.004-4",
    nome: "TERAPIA INDIVIDUAL",
    modalidade: "COMUM (I)",
    cenario: "3/5",
    motivo: "Atendimento",
    equipeMedica: [],
    equipeAssistência: ["226305 Musicoterapeuta"]
  },
  {
    ord: 17,
    codigo: "03.01.07.008-3",
    nome: "ATENDIMENTO EM OFICINA TERAPÊUTICA I EM GRUPO PARA PESSOAS COM DEFICIÊNCIA (POR OFICINA TERAPÊUTICA I)",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "3",
    motivo: "Oficinas",
    equipeMedica: [],
    equipeAssistência: ["223605 Fisioterapeuta geral", "223810 Fonoaudiólogo geral", "223905 Terapeuta ocupacional", "239415 Pedagogo"]
  },
  {
    ord: 18,
    codigo: "03.01.07.011-3",
    nome: "TERAPIA FONOAUDIOLÓGICA INDIVIDUAL",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "1/2/3/",
    motivo: "Atendimento",
    equipeMedica: [],
    equipeAssistência: ["223810 Fonoaudiólogo geral"]
  },
  {
    ord: 19,
    codigo: "03.01.07.007-5",
    nome: "MATRICIAMENTO DE EQUIPES DOS OUTROS PONTOS E NÍVEIS DA REDE DE ATENÇÃO À SAÚDE PARA ATENÇÃO À SAÚDE DAS PESSOAS COM DEFICIÊNCIA",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "9",
    motivo: "Encaminhamentos e orientações com relatório",
    equipeMedica: [],
    equipeAssistência: ["Todos"]
  },
  {
    ord: 20,
    codigo: "03.01.07.028-8",
    nome: "ALTA POR OBJETIVOS TERAPÊUTICOS ALCANÇADOS DA REABILITAÇÃO NA ATENÇÃO ESPECIALIZADA",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "7",
    motivo: "Alta",
    equipeMedica: [],
    equipeAssistência: ["Todos"]
  },
  {
    ord: 21,
    codigo: "03.01.08.016-0",
    nome: "ATENDIMENTO EM PSICOTERAPIA DE GRUPO",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "3/5/",
    motivo: "Grupo Psicologia - Renata (a partir de 6 anos)",
    equipeMedica: [],
    equipeAssistência: ["251510 Psicólogo clínico"]
  },
  {
    ord: 22,
    codigo: "03.01.07.029-6",
    nome: "ESTIMULAÇÃO PRECOCE RELACIONADA AO NEURODESENVOLVIMENTO NA ATENÇÃO ESPECIALIZADA",
    modalidade: "COMUM (I)",
    cenario: "3/5/",
    motivo: "Orientações",
    equipeMedica: [],
    equipeAssistência: ["223905 Terapeuta ocupacional", "239415 Pedagogo"]
  },
  {
    ord: 23,
    codigo: "03.01.07.030-0",
    nome: "ATENDIMENTO DE FAMILIARES, CUIDADORES E/OU ACOMPANHANTES DE PESSOAS COM DEFICIÊNCIA NOS SERVIÇOS DE REABILITAÇÃO DA ATENÇÃO ESPECIALIZADA",
    modalidade: "COMUM(F/V/A/I)",
    cenario: "5",
    motivo: "Orientações apenas para os responsáveis",
    equipeMedica: [],
    equipeAssistência: ["Todos"]
  },
  {
    ord: 24,
    codigo: "03.01.07.001-6",
    nome: "ATENDIMENTO / ACOMPANHAMENTO EM REABILITAÇÃO NAS MÚLTIPLAS DEFICIÊNCIAS",
    modalidade: "COMUM (V)",
    cenario: "3/5/",
    motivo: "Atendimento/Estratégia de metas",
    equipeMedica: [],
    equipeAssistência: ["223505 Enfermeiro", "223605 Fisioterapeuta geral", "223810 Fonoaudiólogo geral", "223905 Terapeuta ocupacional", "226305 Musicoterapeuta", "239415 Pedagogo", "251510 Psicólogo clínico", "251605 Assistente social"]
  }
];
