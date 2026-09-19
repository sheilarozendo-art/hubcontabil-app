"use client";

import { useState } from 'react'


// ─── Logo ──────────────────────────────────────────────────────────────────────

function HubContabilLogo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, overflow: 'hidden' }}>
      {/* Icon mark – exact paths from Logo_HUBCont_bil_3.svg (viewBox 0 0 400 313) */}
      <svg width="36" height="28" viewBox="0 0 400 313" fill="none" style={{ flexShrink: 0 }}>
        {/* Violet – right pill */}
        <path fillRule="evenodd" clipRule="evenodd" fill="#A155FF"
          d="M238.81,240.28v-101.16c0-37.66-30.82-68.47-68.47-68.47h0c-37.66,0-68.47,30.81-68.47,68.47v169.63s68.47,0,68.47,0c37.66,0,68.47-30.81,68.47-68.47h0Z" />
        {/* Blue – tall center pill */}
        <path fillRule="evenodd" clipRule="evenodd" fill="#1D4ED8"
          d="M398.76,240.28V68.47C398.76,30.81,367.95,0,330.29,0h0c-37.66,0-68.47,30.81-68.47,68.47v171.81c0,37.66,30.82,68.47,68.47,68.47h0c37.66,0,68.47-30.81,68.47-68.47h0Z" />
        {/* Cyan – bottom-left square */}
        <path fillRule="evenodd" clipRule="evenodd" fill="#43C1EF"
          d="M136.94,308.75v-68.48c0-37.65-30.82-68.47-68.47-68.47h0C30.82,171.81,0,202.63,0,240.28h0c0,37.66,30.82,68.48,68.47,68.48h68.48Z" />
        {/* Blue overlay stripe */}
        <path fillRule="evenodd" clipRule="evenodd" fill="#1D4ED8"
          d="M136.94,240.28v68.48h-35.07v-128.19c20.89,11.76,35.07,34.16,35.07,59.71h0Z" />
      </svg>
      {!collapsed && (
        <div style={{ lineHeight: 1.15 }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 14.5, color: '#030303', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
            HUB<span style={{ fontWeight: 500, letterSpacing: '0.03em' }}>Contábil</span>
          </div>
          <div style={{ fontFamily: "'Michroma', monospace", fontSize: 8, color: '#94A3B8', letterSpacing: '0.30em', textTransform: 'uppercase' }}>
            FINANCIAL
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Icons ─────────────────────────────────────────────────────────────────────

const I = {
  menu: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="#64748B" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  x: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M4 4l10 10M14 4L4 14" stroke="#64748B" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  chevDown: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 5l4 4 4-4" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bell: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2a5 5 0 00-5 5v3l-1.5 2h13L14 10V7a5 5 0 00-5-5z" stroke="#64748B" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 15a2 2 0 004 0" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  download: (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M6.5 1v7M4 6l2.5 2.5L9 6" stroke="#1D4ED8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.5 9.5v1A1.5 1.5 0 003 12h7a1.5 1.5 0 001.5-1.5v-1" stroke="#1D4ED8" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  copy: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="#64748B" strokeWidth="1.3" />
      <path d="M2 10V2h8" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  check: (c = '#10B981', s = 14) => (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.3" />
      <path d="M4.5 7l2 2 3-3" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  shield: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L3 5v5c0 4.1 3 7.7 7 8.9C14 18.7 17 15.1 17 11V5l-7-3z" fill="#43C1EF" fillOpacity="0.15" stroke="#43C1EF" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 10l2 2 4-4" stroke="#43C1EF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrow: (c = '#1D4ED8') => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5h6M5 2l3 3-3 3" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  upload: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 16V8M8 12l4-4 4 4" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 18h16" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" />
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

// ─── Nav items ─────────────────────────────────────────────────────────────────

function NavIcon({ id }: { id: string }) {
  const paths: Record<string, React.ReactElement> = {
    dashboard: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="12" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="12" width="7" height="7" rx="1.5" /><rect x="12" y="12" width="7" height="7" rx="1.5" /></>,
    guias: <><path d="M4 2h10v14l-2-1.5-1.5 1.5L9 14.5 7.5 16 6 14.5 4 16V2z" /><path d="M7 7h4M7 10h2" strokeLinecap="round" /></>,
    notas: <><rect x="3" y="2" width="12" height="16" rx="2" /><path d="M7 7h5M7 11h3" strokeLinecap="round" /></>,
    folha: <><circle cx="10" cy="7" r="3" /><path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" /></>,
    docs: <><path d="M4 2h10l4 4v14a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" /><path d="M14 2v4h4" /></>,
    config: <><circle cx="10" cy="10" r="3" /><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.9 4.9l1.4 1.4M13.7 13.7l1.4 1.4M4.9 15.1l1.4-1.4M13.7 6.3l1.4-1.4" strokeLinecap="round" /></>,
  }
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      {paths[id]}
    </svg>
  )
}

const NAV = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'guias', label: 'Guias & Tributos' },
  { id: 'notas', label: 'Notas Fiscais' },
  { id: 'folha', label: 'Folha de Pagamento' },
  { id: 'docs', label: 'Documentos' },
]

// ─── Sidebar ───────────────────────────────────────────────────────────────────

function Sidebar({ active, mobileOpen, onClose }: { active: string; mobileOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(3,3,3,0.35)',
            zIndex: 39, backdropFilter: 'blur(2px)',
          }}
        />
      )}

      <aside style={{
        position: 'fixed', top: 0, left: 0, bottom: 0,
        width: 264,
        background: '#FFFFFF',
        borderRight: '1px solid #E2E8F0',
        display: 'flex', flexDirection: 'column',
        zIndex: 40,
        transition: 'transform 0.22s ease',
      }}
        className={`sidebar-root${mobileOpen ? ' open' : ''}`}
      >
        {/* Logo area */}
        <div style={{
          height: 64, display: 'flex', alignItems: 'center',
          padding: '0 20px', borderBottom: '1px solid #F1F5F9',
          flexShrink: 0,
        }}>
          <HubContabilLogo />
          <button
            onClick={onClose}
            className="sidebar-close-btn"
            style={{
              marginLeft: 'auto', background: 'none', border: 'none',
              cursor: 'pointer', color: '#94A3B8', padding: 4,
            }}
          >
            {I.x}
          </button>
        </div>

        {/* Company selector */}
        <div style={{ padding: '14px 14px 0' }}>
          <button style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: 10,
            background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10,
            padding: '9px 12px', cursor: 'pointer', textAlign: 'left',
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: 'linear-gradient(135deg, #1D4ED8, #A155FF)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
              fontSize: 11, color: '#fff', flexShrink: 0,
            }}>TF</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12.5, color: '#030303', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Tech Founders Ltda
              </div>
              <div style={{ fontFamily: "'Michroma', monospace", fontSize: 'clamp(7.5px, 1.1vw, 9.5px)', color: '#94A3B8', letterSpacing: '0.05em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                CNPJ 12.345.678/0001-90
              </div>
            </div>
            {I.chevDown}
          </button>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '8px 14px', overflowY: 'auto' }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10, color: '#CBD5E1', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 8px 6px' }}>
            Menu
          </div>
          {NAV.map(item => {
            const isActive = item.id === active
            return (
              <button
                key={item.id}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                  background: isActive ? '#EFF6FF' : 'transparent',
                  border: 'none',
                  borderRadius: 9,
                  padding: '9px 10px',
                  cursor: 'pointer',
                  color: isActive ? '#1D4ED8' : '#64748B',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: 13.5,
                  marginBottom: 2,
                  transition: 'all 0.12s',
                  textAlign: 'left',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#F8FAFC' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
              >
                <NavIcon id={item.id} />
                {item.label}
                {isActive && (
                  <div style={{ marginLeft: 'auto', width: 5, height: 5, borderRadius: '50%', background: '#1D4ED8' }} />
                )}
              </button>
            )
          })}

          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10, color: '#CBD5E1', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '18px 8px 6px' }}>
            Conta
          </div>
          <button style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: 10,
            background: 'transparent', border: 'none', borderRadius: 9,
            padding: '9px 10px', cursor: 'pointer',
            color: '#64748B',
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 13.5,
            textAlign: 'left',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F8FAFC' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
          >
            <NavIcon id="config" />
            Configurações
          </button>
        </nav>

        {/* User footer */}
        <div style={{
          padding: '12px 14px', borderTop: '1px solid #F1F5F9', flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: '50%',
              background: 'linear-gradient(135deg, #1D4ED8, #A155FF)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
              fontSize: 12, color: '#fff', flexShrink: 0,
            }}>JS</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#030303', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Sheila Rozendo
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: '#94A3B8' }}>
                Sócia-Administradora
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

// ─── Topbar ────────────────────────────────────────────────────────────────────
// Global, fully responsive — same component on every page, no hidden elements at any breakpoint.

function Topbar({ onOpenMenu, title = 'Dashboard Geral', subtitle = 'Competência: Setembro / 2024' }: {
  onOpenMenu: () => void
  title?: string
  subtitle?: string
}) {
  return (
    <>
      <style>{`
        .topbar-root {
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
          position: sticky;
          top: 0;
          z-index: 30;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 16px;
          min-height: 56px;
          flex-wrap: nowrap;
          overflow: hidden;
        }
        /* Hamburger — always rendered, only visible when sidebar is off-canvas */
        .topbar-hamburger {
          display: none;
          flex-shrink: 0;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 7px;
          color: #64748B;
          align-items: center;
          justify-content: center;
          line-height: 0;
        }
        /* Logo in topbar — always rendered, shown only when sidebar off-canvas */
        .topbar-brand {
          display: none;
          flex-shrink: 0;
          align-items: center;
        }
        /* Divider between brand and title on mobile */
        .topbar-divider {
          display: none;
          width: 1px;
          height: 24px;
          background: #E2E8F0;
          flex-shrink: 0;
        }
        /* Title block shrinks gracefully */
        .topbar-title-block {
          flex: 1;
          min-width: 0;
        }
        .topbar-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: clamp(14px, 2vw, 18px);
          color: #030303;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .topbar-subtitle {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 400;
          font-size: clamp(10px, 1.4vw, 12px);
          color: #94A3B8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          position: sticky;
        }
        .topbar-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .topbar-bell {
          position: relative;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 9px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }
        .topbar-bell-dot {
          position: absolute;
          top: 7px;
          right: 7px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #EF4444;
          border: 1.5px solid #FFFFFF;
        }
        .topbar-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1D4ED8, #A155FF);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 12px;
          color: #fff;
          cursor: pointer;
          flex-shrink: 0;
        }
        /* ≥1024px: sidebar is visible → hide hamburger + brand */
        @media (min-width: 1024px) {
          .topbar-root { padding: 0 28px; gap: 16px; min-height: 64px; }
          .topbar-hamburger { display: none !important; }
          .topbar-brand { display: none !important; }
          .topbar-divider { display: none !important; }
        }
        /* <1024px: sidebar hidden → show hamburger + brand + divider */
        @media (max-width: 1023px) {
          .topbar-hamburger { display: flex; }
          .topbar-brand { display: flex; }
          .topbar-divider { display: block; }
        }
        /* Narrow mobile: tighten padding further */
        @media (max-width: 479px) {
          .topbar-root { padding: 0 12px; gap: 8px; }
        }
      `}</style>

      <header className="topbar-root">
        {/* Hamburger — opens off-canvas sidebar */}
        <button className="topbar-hamburger" onClick={onOpenMenu} aria-label="Abrir menu">
          {I.menu}
        </button>

        {/* Logo — visible only when sidebar is off-canvas (<1024px) */}
        <div className="topbar-brand">
          <HubContabilLogo />
        </div>

        {/* Visual separator between brand and page title on mobile */}
        <div className="topbar-divider" aria-hidden />

        {/* Page title + subtitle — always visible, text-overflow on overflow */}
        <div className="topbar-title-block">
          <div className="topbar-title">{title}</div>
          <div className="topbar-subtitle">{subtitle}</div>
        </div>

        {/* Right-side actions — always visible */}
        <div className="topbar-actions">
          <button className="topbar-bell" aria-label="Notificações">
            {I.bell}
            <span className="topbar-bell-dot" />
          </button>
          <div className="topbar-avatar" role="button" aria-label="Perfil de Sheila Rozendo">JS</div>
        </div>
      </header>
    </>
  )
}

// ─── Banner ────────────────────────────────────────────────────────────────────
// Global alert banner — same component on every page.
// Props make icon, colors, title, body and CTA configurable per alert type
// while layout, spacing and responsive behavior are always identical.

interface BannerProps {
  onClose: () => void
  icon?: React.ReactNode
  title?: React.ReactNode
  body?: string
  ctaLabel?: string
  onCta?: () => void
  /** Token set — extend with more variants as needed */
  variant?: 'info' | 'warning' | 'success'
}

const BANNER_VARIANTS = {
  info: {
    bg: '#ECFEFF', border: '#A5F3FC',
    iconBg: '#CFFAFE', titleColor: '#0E7490', bodyColor: '#0891B2',
  },
  warning: {
    bg: '#FFFBEB', border: '#FDE68A',
    iconBg: '#FEF3C7', titleColor: '#92400E', bodyColor: '#B45309',
  },
  success: {
    bg: '#F0FDF4', border: '#BBF7D0',
    iconBg: '#DCFCE7', titleColor: '#14532D', bodyColor: '#15803D',
  },
}

function Banner({
  onClose,
  icon,
  title,
  body,
  ctaLabel = 'Renovar Agora',
  onCta,
  variant = 'info',
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
          <div className="banner-icon">
            {icon ?? I.shield}
          </div>

          <div className="banner-body">
            <div className="banner-title">
              {title ?? (
                <>
                  Certificado Digital A1 vence em{' '}
                  <span style={{ fontFamily: "'Michroma', monospace" }}>18 dias!</span>
                </>
              )}
            </div>
            <div className="banner-desc">
              {body ?? 'Evite bloqueio na emissão de NF-e. Renove online em 5 minutos com condição exclusiva.'}
            </div>
          </div>

          {/* Close button anchored top-right on mobile, hidden on desktop */}
          <button className="banner-close banner-close-mobile" onClick={onClose} aria-label="Fechar aviso">
            {I.x}
          </button>
        </div>

        {/* Actions row: CTA + close (desktop). On mobile: CTA full-width only. */}
        <div className="banner-actions">
          <button className="banner-cta" onClick={onCta}>
            {ctaLabel}
          </button>
          {/* Close on desktop lives here, in the actions row */}
          <button className="banner-close banner-close-desktop" onClick={onClose} aria-label="Fechar aviso">
            {I.x}
          </button>
        </div>
      </div>
    </>
  )
}

// ─── Sparkline ─────────────────────────────────────────────────────────────────

function SparklineBars() {
  const bars = [6, 9, 7, 11, 8, 14, 10, 16, 12, 18]
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 24, marginTop: 12 }}>
      {bars.map((h, i) => (
        <div key={i} style={{
          flex: 1, height: h, borderRadius: 3,
          background: i === bars.length - 1 ? '#1D4ED8' : i >= bars.length - 3 ? '#A155FF' : '#E2E8F0',
        }} />
      ))}
    </div>
  )
}

// ─── KPI Cards ─────────────────────────────────────────────────────────────────

const card: React.CSSProperties = {
  background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16,
  padding: '20px', boxShadow: '0 2px 12px rgba(3,3,3,0.04)',
}

const pill = (bg: string, color: string): React.CSSProperties => ({
  display: 'inline-flex', alignItems: 'center', gap: 4,
  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11,
  background: bg, color, padding: '3px 9px', borderRadius: 999, whiteSpace: 'nowrap', flexShrink: 0,
})

const lbl: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600,
  fontSize: 12, color: '#64748B',
}

const mono = (size = 22): React.CSSProperties => ({
  fontFamily: "'Michroma', monospace", fontSize: size, color: '#030303',
  letterSpacing: '-0.01em', marginBottom: 4,
})

function KPITributos() {
  return (
    <div style={{ ...card }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <span style={lbl}>Total de Tributos</span>
        <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(29,78,216,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 1h10v12l-2-1.5-1.5 1.5L7 11.5 5.5 13 4 11.5 2 13V1z" stroke="#1D4ED8" strokeWidth="1.3" strokeLinejoin="round" /><path d="M4.5 5h5M4.5 7.5h3" stroke="#1D4ED8" strokeWidth="1.3" strokeLinecap="round" /></svg>
        </div>
      </div>
      <div style={mono(22)}>R$ 4.820,50</div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginBottom: 12 }}>3 de 4 guias pagas · Outubro</div>
      <div style={{ background: '#F1F5F9', borderRadius: 999, height: 5, overflow: 'hidden' }}>
        <div style={{ width: '75%', height: '100%', background: '#1D4ED8', borderRadius: 999 }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, color: '#CBD5E1' }}>0%</span>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, color: '#1D4ED8', fontWeight: 700 }}>75%</span>
      </div>
    </div>
  )
}

function KPIVencimento() {
  return (
    <div style={{ ...card }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <span style={lbl}>Próximo Vencimento</span>
        <span style={pill('#FEF3C7', '#D97706')}>A Vencer</span>
      </div>
      <div style={mono(26)}>20 Out</div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginBottom: 12 }}>DAS · Simples Nacional</div>
      <div style={{ display: 'inline-flex', alignItems: 'center', background: '#EFF6FF', borderRadius: 8, padding: '5px 12px' }}>
        <span style={{ fontFamily: "'Michroma', monospace", fontSize: 13, color: '#1D4ED8' }}>R$ 1.240,00</span>
      </div>
    </div>
  )
}

function KPICertificado() {
  return (
    <div style={{ ...card }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <span style={lbl}>Certificado Digital</span>
        {I.shield}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#43C1EF', boxShadow: '0 0 6px rgba(67,193,239,0.7)', flexShrink: 0 }} />
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#030303' }}>Ativo & Seguro</span>
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginBottom: 2 }}>
        Validade: <span style={{ fontFamily: "'Michroma', monospace", fontSize: 11, color: '#030303' }}>18/11/2024</span>
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: '#94A3B8', marginBottom: 12 }}>e-CNPJ A1 · ICP-Brasil</div>
      <div style={{ background: '#F1F5F9', borderRadius: 999, height: 4, overflow: 'hidden' }}>
        <div style={{ width: '88%', height: '100%', background: 'linear-gradient(90deg, #43C1EF, #1D4ED8)', borderRadius: 999 }} />
      </div>
    </div>
  )
}

function KPINotas() {
  return (
    <div style={{ ...card }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <span style={lbl}>Notas Fiscais</span>
        <span style={pill('#DCFCE7', '#15803D')}>+12% vs ant.</span>
      </div>
      <div style={mono(22)}>28 Emitidas</div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B' }}>Outubro 2024</div>
      <SparklineBars />
    </div>
  )
}

// ─── Obligations Table ─────────────────────────────────────────────────────────

const TABS = ['Todas', 'Pendentes (1)', 'Pagas (3)']

const ROWS = [
  { tag: 'DAS', tagColor: '#1D4ED8', tagBg: 'rgba(29,78,216,0.08)', title: 'DAS - Simples Nacional', comp: '09/2024', venc: '20/10/2024', valor: 'R$ 1.240,00', status: 'Aguardando', statusColor: '#D97706', statusBg: '#FEF3C7', paid: false },
  { tag: 'FGTS', tagColor: '#0891B2', tagBg: 'rgba(8,145,178,0.08)', title: 'FGTS Digital', comp: '09/2024', venc: '07/10/2024', valor: 'R$ 680,00', status: 'Pago', statusColor: '#15803D', statusBg: '#DCFCE7', paid: true },
  { tag: 'GPS', tagColor: '#7C3AED', tagBg: 'rgba(124,58,237,0.08)', title: 'Pró-Labore & GPS', comp: '09/2024', venc: '15/10/2024', valor: 'R$ 2.900,50', status: 'Pago', statusColor: '#15803D', statusBg: '#DCFCE7', paid: true },
]

function ObrigacoesCard() {
  const [activeTab, setActiveTab] = useState('Todas')
  const filtered = ROWS.filter(r => activeTab === 'Pendentes (1)' ? !r.paid : activeTab === 'Pagas (3)' ? r.paid : true)

  const th: React.CSSProperties = {
    padding: '11px 16px', fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 600, fontSize: 11, color: '#94A3B8',
    letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap',
  }

  return (
    <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: '20px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303' }}>Obrigações e Guias</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#94A3B8', marginTop: 2 }}>Competência Setembro/2024</div>
          </div>
          <button style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 12,
            color: '#64748B', background: '#F8FAFC', border: '1px solid #E2E8F0',
            borderRadius: 8, padding: '6px 12px', cursor: 'pointer',
          }}>
            Outubro 2024 {I.chevDown}
          </button>
        </div>
        <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid #F1F5F9' }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: activeTab === t ? 700 : 500,
              fontSize: 12.5,
              color: activeTab === t ? '#1D4ED8' : '#64748B',
              background: 'none', border: 'none',
              borderBottom: activeTab === t ? '2px solid #1D4ED8' : '2px solid transparent',
              padding: '8px 14px', cursor: 'pointer', marginBottom: -1,
            }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', overflowX: 'auto', minWidth: 0 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #F1F5F9' }}>
              <th style={{ ...th, paddingLeft: 24 }}>Guia / Tributo</th>
              <th style={th}>Comp.</th>
              <th style={th}>Vencimento</th>
              <th style={th}>Valor</th>
              <th style={th}>Situação</th>
              <th style={{ ...th, textAlign: 'right', paddingRight: 24 }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i} style={{ borderBottom: i < filtered.length - 1 ? '1px solid #F8FAFC' : 'none' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#FAFAFA')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <td style={{ padding: '14px 16px 14px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10, background: row.tagBg, color: row.tagColor, padding: '2px 7px', borderRadius: 5, letterSpacing: '0.04em', flexShrink: 0 }}>{row.tag}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#030303', whiteSpace: 'nowrap' }}>{row.title}</span>
                  </div>
                </td>
                <td style={{ padding: '14px 16px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', whiteSpace: 'nowrap' }}>{row.comp}</td>
                <td style={{ padding: '14px 16px', fontFamily: "'Michroma', monospace", fontSize: 11, color: '#374151', whiteSpace: 'nowrap' }}>{row.venc}</td>
                <td style={{ padding: '14px 16px', fontFamily: "'Michroma', monospace", fontSize: 12, color: '#030303', whiteSpace: 'nowrap' }}>{row.valor}</td>
                <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                  <span style={{ ...pill(row.statusBg, row.statusColor), gap: 5 }}>
                    {row.paid ? I.check('#10B981', 12) : <span style={{ width: 5, height: 5, borderRadius: '50%', background: row.statusColor, display: 'inline-block' }} />}
                    {row.status}
                  </span>
                </td>
                <td style={{ padding: '14px 16px 14px', paddingRight: 24, textAlign: 'right' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    {!row.paid ? (
                      <>
                        <button style={{ width: 28, height: 28, borderRadius: 7, background: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>{I.copy}</button>
                        <button style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11.5, color: '#1D4ED8', background: 'transparent', border: '1px solid rgba(29,78,216,0.25)', borderRadius: 7, padding: '5px 10px', cursor: 'pointer' }}>
                          {I.download} Baixar PDF
                        </button>
                      </>
                    ) : (
                      <button style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11.5, color: '#15803D', background: 'transparent', border: '1px solid rgba(21,128,61,0.25)', borderRadius: 7, padding: '5px 10px', cursor: 'pointer' }}>
                        {I.check('#10B981', 12)} Comprovante
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── Quick Actions ─────────────────────────────────────────────────────────────

function AcoesCard() {
  const [dragging, setDragging] = useState(false)

  const items = [
    { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect width="22" height="22" rx="8" fill="#EFF6FF" /><path d="M11 4l7 3.5v1H4V7.5L11 4z" fill="#1D4ED8" fillOpacity="0.9" /><rect x="5.5" y="9.5" width="2" height="5" rx="0.5" fill="#1D4ED8" fillOpacity="0.7" /><rect x="10" y="9.5" width="2" height="5" rx="0.5" fill="#1D4ED8" fillOpacity="0.7" /><rect x="14.5" y="9.5" width="2" height="5" rx="0.5" fill="#1D4ED8" fillOpacity="0.7" /><rect x="4" y="15.5" width="14" height="1.5" rx="0.75" fill="#1D4ED8" fillOpacity="0.5" /></svg>, title: 'Enviar Extrato Bancário', sub: 'Arraste ou clique · OFX, PDF', accent: '#1D4ED8', special: 'upload' },
    { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect width="22" height="22" rx="8" fill="rgba(161,85,255,0.1)" /><path d="M13 4L7.5 11.5H11L9 18l7-9H12L13 4z" fill="#A155FF" /></svg>, title: 'Emitir Nota Fiscal (NFS-e)', sub: 'Autorizado pela prefeitura', accent: '#A155FF' },
    { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect width="22" height="22" rx="8" fill="rgba(67,193,239,0.1)" /><circle cx="8" cy="9" r="2.5" stroke="#43C1EF" strokeWidth="1.3" /><circle cx="14" cy="9" r="2.5" stroke="#43C1EF" strokeWidth="1.3" /><path d="M4 17c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4" stroke="#43C1EF" strokeWidth="1.3" strokeLinecap="round" /></svg>, title: 'Solicitar Admissão / Férias', sub: 'eSocial integrado', accent: '#43C1EF' },
  ]

  return (
    <div style={card}>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', marginBottom: 16 }}>Ações Rápidas</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((a, i) => (
          <div key={i}
            onDragOver={a.special ? e => { e.preventDefault(); setDragging(true) } : undefined}
            onDragLeave={a.special ? () => setDragging(false) : undefined}
            onDrop={a.special ? e => { e.preventDefault(); setDragging(false) } : undefined}
            style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '11px 14px',
              background: dragging && a.special ? 'rgba(29,78,216,0.04)' : '#F8FAFC',
              border: dragging && a.special ? '1.5px dashed #1D4ED8' : '1px solid #F1F5F9',
              borderRadius: 11, cursor: 'pointer', transition: 'all 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = a.accent + '50' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = dragging && a.special ? '#1D4ED8' : '#F1F5F9' }}
          >
            {a.special ? (
              <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(29,78,216,0.06)', border: '1.5px dashed rgba(29,78,216,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{I.upload}</div>
            ) : (
              <div style={{ flexShrink: 0 }}>{a.icon}</div>
            )}
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#030303' }}>{a.title}</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#94A3B8', marginTop: 1 }}>{a.sub}</div>
            </div>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: a.accent + '14', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {I.arrow(a.accent)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Calendar Card ─────────────────────────────────────────────────────────────

const CAL = [
  { date: '07 Out', label: 'Prazo Envio Extratos', state: 'done' },
  { date: '15 Out', label: 'Fechamento Pró-labore e Folha', state: 'today' },
  { date: '20 Out', label: 'Vencimento Simples Nacional', state: 'amber' },
  { date: '31 Out', label: 'Prazo Limite NF-e Entradas', state: 'upcoming' },
]

function CalendarioCard() {
  const dotColor: Record<string, string> = { done: '#10B981', today: '#1D4ED8', amber: '#F59E0B', upcoming: '#CBD5E1' }
  return (
    <div style={card}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#030303' }}>Rotinas Fiscais</div>
        <span style={pill('#EFF6FF', '#1D4ED8')}>Hoje: 15 Ter</span>
      </div>
      <div style={{ fontFamily: "'Michroma', monospace", fontSize: 10.5, color: '#CBD5E1', letterSpacing: '0.1em', marginBottom: 16 }}>OUTUBRO 2024</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {CAL.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: dotColor[item.state], flexShrink: 0, boxShadow: item.state === 'today' ? '0 0 6px rgba(29,78,216,0.4)' : 'none' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
              <span style={{ fontFamily: "'Michroma', monospace", fontSize: 10.5, color: '#94A3B8', flexShrink: 0 }}>{item.date}</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: item.state === 'today' ? 700 : 500, fontSize: 12.5, color: item.state === 'done' ? '#CBD5E1' : item.state === 'today' ? '#030303' : '#374151', textDecoration: item.state === 'done' ? 'line-through' : 'none' }}>
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Invoice Card ──────────────────────────────────────────────────────────────

function FaturaCard() {
  return (
    <div style={card}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#030303' }}>Fatura Contábil</div>
        <span style={pill('#DCFCE7', '#15803D')}>{I.check('#10B981', 11)} Pago</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
        <span style={{ fontFamily: "'Michroma', monospace", fontSize: 22, color: '#030303' }}>R$ 450,00</span>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#94A3B8' }}>/mês</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
        {I.check('#10B981', 13)}
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B' }}>Pago via PIX no dia 05/10</span>
      </div>
      <button style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: '#1D4ED8', background: '#EFF6FF', border: 'none', borderRadius: 8, padding: '8px 12px', cursor: 'pointer', width: '100%', justifyContent: 'center' }}>
        {I.download} Ver Nota Fiscal do Escritório
      </button>
    </div>
  )
}

// ─── Accountant Card ───────────────────────────────────────────────────────────

function ContadorCard() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #1D4ED8, #A155FF)', padding: 1.5, borderRadius: 17 }}>
      <div style={{ background: '#FFFFFF', borderRadius: 15.5, padding: '20px' }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#030303', marginBottom: 16 }}>Seu Contador Dedicado</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #1D4ED8, #A155FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 14, color: '#fff', flexShrink: 0 }}>CE</div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13.5, color: '#030303' }}>Sheei Digital</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B' }}>CRC-SP · Contadora Responsável</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 4 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 600, color: '#15803D' }}>Online agora</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: '#1D4ED8', background: '#EFF6FF', border: '1px solid rgba(29,78,216,0.15)', borderRadius: 9, padding: '8px 10px', cursor: 'pointer' }}>
            {I.meet} Meet
          </button>
          <a href="https://wa.me/5521993253591?text=Ol%C3%A1!%20Acessei%20o%20HubCont%C3%A1bil." target="_blank" rel="noopener noreferrer"
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: '#fff', background: '#25D366', border: 'none', borderRadius: 9, padding: '8px 10px', cursor: 'pointer', textDecoration: 'none' }}>
            {I.wa} WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── Footer ────────────────────────────────────────────────────────────────────
// Global page footer — same component on every page.

function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        .footer-root {
          background: #FFFFFF;
          border-top: 1px solid #E2E8F0;
          width: 100%;
          box-sizing: border-box;
          padding: 20px 28px;
          flex-shrink: 0;
        }
        .footer-inner {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .footer-brand-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .footer-brand-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: #030303;
          line-height: 1.2;
        }
        .footer-brand-sub {
          font-family: 'Michroma', monospace;
          font-size: 8px;
          color: #94A3B8;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }
        .footer-links {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-link {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 500;
          font-size: 12px;
          color: #64748B;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.15s;
        }
        .footer-link:hover { color: #1D4ED8; }
        .footer-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-radius: 999px;
          padding: 3px 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 11px;
          color: #15803D;
          white-space: nowrap;
        }
        .footer-copy {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 400;
          font-size: 11.5px;
          color: #94A3B8;
          white-space: nowrap;
        }
        /* Tablet: hide nav links, keep brand + right */
        @media (max-width: 767px) {
          .footer-root { padding: 18px 20px; }
          .footer-links { display: none; }
          .footer-inner { justify-content: space-between; }
        }
        /* Mobile: full vertical stack, centered */
        @media (max-width: 479px) {
          .footer-root { padding: 20px 16px; }
          .footer-inner {
            flex-direction: column;
            align-items: center;
            gap: 14px;
            text-align: center;
          }
          .footer-right {
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }
          .footer-copy { text-align: center; }
        }
      `}</style>

      <footer className="footer-root" role="contentinfo">
        <div className="footer-inner">

          {/* Brand mark */}
          <div className="footer-brand">
            <svg width="28" height="22" viewBox="0 0 400 313" fill="none" aria-hidden>
              <path fillRule="evenodd" clipRule="evenodd" fill="#A155FF" d="M238.81,240.28v-101.16c0-37.66-30.82-68.47-68.47-68.47h0c-37.66,0-68.47,30.81-68.47,68.47v169.63s68.47,0,68.47,0c37.66,0,68.47-30.81,68.47-68.47h0Z" />
              <path fillRule="evenodd" clipRule="evenodd" fill="#1D4ED8" d="M398.76,240.28V68.47C398.76,30.81,367.95,0,330.29,0h0c-37.66,0-68.47,30.81-68.47,68.47v171.81c0,37.66,30.82,68.47,68.47,68.47h0c37.66,0,68.47-30.81,68.47-68.47h0Z" />
              <path fillRule="evenodd" clipRule="evenodd" fill="#43C1EF" d="M136.94,308.75v-68.48c0-37.65-30.82-68.47-68.47-68.47h0C30.82,171.81,0,202.63,0,240.28h0c0,37.66,30.82,68.48,68.47,68.48h68.48Z" />
              <path fillRule="evenodd" clipRule="evenodd" fill="#1D4ED8" d="M136.94,240.28v68.48h-35.07v-128.19c20.89,11.76,35.07,34.16,35.07,59.71h0Z" />
            </svg>
            <div className="footer-brand-text">
              <span className="footer-brand-name">HUB<span style={{ fontWeight: 400 }}>Contábil</span></span>
              <span className="footer-brand-sub">Financial</span>
            </div>
          </div>

          {/* Navigation links — hidden on mobile */}
          <nav className="footer-links" aria-label="Links do rodapé">
            <a href="#" className="footer-link">Central de Ajuda</a>
            <a href="#" className="footer-link">Política de Privacidade</a>
            <a href="#" className="footer-link">Termos de Uso</a>
            <a href="#" className="footer-link">Contato</a>
          </nav>

          {/* Right: status badge + copyright */}
          <div className="footer-right">
            <span className="footer-badge">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
              Sistema operacional
            </span>
            <span className="footer-copy">© {year} HubContábil</span>
          </div>

        </div>
      </footer>
    </>
  )
}

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [banner, setBanner] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <style>{`
        .sidebar-root {
          transform: translateX(-100%);
        }
        @media (min-width: 1024px) {
          .sidebar-root {
            transform: translateX(0) !important;
            position: sticky !important;
            top: 0;
            height: 100vh;
          }
          .sidebar-close-btn { display: none !important; }
        }
        @media (max-width: 1023px) {
          .sidebar-root { transform: translateX(-100%); }
          .sidebar-root.open { transform: translateX(0) !important; }
          .sidebar-close-btn { display: flex !important; }
        }
        .hub-kpi-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 640px) {
          .hub-kpi-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
        }
        @media (min-width: 1280px) {
          .hub-kpi-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
        }
        .hub-split {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        @media (min-width: 1024px) {
          .hub-split { flex-direction: row; gap: 28px; align-items: flex-start; }
          .hub-col-main { flex: 1; min-width: 0; }
          .hub-col-side { width: 300px; flex-shrink: 0; }
        }
        @media (min-width: 1280px) {
          .hub-col-side { width: 320px; }
        }
      `}</style>

      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F5F7FB', overflowX: 'hidden' }}>
        <Sidebar active="dashboard" mobileOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowX: 'hidden' }}>
          <Topbar onOpenMenu={() => setMenuOpen(true)} />

          <main style={{ flex: 1, padding: '24px 20px' }}>
            <div style={{ maxWidth: 1440, width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>

              {banner && <Banner onClose={() => setBanner(false)} />}

              <div className="hub-kpi-grid">
                <KPITributos />
                <KPIVencimento />
                <KPICertificado />
                <KPINotas />
              </div>

              <div className="hub-split">
                <div className="hub-col-main" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <ObrigacoesCard />
                  <AcoesCard />
                </div>
                <div className="hub-col-side" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <CalendarioCard />
                  <FaturaCard />
                  <ContadorCard />
                </div>
              </div>

            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
