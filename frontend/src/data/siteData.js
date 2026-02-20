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
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Témoignages", href: "#temoignages" },
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
