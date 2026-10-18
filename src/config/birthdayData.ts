/**
 * =========================================================================
 * 🎂 MASTER BIRTHDAY CONFIGURATION — BALANCED EDITORIAL & PLAYFUL
 * =========================================================================
 * Full storytelling sequence with rich character traits, memories,
 * sincere appreciation, birthday wishes, audio mixtape, and the party demand.
 */

export interface ScrapbookMoment {
  id: string;
  image: string;
  caption: string;
  handwrittenNote?: string;
  dateOrLabel?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export interface CharacterTrait {
  name: string;
  score: number;
  description: string;
  extraHumorousLore: string;
  badge: string;
  color: string;
}

export interface SpecialPerk {
  name: string;
  desc: string;
  icon: string;
}

export interface HiddenAppreciationNote {
  id: string;
  prompt: string;
  message: string;
}

export interface AppreciationItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  content: string;
  highlightPhrase: string;
}

export interface BirthdayWish {
  id: string;
  number: string;
  title: string;
  category: string; // e.g. "FOR YOUR HAPPINESS"
  icon: string;     // e.g. "✨"
  message: string;
  waxColor?: string; // e.g. "#E9A9CC"
  note?: string;
}

export interface MixtapeTrack {
  id: string;
  number: string;
  title: string;
  artist: string;
  coverImage?: string;
  note: string;
  duration: string;
  synthTheme?: 'dreamy' | 'upbeat' | 'chill' | 'lofi';
}

export interface BirthdayConfig {
  recipient: {
    name: string;
    label: string; // e.g. "birthday girl"
    ageOrLevel: string;
    portraitImage: string;
  };
  sender: {
    name: string;
  };
  secretEntrance: {
    preTitle: string;
    mainTitle: string;
    mainTitleItalic: string;
    supportingText: string;
    ctaButton: string;
    handwrittenNote: string;
  };
  hero: {
    tagline: string;
    heading: string;
    headingItalic: string;
    supportingText: string;
    ctaButton: string;
    badges: string[];
    secretNotePrompt: string;
    secretNoteMessage: string;
  };
  scrapbook: {
    sectionLabel: string;
    title: string;
    titleItalic: string;
    subtitle: string;
    moments: ScrapbookMoment[];
  };
  characterSheet: {
    sectionLabel: string;
    title: string;
    titleItalic: string;
    subtitle: string;
    characterRole: string;
    characterClass: string;
    traits: CharacterTrait[];
    specialPerks: SpecialPerk[];
  };
  appreciation: {
    sectionLabel: string;
    title: string;
    titleItalic: string;
    subtitle: string;
    items: AppreciationItem[];
    hiddenNotes: HiddenAppreciationNote[];
  };
  wishes: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    completionHeadline: string;
    completionMessage: string;
    items: BirthdayWish[];
  };
  soundtrack: {
    sectionLabel: string;
    title: string;
    titleItalic: string;
    subtitle: string;
    tracks: MixtapeTrack[];
  };
  partyDemand: {
    sectionLabel: string;
    title: string;
    setup1: string;
    setup2: string;
    revealQuestion: string;
    followUp: string;
    handwrittenPunchline: string;
    button1: {
      label: string;
      response: string;
    };
    button2: {
      label: string;
      response: string;
    };
    footerDuty: string;
  };
  finalLetter: {
    sectionLabel: string;
    heading: string;
    headingItalic: string;
    salutation: string;
    paragraphs: string[];
    signOff: string;
    handwrittenPostscript: string;
    replayText: string;
  };
}

export const BIRTHDAY_DATA: BirthdayConfig = {
  // ─── RECIPIENT & SENDER ──────────────────────────────────────────────────
  recipient: {
    name: "Ash",
    label: "birthday girl",
    ageOrLevel: "LEVEL 2X UNLOCKED",
    portraitImage: "/assets/ash-face.jpeg",
  },

  sender: {
    name: "Shivalika",
  },

  // ─── 1. SECRET ENTRANCE ──────────────────────────────────────────────────
  secretEntrance: {
    preTitle: "A PRIVATE TRANSMISSION",
    mainTitle: "psst...",
    mainTitleItalic: "this one's for you.",
    supportingText: "A tiny corner of the internet, made for one very special human.",
    ctaButton: "ENTER YOUR LITTLE UNIVERSE →",
    handwrittenNote: "yes, YOU. stop scrolling ✍️",
  },

  // ─── 2. BIRTHDAY REVEAL (HERO) ───────────────────────────────────────────
  hero: {
    tagline: "A SPECIAL CELEBRATION DISPATCH",
    heading: "HAPPY BIRTHDAY,",
    headingItalic: "YOU ABSOLUTE LEGEND.",
    supportingText: "Another year of being ridiculously, unapologetically you. Surviving another 365 days of mutual absurdity.",
    ctaButton: "THERE'S MORE →",
    badges: [
      "S-TIER BESTIE",
      "MAIN CHARACTER",
      "CHAOTIC GENIUS",
      "100% ORGANIC VIBES",
    ],
    secretNotePrompt: "psst, click this ✍️",
    secretNoteMessage: "you actually clicked it! okay, just a reminder that you're stuck with me for at least another year.",
  },

  // ─── 3. MEMORY SCRAPBOOK ─────────────────────────────────────────────────
  scrapbook: {
    sectionLabel: "01 / memories",
    title: "the lore.",
    titleItalic: "little fragments of us.",
    subtitle: "an intentionally imperfect collection of moments, questionable decisions, and photographic proof that we exist.",
    moments: [
      {
        id: "moment-1",
        image: "/assets/1.jpeg",
        dateOrLabel: "Exhibit A / Peak Chaos",
        caption: "proof that whenever we're left alone for more than ten minutes, public order completely collapses.",
        handwrittenNote: "zero thoughts behind those eyes",
        aspect: "portrait",
      },
      {
        id: "moment-2",
        image: "/assets/2.jpeg",
        dateOrLabel: "Exhibit B / The Unfiltered Era",
        caption: "one of those days where nothing particularly grand happened, but i wouldn't trade it for anything.",
        aspect: "square",
      },
      {
        id: "moment-3",
        image: "/assets/3.jpeg",
        dateOrLabel: "Exhibit C / The Archive",
        caption: "whatever was happening here made total sense in the moment. probably.",
        handwrittenNote: "it made sense then.",
        aspect: "landscape",
      },
      {
        id: "moment-4",
        image: "/assets/4.jpeg",
        dateOrLabel: "Exhibit D / Mutual Delusion",
        caption: "sharing the exact same braincell across three different conversations at once.",
        aspect: "portrait",
      },
      {
        id: "moment-5",
        image: "/assets/5.jpeg",
        dateOrLabel: "Exhibit E / Unsupervised",
        caption: "laughing so hard my stomach ached. the best kind of physical exhaustion.",
        handwrittenNote: "actual tears from laughing",
        aspect: "square",
      },
      {
        id: "moment-6",
        image: "/assets/6.jpeg",
        dateOrLabel: "Exhibit F / Golden Hour",
        caption: "for the inside jokes that refuse to die and the stories only the two of us understand.",
        aspect: "portrait",
      },
      {
        id: "moment-7",
        image: "/assets/capybara.jpeg",
        dateOrLabel: "Honorary Mascot",
        caption: "unbothered. moisturized. in our own lane. flourishing with supreme composure.",
        handwrittenNote: "our spiritual mascot",
        aspect: "square",
      },
      {
        id: "moment-8",
        image: "/assets/ahh.jpeg",
        dateOrLabel: "Exhibit H / Daily Drama",
        caption: "live footage of reacting to minor everyday inconveniences like a five-act tragedy.",
        handwrittenNote: "peak theatrical performance",
        aspect: "landscape",
      },
    ],
  },

  // ─── 4. FRIENDSHIP CHARACTER SHEET ───────────────────────────────────────
  characterSheet: {
    sectionLabel: "02 / forensic analysis",
    title: "CHARACTER ANALYSIS:",
    titleItalic: "ABSOLUTE MENACE.",
    subtitle: "a statistical breakdown of your personality traits, battle hazards, and legendary perks.",
    characterRole: "Chaotic Good Protagonist",
    characterClass: "SSS-Tier Bestie / Menace",
    traits: [
      {
        name: "Chaos Level",
        score: 98,
        description: "Unpredictable hazard to public order; turns simple grocery runs into epic side quests.",
        extraHumorousLore: "Incident Report #402: Banned from selecting the road trip playlist after the 2023 vocal cord catastrophe. Threat level rises exponentially near caffeine.",
        badge: "DANGEROUS",
        color: "#E9A9CC",
      },
      {
        name: "Main Character Energy",
        score: 100,
        description: "Cinematic soundtrack constantly playing in their head. The camera naturally follows.",
        extraHumorousLore: "Will dramatically stare out of rainy car windows pretending to star in a critically acclaimed indie coming-of-age movie.",
        badge: "UNSTOPPABLE",
        color: "#C4B0E8",
      },
      {
        name: "Dramatic Tendencies",
        score: 94,
        description: "Deserves an Academy Award for theatrical reactions to minor inconveniences.",
        extraHumorousLore: "Once gasped with such raw tragedy over a slight typo that everyone in a 10-meter radius thought a national crisis had been declared.",
        badge: "ACADEMY CERTIFIED",
        color: "#F7F1E9",
      },
      {
        name: "Emotional Support",
        score: 99,
        description: "Will listen to a 45-minute voice note, diagnose your soul, and deliver top-tier advice.",
        extraHumorousLore: "Can accurately read your emotional frequency from a two-letter text message sent at 1:47 AM.",
        badge: "LIFESAVER",
        color: "#7655A6",
      },
      {
        name: "Ability to Make Me Laugh",
        score: 100,
        description: "Lethal comedic timing. Has caused multiple public beverage-choking incidents.",
        extraHumorousLore: "Lethal weapon of mutual delirium. Has caused multiple near-choking incidents in otherwise polite public cafes.",
        badge: "LETHAL",
        color: "#E9A9CC",
      },
      {
        name: "Overall Legendary Status",
        score: 100,
        description: "Rare mythic pull. Cannot be replicated. Absolute certified national treasure.",
        extraHumorousLore: "Mythic tier drop rate: 0.0001%. Non-transferable, cannot be traded or refunded.",
        badge: "SSS-TIER",
        color: "#C4B0E8",
      },
    ],
    specialPerks: [
      {
        name: "Capybara Composure",
        desc: "Ability to remain completely zen amidst total pandemonium (until provoked).",
        icon: "🐾",
      },
      {
        name: "2:00 AM Philosophy",
        desc: "Unlocks profound cosmological theories when everyone else is trying to sleep.",
        icon: "🌙",
      },
      {
        name: "Telepathic Eye-Contact",
        desc: "Communicates an entire novel across a crowded room in 0.4 seconds.",
        icon: "👁️",
      },
      {
        name: "Crisis Defusal Aura",
        desc: "Turns catastrophic bad days into hilarious stories within 15 minutes.",
        icon: "🛡️",
      },
    ],
  },

  // ─── 5. THINGS I APPRECIATE ABOUT YOU ────────────────────────────────────
  appreciation: {
    sectionLabel: "03 / quiet truths",
    title: "things i probably",
    titleItalic: "don't say enough.",
    subtitle: "stripping away all the sarcasm and roasted jokes for just a moment. here are the genuine facts.",
    items: [
      {
        id: "app-1",
        number: "01",
        title: "Your Unfiltered Authenticity",
        subtitle: "never changing who you are for anyone",
        content: "In a world where everyone tries so hard to blend in or be someone they're not, you are just so unapologetically yourself. You own your weirdness, your passions, and your energy. It inspires everyone around you to do the same.",
        highlightPhrase: "You never apologize for taking up space.",
      },
      {
        id: "app-2",
        number: "02",
        title: "The Way You Show Up",
        subtitle: "reliable when the world feels loud",
        content: "No matter how busy life gets or what crazy things are happening, knowing you are in my corner is one of the greatest anchors. You listen without judgment, tell the truth when I need to hear it, and make everything lighter.",
        highlightPhrase: "The definition of true, steadfast loyalty.",
      },
      {
        id: "app-3",
        number: "03",
        title: "Making The Mundane Magical",
        subtitle: "turning boring Tuesdays into legendary lore",
        content: "You have this uncanny superpower where even sitting in a parked car doing absolutely nothing becomes an unforgettable memory. Your humor, your quick wit, and your infectious laugh make regular days feel like adventures.",
        highlightPhrase: "Life is just considerably more fun with you around.",
      },
      {
        id: "app-4",
        number: "04",
        title: "Your Fierce Empathy & Big Heart",
        subtitle: "behind all the menace, pure gold",
        content: "As much as we roast each other constantly, you care so deeply for the people you love. You pay attention to the little things people don't notice, and you give without keeping score.",
        highlightPhrase: "One of the kindest souls I'll ever know.",
      },
    ],
    hiddenNotes: [
      {
        id: "hidden-1",
        prompt: "one more thing...",
        message: "You turn completely ordinary, boring days into things I'll remember years later. That's a very rare kind of magic.",
      },
      {
        id: "hidden-2",
        prompt: "okay, a slightly more serious one.",
        message: "I don't think you realize how much comfort your presence brings to people. Even when you're just sitting there quietly, you make the room feel safe.",
      },
      {
        id: "hidden-3",
        prompt: "this part is actually important.",
        message: "Never let anyone convince you to dim your sparkle or tone down your weirdness. You are at your absolute best when you are unapologetically yourself.",
      },
    ],
  },

  // ─── 6. BIRTHDAY WISHES ──────────────────────────────────────────────────
  wishes: {
    sectionLabel: "04 / a little box of wishes",
    title: "A FEW THINGS I'M WISHING FOR YOU ✦",
    subtitle: "Because one birthday wish could never be enough.",
    completionHeadline: "AND THAT'S STILL NOT ALL I WISH FOR YOU. 💜",
    completionMessage: "Happy birthday, you. May life surprise you in ways you haven't even thought to dream about yet.",
    items: [
      {
        id: "wish-1",
        number: "01",
        category: "FOR YOUR HAPPINESS",
        icon: "✨",
        title: "Your Happiness",
        message: "I hope you find a hundred little reasons to smile, even on the days when life doesn't go exactly as planned.",
        waxColor: "#C4B0E8",
        note: "never lose that smile",
      },
      {
        id: "wish-2",
        number: "02",
        category: "FOR YOUR DREAMS",
        icon: "🌙",
        title: "Your Dreams",
        message: "I hope you get closer to everything you've ever wanted, one brave little step at a time.",
        waxColor: "#E9A9CC",
        note: "trust the journey",
      },
      {
        id: "wish-3",
        number: "03",
        category: "FOR YOUR PEACE",
        icon: "🪻",
        title: "Your Peace",
        message: "I hope you find the kind of peace that lets you breathe, rest, and be completely yourself without worrying about what the world expects from you.",
        waxColor: "#7655A6",
        note: "take a deep breath",
      },
      {
        id: "wish-4",
        number: "04",
        category: "FOR YOUR PEOPLE",
        icon: "💌",
        title: "Your People",
        message: "I hope you always have people around you who genuinely care, celebrate your wins, and stay beside you when things get difficult.",
        waxColor: "#C4B0E8",
        note: "always in your corner",
      },
      {
        id: "wish-5",
        number: "05",
        category: "FOR YOUR ADVENTURES",
        icon: "🪐",
        title: "Your Adventures",
        message: "I hope this year brings you unexpected adventures, ridiculous stories, beautiful places, and memories we'll laugh about for years.",
        waxColor: "#E9A9CC",
        note: "more chaotic road trips",
      },
      {
        id: "wish-6",
        number: "06",
        category: "FOR YOUR CONFIDENCE",
        icon: "👑",
        title: "Your Confidence",
        message: "I hope you learn to see yourself with a little more kindness and realize how much you're capable of becoming.",
        waxColor: "#F7F1E9",
        note: "you're built for big things",
      },
      {
        id: "wish-7",
        number: "07",
        category: "FOR THE LITTLE THINGS",
        icon: "🌻",
        title: "The Little Things",
        message: "I hope your favourite songs hit a little harder, your comfort food tastes a little better, and ordinary days surprise you in the loveliest ways.",
        waxColor: "#C4B0E8",
        note: "ordinary magic everywhere",
      },
      {
        id: "wish-8",
        number: "08",
        category: "FOR THE YEAR AHEAD",
        icon: "🎂",
        title: "The Year Ahead",
        message: "Most of all, I hope this next chapter feels more like YOU: more growth, more laughter, more courage, more happiness, and more reasons to be excited about tomorrow.",
        waxColor: "#E9A9CC",
        note: "your best chapter yet",
      },
    ],
  },

  // ─── 7. OUR UNOFFICIAL SOUNDTRACK ────────────────────────────────────────
  soundtrack: {
    sectionLabel: "05 / unofficial audio",
    title: "the soundtrack to",
    titleItalic: "our mutual nonsense.",
    subtitle: "a quiet mixtape for late-night drives, comfortable silence, and uncontrollable giggles.",
    tracks: [
      {
        id: "tr-1",
        number: "01",
        title: "late afternoon drives",
        artist: "the nostalgia files",
        coverImage: "/assets/huh.jpeg",
        note: "for driving with the windows rolled halfway down and singing completely off-key.",
        duration: "3:42",
        synthTheme: "dreamy",
      },
      {
        id: "tr-2",
        number: "02",
        title: "midnight overthinking",
        artist: "2:00 am philosophy",
        coverImage: "/assets/hehe.jpeg",
        note: "the exact soundtrack to our unhinged philosophical voice notes.",
        duration: "4:15",
        synthTheme: "lofi",
      },
      {
        id: "tr-3",
        number: "03",
        title: "comfortable quiet",
        artist: "ambient safe space",
        coverImage: "/assets/capybara.jpeg",
        note: "sitting in the same room doing completely different things in peace.",
        duration: "3:18",
        synthTheme: "chill",
      },
      {
        id: "tr-4",
        number: "04",
        title: "delirium at 3 am",
        artist: "mutual chaos",
        coverImage: "/assets/ash-face.jpeg",
        note: "when everything suddenly becomes the single funniest thing on earth.",
        duration: "2:58",
        synthTheme: "upbeat",
      },
    ],
  },

  // ─── 7. PARTY INTERACTION ────────────────────────────────────────────────
  partyDemand: {
    sectionLabel: "05 / a brief interruption",
    title: "okay, one important thing.",
    setup1: "so i've made you a whole website. that's already a suspicious amount of effort from me.",
    setup2: "now, naturally, there's just one tiny thing left.",
    revealQuestion: "WHEN ARE YOU THROWING ME A PARTY?",
    followUp: "because let's be honest, you didn't think all this effort was going to go unrewarded, did you? x",
    handwrittenPunchline: "yes, this is extortion.",
    button1: {
      label: "fine, fine. we'll plan it.",
      response: "excellent. i'll be expecting a date, a plan, and absolutely no last-minute cancellations. thank you for your cooperation.",
    },
    button2: {
      label: "the audacity???",
      response: "the audacity is making you a whole website and STILL having to ask for my party. unbelievable behaviour, honestly.",
    },
    footerDuty: "birthday girl duties. please cooperate.",
  },

  // ─── 8. FINAL BIRTHDAY LETTER ────────────────────────────────────────────
  finalLetter: {
    sectionLabel: "06 / closing note",
    heading: "before you go...",
    headingItalic: "a quiet note for you.",
    salutation: "dear ash,",
    paragraphs: [
      "if you're reading this, i hope it brought at least a small, quiet smile to your face.",
      "birthdays have an odd way of making people reflect on time, but mostly i just wanted to make sure you know how grateful i am that you're in my life. you have this uncanny way of turning regular, boring days into things i remember years later.",
      "thank you for being the person who actually listens, who makes me laugh when things are messy, and who never pretends to be anyone other than who you are. the world is considerably better, and infinitely funnier, with you around.",
    ],
    signOff: "made for you, with love.",
    handwrittenPostscript: "now go figure out my party situation. x",
    replayText: "read it all again ↗",
  },
};
