// Fonte única de conteúdo do site. Edite aqui — os componentes só consomem.

export const site = {
  name: "Lucas Marcelino",
  brand: "LM Advocacia & Consultoria",
  oab: "OAB/DF 80487",
  lawyer: {
    fullName: "Dr. Lucas Marcelino",
    credentials: "OAB/DF 80487",
    bio:
      "Advogado graduado pela Universidade Católica de Brasília, pós-graduado em Direito Tributário pela ESA. Atua de forma estratégica na advocacia contenciosa e consultiva, com ênfase na fase de execução processual: cumprimento de sentença, impugnações, bloqueios, penhoras e demais medidas de constrição patrimonial. Mais de 5 anos de atuação em Direito Imobiliário, com domínio dos principais sistemas processuais eletrônicos (PJe, e-SAJ, eproc e PROJUDI).",
    highlights: [
      "Bacharel em Direito, Universidade Católica de Brasília",
      "Pós-graduado em Direito Tributário, ESA",
      "+5 anos de atuação em Direito Imobiliário",
      "Correspondente Jurídico, Diário Cursos Jurídicos",
      "Formação em Atendimento ao Cliente e Comunicação, Sebrae",
    ],
  },
  contact: {
    phoneDisplay: "(61) 98170-6507",
    phoneE164: "5561981706507",
    email: "lucas.marcelino@advdf.com.br",
    instagramPrimary: "https://www.instagram.com/lucasmarcelino.adv/",
    instagramSecondary: "https://www.instagram.com/lm.advocaciaeconsultoria/",
    linktree: "https://linktr.ee/LucasMarcelino.adv",
    jusbrasil: "https://lucas-marcelino397952.jusbrasil.com.br",
    city: "Brasília/DF",
  },
  whatsappMessage:
    "Olá! Vim pelo site e gostaria de agendar uma consultoria.",
  practiceAreas: [
    {
      slug: "locacao-despejo",
      title: "Locação e Despejo",
      brief:
        "Recupero seu imóvel ou renegocio o contrato sem meses de desgaste com o inquilino.",
      description:
        "Ações de locação de imóveis, despejo, revisional e renovatória de contratos comerciais e residenciais.",
      icon: "key",
      group: "Direito Imobiliário",
    },
    {
      slug: "leiloes-incorporacoes",
      title: "Leilões e Incorporações",
      brief:
        "Segurança jurídica completa, da arrematação em leilão até a entrega das chaves.",
      description:
        "Leilão de imóveis, incorporações imobiliárias e adjudicação compulsória.",
      icon: "building",
      group: "Direito Imobiliário",
    },
    {
      slug: "vicios-construtivos",
      title: "Vícios Construtivos",
      brief:
        "Identifico falhas na obra e busco a indenização pelo prejuízo que você teve.",
      description:
        "Vícios construtivos, contratos de empreitada e disputas de construção civil.",
      icon: "hammer",
      group: "Direito Imobiliário",
    },
    {
      slug: "posse-usucapiao",
      title: "Posse e Usucapião",
      brief:
        "Regularizo a posse do imóvel e transformo tempo de uso em propriedade de direito.",
      description:
        "Reintegração de posse, ações de usucapião e cessão de direitos possessórios.",
      icon: "shield",
      group: "Direito Imobiliário",
    },
  ],
  otherAreasNote:
    "Também atende outras áreas do Direito Civil, do Consumidor e Tributário. Não encontrou sua situação na lista? Fale com um advogado mesmo assim.",
  // Distribuição de atuação por área (dados do perfil Jusbrasil).
  areaStats: [
    { label: "Direito Imobiliário", value: 21 },
    { label: "Direito do Consumidor", value: 15 },
    { label: "Direito Penal", value: 15 },
    { label: "Direito Tributário", value: 15 },
    { label: "Direito de Família", value: 15 },
    { label: "Direito do Trabalho", value: 15 },
  ],
  // Artigo publicado no Jusbrasil (seção editorial).
  article: {
    eyebrow: "Artigo publicado no Jusbrasil",
    title: "E agora?",
    lead:
      "Todos estão sujeitos a enfrentar situações injustas algum dia: cobranças indevidas, contratos abusivos, problemas com atendimento, problemas com imóveis, serviços mal prestados ou até mesmo descumprimentos judiciais. Mas como solucionar se alguma dessas situações ocorrer com você?",
    highlight: "O direito existe para te proteger.",
    paragraphs: [
      "Se você recebeu uma cobrança que desconhece, teve problemas com alguma compra ou está com dificuldades para resolver um conflito relacionado a herança, aluguel ou serviços, saiba que existem caminhos legais para solucionar — seja de forma amigável (via recomendável) ou judicial.",
      "Atuar com base em informações precisas é a melhor maneira de evitar prejuízos ainda maiores. Um simples pedido judicial de cumprimento de sentença ou uma orientação contratual direcionada podem fazer toda a diferença entre solucionar ou agravar o seu problema.",
      "Como advogado atuante na área de Direito Civil, oriento e represento clientes em todas essas situações, sempre buscando soluções práticas, econômicas e justas.",
      "Se você enfrenta algum impasse jurídico, busque orientação antes de tomar decisões precipitadas. Agir com segurança sempre é o melhor caminho.",
    ],
    link: "https://www.jusbrasil.com.br/artigos/e-agora/3715304653",
  },
  // Correspondência jurídica (serviços prestados a colegas e escritórios).
  correspondent: {
    eyebrow: "Correspondência Jurídica",
    title: "Apoio processual em Brasília/DF",
    description:
      "Atuação como correspondente jurídico para advogados e escritórios que precisam de presença e diligências na capital, com agilidade e retorno documentado.",
    services: [
      "Acompanhamentos",
      "Alvarás",
      "Análises",
      "Andamentos",
      "Audiências",
      "Buscas e apreensões",
      "Cópias",
      "Cargas",
      "Conciliação",
      "Consultas",
      "Despachos",
      "Distribuições",
      "Elaboração de tese",
      "Exame de processos",
      "Mandados",
      "Mediação",
      "Pareceres",
      "Peças",
      "Prazos",
      "Protocolos",
      "Recursos",
      "Sustentações orais",
    ],
  },
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
