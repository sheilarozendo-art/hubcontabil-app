"use client"

export const I = {
  menu: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M3 5h14M3 10h14M3 15h14"
        stroke="#64748B"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  ),
  x: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M4 4l10 10M14 4L4 14"
        stroke="#64748B"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  ),
  chevDown: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M3 5l4 4 4-4"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  bell: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 2a5 5 0 00-5 5v3l-1.5 2h13L14 10V7a5 5 0 00-5-5z"
        stroke="#64748B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 15a2 2 0 004 0"
        stroke="#64748B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  download: (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M6.5 1v7M4 6l2.5 2.5L9 6"
        stroke="#1D4ED8"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 9.5v1A1.5 1.5 0 003 12h7a1.5 1.5 0 001.5-1.5v-1"
        stroke="#1D4ED8"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  copy: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect
        x="4"
        y="4"
        width="8"
        height="8"
        rx="1.5"
        stroke="#64748B"
        strokeWidth="1.3"
      />
      <path
        d="M2 10V2h8"
        stroke="#64748B"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  check: (c = "#10B981", s = 14) => (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
      <circle
        cx="7"
        cy="7"
        r="6"
        fill={c}
        fillOpacity="0.12"
        stroke={c}
        strokeWidth="1.3"
      />
      <path
        d="M4.5 7l2 2 3-3"
        stroke={c}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  shield: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2L3 5v5c0 4.1 3 7.7 7 8.9C14 18.7 17 15.1 17 11V5l-7-3z"
        fill="#43C1EF"
        fillOpacity="0.15"
        stroke="#43C1EF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 10l2 2 4-4"
        stroke="#43C1EF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrow: (c = "#1D4ED8") => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M2 5h6M5 2l3 3-3 3"
        stroke={c}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  upload: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 16V8M8 12l4-4 4 4"
        stroke="#1D4ED8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 18h16"
        stroke="#1D4ED8"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  meet: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="4" width="9" height="8" rx="1.5" fill="#1976D2" />
      <path d="M10 7l4-3v8l-4-3V7z" fill="#4CAF50" />
    </svg>
  ),
  wa: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff">
      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.477-.15-.678.15-.2.301-.778.979-.954 1.18-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.238-.244-.588-.492-.508-.678-.518l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.23 3.111c.15.201 2.124 3.243 5.145 4.549 3.021 1.306 3.021.871 3.573.821.552-.05 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zM12 2a10 10 0 00-8.584 15.112L2 22l4.988-1.309A10 10 0 1012 2zm0 18.25a8.214 8.214 0 01-4.19-1.149l-.3-.178-3.113.816.83-3.033-.195-.311A8.25 8.25 0 1112 20.25z" />
    </svg>
  ),
}
