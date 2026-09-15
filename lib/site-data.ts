// Fonte única de conteúdo do site. Edite aqui — os componentes só consomem.

export const site = {
  name: "Lucas Marcelino",
  brand: "LM Advocacia & Consultoria",
  oab: "OAB/DF 80487",
  lawyer: {
    fullName: "Dr. Lucas Marcelino",
    credentials: "OAB/DF 80487",
    bio:
      "Advogado graduado pela Universidade Católica de Brasília, pós-graduado em Direito Tributário pela ESA. Atua de forma estratégica na advocacia contenciosa e consultiva, com ênfase na fase de execução processual — cumprimento de sentença, impugnações, bloqueios, penhoras e demais medidas de constrição patrimonial. Mais de 5 anos de atuação em Direito Imobiliário, com domínio dos principais sistemas processuais eletrônicos (PJe, e-SAJ, eproc e PROJUDI).",
    highlights: [
      "Bacharel em Direito — Universidade Católica de Brasília",
      "Pós-graduado em Direito Tributário — ESA",
      "+5 anos de atuação em Direito Imobiliário",
      "Correspondente Jurídico — Diário Cursos Jurídicos",
      "Formação em Atendimento ao Cliente e Comunicação — Sebrae",
    ],
  },
  contact: {
    phoneDisplay: "(61) 98170-6507",
    phoneE164: "5561981706507",
    email: "lucas.marcelino@advdf.com.br",
    instagramPrimary: "https://www.instagram.com/lucasmarcelino.adv/",
    instagramSecondary: "https://www.instagram.com/lm.advocaciaeconsultoria/",
    linktree: "https://linktr.ee/LucasMarcelino.adv",
    city: "Brasília/DF",
  },
  whatsappMessage:
    "Olá! Vim pelo site e gostaria de agendar uma consultoria.",
  practiceAreas: [
    {
      slug: "locacao-despejo",
      title: "Locação e Despejo",
      description:
        "Ações de locação de imóveis, despejo, revisional e renovatória de contratos comerciais e residenciais.",
      icon: "key",
      group: "Direito Imobiliário",
    },
    {
      slug: "leiloes-incorporacoes",
      title: "Leilões e Incorporações",
      description:
        "Leilão de imóveis, incorporações imobiliárias e adjudicação compulsória.",
      icon: "building",
      group: "Direito Imobiliário",
    },
    {
      slug: "vicios-construtivos",
      title: "Vícios Construtivos",
      description:
        "Vícios construtivos, contratos de empreitada e disputas de construção civil.",
      icon: "hammer",
      group: "Direito Imobiliário",
    },
    {
      slug: "posse-usucapiao",
      title: "Posse e Usucapião",
      description:
        "Reintegração de posse, ações de usucapião e cessão de direitos possessórios.",
      icon: "shield",
      group: "Direito Imobiliário",
    },
    {
      slug: "cobrancas",
      title: "Ações de Cobrança",
      description:
        "Cobrança de aluguel, água, luz, IPTU, condomínio e execução de títulos e contratos.",
      icon: "receipt",
      group: "Ações e Execuções",
    },
    {
      slug: "execucao-patrimonial",
      title: "Execução e Constrição Patrimonial",
      description:
        "Cumprimento de sentença, impugnações, bloqueios e penhoras — foco na fase executiva do processo.",
      icon: "gavel",
      group: "Ações e Execuções",
    },
  ],
  otherAreasNote:
    "Também atende outras áreas do Direito Civil, do Consumidor e Tributário. Não encontrou sua situação na lista? Fale com um advogado mesmo assim.",
  faq: [
    {
      q: "A primeira conversa tem custo?",
      a: "A consultoria inicial serve para entender seu caso e avaliar o melhor caminho jurídico. Fale pelo WhatsApp para confirmar as condições do seu atendimento.",
    },
    {
      q: "O atendimento pode ser 100% online?",
      a: "Sim. Reuniões por videochamada ou telefone estão disponíveis para quem não pode comparecer presencialmente, sem perda de qualidade no atendimento.",
    },
    {
      q: "Atende casos fora de Brasília/DF?",
      a: "Sim, atuação em processos eletrônicos (PJe, e-SAJ, eproc e PROJUDI) permite atendimento remoto em diversas comarcas.",
    },
    {
      q: "Quanto tempo leva para ter uma resposta?",
      a: "O retorno inicial por WhatsApp costuma ocorrer no mesmo dia útil. Para agendamentos, a confirmação da data é enviada assim que o horário é verificado.",
    },
  ],
} as const;
