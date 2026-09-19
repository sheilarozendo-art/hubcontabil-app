"use client"

import type { ReactNode } from "react"
import { I } from "./Icons"

// ─── Banner ────────────────────────────────────────────────────────────────────
// Global alert banner — same component on every page.
// Props make icon, colors, title, body and CTA configurable per alert type
// while layout, spacing and responsive behavior are always identical.

interface BannerProps {
  onClose: () => void
  icon?: ReactNode
  title?: ReactNode
  body?: string
  ctaLabel?: string
  onCta?: () => void
  /** Token set — extend with more variants as needed */
  variant?: "info" | "warning" | "success"
}

const BANNER_VARIANTS = {
  info: {
    bg: "#ECFEFF",
    border: "#A5F3FC",
    iconBg: "#CFFAFE",
    titleColor: "#0E7490",
    bodyColor: "#0891B2",
  },
  warning: {
    bg: "#FFFBEB",
    border: "#FDE68A",
    iconBg: "#FEF3C7",
    titleColor: "#92400E",
    bodyColor: "#B45309",
  },
  success: {
    bg: "#F0FDF4",
    border: "#BBF7D0",
    iconBg: "#DCFCE7",
    titleColor: "#14532D",
    bodyColor: "#15803D",
  },
}

export default function Banner({
  onClose,
  icon,
  title,
  body,
  ctaLabel = "Renovar Agora",
  onCta,
  variant = "info",
}: BannerProps) {
  const v = BANNER_VARIANTS[variant]

  return (
    <>
      <style>{`
        .banner-root {
          background: ${v.bg};
          border: 1px solid ${v.border};
          border-radius: 12px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          box-sizing: border-box;
        }
        .banner-icon {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: ${v.iconBg};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .banner-body {
          flex: 1;
          min-width: 0;
        }
        .banner-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: ${v.titleColor};
          line-height: 1.35;
          overflow-wrap: break-word;
        }
        .banner-desc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 400;
          font-size: 11.5px;
          color: ${v.bodyColor};
          margin-top: 2px;
          line-height: 1.4;
          overflow-wrap: break-word;
        }
        .banner-actions {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        .banner-cta {
          background: #1D4ED8;
          border: none;
          border-radius: 8px;
          padding: 7px 14px;
          cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 12px;
          color: #FFFFFF;
          white-space: nowrap;
          line-height: 1;
        }
        .banner-cta:hover { opacity: 0.9; }
        .banner-close {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          color: ${v.bodyColor};
          line-height: 0;
          flex-shrink: 0;
          border-radius: 6px;
        }
        .banner-close:hover { background: rgba(0,0,0,0.06); }
        /* Mobile: full vertical column layout */
        @media (max-width: 639px) {
          .banner-root {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            padding: 14px;
          }
          .banner-header-row {
            display: flex;
            align-items: flex-start;
            gap: 10px;
          }
          .banner-body {
            flex: 1;
            min-width: 0;
          }
          .banner-actions {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            width: 100%;
          }
          .banner-cta {
            flex: 1;
            text-align: center;
            padding: 9px 14px;
            font-size: 13px;
          }
          /* Push close to the right of the header row on mobile */
          .banner-close-mobile {
            margin-left: auto;
            flex-shrink: 0;
          }
        }
        /* Desktop/tablet: single row, close at the far right */
        @media (min-width: 640px) {
          .banner-header-row { display: contents; }
          .banner-close-mobile { display: none; }
          .banner-close-desktop { display: flex; }
        }
        @media (max-width: 639px) {
          .banner-close-desktop { display: none; }
        }
      `}</style>

      <div className="banner-root" role="alert">
        {/* On mobile this wrapper becomes a flex row (icon + text + close).
            On desktop display:contents dissolves it into the parent row. */}
        <div className="banner-header-row">
          <div className="banner-icon">{icon ?? I.shield}</div>

          <div className="banner-body">
            <div className="banner-title">
              {title ?? (
                <>
                  Certificado Digital A1 vence em{" "}
                  <span style={{ fontFamily: "'Michroma', monospace" }}>
                    18 dias!
                  </span>
                </>
              )}
            </div>
            <div className="banner-desc">
              {body ??
                "Evite bloqueio na emissão de NF-e. Renove online em 5 minutos com condição exclusiva."}
            </div>
          </div>

          {/* Close button anchored top-right on mobile, hidden on desktop */}
          <button
            className="banner-close banner-close-mobile"
            onClick={onClose}
            aria-label="Fechar aviso"
          >
            {I.x}
          </button>
        </div>

        {/* Actions row: CTA + close (desktop). On mobile: CTA full-width only. */}
        <div className="banner-actions">
          <button className="banner-cta" onClick={onCta}>
            {ctaLabel}
          </button>
          {/* Close on desktop lives here, in the actions row */}
          <button
            className="banner-close banner-close-desktop"
            onClick={onClose}
            aria-label="Fechar aviso"
          >
            {I.x}
          </button>
        </div>
      </div>
    </>
  )
}
