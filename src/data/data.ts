import { Image, Video, Sparkles, LucideIcon } from 'lucide-react';

export interface Experience {
  company: string;
  duration: string;
  role: string;
  desc: string;
  dotColor: string;
}

export interface IconAndText {
  icon: LucideIcon;
  name: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  href: string;
  desc: string;
}

export interface DesignItem {
  id: string;
  title: string;
  category: 'Social Media' | 'Branding & Web' | 'AI & Tech' | 'Posters & Artwork' | 'Video & Editing';
  image: string;
  tag: string;
  description: string;
  tools: string[];
  highlights: string[];
  featured?: boolean;
}

export interface CardData {
  title: string;
  imageSrc: string;
}

export const experiences: Experience[] = [
  {
    company: "Zorvia Digital",
    duration: "Ongoing",
    role: "Founder / Creative & Digital Content",
    desc: "Built and managed visual identity, digital content, and online branding using Canva, Photoshop, CapCut, and AI tools alongside SEO and content planning.",
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "Freelance / Personal Projects",
    duration: "2025 - Present",
    role: "Graphic Designer & Video Editor",
    desc: "Created short-form YouTube Shorts & Reels (memes, anime edits, face-offs) with strong hooks, thumbnails, captions, sound FX, transitions, and AI visual concepts.",
    dotColor: "bg-[#1D2939]",
  },
  {
    company: "Hackathon Projects",
    duration: "2025 - Present",
    role: "Creative / Technical Contributor",
    desc: "Contributed to 40+ hackathons designing presentations, pitch decks, demos, and visual communication materials under tight deadlines.",
    dotColor: "bg-[#FD853A]",
  },
];

export const photoEditingTools = [
  "Canva",
  "Adobe Photoshop",
  "Thumbnails & Stories",
  "Social Media Posts",
  "Branding Assets",
];

export const videoEditingTools = [
  "CapCut",
  "Instagram Reels",
  "YouTube Shorts",
  "Captions & Hooks",
  "Transitions & SFX",
];

export const aiTools = [
  "AI Image/Video Tools",
  "Prompt Writing",
  "Visual Concepts",
  "Creative Production",
];

export const buttons: string[] = [
  "All",
  "Graphic Design",
  "Video Editing",
  "Branding",
  "Social Media",
  "AI Content",
];

export const iconAndText: IconAndText[] = [
  {
    icon: Image,
    name: "Photo & Graphic Editing",
  },
  {
    icon: Video,
    name: "Video Editing & Motion FX",
  },
  {
    icon: Sparkles,
    name: "AI Media Creation",
  },
];

export const skills: string[] = [
  "CapCut",
  "Canva",
  "Adobe Photoshop",
  "AI Image/Video Tools",
  "Instagram Reels",
  "YouTube Shorts",
  "Thumbnails & Banners",
  "Branding & Identity",
  "Social Media Strategy",
  "Marketing & SEO",
  "Prompt Writing",
  "Git/GitHub",
  "Google Workspace",
];

export const designShowcaseData: DesignItem[] = [
  {
    id: "design-1",
    title: "Brand Showcase & Creative Direction 2026",
    category: "Branding & Web",
    image: "/portfolio-images/brand-showcase-hero.png",
    tag: "Graphic, Video & AI Creator",
    description: "Complete visual identity and portfolio showcase highlighting graphic design, video editing, branding, and AI content creation for modern brands.",
    tools: ["Photoshop", "Illustrator", "Premiere Pro", "AI Art"],
    highlights: [
      "Visual storytelling & brand strategy",
      "Multi-platform creative assets",
      "Dynamic typography & layout design",
      "High-impact social media identity"
    ],
    featured: true
  },
  {
    id: "design-2",
    title: "Social Media Campaign & Ad Banner Suite",
    category: "Social Media",
    image: "/portfolio-images/fresh-ingredients.png",
    tag: "Ad Creatives & Posts",
    description: "High-converting social media creatives featuring coffee branding, travel post series, fitness posters, pizza ads, natural skincare, and festival banners.",
    tools: ["Photoshop", "Canva Pro", "Figma", "Digital Painting"],
    highlights: [
      "Product photography retouching",
      "Engaging promotional ad creatives",
      "Seasonal event banners (Diwali, New Year)",
      "Cohesive brand color harmonies"
    ],
    featured: true
  },
  {
    id: "design-3",
    title: "Zorvia Digital - Web & AI Solution Showcase",
    category: "Branding & Web",
    image: "/portfolio-images/design-chatgpt-ai.png",
    tag: "Corporate & AI Platform",
    description: "Sleek dark-mode digital agency platform presentation featuring products like RiskShield Fintech, CivicMind AI Smart Cities, and LifeLens Assistant.",
    tools: ["Figma", "Photoshop", "UI/UX Design", "AI Media"],
    highlights: [
      "Dark glassmorphism UI design",
      "Fintech & Smart City concept layouts",
      "Responsive visual hierarchy",
      "High-converting SaaS landing page design"
    ],
    featured: true
  },
  {
    id: "design-4",
    title: "AI Is Changing Everything - Future Tech Campaign",
    category: "AI & Tech",
    image: "/portfolio-images/design-1.png",
    tag: "Future Tech Concept",
    description: "Futuristic digital poster exploring AI automation, neural networks, and the future of technology and human potential.",
    tools: ["Midjourney v6", "Photoshop", "Illustrator"],
    highlights: [
      "Neural network visual glow effects",
      "Cyberpunk workspace ambiance",
      "Conceptual typography & tagline placement",
      "High-resolution 4K asset rendering"
    ],
    featured: true
  },
  {
    id: "design-5",
    title: "Final Boss: One Life - Dark Fantasy Game Art",
    category: "Posters & Artwork",
    image: "/portfolio-images/design-2.png",
    tag: "Dark Fantasy Concept Art",
    description: "Cinematic dark fantasy visual art depicting a hero confronting a monumental titan under an eclipsed sun with lava & waterfall landscapes.",
    tools: ["Photoshop", "AI Generative Art", "Matte Painting", "Color Grading"],
    highlights: [
      "Apocalyptic lighting & depth",
      "Complex environmental composition",
      "Custom serif title typography",
      "Intense drama & mood setting"
    ],
    featured: true
  },
  {
    id: "design-6",
    title: "Gojo vs Makima - Anime Showdown Poster",
    category: "Posters & Artwork",
    image: "/portfolio-images/design-3.png",
    tag: "Anime Art & Compositing",
    description: "Dynamic contrast poster pitting Satoru Gojo (Jujutsu Kaisen) against Makima (Chainsaw Man) with blue infinity energy vs red chain domain visual effects.",
    tools: ["Photoshop", "Color Grading", "Custom Brush FX", "Kanji Typography"],
    highlights: [
      "Dual blue vs red color scheme",
      "Authentic Japanese kanji integration",
      "Custom glowing energy particles",
      "High-contrast character compositing"
    ],
    featured: true
  },
  {
    id: "design-7",
    title: "Visual Identity & Modern Brand Creatives",
    category: "Social Media",
    image: "/portfolio-images/new-design-just.png",
    tag: "Brand Creatives & Design",
    description: "High-impact visual artwork, promo banners, and brand engagement concepts crafted with Canva & Photoshop.",
    tools: ["Canva", "Photoshop", "Typography", "Branding"],
    highlights: [
      "Eye-catching layout composition",
      "Color harmony & hierarchy",
      "Social media optimization"
    ],
    featured: true
  },
  {
    id: "design-8",
    title: "Shorts & Reels Visual Hook Storyboard",
    category: "Video & Editing",
    image: "/portfolio-images/new-design-1.png",
    tag: "CapCut & Motion FX",
    description: "Engaging vertical video storytelling layout, captions, dynamic motion effects, and audio-reactive visual cuts.",
    tools: ["CapCut", "Reels & Shorts", "Motion FX", "Sound FX"],
    highlights: [
      "High retention hook pacing",
      "Animated captions & text overlays",
      "Platform optimized vertical format"
    ],
    featured: true
  },
  {
    id: "design-9",
    title: "AI Assisted Creative Concept & Matte Painting",
    category: "AI & Tech",
    image: "/portfolio-images/new-design-2.png",
    tag: "AI Art & Concept Production",
    description: "Generative AI prompt engineering combined with Photoshop retouching for futuristic digital artwork.",
    tools: ["Midjourney", "Photoshop", "Prompt Writing", "Color Grading"],
    highlights: [
      "Custom prompt iteration",
      "Photorealistic rendering",
      "Atmospheric lighting & depth"
    ],
    featured: true
  },
  {
    id: "design-10",
    title: "Promotional Poster & Event Creative Suite",
    category: "Posters & Artwork",
    image: "/portfolio-images/new-design-3.png",
    tag: "Event & Campaign Creatives",
    description: "Bold promotional poster design, event announcements, and marketing campaign visuals tailored for maximum click-through.",
    tools: ["Photoshop", "Canva Pro", "Graphic Design"],
    highlights: [
      "High contrast typography",
      "Targeted audience call-to-action",
      "Multi-resolution asset export"
    ],
    featured: true
  },
  {
    id: "design-11",
    title: "Digital Brand Banner & Thumbnails Pack",
    category: "Social Media",
    image: "/portfolio-images/new-design-4.png",
    tag: "YouTube Thumbnails & Banners",
    description: "Click-worthy YouTube thumbnails and social media banners designed to boost CTR and brand recognition.",
    tools: ["Canva", "Photoshop", "Thumbnail Design"],
    highlights: [
      "Optimized focal point & expression",
      "Vibrant background contrasts",
      "High CTR layout hierarchy"
    ],
    featured: true
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    image: "/portfolio-images/brand-showcase-hero.png",
    title: "Brand Visual Identity 2026",
    href: "#design-showcase",
    desc: "Complete visual story & brand creative suite featuring graphic design, video editing, and AI media production.",
  },
  {
    image: "/portfolio-images/fresh-ingredients.png",
    title: "Social Media Ad Suite",
    href: "#design-showcase",
    desc: "High-impact social media creatives, ad banners, and campaign designs across coffee, skincare, travel, & food brands.",
  },
  {
    image: "/portfolio-images/design-chatgpt-ai.png",
    title: "Zorvia Digital AI Platform",
    href: "#design-showcase",
    desc: "Corporate dark-mode platform showcase and AI product suite including RiskShield, CivicMind AI, and LifeLens.",
  },
  {
    image: "/portfolio-images/new-design-just.png",
    title: "Modern Brand Creatives",
    href: "#design-showcase",
    desc: "High-impact promo banners and social media brand identity assets.",
  },
  {
    image: "/portfolio-images/new-design-1.png",
    title: "Shorts & Reels Hook Edits",
    href: "#design-showcase",
    desc: "CapCut vertical video editing, animated captions, and sound FX.",
  },
  {
    image: "/portfolio-images/new-design-2.png",
    title: "AI Concept Art Suite",
    href: "#design-showcase",
    desc: "Generative AI prompt design and digital matte painting compositing.",
  },
  {
    image: "/portfolio-images/new-design-3.png",
    title: "Event & Ad Campaign Creatives",
    href: "#design-showcase",
    desc: "Promotional poster design and marketing campaign visuals.",
  },
  {
    image: "/portfolio-images/new-design-4.png",
    title: "High CTR YouTube Thumbnails",
    href: "#design-showcase",
    desc: "Engaging thumbnails and channel banner graphics for creators.",
  },
];



export const cardData: CardData[] = [
  { title: "Graphic Design & Thumbnails", imageSrc: "/Rectangle 7.svg" },
  { title: "CapCut Reels & Shorts Editing", imageSrc: "/Rectangle 7.svg" },
  { title: "AI Content & Visual Concepts", imageSrc: "/Rectangle 7.svg" },
  { title: "Social Media & Brand Identity", imageSrc: "/Rectangle 7.svg" },
  { title: "Marketing, SEO & Content", imageSrc: "/Rectangle 7.svg" },
  { title: "Pitch Decks & Creative Demos", imageSrc: "/Rectangle 7.svg" },
];


