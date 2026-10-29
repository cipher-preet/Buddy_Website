type SceneProps = { idPrefix: string; className?: string };

function pid(prefix: string, name: string) {
  return `${prefix}-${name}`;
}

export function RoomScene({ idPrefix, className }: SceneProps) {
  const g = (name: string) => pid(idPrefix, name);
  return (
    <svg className={className ?? "scene-svg"} viewBox="0 0 720 560" role="img" aria-label="A phone and a laptop on a table during an in-person meeting">
      <defs>
        <linearGradient id={g("sky")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d5e4ff" />
          <stop offset="48%" stopColor="#efe7ff" />
          <stop offset="100%" stopColor="#ffe4d8" />
        </linearGradient>
        <linearGradient id={g("table")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffdf9" />
          <stop offset="100%" stopColor="#f0e4d4" />
        </linearGradient>
        <linearGradient id={g("shirtA")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4d84ff" />
          <stop offset="100%" stopColor="#2454d6" />
        </linearGradient>
        <linearGradient id={g("shirtB")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a3348" />
          <stop offset="100%" stopColor="#151b2b" />
        </linearGradient>
        <filter id={g("shadow")} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#172033" floodOpacity="0.16" />
        </filter>
      </defs>
      <rect width="720" height="560" rx="36" fill={`url(#${g("sky")})`} />
      <ellipse cx="360" cy="430" rx="280" ry="70" fill="#ffffff" opacity="0.45" />
      <ellipse cx="150" cy="150" rx="90" ry="90" fill="#ffffff" opacity="0.28" />
      <rect x="78" y="78" width="150" height="110" rx="18" fill="#ffffff" opacity="0.35" />
      <rect x="500" y="64" width="120" height="86" rx="16" fill="#ffffff" opacity="0.28" />

      <g filter={`url(#${g("shadow")})`}>
        <ellipse cx="360" cy="360" rx="246" ry="78" fill={`url(#${g("table")})`} />
        <ellipse cx="360" cy="360" rx="246" ry="78" fill="none" stroke="#e7d8c6" strokeWidth="2" />
      </g>

      <g transform="translate(118 188)">
        <path d="M18 86c0-28 18-44 46-44s46 16 46 44v46c-14 12-30 18-46 18s-32-6-46-18V86z" fill={`url(#${g("shirtA")})`} />
        <circle cx="64" cy="28" r="22" fill="#f0c7a8" />
        <path d="M48 24c4-12 28-12 32 0" fill="none" stroke="#3a2a22" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(470 176)">
        <path d="M16 90c0-30 18-48 48-48s48 18 48 48v42c-16 14-32 20-48 20s-32-6-48-20V90z" fill={`url(#${g("shirtB")})`} />
        <circle cx="64" cy="28" r="22" fill="#e0b08a" />
        <path d="M46 20c6-10 30-10 36 2" fill="none" stroke="#3a2a22" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g transform="translate(292 292)" filter={`url(#${g("shadow")})`}>
        <rect width="64" height="112" rx="14" fill="#172033" />
        <rect x="5" y="10" width="54" height="86" rx="8" fill="#10182c" />
        <g className="wave-bars" fill="#7eb0ff">
          <rect x="14" y="46" width="4" height="16" rx="2" />
          <rect x="22" y="38" width="4" height="32" rx="2" />
          <rect x="30" y="42" width="4" height="24" rx="2" />
          <rect x="38" y="34" width="4" height="40" rx="2" />
          <rect x="46" y="44" width="4" height="20" rx="2" />
        </g>
        <circle cx="32" cy="104" r="3" fill="#d5dbe8" />
      </g>

      <g className="sound-rings" fill="none" stroke="#2f6bff" strokeWidth="2">
        <circle cx="324" cy="348" r="46" opacity="0.45" />
        <circle cx="324" cy="348" r="64" opacity="0.28" />
        <circle cx="324" cy="348" r="82" opacity="0.16" />
      </g>

      <g transform="translate(390 268)" filter={`url(#${g("shadow")})`}>
        <rect width="196" height="128" rx="14" fill="#f7f9fc" />
        <rect x="10" y="12" width="176" height="86" rx="8" fill="#172033" />
        <rect x="22" y="26" width="92" height="7" rx="3" fill="#8eb4ff" />
        <rect x="22" y="42" width="128" height="6" rx="3" fill="#415072" />
        <rect x="22" y="56" width="110" height="6" rx="3" fill="#415072" />
        <rect x="22" y="70" width="74" height="6" rx="3" fill="#2f6bff" />
        <rect x="70" y="98" width="56" height="8" rx="4" fill="#d5dced" />
      </g>
    </svg>
  );
}

export function TranscriptScene({ idPrefix, className }: SceneProps) {
  const g = (name: string) => pid(idPrefix, name);
  return (
    <svg className={className ?? "scene-svg"} viewBox="0 0 640 460" aria-hidden="true">
      <defs>
        <linearGradient id={g("bg")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e7f0ff" />
          <stop offset="100%" stopColor="#f4ecff" />
        </linearGradient>
      </defs>
      <rect width="640" height="460" rx="32" fill={`url(#${g("bg")})`} />
      <g transform="translate(48 70)">
        <rect width="250" height="78" rx="22" fill="#ffffff" />
        <text x="22" y="32" fill="#2f6bff" fontSize="13" fontFamily="system-ui, sans-serif" fontWeight="700">English</text>
        <text x="22" y="56" fill="#172033" fontSize="16" fontFamily="system-ui, sans-serif">Ship the Hindi summary.</text>
      </g>
      <g transform="translate(180 168)">
        <rect width="280" height="86" rx="22" fill="#172033" />
        <text x="22" y="34" fill="#9db7ff" fontSize="13" fontFamily="system-ui, sans-serif" fontWeight="700">हिंदी</text>
        <text x="22" y="60" fill="#ffffff" fontSize="18" fontFamily="system-ui, sans-serif">कल नोट्स भेज दूंगा</text>
      </g>
      <g transform="translate(90 286)">
        <rect width="340" height="86" rx="22" fill="#ffffff" />
        <text x="22" y="34" fill="#ff7a59" fontSize="13" fontFamily="system-ui, sans-serif" fontWeight="700">Hinglish</text>
        <text x="22" y="60" fill="#172033" fontSize="18" fontFamily="system-ui, sans-serif">Pricing page kal bhej dena.</text>
      </g>
      <g className="wave-bars" transform="translate(500 190)" fill="#2f6bff">
        <rect x="0" y="28" width="8" height="24" rx="4" />
        <rect x="16" y="12" width="8" height="56" rx="4" />
        <rect x="32" y="20" width="8" height="40" rx="4" />
        <rect x="48" y="6" width="8" height="68" rx="4" />
        <rect x="64" y="24" width="8" height="32" rx="4" />
      </g>
    </svg>
  );
}

export function ActionsScene({ idPrefix, className }: SceneProps) {
  const g = (name: string) => pid(idPrefix, name);
  return (
    <svg className={className ?? "scene-svg"} viewBox="0 0 640 460" aria-hidden="true">
      <defs>
        <linearGradient id={g("bg")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8fff6" />
          <stop offset="100%" stopColor="#e5eeff" />
        </linearGradient>
      </defs>
      <rect width="640" height="460" rx="32" fill={`url(#${g("bg")})`} />
      <g transform="translate(54 48)">
        <rect width="300" height="150" rx="22" fill="#172033" />
        <text x="24" y="40" fill="#9db7ff" fontSize="13" fontFamily="system-ui, sans-serif" fontWeight="700">SUMMARY</text>
        <text x="24" y="78" fill="#ffffff" fontSize="20" fontFamily="system-ui, sans-serif">Ship the summary.</text>
        <text x="24" y="108" fill="#d5def2" fontSize="16" fontFamily="system-ui, sans-serif">Send the pricing page.</text>
      </g>
      <g className="fly-card" transform="translate(300 210)">
        <rect width="250" height="64" rx="16" fill="#ffffff" />
        <circle cx="32" cy="32" r="12" fill="#2f6bff" />
        <text x="56" y="28" fill="#172033" fontSize="15" fontFamily="system-ui, sans-serif" fontWeight="700">Task</text>
        <text x="56" y="48" fill="#526078" fontSize="13" fontFamily="system-ui, sans-serif">Send pricing page</text>
      </g>
      <g className="fly-card fly-card-2" transform="translate(340 292)">
        <rect width="230" height="64" rx="16" fill="#ffffff" />
        <circle cx="32" cy="32" r="12" fill="#ff7a59" />
        <text x="56" y="28" fill="#172033" fontSize="15" fontFamily="system-ui, sans-serif" fontWeight="700">Calendar</text>
        <text x="56" y="48" fill="#526078" fontSize="13" fontFamily="system-ui, sans-serif">Thu · 10:00</text>
      </g>
      <g className="fly-card fly-card-3" transform="translate(70 250)">
        <rect width="210" height="64" rx="16" fill="#ffffff" />
        <circle cx="32" cy="32" r="12" fill="#1f9d72" />
        <text x="56" y="28" fill="#172033" fontSize="15" fontFamily="system-ui, sans-serif" fontWeight="700">Reminder</text>
        <text x="56" y="48" fill="#526078" fontSize="13" fontFamily="system-ui, sans-serif">Tomorrow morning</text>
      </g>
    </svg>
  );
}

export function SpacesScene({ idPrefix, className }: SceneProps) {
  const g = (name: string) => pid(idPrefix, name);
  const card = (x: number, y: number, title: string, tint: string, line: string) => (
    <g key={title} transform={`translate(${x} ${y})`}>
      <rect width="250" height="92" rx="18" fill="#ffffff" />
      <rect width="8" height="92" rx="4" fill={tint} />
      <text x="28" y="38" fill="#172033" fontSize="18" fontFamily="system-ui, sans-serif" fontWeight="700">{title}</text>
      <text x="28" y="64" fill="#526078" fontSize="14" fontFamily="system-ui, sans-serif">{line}</text>
    </g>
  );
  return (
    <svg className={className ?? "scene-svg"} viewBox="0 0 640 460" aria-hidden="true">
      <defs>
        <linearGradient id={g("bg")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff4ea" />
          <stop offset="100%" stopColor="#e7eeff" />
        </linearGradient>
      </defs>
      <rect width="640" height="460" rx="32" fill={`url(#${g("bg")})`} />
      {card(70, 54, "Client visit", "#2f6bff", "Notes and next steps")}
      {card(210, 168, "Class", "#ff7a59", "Lecture summary")}
      {card(120, 286, "Product", "#1f9d72", "Decisions and tasks")}
    </svg>
  );
}

export function BriefingScene({ idPrefix, className }: SceneProps) {
  const g = (name: string) => pid(idPrefix, name);
  return (
    <svg className={className ?? "scene-svg"} viewBox="0 0 640 460" aria-hidden="true">
      <defs>
        <linearGradient id={g("bg")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff6df" />
          <stop offset="100%" stopColor="#e8f0ff" />
        </linearGradient>
        <linearGradient id={g("sun")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd36a" />
          <stop offset="100%" stopColor="#ff9a4a" />
        </linearGradient>
      </defs>
      <rect width="640" height="460" rx="32" fill={`url(#${g("bg")})`} />
      <circle cx="520" cy="96" r="36" fill={`url(#${g("sun")})`} />
      <g transform="translate(78 70)">
        <rect width="360" height="320" rx="28" fill="#ffffff" />
        <text x="28" y="52" fill="#172033" fontSize="22" fontFamily="system-ui, sans-serif" fontWeight="700">This morning</text>
        <text x="28" y="84" fill="#526078" fontSize="14" fontFamily="system-ui, sans-serif">Priorities, calendar, focus</text>
        <g transform="translate(28 114)">
          <rect width="304" height="48" rx="12" fill="#f3f6fd" />
          <text x="16" y="30" fill="#172033" fontSize="15" fontFamily="system-ui, sans-serif">3 priorities across Spaces</text>
        </g>
        <g transform="translate(28 174)">
          <rect width="304" height="48" rx="12" fill="#f3f6fd" />
          <text x="16" y="30" fill="#172033" fontSize="15" fontFamily="system-ui, sans-serif">Follow-up · Thu 10:00</text>
        </g>
        <g transform="translate(28 234)">
          <rect width="304" height="48" rx="12" fill="#e8fff6" />
          <text x="16" y="30" fill="#172033" fontSize="15" fontFamily="system-ui, sans-serif">90 minutes to focus</text>
        </g>
      </g>
    </svg>
  );
}

export function NoBotScene({ idPrefix, className }: SceneProps) {
  const g = (name: string) => pid(idPrefix, name);
  return (
    <svg className={className ?? "scene-svg"} viewBox="0 0 880 420" aria-hidden="true">
      <defs>
        <linearGradient id={g("bad")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff1f2" />
          <stop offset="100%" stopColor="#ffe4e8" />
        </linearGradient>
        <linearGradient id={g("good")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e9fff6" />
          <stop offset="100%" stopColor="#e7f0ff" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="420" height="420" rx="32" fill={`url(#${g("bad")})`} />
      <rect x="460" y="0" width="420" height="420" rx="32" fill={`url(#${g("good")})`} />
      <g transform="translate(36 36)">
        <VideoTile x={0} y={0} label="Zoom" tint="#2f6bff" />
        <VideoTile x={180} y={0} label="Meet" tint="#1f9d72" />
        <VideoTile x={0} y={150} label="Teams" tint="#5b4ddb" />
        <g className="bot-tile" transform="translate(180 150)">
          <rect width="160" height="120" rx="16" fill="#fff" stroke="#e11d48" strokeWidth="2" />
          <circle cx="80" cy="46" r="16" fill="#ffe4e8" />
          <text x="80" y="92" textAnchor="middle" fill="#9f1239" fontSize="14" fontFamily="system-ui, sans-serif" fontWeight="700">Notetaker bot</text>
          <path d="M28 20 L132 100" stroke="#e11d48" strokeWidth="3" />
        </g>
      </g>
      <g transform="translate(496 48)">
        <VideoTile x={0} y={0} label="You" tint="#2f6bff" />
        <VideoTile x={180} y={0} label="Priya" tint="#ff7a59" />
        <VideoTile x={0} y={140} label="Alex" tint="#1f9d72" />
        <g transform="translate(180 140)">
          <rect width="160" height="130" rx="16" fill="#172033" />
          <text x="80" y="48" textAnchor="middle" fill="#9db7ff" fontSize="13" fontFamily="system-ui, sans-serif" fontWeight="700">Listening</text>
          <text x="80" y="76" textAnchor="middle" fill="#ffffff" fontSize="15" fontFamily="system-ui, sans-serif">On this device</text>
          <text x="80" y="102" textAnchor="middle" fill="#b7c6e6" fontSize="12" fontFamily="system-ui, sans-serif">No extra person</text>
        </g>
      </g>
    </svg>
  );
}

function VideoTile({ x, y, label, tint }: { x: number; y: number; label: string; tint: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="160" height="120" rx="16" fill="#ffffff" />
      <circle cx="80" cy="48" r="18" fill={tint} opacity="0.9" />
      <text x="80" y="96" textAnchor="middle" fill="#172033" fontSize="15" fontFamily="system-ui, sans-serif" fontWeight="700">{label}</text>
    </g>
  );
}

export function ShieldMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="shield-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4d84ff" />
          <stop offset="100%" stopColor="#2454d6" />
        </linearGradient>
      </defs>
      <path d="M32 6l20 8v16c0 14-8.5 22-20 26C20.5 52 12 44 12 30V14l20-8z" fill="url(#shield-fill)" />
      <path d="M24 32l6 6 12-14" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
