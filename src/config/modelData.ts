/**
 * =========================================================================
 * ✦ MASTER MODEL PORTFOLIO CONFIGURATION — AASHIMA GUPTA
 * =========================================================================
 * Luxury Haute Couture, Editorial, Runway & Composite Card data.
 * Pure minimalist Roman elegance, monochrome contrasts, and editorial curation.
 */

export interface EditorialWork {
  id: string;
  title: string;
  category: 'Haute Couture' | 'Editorial' | 'Runway' | 'Campaign' | 'Beauty';
  client: string;
  season: string;
  image: string;
  photographer: string;
  styling: string;
  location: string;
  aspect: 'portrait' | 'landscape' | 'square';
  description?: string;
  featured?: boolean;
}

export interface ModelDigital {
  id: string;
  code: string;
  title: string;
  type: 'Full Length' | 'Profile 90°' | 'Three-Quarter' | 'Close-Up Portrait';
  date: string;
  image: string;
  lighting: string;
  notes: string;
}

export interface RunwayShow {
  id: string;
  year: string;
  season: string;
  brand: string;
  event: string;
  city: string;
  role: string;
  tearSheetImage?: string;
}

export interface ModelStats {
  height: { imperial: string; metric: string };
  bust: { imperial: string; metric: string };
  waist: { imperial: string; metric: string };
  hips: { imperial: string; metric: string };
  shoes: { eu: string; us: string; uk: string };
  dress: { eu: string; us: string; uk: string };
  eyes: string;
  hair: string;
  agencyStatus: string;
  passports: string[];
}

export const MODEL_DATA = {
  talent: {
    fullName: "AASHIMA GUPTA",
    monogram: "AG",
    tagline: "HAUTE COUTURE • EDITORIAL • RUNWAY",
    heroTitle: "AASHIMA GUPTA",
    heroSubtitle: "High Fashion Model & Muse",
    cities: ["PARIS", "MILAN", "NEW YORK", "MUMBAI"],
    portrait: "/assets/ash-face.jpeg",
    bio: "Characterized by architectural bone structure, effortless poise, and chameleonic editorial range. Aashima Gupta commands both high-concept Parisian haute couture and razor-sharp modern tailoring with quiet, arresting presence.",
  },

  stats: {
    height: { imperial: "5' 9½\"", metric: "177 CM" },
    bust: { imperial: "32B", metric: "81 CM" },
    waist: { imperial: "24\"", metric: "61 CM" },
    hips: { imperial: "35\"", metric: "89 CM" },
    shoes: { eu: "39 EU", us: "8.5 US", uk: "6 UK" },
    dress: { eu: "34-36 EU", us: "2-4 US", uk: "6 UK" },
    eyes: "WARM HAZEL",
    hair: "DARK ESPRESSO",
    agencyStatus: "WORLDWIDE BOARD",
    passports: ["EU / INTERNATIONAL ELIGIBLE"],
  } as ModelStats,

  agencies: [
    {
      city: "PARIS & EUROPE",
      agency: "ELITE MODEL MANAGEMENT",
      board: "High Fashion / Direct Bookings",
      contact: "paris@aashimagupta-talent.com",
    },
    {
      city: "NEW YORK",
      agency: "THE SOCIETY MANAGEMENT",
      board: "Editorial & Global Campaigns",
      contact: "nyc@aashimagupta-talent.com",
    },
    {
      city: "MILAN",
      agency: "MONSTER MANAGEMENT",
      board: "Runway & Haute Couture",
      contact: "milan@aashimagupta-talent.com",
    },
    {
      city: "MUMBAI & ASIA",
      agency: "INEGA MODELS / DIRECT TALENT",
      board: "Commercial & Editorial Board",
      contact: "asia@aashimagupta-talent.com",
    },
  ],

  portfolioWorks: [
    {
      id: "work-01",
      title: "SILHOUETTES IN SHADOW",
      category: "Editorial",
      client: "VOGUE NOIR",
      season: "AUTUMN / WINTER 2026",
      image: "/assets/1.jpeg",
      photographer: "Sebastien Laurent",
      styling: "Maison Minimal",
      location: "Studio Montmartre, Paris",
      aspect: "portrait",
      description: "A stark study in monochrome contrasts, sculptural drapery, and high-fashion composure.",
      featured: true,
    },
    {
      id: "work-02",
      title: "THE DRAPE OF REVERIE",
      category: "Haute Couture",
      client: "HARPER'S BAZAAR ARCHIVE",
      season: "SPRING COUTURE 2026",
      image: "/assets/2.jpeg",
      photographer: "Elena Rossi",
      styling: "Valerie Chen",
      location: "Palazzo Reale, Milan",
      aspect: "portrait",
      description: "Fluid silk architecture balancing Roman proportions with contemporary grace.",
      featured: true,
    },
    {
      id: "work-03",
      title: "MONOCHROME COMPOSITION",
      category: "Editorial",
      client: "ELLE INTERNATIONAL",
      season: "SPECIAL ISSUE",
      image: "/assets/3.jpeg",
      photographer: "Marc Delaunay",
      styling: "Chloe Moreau",
      location: "Le Marais Daylight Studio",
      aspect: "landscape",
      description: "Clean angles, minimal background, letting gaze and bone structure dictate the frame.",
      featured: false,
    },
    {
      id: "work-04",
      title: "METROPOLITAN MODERNITY",
      category: "Campaign",
      client: "THE ROW / EDITORIAL STUDY",
      season: "RESORT 2026",
      image: "/assets/4.jpeg",
      photographer: "David K.",
      styling: "Sasha Brandt",
      location: "Tribeca, New York",
      aspect: "portrait",
      description: "Sharp tailoring meets understated luxury. Architectural silhouette and movement.",
      featured: true,
    },
    {
      id: "work-05",
      title: "LUMINESCENT PORTRAITURE",
      category: "Beauty",
      client: "NUMÉRO BEAUTY",
      season: "SUMMER EDITORIAL",
      image: "/assets/5.jpeg",
      photographer: "Camille Vane",
      styling: "Studio L'Or",
      location: "Cannes Daylight Studio",
      aspect: "square",
      description: "Unfiltered radiance, organic light, and natural cheekbone definition.",
      featured: false,
    },
    {
      id: "work-06",
      title: "THE GAIT & THE STRIDE",
      category: "Runway",
      client: "PARIS RUNWAY ARCHIVE",
      season: "READY-TO-WEAR",
      image: "/assets/6.jpeg",
      photographer: "Runway Official",
      styling: "Show Team",
      location: "Grand Palais, Paris",
      aspect: "portrait",
      description: "Fluid cadence and commanding presence on the international runway circuit.",
      featured: true,
    },
    {
      id: "work-07",
      title: "INTELLECT & CHARISMA",
      category: "Editorial",
      client: "L'OFFICIEL COUTURE",
      season: "EXCLUSIVE",
      image: "/assets/idk.jpeg",
      photographer: "Nicoletta Brandi",
      styling: "Atelier V",
      location: "Milan Historic Quarter",
      aspect: "portrait",
      description: "Play of shadow and relaxed confidence in high-contrast editorial setting.",
      featured: false,
    },
    {
      id: "work-08",
      title: "CONTEMPORARY AVANT-GARDE",
      category: "Haute Couture",
      client: "DAZED FASHION",
      season: "WINTER VOLUME",
      image: "/assets/ahh.jpeg",
      photographer: "Julien Mercier",
      styling: "Frederic B.",
      location: "Berlin Concrete Vault",
      aspect: "portrait",
      description: "Defiant, expressive, and geometrically structured editorial storytelling.",
      featured: false,
    },
    {
      id: "work-09",
      title: "CHROME & MINIMAL EYEWEAR",
      category: "Campaign",
      client: "KAUFMAN EYEWEAR CAMPAIGN",
      season: "GLOBAL CAMPAIGN",
      image: "/assets/hehe.jpeg",
      photographer: "Soren Lind",
      styling: "Modern Luxe Studio",
      location: "Zurich Pavilion",
      aspect: "landscape",
      description: "Clean product integration framed by expressive facial geometry and poise.",
      featured: false,
    },
  ] as EditorialWork[],

  digitals: [
    {
      id: "dig-01",
      code: "DIG-01",
      title: "FULL LENGTH NATURAL",
      type: "Full Length",
      date: "OCTOBER 2026",
      image: "/assets/new.jpeg",
      lighting: "Natural Daylight • Zero Retouching",
      notes: "Clean black top, posture neutral, barefoot measurement verification.",
    },
    {
      id: "dig-02",
      code: "DIG-02",
      title: "LATERAL PROFILE 90°",
      type: "Profile 90°",
      date: "OCTOBER 2026",
      image: "/assets/xyz.jpeg",
      lighting: "Diffused North Light • Raw Spec",
      notes: "Demonstrates neck line, jaw definition, and shoulder alignment.",
    },
    {
      id: "dig-03",
      code: "DIG-03",
      title: "FACIAL GEOMETRY STUDY",
      type: "Close-Up Portrait",
      date: "OCTOBER 2026",
      image: "/assets/huh.jpeg",
      lighting: "Natural Ambient Window • Raw Spec",
      notes: "Symmetry, skin tone clarity, unstyled natural hair texture.",
    },
    {
      id: "dig-04",
      code: "DIG-04",
      title: "CASTING HEADSHOT VERIFICATION",
      type: "Three-Quarter",
      date: "OCTOBER 2026",
      image: "/assets/ash-face.jpeg",
      lighting: "Direct Soft Daylight • Casting Standard",
      notes: "Signature hazel eye tone and natural bone structure.",
    },
  ] as ModelDigital[],

  runwayExperience: [
    {
      id: "run-01",
      year: "2026",
      season: "AUTUMN / WINTER",
      brand: "MAISON SCULPTURE",
      event: "PARIS FASHION WEEK",
      city: "PARIS",
      role: "RUNWAY • LOOK 14 & FINALE",
      tearSheetImage: "/assets/6.jpeg",
    },
    {
      id: "run-02",
      year: "2026",
      season: "SPRING / SUMMER",
      brand: "SABYASACHI HAUTE COUTURE",
      event: "HERITAGE COUTURE WEEK",
      city: "MUMBAI",
      role: "SHOWCASE LEAD • BRIDAL & COUTURE",
      tearSheetImage: "/assets/2.jpeg",
    },
    {
      id: "run-03",
      year: "2025",
      season: "RESORT",
      brand: "ATELIER LUMEN",
      event: "MILAN DESIGN & FASHION",
      city: "MILAN",
      role: "OPENING LOOK • MINIMAL SILK",
      tearSheetImage: "/assets/1.jpeg",
    },
    {
      id: "run-04",
      year: "2025",
      season: "READY-TO-WEAR",
      brand: "LAKMÉ GRAND FINALE",
      event: "INDIA FASHION WEEK",
      city: "DELHI",
      role: "EXCLUSIVE RUNWAY MODEL",
      tearSheetImage: "/assets/4.jpeg",
    },
  ] as RunwayShow[],

  pressQuotes: [
    {
      quote: "Aashima possesses that rare, commanding stillness found only in the greatest editorial muses. She doesn’t just wear couture; she sculpts it.",
      author: "JEAN-PHILIPPE GAUTIER",
      title: "Senior Fashion Director, Paris",
    },
    {
      quote: "Her bone structure catches the light with pure Roman architectural precision. Unfiltered, authentic, and undeniably magnetic on runway and print alike.",
      author: "ALESSANDRA MORI",
      title: "Lead Casting Director, Milan",
    },
    {
      quote: "A chameleon between stark metropolitan minimalism and decadent haute couture. A consummate professional on every continent.",
      author: "DEVINA MEHTA",
      title: "Editor-at-Large, Vogue",
    },
  ],

  directContact: {
    email: "bookings@aashimagupta.com",
    inquiries: "casting@aashimagupta.com",
    instagram: "@aashimagupta",
    modelsDotCom: "models.com/models/aashima-gupta",
    managementOffice: "+33 1 42 68 55 00 / +91 98200 44120",
    headquarters: "Paris • Milan • Mumbai",
  },
};
