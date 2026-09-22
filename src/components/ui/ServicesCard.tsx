interface HoverCardProps {
  title: string;
  imageSrc?: string;
  priority?: boolean;
}

export default function ServicesCard({ title }: HoverCardProps) {
  // Map titles to icons and descriptions
  const cardConfig: Record<string, { emoji: string; desc: string; bullets: string[] }> = {
    "Graphic Design & Thumbnails": {
      emoji: "✦",
      desc: "Scroll-stopping visuals built for engagement.",
      bullets: ["Social media posts & stories", "YouTube thumbnails", "Promotional creatives"],
    },
    "CapCut Reels & Shorts Editing": {
      emoji: "▶",
      desc: "High-retention vertical video that hooks instantly.",
      bullets: ["Reels & YouTube Shorts", "Captions & transitions", "Sound FX & pacing"],
    },
    "AI Content & Visual Concepts": {
      emoji: "◈",
      desc: "Generative AI art meets professional finishing.",
      bullets: ["Prompt engineering", "Midjourney & AI art", "Matte painting & compositing"],
    },
    "Social Media & Brand Identity": {
      emoji: "◉",
      desc: "Cohesive brand presence across every platform.",
      bullets: ["Logo & identity design", "Brand color systems", "Platform-specific formats"],
    },
    "Marketing, SEO & Content": {
      emoji: "◇",
      desc: "Content strategy that drives visibility and growth.",
      bullets: ["Content calendars", "SEO-optimized copy", "Campaign ideation"],
    },
    "Pitch Decks & Creative Demos": {
      emoji: "◫",
      desc: "Visual presentations that win rooms and pitches.",
      bullets: ["Hackathon pitch decks", "Demo slide design", "Infographic data viz"],
    },
  };

  const config = cardConfig[title] || { emoji: "✦", desc: "", bullets: [] };

  return (
    <div
      className="group relative flex flex-col w-full md:max-w-[360px] lg:max-w-[400px] h-auto min-h-[280px] p-8 rounded-3xl cursor-pointer transition-all duration-400 overflow-hidden"
      style={{
        backgroundColor: '#1A1A1A',
        border: '1px solid #2C2C2C',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = '#E8703A';
        (e.currentTarget as HTMLDivElement).style.backgroundColor = '#E8703A';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = '#2C2C2C';
        (e.currentTarget as HTMLDivElement).style.backgroundColor = '#1A1A1A';
      }}
    >
      {/* Emoji icon */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-lg font-bold transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: '#2C2C2C', color: '#E8703A' }}
      >
        <span>{config.emoji}</span>
      </div>

      {/* Title */}
      <h3
        className="text-[#FAFAF7] font-semibold text-xl mb-2 leading-snug transition-colors duration-200 group-hover:text-white"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-4 transition-colors duration-200"
        style={{ color: '#6B6B6B', fontFamily: "'Inter', sans-serif" }}
      >
        {config.desc}
      </p>

      {/* Bullets */}
      <ul className="flex flex-col gap-1.5 mt-auto">
        {config.bullets.map((b, i) => (
          <li key={i} className="flex items-center gap-2 text-xs" style={{ color: '#D6D3CC', fontFamily: "'Inter', sans-serif" }}>
            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: '#E8703A' }} />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
