// ============================================================
// FICHIER DE CONFIGURATION DU SITE — À MODIFIER PAR CLIENT
// ============================================================
// Modifiez uniquement ce fichier pour personnaliser le site
// de chaque client : textes, services, portfolio, contact...
// ============================================================

export const site = {
  name: "MonEntreprise",
  tagline: "Votre partenaire de confiance",
  logo: "ME", // initiales ou chemin vers une image
  cta: "Nous contacter",
};

export const nav = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  title: "Des solutions qui font la différence",
  subtitle:
    "Nous accompagnons les entreprises dans leur développement avec expertise et passion. Découvrez comment nous pouvons transformer vos idées en réalité.",
  ctaPrimary: { label: "Découvrir nos services", href: "#services" },
  ctaSecondary: { label: "Voir nos réalisations", href: "#portfolio" },
  // badgeText: "Nouveau", // décommenter pour afficher un badge
};

export const about = {
  label: "Notre histoire",
  title: "Une équipe passionnée à votre service",
  description:
    "Fondée en 2014, MonEntreprise accompagne les entreprises ambitieuses dans leur transformation digitale. Notre approche allie expertise technique et compréhension profonde de vos enjeux business.",
  values: [
    {
      icon: "Target",
      title: "Orientés résultats",
      description: "Chaque décision est guidée par l'impact mesurable sur votre activité.",
    },
    {
      icon: "Heart",
      title: "Passion & Engagement",
      description: "Nous traitons chaque projet comme s'il était le nôtre, avec soin et exigence.",
    },
    {
      icon: "Lightbulb",
      title: "Innovation continue",
      description: "Nous veillons constamment aux dernières tendances pour vous garder en avance.",
    },
  ],
  team: [
    { name: "Alice Moreau", role: "CEO & Fondatrice", avatar: "AM", color: "#2563eb" },
    { name: "Baptiste Leroy", role: "Directeur Technique", avatar: "BL", color: "#7c3aed" },
    { name: "Clara Petit", role: "Responsable Créa", avatar: "CP", color: "#059669" },
    { name: "David Roux", role: "Lead Developer", avatar: "DR", color: "#dc2626" },
  ],
};

export const faq = {
  label: "Vos questions",
  title: "Questions fréquentes",
  subtitle: "Tout ce que vous devez savoir avant de démarrer avec nous.",
  items: [
    {
      question: "Quels types de projets prenez-vous en charge ?",
      answer:
        "Nous intervenons sur des projets web (sites vitrine, e-commerce, applications), mobile, et stratégie digitale. Qu'il s'agisse d'une création de zéro ou d'une refonte, nous nous adaptons à vos besoins.",
    },
    {
      question: "Quels sont vos délais de réalisation ?",
      answer:
        "Les délais varient selon la complexité : un site vitrine prend généralement 2 à 4 semaines, une application plus complexe de 2 à 6 mois. Nous établissons toujours un planning détaillé en amont.",
    },
    {
      question: "Proposez-vous un suivi après la livraison ?",
      answer:
        "Oui, nous proposons des contrats de maintenance et d'évolution. Notre équipe support reste disponible 7j/7 pour intervenir rapidement en cas de besoin.",
    },
    {
      question: "Comment se déroule la collaboration ?",
      answer:
        "Nous commençons par un brief approfondi, puis nous établissons un cahier des charges et un devis. Vous êtes impliqué à chaque étape : maquettes, développement, recette et mise en ligne.",
    },
    {
      question: "Quels sont vos tarifs ?",
      answer:
        "Nos tarifs sont établis sur devis selon la portée du projet. Nous sommes transparents sur notre grille tarifaire et nous nous adaptons aux budgets de nos clients, quelle que soit leur taille.",
    },
    {
      question: "Travaillez-vous avec des clients à distance ?",
      answer:
        "Absolument. Nous collaborons avec des clients partout en France et à l'international. Nos outils de gestion de projet et nos visioconférences régulières garantissent une communication fluide.",
    },
  ],
};

export const services = [
  {
    icon: "Zap",
    title: "Performance & Rapidité",
    description:
      "Nous optimisons chaque aspect de votre projet pour garantir des résultats rapides et efficaces qui dépassent vos attentes.",
  },
  {
    icon: "Shield",
    title: "Sécurité & Fiabilité",
    description:
      "Votre confiance est notre priorité. Nous appliquons les meilleures pratiques pour assurer la sécurité et la pérennité de vos solutions.",
  },
  {
    icon: "Users",
    title: "Accompagnement Humain",
    description:
      "Une équipe dédiée à vos côtés à chaque étape. Nous sommes disponibles, à l'écoute et réactifs pour tous vos besoins.",
  },
  {
    icon: "BarChart3",
    title: "Croissance & ROI",
    description:
      "Nos stratégies sont orientées résultats. Nous mesurons et optimisons continuellement pour maximiser votre retour sur investissement.",
  },
  {
    icon: "Palette",
    title: "Design Sur-Mesure",
    description:
      "Chaque projet est unique. Nous créons des designs originaux et adaptés à votre identité de marque et à votre cible.",
  },
  {
    icon: "Headphones",
    title: "Support 7j/7",
    description:
      "Notre équipe support est disponible tous les jours pour répondre à vos questions et résoudre tout incident rapidement.",
  },
];

export const portfolio = [
  {
    title: "Refonte Site E-commerce",
    category: "Web",
    color: "#2563eb",
    description: "Augmentation du taux de conversion de +45% après refonte complète.",
  },
  {
    title: "Application Mobile RH",
    category: "Mobile",
    color: "#7c3aed",
    description: "Application iOS/Android pour la gestion des ressources humaines.",
  },
  {
    title: "Stratégie Marketing Digital",
    category: "Marketing",
    color: "#059669",
    description: "Campagnes multi-canaux ayant généré 10 000 leads qualifiés.",
  },
  {
    title: "Tableau de Bord Analytics",
    category: "Web",
    color: "#dc2626",
    description: "Dashboard temps réel pour le suivi des KPIs de l'entreprise.",
  },
  {
    title: "Identité Visuelle",
    category: "Design",
    color: "#d97706",
    description: "Création complète de l'identité de marque : logo, charte, supports.",
  },
  {
    title: "Audit SEO & Optimisation",
    category: "Marketing",
    color: "#0891b2",
    description: "Progression de +120% du trafic organique en 6 mois.",
  },
];

export const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice Générale, TechCorp",
    text: "Une équipe exceptionnelle qui a su comprendre nos besoins et livrer un projet de qualité dans les délais. Je recommande vivement !",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Thomas Dubois",
    role: "CEO, StartupFlow",
    text: "Professionnalisme, créativité et réactivité au rendez-vous. Notre site a été transformé et nos ventes ont décollé. Merci !",
    rating: 5,
    avatar: "TD",
  },
  {
    name: "Marie Lefort",
    role: "Responsable Marketing, BrandCo",
    text: "Collaboration fluide du début à la fin. Le résultat dépasse largement nos attentes. Nous travaillerons à nouveau ensemble sans hésitation.",
    rating: 5,
    avatar: "ML",
  },
];

export const contact = {
  title: "Parlons de votre projet",
  subtitle:
    "Vous avez un projet en tête ? Contactez-nous et nous vous répondrons sous 24h.",
  email: "contact@monentreprise.fr",
  phone: "+33 1 23 45 67 89",
  address: "12 rue de la Réussite, 75001 Paris",
  social: [
    { platform: "Linkedin", href: "#", icon: "Linkedin" },
    { platform: "Twitter", href: "#", icon: "Twitter" },
    { platform: "Instagram", href: "#", icon: "Instagram" },
  ],
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} MonEntreprise. Tous droits réservés.`,
  links: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "CGU", href: "#" },
  ],
};
