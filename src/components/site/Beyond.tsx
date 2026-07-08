import { Reveal } from "./Reveal";
import {
  Play,
  Youtube,
  Clock,
  ArrowRight,
  ArrowUpRight,
  ListVideo,
  Check,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const freePlaylists = [
  {
    title: "Complete Python Fundamentals",
    count: "14 videos",
    duration: "6h 20m",
    description:
      "Learn basic syntax for free here. However, watching videos won't give you senior engineering code reviews — that happens inside the Live Bootcamp.",
    link: "https://youtube.com...",
    snippet: "for i in range(∞):",
    gradient: "from-[#2B2D6E] via-[#3D3F8F] to-[#1A1B3D]",
    glow: "#4F52C9",
  },
  {
    title: "Complete Pandas Mastery",
    count: "8 videos",
    duration: "4h 05m",
    description:
      "Understand how to clean basic datasets. We provide this free so you can test the waters, but the bootcamp is where we dive into production-grade systems.",
    link: "https://youtube.com...",
    snippet: "df.groupby('outcome')",
    gradient: "from-[#1E3A3A] via-[#256B5C] to-[#0F2222]",
    glow: "#2FAF8E",
  },
  {
    title: "Complete NumPy Essentials",
    count: "6 videos",
    duration: "3h 10m",
    description:
      "Get a handle on matrix math basics. YouTube is great for theory, but our paid Bootcamp is where you actually build and deploy scalable ML models.",
    link: "https://youtube.com...",
    snippet: "np.array()",
    gradient: "from-[#3D2640] via-[#5A2F66] to-[#1F1424]",
    glow: "#A85AC4",
  },
];

const journey = [
  {
    step: "01",
    label: "Step 01: Self-Paced Prep (Optional)",
    title: "Free YouTube Videos",
    desc: "Test the waters, build your basic syntax foundation, and see my teaching style without spending a single Naira.",
    active: false,
  },
  {
    step: "02",
    label: "Step 02: The Breakthrough (The Destination)",
    title: "12-Week Live Bootcamp",
    desc: "Where real engineers are built. Structural code reviews, dedicated industry mentors, a structured roadmap, and a solid community.",
    active: true,
  },
  {
    step: "03",
    label: "Step 03: The Goal",
    title: "Global Job Placement",
    desc: "Get your portfolio vetted, sit through mock interviews, and pitch your capstone projects directly to tech recruiters.",
    active: false,
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function PlaylistCard({ playlist, index }: { playlist: typeof freePlaylists[number]; index: number }) {
  return (
    <Reveal delay={index * 0.08 + 0.15}>
      <a
        href={playlist.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl overflow-hidden bg-[#101012] border border-white/[0.06] hover:border-white/[0.14] transition-colors duration-300"
      >
        {/* Thumbnail */}
        <div
          className={`relative aspect-video bg-gradient-to-br ${playlist.gradient} overflow-hidden`}
        >
          {/* ambient glow */}
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-40 transition-opacity duration-300 group-hover:opacity-60"
            style={{ background: playlist.glow }}
          />

          {/* dot grid texture */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.15]" aria-hidden="true">
            <defs>
              <pattern id={`dots-${index}`} width="18" height="18" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
          </svg>

          {/* code snippet motif */}
          <span className="absolute bottom-4 left-4 font-mono text-[13px] sm:text-sm text-white/25 select-none tracking-tight">
            {playlist.snippet}
          </span>

          {/* dark overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

          {/* YouTube badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1">
            <Youtube className="w-3 h-3 text-red-500 fill-current" />
            <span className="text-[10px] font-semibold text-white tracking-wide">
              FREE PREP
            </span>
          </div>

          {/* duration badge */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-md px-2 py-1">
            <Clock className="w-3 h-3 text-white/80" />
            <span className="text-[10px] font-medium text-white/90">
              {playlist.duration}
            </span>
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
              <Play className="w-5 h-5 text-white fill-white translate-x-[1px] group-hover:text-black group-hover:fill-black transition-colors duration-300" />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-500 mb-2">
            <ListVideo className="w-3.5 h-3.5" />
            {playlist.count}
          </div>

          <h3 className="text-[15px] font-semibold text-white leading-snug">
            {playlist.title}
          </h3>

          <p className="text-[13px] text-gray-400 mt-2 leading-relaxed">
            {playlist.description}
          </p>

          <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white">
            Watch Free Prep Videos
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </a>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function FreeVsBootcamp() {
  return (
    <section id="free-resources" className="bg-[#0A0A0B] py-28">

      <div className="mx-auto max-w-6xl px-6">
        
        {/* ---------- Header ---------- */}
        <div className="max-w-2xl">
          <Reveal delay={0.05}>
            <span className="text-[11px] font-semibold tracking-[0.18em] text-gray-500 uppercase">
              Step 1: Your Proof of Value
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              Watch the free lessons.
              <br />
              <span className="text-gray-500">Then join the cohort to get hirable.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-[15px] text-gray-400 leading-relaxed">
              You can dive straight into our live bootcamp to learn everything from scratch with our structured guidance. However, if you want to audit my teaching style first or test your interest in data tools before committing financially, explore these free playlists anytime.
            </p>
          </Reveal>
        </div>

        {/* ---------- Playlist showcase ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {freePlaylists.map((playlist, i) => (
            <PlaylistCard key={playlist.title} playlist={playlist} index={i} />
          ))}
        </div>

        {/* ---------- Journey / transition ---------- */}
        <div className="mt-32">
          <div className="max-w-2xl">
            <Reveal delay={0.1}>
              <span className="text-[11px] font-semibold tracking-[0.18em] text-gray-500 uppercase">
                The Hirable Path
              </span>
            </Reveal>
            <Reveal delay={0.15}>
              <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                Why watching tutorials isn't enough to secure a global tech job.
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-[15px] text-gray-400 leading-relaxed">
                Tutorial hell is real. Companies do not hire people who just copy and paste from video streams. They hire builders who can debug production systems under intense pressure, navigate cloud environments, and operate efficiently within a high-performance team. Here is the transition you need to make:
              </p>
            </Reveal>
          </div>

          {/* ---------- Timeline Grid ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
            {journey.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 0.1 + 0.2}>
                <div 
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    item.active 
                      ? "bg-gradient-to-b from-[#16161a] to-[#0d0d0f] border-white/[0.12] shadow-xl shadow-black/40" 
                      : "bg-transparent border-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-medium text-gray-500 tracking-wider">
                      {item.label}
                    </span>
                  </div>

                  <div className="mt-0 md:mt-5">
                    <span className="hidden md:inline-block text-[11px] font-medium text-gray-500 mb-1.5">
                      {item.label}
                    </span>
                    <h4 className="text-[15px] font-semibold text-white mt-1 md:mt-1">
                      {item.title}
                    </h4>
                    <p className="text-[13px] text-gray-400 mt-1.5 leading-relaxed max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ---------- Final CTA panel ---------- */}
        <Reveal delay={0.1}>
          <div className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <div className="max-w-md">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Ready to break out of tutorial hell?
                </h3>
                <p className="mt-3 text-[14px] text-gray-400 leading-relaxed">
                  Watching videos alone won't get you a global tech remote role. Apply for the live cohort to get standard engineering environments, active community networks, and critical job coaching.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {[
                    "Live structured cohort with hard weekly goals",
                    "Senior ML engineers review your production code",
                    "Demo Day pitches directly to real tech recruiters",
                  ].map((line) => (
                    <li
                      key={line}
                      className="flex items-center gap-2.5 text-[13px] text-gray-300"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 text-[14px] font-semibold text-black bg-white hover:bg-gray-200 px-7 py-4 rounded-xl transition-colors duration-200 shrink-0 w-full md:w-auto"
              >
                Apply for the full Bootcamp experience
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}