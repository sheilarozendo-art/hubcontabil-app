"use client"

// ─── Logo ──────────────────────────────────────────────────────────────────────

export default function HubContabilLogo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        overflow: "hidden",
      }}
    >
      {/* Icon mark – exact paths from Logo_HUBCont_bil_3.svg (viewBox 0 0 400 313) */}
      <svg
        width="36"
        height="28"
        viewBox="0 0 400 313"
        fill="none"
        style={{ flexShrink: 0 }}
      >
        {/* Violet – right pill */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#A155FF"
          stroke="#FFFFFF"
          strokeWidth="6"
          d="M238.81,240.28v-101.16c0-37.66-30.82-68.47-68.47-68.47h0c-37.66,0-68.47,30.81-68.47,68.47v169.63s68.47,0,68.47,0c37.66,0,68.47-30.81,68.47-68.47h0Z"
        />
        {/* Blue – tall center pill */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#1D4ED8"
          stroke="#FFFFFF"
          strokeWidth="6"
          d="M398.76,240.28V68.47C398.76,30.81,367.95,0,330.29,0h0c-37.66,0-68.47,30.81-68.47,68.47v171.81c0,37.66,30.82,68.47,68.47,68.47h0c37.66,0,68.47-30.81,68.47-68.47h0Z"
        />
        {/* Cyan – bottom-left square */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#43C1EF"
          d="M136.94,308.75v-68.48c0-37.65-30.82-68.47-68.47-68.47h0C30.82,171.81,0,202.63,0,240.28h0c0,37.66,30.82,68.48,68.47,68.48h68.48Z"
        />
        {/* Blue overlay stripe */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#1D4ED8"
          d="M136.94,240.28v68.48h-35.07v-128.19c20.89,11.76,35.07,34.16,35.07,59.71h0Z"
        />
      </svg>
      {!collapsed && (
        <div style={{ lineHeight: 1.15 }}>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 14.5,
              color: "#030303",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}
          >
            HUB
            <span style={{ fontWeight: 500, letterSpacing: "0.03em" }}>
              Contábil
            </span>
          </div>
          <div
            style={{
              fontFamily: "'Michroma', monospace",
              fontSize: 8,
              color: "#94A3B8",
              letterSpacing: "0.30em",
              textTransform: "uppercase",
            }}
          >
            FINANCIAL
          </div>
        </div>
      )}
    </div>
  )
}
