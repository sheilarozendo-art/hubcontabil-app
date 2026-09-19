"use client";

import { useState } from "react"
import { RouterProvider, createHashRouter, Link as RouterLink, useLocation, Outlet } from "react-router"
import NotasPageFull from "@/hubcontabil-app/src_app/notas/page"
import FolhaPageFull from "@/hubcontabil-app/src_app/folhas/page"

// Link shim — same API as next/link (href prop), backed by react-router
function Link({ href, children, style, className, onClick }: {
  href: string
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  onClick?: () => void
}) {
  return <RouterLink to={href} style={style} className={className} onClick={onClick}>{children}</RouterLink>
}

// Maps the current pathname to page metadata for Topbar
function usePageMeta() {
  const { pathname } = useLocation()
  const map: Record<string, { title: string; subtitle: string }> = {
    '/':           { title: 'Dashboard Geral',             subtitle: 'Competência: Setembro / 2024' },
    '/tributos':   { title: 'Tributos & Guias Fiscais',    subtitle: 'Gestão de guias, apurações e comprovantes' },
    '/documentos': { title: 'Cofre de Documentos & GED',   subtitle: 'Armazenamento seguro em nuvem com conformidade LGPD e ICP-Brasil' },
    '/notas':      { title: 'Notas Fiscais',               subtitle: 'Emissão, consulta e gestão de NFS-e' },
    '/folha':      { title: 'Folha de Pagamento',          subtitle: 'eSocial, pró-labore e férias' },
    '/configuracoes':  { title: 'Configurações White-label',  subtitle: 'Configure a identidade visual da sua marca e canais oficiais' },
    '/solicitacoes':   { title: 'Central de Solicitações',   subtitle: 'Abra demandas e acompanhe o fluxo de atendimento da sua contabilidade' },
  }
  return map[pathname] ?? map['/']
}

// ─── Logo ──────────────────────────────────────────────────────────────────────

function HubContabilLogo({ collapsed = false }: { collapsed?: boolean }) {
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

// ─── Icons ─────────────────────────────────────────────────────────────────────

const I = {
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

// ─── Nav items ─────────────────────────────────────────────────────────────────

function NavIcon({ id }: { id: string }) {
  const paths: Record<string, React.ReactElement> = {
    dashboard: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="12" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="12" width="7" height="7" rx="1.5" />
        <rect x="12" y="12" width="7" height="7" rx="1.5" />
      </>
    ),
    guias: (
      <>
        <path d="M4 2h10v14l-2-1.5-1.5 1.5L9 14.5 7.5 16 6 14.5 4 16V2z" />
        <path d="M7 7h4M7 10h2" strokeLinecap="round" />
      </>
    ),
    notas: (
      <>
        <rect x="3" y="2" width="12" height="16" rx="2" />
        <path d="M7 7h5M7 11h3" strokeLinecap="round" />
      </>
    ),
    folha: (
      <>
        <circle cx="10" cy="7" r="3" />
        <path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
      </>
    ),
    docs: (
      <>
        <path d="M4 2h10l4 4v14a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" />
        <path d="M14 2v4h4" />
      </>
    ),
    config: (
      <>
        <circle cx="10" cy="10" r="3" />
        <path
          d="M10 2v2M10 16v2M2 10h2M16 10h2M4.9 4.9l1.4 1.4M13.7 13.7l1.4 1.4M4.9 15.1l1.4-1.4M13.7 6.3l1.4-1.4"
          strokeLinecap="round"
        />
      </>
    ),
    solicitacoes: (
      <>
        <path d="M4 4h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
        <path d="M7 9h6M7 12h4" strokeLinecap="round" />
      </>
    ),
  }
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      {paths[id]}
    </svg>
  )
}

const NAV = [
  { id: "dashboard",    label: "Dashboard",            href: "/" },
  { id: "guias",        label: "Guias & Tributos",     href: "/tributos" },
  { id: "notas",        label: "Notas Fiscais",        href: "/notas" },
  { id: "folha",        label: "Folha de Pagamento",   href: "/folha" },
  { id: "docs",         label: "Documentos",           href: "/documentos" },
  { id: "solicitacoes", label: "Solicitações",         href: "/solicitacoes" },
]

function useActiveNav() {
  const { pathname } = useLocation()
  if (pathname === "/") return "dashboard"
  const match = NAV.find(n => n.href !== "/" && pathname.startsWith(n.href))
  return match?.id ?? "dashboard"
}

// ─── Sidebar ───────────────────────────────────────────────────────────────────

function Sidebar({ mobileOpen, onClose }: { mobileOpen: boolean; onClose: () => void }) {
  const active = useActiveNav()
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(3,3,3,0.35)",
            zIndex: 39,
            backdropFilter: "blur(2px)",
          }}
        />
      )}

      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: 264,
          background: "#FFFFFF",
          borderRight: "1px solid #E2E8F0",
          display: "flex",
          flexDirection: "column",
          zIndex: 40,
          transition: "transform 0.22s ease",
        }}
        className={`sidebar-root${mobileOpen ? " open" : ""}`}
      >
        {/* Logo area */}
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            borderBottom: "1px solid #F1F5F9",
            flexShrink: 0,
          }}
        >
          <HubContabilLogo />
          <button
            onClick={onClose}
            className="sidebar-close-btn"
            style={{
              marginLeft: "auto",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#94A3B8",
              padding: 4,
            }}
          >
            {I.x}
          </button>
        </div>

        {/* Company selector */}
        <div style={{ padding: "14px 14px 0" }}>
          <button
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: 10,
              padding: "9px 12px",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: "linear-gradient(135deg, #1D4ED8, #A155FF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: 11,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              TF
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 12.5,
                  color: "#030303",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Tech Founders Ltda
              </div>
              <div
                style={{
                  fontFamily: "'Michroma', monospace",
                  fontSize: "clamp(7.5px, 1.1vw, 9.5px)",
                  color: "#94A3B8",
                  letterSpacing: "0.05em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                CNPJ 12.345.678/0001-90
              </div>
            </div>
            {I.chevDown}
          </button>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "8px 14px", overflowY: "auto" }}>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 10,
              color: "#CBD5E1",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 8px 6px",
            }}
          >
            Menu
          </div>
          {NAV.map((item) => {
            const isActive = item.id === active
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: isActive ? "#EFF6FF" : "transparent",
                  borderRadius: 9,
                  padding: "9px 10px",
                  cursor: "pointer",
                  color: isActive ? "#1D4ED8" : "#64748B",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: 13.5,
                  marginBottom: 2,
                  transition: "all 0.12s",
                  textDecoration: "none",
                }}
              >
                <NavIcon id={item.id} />
                {item.label}
                {isActive && (
                  <div
                    style={{
                      marginLeft: "auto",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#1D4ED8",
                    }}
                  />
                )}
              </Link>
            )
          })}

          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 10,
              color: "#CBD5E1",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "18px 8px 6px",
            }}
          >
            Conta
          </div>
          <Link
            href="/configuracoes"
            onClick={onClose}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "transparent",
              borderRadius: 9,
              padding: "9px 10px",
              cursor: "pointer",
              color: "#64748B",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: 13.5,
              textDecoration: "none",
            }}
          >
            <NavIcon id="config" />
            Configurações
          </Link>
        </nav>

        {/* User footer */}
        <Link
          href="/login"
          style={{
            display: "block",
            padding: "12px 14px",
            borderTop: "1px solid #F1F5F9",
            flexShrink: 0,
            textDecoration: "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1D4ED8, #A155FF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              JS
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  color: "#030303",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                João da Silva
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 11,
                  color: "#94A3B8",
                }}
              >
                Sócio-Administrador
              </div>
            </div>
          </div>
        </Link>
      </aside>
    </>
  )
}

// ─── Topbar ────────────────────────────────────────────────────────────────────
// Global, fully responsive — same component on every page, no hidden elements at any breakpoint.

function Topbar({ onOpenMenu }: { onOpenMenu: () => void }) {
  const { title, subtitle } = usePageMeta()
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
        <button
          className="topbar-hamburger"
          onClick={onOpenMenu}
          aria-label="Abrir menu"
        >
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
          <div
            className="topbar-avatar"
            role="button"
            aria-label="Perfil de João da Silva"
          >
            JS
          </div>
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

function Banner({
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

// ─── Sparkline ─────────────────────────────────────────────────────────────────

function SparklineBars() {
  const bars = [6, 9, 7, 11, 8, 14, 10, 16, 12, 18]
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 3,
        height: 24,
        marginTop: 12,
      }}
    >
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: h,
            borderRadius: 3,
            background:
              i === bars.length - 1
                ? "#1D4ED8"
                : i >= bars.length - 3
                  ? "#A155FF"
                  : "#E2E8F0",
          }}
        />
      ))}
    </div>
  )
}

// ─── KPI Cards ─────────────────────────────────────────────────────────────────

const card: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid #E2E8F0",
  borderRadius: 16,
  padding: "20px",
  boxShadow: "0 2px 12px rgba(3,3,3,0.04)",
}

const pill = (bg: string, color: string): React.CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontWeight: 600,
  fontSize: 11,
  background: bg,
  color,
  padding: "3px 9px",
  borderRadius: 999,
  whiteSpace: "nowrap",
  flexShrink: 0,
})

const lbl: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontWeight: 600,
  fontSize: 12,
  color: "#64748B",
}

const mono = (size = 22): React.CSSProperties => ({
  fontFamily: "'Michroma', monospace",
  fontSize: size,
  color: "#030303",
  letterSpacing: "-0.01em",
  marginBottom: 4,
})

function KPITributos() {
  return (
    <div style={{ ...card }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 14,
        }}
      >
        <span style={lbl}>Total de Tributos</span>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 9,
            background: "rgba(29,78,216,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 1h10v12l-2-1.5-1.5 1.5L7 11.5 5.5 13 4 11.5 2 13V1z"
              stroke="#1D4ED8"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <path
              d="M4.5 5h5M4.5 7.5h3"
              stroke="#1D4ED8"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div style={mono(22)}>R$ 4.820,50</div>
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 12,
          color: "#64748B",
          marginBottom: 12,
        }}
      >
        3 de 4 guias pagas · Outubro
      </div>
      <div
        style={{
          background: "#F1F5F9",
          borderRadius: 999,
          height: 5,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "75%",
            height: "100%",
            background: "#1D4ED8",
            borderRadius: 999,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 4,
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 10,
            color: "#CBD5E1",
          }}
        >
          0%
        </span>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 10,
            color: "#1D4ED8",
            fontWeight: 700,
          }}
        >
          75%
        </span>
      </div>
    </div>
  )
}

function KPIVencimento() {
  return (
    <div style={{ ...card }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 14,
        }}
      >
        <span style={lbl}>Próximo Vencimento</span>
        <span style={pill("#FEF3C7", "#D97706")}>A Vencer</span>
      </div>
      <div style={mono(26)}>20 Out</div>
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 12,
          color: "#64748B",
          marginBottom: 12,
        }}
      >
        DAS · Simples Nacional
      </div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "#EFF6FF",
          borderRadius: 8,
          padding: "5px 12px",
        }}
      >
        <span
          style={{
            fontFamily: "'Michroma', monospace",
            fontSize: 13,
            color: "#1D4ED8",
          }}
        >
          R$ 1.240,00
        </span>
      </div>
    </div>
  )
}

function KPICertificado() {
  return (
    <div style={{ ...card }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 14,
        }}
      >
        <span style={lbl}>Certificado Digital</span>
        {I.shield}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          marginBottom: 5,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#43C1EF",
            boxShadow: "0 0 6px rgba(67,193,239,0.7)",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: "#030303",
          }}
        >
          Ativo & Seguro
        </span>
      </div>
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 12,
          color: "#64748B",
          marginBottom: 2,
        }}
      >
        Validade:{" "}
        <span
          style={{
            fontFamily: "'Michroma', monospace",
            fontSize: 11,
            color: "#030303",
          }}
        >
          18/11/2024
        </span>
      </div>
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 11,
          color: "#94A3B8",
          marginBottom: 12,
        }}
      >
        e-CNPJ A1 · ICP-Brasil
      </div>
      <div
        style={{
          background: "#F1F5F9",
          borderRadius: 999,
          height: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "88%",
            height: "100%",
            background: "linear-gradient(90deg, #43C1EF, #1D4ED8)",
            borderRadius: 999,
          }}
        />
      </div>
    </div>
  )
}

function KPINotas() {
  return (
    <div style={{ ...card }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 14,
        }}
      >
        <span style={lbl}>Notas Fiscais</span>
        <span style={pill("#DCFCE7", "#15803D")}>+12% vs ant.</span>
      </div>
      <div style={mono(22)}>28 Emitidas</div>
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 12,
          color: "#64748B",
        }}
      >
        Outubro 2024
      </div>
      <SparklineBars />
    </div>
  )
}

// ─── Obligations Table ─────────────────────────────────────────────────────────

const TABS = ["Todas", "Pendentes (1)", "Pagas (3)"]

const ROWS = [
  {
    tag: "DAS",
    tagColor: "#1D4ED8",
    tagBg: "rgba(29,78,216,0.08)",
    title: "DAS - Simples Nacional",
    comp: "09/2024",
    venc: "20/10/2024",
    valor: "R$ 1.240,00",
    status: "Aguardando",
    statusColor: "#D97706",
    statusBg: "#FEF3C7",
    paid: false,
  },
  {
    tag: "FGTS",
    tagColor: "#0891B2",
    tagBg: "rgba(8,145,178,0.08)",
    title: "FGTS Digital",
    comp: "09/2024",
    venc: "07/10/2024",
    valor: "R$ 680,00",
    status: "Pago",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
    paid: true,
  },
  {
    tag: "GPS",
    tagColor: "#7C3AED",
    tagBg: "rgba(124,58,237,0.08)",
    title: "Pró-Labore & GPS",
    comp: "09/2024",
    venc: "15/10/2024",
    valor: "R$ 2.900,50",
    status: "Pago",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
    paid: true,
  },
]

function ObrigacoesCard() {
  const [activeTab, setActiveTab] = useState("Todas")
  const filtered = ROWS.filter((r) =>
    activeTab === "Pendentes (1)"
      ? !r.paid
      : activeTab === "Pagas (3)"
        ? r.paid
        : true,
  )

  const th: React.CSSProperties = {
    padding: "11px 16px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 600,
    fontSize: 11,
    color: "#94A3B8",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  }

  return (
    <div style={{ ...card, padding: 0, overflow: "hidden" }}>
      <div style={{ padding: "20px 24px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: "#030303",
              }}
            >
              Obrigações e Guias
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 12,
                color: "#94A3B8",
                marginTop: 2,
              }}
            >
              Competência Setembro/2024
            </div>
          </div>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              color: "#64748B",
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: 8,
              padding: "6px 12px",
              cursor: "pointer",
            }}
          >
            Outubro 2024 {I.chevDown}
          </button>
        </div>
        <div
          style={{ display: "flex", gap: 0, borderBottom: "1px solid #F1F5F9" }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: activeTab === t ? 700 : 500,
                fontSize: 12.5,
                color: activeTab === t ? "#1D4ED8" : "#64748B",
                background: "none",
                border: "none",
                borderBottom:
                  activeTab === t
                    ? "2px solid #1D4ED8"
                    : "2px solid transparent",
                padding: "8px 14px",
                cursor: "pointer",
                marginBottom: -1,
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ width: "100%", overflowX: "auto", minWidth: 0 }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#F8FAFC",
                borderBottom: "1px solid #F1F5F9",
              }}
            >
              <th style={{ ...th, paddingLeft: 24 }}>Guia / Tributo</th>
              <th style={th}>Comp.</th>
              <th style={th}>Vencimento</th>
              <th style={th}>Valor</th>
              <th style={th}>Situação</th>
              <th style={{ ...th, textAlign: "right", paddingRight: 24 }}>
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr
                key={i}
                style={{
                  borderBottom:
                    i < filtered.length - 1 ? "1px solid #F8FAFC" : "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#FAFAFA")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <td style={{ padding: "14px 16px 14px 24px" }}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 9 }}
                  >
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: 10,
                        background: row.tagBg,
                        color: row.tagColor,
                        padding: "2px 7px",
                        borderRadius: 5,
                        letterSpacing: "0.04em",
                        flexShrink: 0,
                      }}
                    >
                      {row.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: 13,
                        color: "#030303",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.title}
                    </span>
                  </div>
                </td>
                <td
                  style={{
                    padding: "14px 16px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 12,
                    color: "#64748B",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.comp}
                </td>
                <td
                  style={{
                    padding: "14px 16px",
                    fontFamily: "'Michroma', monospace",
                    fontSize: 11,
                    color: "#374151",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.venc}
                </td>
                <td
                  style={{
                    padding: "14px 16px",
                    fontFamily: "'Michroma', monospace",
                    fontSize: 12,
                    color: "#030303",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.valor}
                </td>
                <td style={{ padding: "14px 16px", whiteSpace: "nowrap" }}>
                  <span
                    style={{ ...pill(row.statusBg, row.statusColor), gap: 5 }}
                  >
                    {row.paid ? (
                      I.check("#10B981", 12)
                    ) : (
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: row.statusColor,
                          display: "inline-block",
                        }}
                      />
                    )}
                    {row.status}
                  </span>
                </td>
                <td
                  style={{
                    padding: "14px 16px 14px",
                    paddingRight: 24,
                    textAlign: "right",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    {!row.paid ? (
                      <>
                        <button
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: 7,
                            background: "#F8FAFC",
                            border: "1px solid #E2E8F0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                        >
                          {I.copy}
                        </button>
                        <button
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: 11.5,
                            color: "#1D4ED8",
                            background: "transparent",
                            border: "1px solid rgba(29,78,216,0.25)",
                            borderRadius: 7,
                            padding: "5px 10px",
                            cursor: "pointer",
                          }}
                        >
                          {I.download} Baixar PDF
                        </button>
                      </>
                    ) : (
                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: 11.5,
                          color: "#15803D",
                          background: "transparent",
                          border: "1px solid rgba(21,128,61,0.25)",
                          borderRadius: 7,
                          padding: "5px 10px",
                          cursor: "pointer",
                        }}
                      >
                        {I.check("#10B981", 12)} Comprovante
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
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect width="22" height="22" rx="8" fill="#EFF6FF" />
          <path
            d="M11 4l7 3.5v1H4V7.5L11 4z"
            fill="#1D4ED8"
            fillOpacity="0.9"
          />
          <rect
            x="5.5"
            y="9.5"
            width="2"
            height="5"
            rx="0.5"
            fill="#1D4ED8"
            fillOpacity="0.7"
          />
          <rect
            x="10"
            y="9.5"
            width="2"
            height="5"
            rx="0.5"
            fill="#1D4ED8"
            fillOpacity="0.7"
          />
          <rect
            x="14.5"
            y="9.5"
            width="2"
            height="5"
            rx="0.5"
            fill="#1D4ED8"
            fillOpacity="0.7"
          />
          <rect
            x="4"
            y="15.5"
            width="14"
            height="1.5"
            rx="0.75"
            fill="#1D4ED8"
            fillOpacity="0.5"
          />
        </svg>
      ),
      title: "Enviar Extrato Bancário",
      sub: "Arraste ou clique · OFX, PDF",
      accent: "#1D4ED8",
      special: "upload",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect width="22" height="22" rx="8" fill="rgba(161,85,255,0.1)" />
          <path d="M13 4L7.5 11.5H11L9 18l7-9H12L13 4z" fill="#A155FF" />
        </svg>
      ),
      title: "Emitir Nota Fiscal (NFS-e)",
      sub: "Autorizado pela prefeitura",
      accent: "#A155FF",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect width="22" height="22" rx="8" fill="rgba(67,193,239,0.1)" />
          <circle cx="8" cy="9" r="2.5" stroke="#43C1EF" strokeWidth="1.3" />
          <circle cx="14" cy="9" r="2.5" stroke="#43C1EF" strokeWidth="1.3" />
          <path
            d="M4 17c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4"
            stroke="#43C1EF"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Solicitar Admissão / Férias",
      sub: "eSocial integrado",
      accent: "#43C1EF",
    },
  ]

  return (
    <div style={card}>
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: 15,
          color: "#030303",
          marginBottom: 16,
        }}
      >
        Ações Rápidas
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((a, i) => (
          <div
            key={i}
            onDragOver={
              a.special
                ? (e) => {
                    e.preventDefault()
                    setDragging(true)
                  }
                : undefined
            }
            onDragLeave={a.special ? () => setDragging(false) : undefined}
            onDrop={
              a.special
                ? (e) => {
                    e.preventDefault()
                    setDragging(false)
                  }
                : undefined
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "11px 14px",
              background:
                dragging && a.special ? "rgba(29,78,216,0.04)" : "#F8FAFC",
              border:
                dragging && a.special
                  ? "1.5px dashed #1D4ED8"
                  : "1px solid #F1F5F9",
              borderRadius: 11,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = a.accent + "50"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                dragging && a.special ? "#1D4ED8" : "#F1F5F9"
            }}
          >
            {a.special ? (
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 9,
                  background: "rgba(29,78,216,0.06)",
                  border: "1.5px dashed rgba(29,78,216,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {I.upload}
              </div>
            ) : (
              <div style={{ flexShrink: 0 }}>{a.icon}</div>
            )}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  color: "#030303",
                }}
              >
                {a.title}
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 11.5,
                  color: "#94A3B8",
                  marginTop: 1,
                }}
              >
                {a.sub}
              </div>
            </div>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: 8,
                background: a.accent + "14",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
  { date: "07 Out", label: "Prazo Envio Extratos", state: "done" },
  { date: "15 Out", label: "Fechamento Pró-labore e Folha", state: "today" },
  { date: "20 Out", label: "Vencimento Simples Nacional", state: "amber" },
  { date: "31 Out", label: "Prazo Limite NF-e Entradas", state: "upcoming" },
]

function CalendarioCard() {
  const dotColor: Record<string, string> = {
    done: "#10B981",
    today: "#1D4ED8",
    amber: "#F59E0B",
    upcoming: "#CBD5E1",
  }
  return (
    <div style={card}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: "#030303",
          }}
        >
          Rotinas Fiscais
        </div>
        <span style={pill("#EFF6FF", "#1D4ED8")}>Hoje: 15 Ter</span>
      </div>
      <div
        style={{
          fontFamily: "'Michroma', monospace",
          fontSize: 10.5,
          color: "#CBD5E1",
          letterSpacing: "0.1em",
          marginBottom: 16,
        }}
      >
        OUTUBRO 2024
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {CAL.map((item, i) => (
          <div
            key={i}
            style={{ display: "flex", gap: 12, alignItems: "center" }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: dotColor[item.state],
                flexShrink: 0,
                boxShadow:
                  item.state === "today"
                    ? "0 0 6px rgba(29,78,216,0.4)"
                    : "none",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: "'Michroma', monospace",
                  fontSize: 10.5,
                  color: "#94A3B8",
                  flexShrink: 0,
                }}
              >
                {item.date}
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: item.state === "today" ? 700 : 500,
                  fontSize: 12.5,
                  color:
                    item.state === "done"
                      ? "#CBD5E1"
                      : item.state === "today"
                        ? "#030303"
                        : "#374151",
                  textDecoration:
                    item.state === "done" ? "line-through" : "none",
                }}
              >
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: "#030303",
          }}
        >
          Fatura Contábil
        </div>
        <span style={pill("#DCFCE7", "#15803D")}>
          {I.check("#10B981", 11)} Pago
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 4,
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontFamily: "'Michroma', monospace",
            fontSize: 22,
            color: "#030303",
          }}
        >
          R$ 450,00
        </span>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 12,
            color: "#94A3B8",
          }}
        >
          /mês
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 16,
        }}
      >
        {I.check("#10B981", 13)}
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 12,
            color: "#64748B",
          }}
        >
          Pago via PIX no dia 05/10
        </span>
      </div>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: 12,
          color: "#1D4ED8",
          background: "#EFF6FF",
          border: "none",
          borderRadius: 8,
          padding: "8px 12px",
          cursor: "pointer",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {I.download} Ver Nota Fiscal do Escritório
      </button>
    </div>
  )
}

// ─── Accountant Card ───────────────────────────────────────────────────────────

function ContadorCard() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1D4ED8, #A155FF)",
        padding: 1.5,
        borderRadius: 17,
      }}
    >
      <div
        style={{ background: "#FFFFFF", borderRadius: 15.5, padding: "20px" }}
      >
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: "#030303",
            marginBottom: 16,
          }}
        >
          Seu Contador Dedicado
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1D4ED8, #A155FF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 14,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            CE
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 13.5,
                color: "#030303",
              }}
            >
              Carlos Eduardo
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 11.5,
                color: "#64748B",
              }}
            >
              CRC-SP · Contador Responsável
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                marginTop: 4,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22C55E",
                }}
              />
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#15803D",
                }}
              >
                Online agora
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: 12,
              color: "#1D4ED8",
              background: "#EFF6FF",
              border: "1px solid rgba(29,78,216,0.15)",
              borderRadius: 9,
              padding: "8px 10px",
              cursor: "pointer",
            }}
          >
            {I.meet} Meet
          </button>
          <a
            href="https://wa.me/5521993253591?text=Ol%C3%A1!%20Acessei%20o%20HubCont%C3%A1bil."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: 12,
              color: "#fff",
              background: "#25D366",
              border: "none",
              borderRadius: 9,
              padding: "8px 10px",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            {I.wa} WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── Documentos Page ───────────────────────────────────────────────────────────

const PASTAS = [
  { id: 'fiscal',     titulo: 'Fiscal & Tributário',        qtd: '148 arquivos', ultimo: 'DAS_092024.pdf',                    cor: '#1D4ED8', bg: 'rgba(29,78,216,0.08)' },
  { id: 'dp',         titulo: 'Departamento Pessoal',        qtd: '34 arquivos',  ultimo: 'Folha_Set2024.pdf',                 cor: '#A155FF', bg: 'rgba(161,85,255,0.08)' },
  { id: 'contabil',   titulo: 'Contábil & Bancário',         qtd: '82 arquivos',  ultimo: 'Extrato_Itau_Set.ofx',              cor: '#0284C7', bg: 'rgba(2,132,199,0.08)' },
  { id: 'societario', titulo: 'Societário & Licenças',       qtd: '12 arquivos',  ultimo: 'Contrato_Social_Consolidado.pdf',   cor: '#059669', bg: 'rgba(5,150,105,0.08)' },
]

const ARQUIVOS = [
  { id: 1, nome: 'Extrato_Bancario_Inter_Setembro.pdf',   categoria: 'Contábil',   por: 'Sheila Rozendo (Você)',       data: 'Hoje às 09:12',  tam: '1.4 MB', fmt: 'PDF' },
  { id: 2, nome: 'Lote_NFe_Entradas_Setembro.xml',        categoria: 'Fiscal',     por: 'Sheila Rozendo (Você)',       data: 'Ontem às 16:45', tam: '3.8 MB', fmt: 'XML' },
  { id: 3, nome: 'Balancete_Semestral_Assinado.pdf',      categoria: 'Contábil',   por: 'Carlos Eduardo (Contador)',   data: '02 Out 2024',    tam: '4.2 MB', fmt: 'PDF' },
  { id: 4, nome: 'Cartao_CNPJ_Atualizado.pdf',            categoria: 'Societário', por: 'Carlos Eduardo (Contador)',   data: '15 Set 2024',    tam: '520 KB', fmt: 'PDF' },
]

function FolderIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 5a2 2 0 012-2h3.586a1 1 0 01.707.293L9.707 4.707A1 1 0 0010.414 5H16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7s2-4 6-4 6 4 6 4-2 4-6 4-6-4-6-4z" stroke="#64748B" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="7" cy="7" r="1.5" stroke="#64748B" strokeWidth="1.3" />
    </svg>
  )
}

function UploadCloudIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M16 16l-4-4-4 4M12 12v9" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DocumentosPage() {
  const [filtro, setFiltro] = useState('todos')
  const [dragging, setDragging] = useState(false)
  const [bannerOpen, setBannerOpen] = useState(true)

  const arquivos = ARQUIVOS.filter(a =>
    filtro === 'cliente' ? a.por.includes('Você') :
    filtro === 'contador' ? a.por.includes('Contador') : true
  )

  const th: React.CSSProperties = {
    padding: '12px 16px',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 600, fontSize: 11, color: '#94A3B8',
    letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap',
    background: '#F8FAFC',
  }

  const FILTROS = [
    { id: 'todos', label: 'Todos os Arquivos' },
    { id: 'cliente', label: 'Enviados por Mim' },
    { id: 'contador', label: 'Enviados pelo Escritório' },
  ]

  return (
    <>

            {/* Cert banner */}
            {bannerOpen && (
              <Banner
                variant="warning"
                icon={
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L3 5v5c0 4.1 3 7.7 7 8.9C14 18.7 17 15.1 17 11V5l-7-3z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M10 8v3M10 13h.01" stroke="#D97706" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                }
                title={<>Certificado Digital e-CNPJ A1 — <span style={{ fontFamily: "'Michroma', monospace" }}>expira em 18 dias!</span></>}
                body="Titular: Tech Founders Ltda  •  Emissor: Certisign AC  •  Validade até 18/11/2024"
                ctaLabel="Upload Novo Certificado (.pfx)"
                onClose={() => setBannerOpen(false)}
              />
            )}

            {/* Folder cards */}
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', marginBottom: 14 }}>
                Pastas Organizacionais do Escritório
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                {PASTAS.map(p => (
                  <div key={p.id}
                    style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '20px', cursor: 'pointer', boxShadow: '0 2px 12px rgba(3,3,3,0.04)', transition: 'all 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = p.cor }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = '#E2E8F0' }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                      <FolderIcon color={p.cor} />
                    </div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#030303' }}>{p.titulo}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 3 }}>{p.qtd}</div>
                    <div style={{ borderTop: '1px solid #F1F5F9', marginTop: 14, paddingTop: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: '#94A3B8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Último: {p.ultimo}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Drag & Drop upload */}
            <div
              onDragOver={e => { e.preventDefault(); setDragging(true) }}
              onDragLeave={() => setDragging(false)}
              onDrop={e => { e.preventDefault(); setDragging(false) }}
              style={{
                background: dragging ? 'rgba(29,78,216,0.04)' : '#FFFFFF',
                border: `2px dashed ${dragging ? '#1D4ED8' : '#CBD5E1'}`,
                borderRadius: 16, padding: '32px 20px', textAlign: 'center',
                cursor: 'pointer', transition: 'all 0.15s',
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <UploadCloudIcon />
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14.5, color: '#030303' }}>
                Arraste seus extratos bancários, recibos ou contratos aqui
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 4 }}>
                Suporta arquivos OFX, PDF, XML e ZIP de até 50 MB
              </div>
              <button style={{ marginTop: 16, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: '#1D4ED8', background: '#EFF6FF', border: '1px solid rgba(29,78,216,0.18)', borderRadius: 8, padding: '8px 18px', cursor: 'pointer' }}>
                Selecionar arquivos do computador
              </button>
            </div>

            {/* Recent files table */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(3,3,3,0.04)' }}>

              <div style={{ padding: '18px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, borderBottom: '1px solid #F1F5F9' }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303' }}>
                  Arquivos Recentes no Cofre
                </div>
                <div style={{ display: 'flex', gap: 4, overflowX: 'auto', flexShrink: 0 }}>
                  {FILTROS.map(f => (
                    <button key={f.id} onClick={() => setFiltro(f.id)} style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: filtro === f.id ? 700 : 500,
                      fontSize: 12, color: filtro === f.id ? '#1D4ED8' : '#64748B',
                      background: filtro === f.id ? '#EFF6FF' : 'transparent',
                      border: 'none', borderRadius: 8, padding: '7px 12px', cursor: 'pointer', whiteSpace: 'nowrap',
                    }}>
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ width: '100%', overflowX: 'auto', minWidth: 0, WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
                <table style={{ width: '100%', minWidth: 680, borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <th style={{ ...th, paddingLeft: 24 }}>Nome do Documento</th>
                      <th style={th}>Pasta</th>
                      <th style={th}>Enviado Por</th>
                      <th style={th}>Data</th>
                      <th style={th}>Tamanho</th>
                      <th style={{ ...th, textAlign: 'right', paddingRight: 24 }}>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arquivos.map((arq, i) => (
                      <tr key={arq.id}
                        style={{ borderBottom: i < arquivos.length - 1 ? '1px solid #F8FAFC' : 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#FAFAFA')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        <td style={{ padding: '14px 16px 14px 24px', whiteSpace: 'nowrap' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                            <span style={{
                              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10,
                              background: arq.fmt === 'PDF' ? 'rgba(239,68,68,0.08)' : 'rgba(2,132,199,0.08)',
                              color: arq.fmt === 'PDF' ? '#DC2626' : '#0284C7',
                              padding: '2px 6px', borderRadius: 5, flexShrink: 0,
                            }}>{arq.fmt}</span>
                            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#030303', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 260 }}>{arq.nome}</span>
                          </div>
                        </td>
                        <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                          <span style={{ background: '#F1F5F9', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11, color: '#64748B', padding: '3px 8px', borderRadius: 6 }}>{arq.categoria}</span>
                        </td>
                        <td style={{ padding: '14px 16px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 12, color: '#030303', whiteSpace: 'nowrap' }}>{arq.por}</td>
                        <td style={{ padding: '14px 16px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', whiteSpace: 'nowrap' }}>{arq.data}</td>
                        <td style={{ padding: '14px 16px', fontFamily: "'Michroma', monospace", fontSize: 11, color: '#64748B', whiteSpace: 'nowrap' }}>{arq.tam}</td>
                        <td style={{ padding: '14px 16px 14px 0', paddingRight: 24, textAlign: 'right', whiteSpace: 'nowrap' }}>
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                            <button title="Visualizar" style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid #E2E8F0', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                              <EyeIcon />
                            </button>
                            <button title="Baixar Arquivo" style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(29,78,216,0.2)', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                              {I.download}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

    </>
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
            <svg
              width="28"
              height="22"
              viewBox="0 0 400 313"
              fill="none"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#A155FF"
                d="M238.81,240.28v-101.16c0-37.66-30.82-68.47-68.47-68.47h0c-37.66,0-68.47,30.81-68.47,68.47v169.63s68.47,0,68.47,0c37.66,0,68.47-30.81,68.47-68.47h0Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#1D4ED8"
                d="M398.76,240.28V68.47C398.76,30.81,367.95,0,330.29,0h0c-37.66,0-68.47,30.81-68.47,68.47v171.81c0,37.66,30.82,68.47,68.47,68.47h0c37.66,0,68.47-30.81,68.47-68.47h0Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#43C1EF"
                d="M136.94,308.75v-68.48c0-37.65-30.82-68.47-68.47-68.47h0C30.82,171.81,0,202.63,0,240.28h0c0,37.66,30.82,68.48,68.47,68.48h68.48Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#1D4ED8"
                d="M136.94,240.28v68.48h-35.07v-128.19c20.89,11.76,35.07,34.16,35.07,59.71h0Z"
              />
            </svg>
            <div className="footer-brand-text">
              <span className="footer-brand-name">
                HUB<span style={{ fontWeight: 400 }}>Contábil</span>
              </span>
              <span className="footer-brand-sub">Financial</span>
            </div>
          </div>

          {/* Navigation links — hidden on mobile */}
          <nav className="footer-links" aria-label="Links do rodapé">
            <a href="#" className="footer-link">
              Central de Ajuda
            </a>
            <a href="#" className="footer-link">
              Política de Privacidade
            </a>
            <a href="#" className="footer-link">
              Termos de Uso
            </a>
            <a href="#" className="footer-link">
              Contato
            </a>
          </nav>

          {/* Right: status badge + copyright */}
          <div className="footer-right">
            <span className="footer-badge">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22C55E",
                  display: "inline-block",
                }}
              />
              Sistema operacional
            </span>
            <span className="footer-copy">© {year} HubContábil</span>
          </div>
        </div>
      </footer>
    </>
  )
}

// ─── Tributos Page ─────────────────────────────────────────────────────────────

const TRIBUTOS_DATA = [
  {
    id: 1,
    tag: "DAS",
    tagColor: "#1D4ED8",
    tagBg: "rgba(29,78,216,0.08)",
    titulo: "DAS - Simples Nacional",
    competencia: "09/2024",
    vencimento: "20/10/2024",
    valor: "R$ 1.240,00",
    status: "Aguardando Pagamento",
    tipo: "federal",
    statusColor: "#D97706",
    statusBg: "#FEF3C7",
    paid: false,
    pix: "00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-42661417400052040000530398654041240.005802BR5925NEXUS TECH STUDIO6009SAO PAULO62070503***6304ABCD",
  },
  {
    id: 2,
    tag: "FGTS",
    tagColor: "#0891B2",
    tagBg: "rgba(8,145,178,0.08)",
    titulo: "FGTS Digital",
    competencia: "09/2024",
    vencimento: "07/10/2024",
    valor: "R$ 680,00",
    status: "Pago & Baixado",
    tipo: "folha",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
    paid: true,
    pix: "",
  },
  {
    id: 3,
    tag: "GPS",
    tagColor: "#7C3AED",
    tagBg: "rgba(124,58,237,0.08)",
    titulo: "INSS / Pró-Labore Sócios",
    competencia: "09/2024",
    vencimento: "15/10/2024",
    valor: "R$ 2.900,50",
    status: "Pago & Baixado",
    tipo: "folha",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
    paid: true,
    pix: "",
  },
  {
    id: 4,
    tag: "DARF",
    tagColor: "#EA580C",
    tagBg: "rgba(234,88,12,0.08)",
    titulo: "IRPJ - Lucro Estimado",
    competencia: "08/2024",
    vencimento: "30/09/2024",
    valor: "R$ 890,20",
    status: "Pago & Baixado",
    tipo: "federal",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
    paid: true,
    pix: "",
  },
]

const TRIBUTOS_TABS = [
  { id: "todas", label: "Todas (4)" },
  { id: "pendentes", label: "Pendentes (1)" },
  { id: "pagas", label: "Pagas (3)" },
  { id: "folha", label: "Folha de Pagamento (2)" },
]

function TributosPage() {
  const [abaAtiva, setAbaAtiva] = useState("todas")
  const [pixCopiadoId, setPixCopiadoId] = useState<number | null>(null)

  const copiarPix = (id: number, pix: string) => {
    navigator.clipboard.writeText(pix)
    setPixCopiadoId(id)
    setTimeout(() => setPixCopiadoId(null), 3000)
  }

  const lista = TRIBUTOS_DATA.filter((r) =>
    abaAtiva === "pendentes"
      ? !r.paid
      : abaAtiva === "pagas"
        ? r.paid
        : abaAtiva === "folha"
          ? r.tipo === "folha"
          : true,
  )

  const th: React.CSSProperties = {
    padding: "12px 16px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 600,
    fontSize: 11,
    color: "#94A3B8",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    background: "#F8FAFC",
  }

  return (
    <>
          <div
            style={{
              maxWidth: 1360,
              width: "100%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {/* CND Banner */}
            <Banner
              variant="success"
              icon={
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    fill="#BBF7D0"
                    stroke="#16A34A"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6.5 10l2.5 2.5 4.5-4.5"
                    stroke="#15803D"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Situação Fiscal 100% Regular perante a Receita Federal"
              body="Certidão Negativa de Débitos (CND Federal) emitida e válida até 14/12/2024."
              ctaLabel="Baixar CND Atualizada"
              onClose={() => {}}
            />

            {/* KPI cards — 1 col mobile, 3 col desktop */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              {/* Total Apurado */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 16,
                  padding: "20px",
                  boxShadow: "0 2px 12px rgba(3,3,3,0.04)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: 12,
                    color: "#64748B",
                    marginBottom: 10,
                  }}
                >
                  Total Apurado (Setembro)
                </div>
                <div
                  style={{
                    fontFamily: "'Michroma', monospace",
                    fontSize: 22,
                    color: "#030303",
                    marginBottom: 4,
                  }}
                >
                  R$ 4.820,50
                </div>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 12,
                    color: "#94A3B8",
                  }}
                >
                  4 obrigações no mês
                </div>
              </div>

              {/* Total Pendente */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 16,
                  padding: "20px",
                  boxShadow: "0 2px 12px rgba(3,3,3,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: 12,
                      color: "#64748B",
                    }}
                  >
                    Total Pendente
                  </div>
                  <span
                    style={{
                      background: "#FEF3C7",
                      color: "#D97706",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: 10.5,
                      padding: "2px 9px",
                      borderRadius: 999,
                    }}
                  >
                    1 a vencer
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "'Michroma', monospace",
                    fontSize: 22,
                    color: "#D97706",
                    marginBottom: 4,
                  }}
                >
                  R$ 1.240,00
                </div>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 12,
                    color: "#94A3B8",
                  }}
                >
                  DAS Simples vence dia 20/10
                </div>
              </div>

              {/* Total Liquidado */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 16,
                  padding: "20px",
                  boxShadow: "0 2px 12px rgba(3,3,3,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: 12,
                      color: "#64748B",
                    }}
                  >
                    Total Liquidado
                  </div>
                  <span
                    style={{
                      background: "#DCFCE7",
                      color: "#15803D",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: 10.5,
                      padding: "2px 9px",
                      borderRadius: 999,
                    }}
                  >
                    3 pagas
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "'Michroma', monospace",
                    fontSize: 22,
                    color: "#15803D",
                    marginBottom: 4,
                  }}
                >
                  R$ 3.580,50
                </div>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 12,
                    color: "#94A3B8",
                  }}
                >
                  Comprovantes arquivados
                </div>
              </div>
            </div>

            {/* Tabela de Guias */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(3,3,3,0.04)",
              }}
            >
              {/* Tabs + ZIP button */}
              <div
                style={{
                  padding: "18px 24px 0",
                  borderBottom: "1px solid #F1F5F9",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    marginBottom: 0,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 2,
                      overflowX: "auto",
                      paddingBottom: 1,
                    }}
                  >
                    {TRIBUTOS_TABS.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setAbaAtiva(t.id)}
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: abaAtiva === t.id ? 700 : 500,
                          fontSize: 12.5,
                          color: abaAtiva === t.id ? "#1D4ED8" : "#64748B",
                          background: "none",
                          border: "none",
                          borderBottom:
                            abaAtiva === t.id
                              ? "2px solid #1D4ED8"
                              : "2px solid transparent",
                          padding: "8px 14px",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          marginBottom: -1,
                        }}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      flexShrink: 0,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: 12,
                      color: "#1D4ED8",
                      background: "#EFF6FF",
                      border: "1px solid rgba(29,78,216,0.18)",
                      borderRadius: 9,
                      padding: "7px 14px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      marginBottom: 8,
                    }}
                  >
                    {I.download}
                    Baixar Pacote do Mês (.ZIP)
                  </button>
                </div>
              </div>

              {/* Scrollable table */}
              <div
                style={
                  {
                    width: "100%",
                    overflowX: "auto",
                    minWidth: 0,
                    WebkitOverflowScrolling: "touch",
                  } as React.CSSProperties
                }
              >
                <table
                  style={{
                    width: "100%",
                    minWidth: 760,
                    borderCollapse: "collapse",
                    textAlign: "left",
                  }}
                >
                  <thead>
                    <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                      <th style={{ ...th, paddingLeft: 24 }}>
                        Obrigação Fiscal
                      </th>
                      <th style={th}>Competência</th>
                      <th style={th}>Vencimento</th>
                      <th style={th}>Valor</th>
                      <th style={th}>Status</th>
                      <th
                        style={{
                          ...th,
                          textAlign: "right",
                          paddingRight: 24,
                          minWidth: 240,
                        }}
                      >
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lista.map((row, i) => (
                      <tr
                        key={row.id}
                        style={{
                          borderBottom:
                            i < lista.length - 1 ? "1px solid #F8FAFC" : "none",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "#FAFAFA")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        <td
                          style={{
                            padding: "15px 16px 15px 24px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 9,
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 700,
                                fontSize: 10,
                                background: row.tagBg,
                                color: row.tagColor,
                                padding: "2px 7px",
                                borderRadius: 5,
                                letterSpacing: "0.04em",
                              }}
                            >
                              {row.tag}
                            </span>
                            <span
                              style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 600,
                                fontSize: 13,
                                color: "#030303",
                              }}
                            >
                              {row.titulo}
                            </span>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "15px 16px",
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: 12,
                            color: "#64748B",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {row.competencia}
                        </td>
                        <td
                          style={{
                            padding: "15px 16px",
                            fontFamily: "'Michroma', monospace",
                            fontSize: 11,
                            color: "#374151",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {row.vencimento}
                        </td>
                        <td
                          style={{
                            padding: "15px 16px",
                            fontFamily: "'Michroma', monospace",
                            fontSize: 12.5,
                            color: "#030303",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {row.valor}
                        </td>
                        <td
                          style={{ padding: "15px 16px", whiteSpace: "nowrap" }}
                        >
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 5,
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontWeight: 600,
                              fontSize: 10.5,
                              padding: "3px 10px",
                              borderRadius: 999,
                              background: row.statusBg,
                              color: row.statusColor,
                            }}
                          >
                            {row.paid ? (
                              I.check(row.statusColor, 12)
                            ) : (
                              <span
                                style={{
                                  width: 5,
                                  height: 5,
                                  borderRadius: "50%",
                                  background: row.statusColor,
                                  display: "inline-block",
                                }}
                              />
                            )}
                            {row.status}
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "15px 16px 15px 0",
                            paddingRight: 24,
                            textAlign: "right",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 7,
                            }}
                          >
                            {!row.paid && row.pix && (
                              <button
                                onClick={() => copiarPix(row.id, row.pix)}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: 5,
                                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                                  fontWeight: 600,
                                  fontSize: 11.5,
                                  height: 32,
                                  padding: "0 12px",
                                  borderRadius: 8,
                                  cursor: "pointer",
                                  color:
                                    pixCopiadoId === row.id
                                      ? "#059669"
                                      : "#1D4ED8",
                                  background:
                                    pixCopiadoId === row.id
                                      ? "#ECFDF5"
                                      : "#EFF6FF",
                                  border: "1px solid rgba(29,78,216,0.18)",
                                  transition: "all 0.15s",
                                }}
                              >
                                {I.copy}
                                {pixCopiadoId === row.id
                                  ? "Copiado!"
                                  : "Copiar PIX"}
                              </button>
                            )}
                            <button
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 5,
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 600,
                                fontSize: 11.5,
                                height: 32,
                                padding: "0 14px",
                                borderRadius: 8,
                                cursor: "pointer",
                                color: row.paid ? "#030303" : "#FFFFFF",
                                background: row.paid ? "#FFFFFF" : "#1D4ED8",
                                border: row.paid ? "1px solid #E2E8F0" : "none",
                                boxShadow: row.paid
                                  ? "none"
                                  : "0 2px 8px rgba(29,78,216,0.22)",
                              }}
                            >
                              {I.download}
                              {row.paid ? "Comprovante" : "Baixar Guia PDF"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </>
  )
}

// ─── Solicitações page (route: /solicitacoes) ─────────────────────────────────

const SERVICOS_RAPIDOS = [
  {
    id: "admissao",
    titulo: "Admitir Funcionário",
    descricao: "Envio de ficha cadastral e CTPS digital",
    categoria: "DP / RH",
    cor: "#1D4ED8",
    bg: "rgba(29,78,216,0.08)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
  {
    id: "ferias",
    titulo: "Programar Férias",
    descricao: "Aviso prévio e cálculo de 1/3 constitucional",
    categoria: "DP / RH",
    cor: "#A155FF",
    bg: "rgba(161,85,255,0.08)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A155FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    id: "rescisao",
    titulo: "Rescisão de Contrato",
    descricao: "Cálculo de verbas rescisórias e aviso",
    categoria: "DP / RH",
    cor: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
  },
  {
    id: "certidao",
    titulo: "Certidões & Declarações",
    descricao: "Declaração de faturamento e certidões",
    categoria: "Fiscal",
    cor: "#0284C7",
    bg: "rgba(2,132,199,0.08)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
]

const SOLICITACOES_DATA = [
  {
    protocolo: "#SOL-9821",
    servico: "Admissão CLT — Designer Pleno",
    detalhe: "Novo colaborador: Lucas Silveira",
    solicitante: "Sheila Rozendo (Você)",
    data: "Hoje às 10:15",
    status: "Em Análise Contábil",
    statusColor: "#D97706",
    statusBg: "#FEF3C7",
    categoria: "DP / RH",
  },
  {
    protocolo: "#SOL-9804",
    servico: "Declaração de Faturamento para Banco",
    detalhe: "Finalidade: Linha de crédito PJ",
    solicitante: "Sheila Rozendo (Você)",
    data: "Ontem às 14:30",
    status: "Aguardando Assinatura",
    statusColor: "#0284C7",
    statusBg: "#E0F2FE",
    categoria: "Fiscal",
  },
  {
    protocolo: "#SOL-9742",
    servico: "Férias Colaborador — Mateus Ramos",
    detalhe: "Período: 01/11 a 20/11",
    solicitante: "Sheila Rozendo (Você)",
    data: "08 Out 2024",
    status: "Concluído & Arquivado",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
    categoria: "DP / RH",
  },
]

function SolicitacoesPage() {
  const [filtroStatus, setFiltroStatus] = useState("todas")

  const listaFiltrada = SOLICITACOES_DATA.filter(item => {
    if (filtroStatus === "andamento") return item.status !== "Concluído & Arquivado"
    if (filtroStatus === "concluidas") return item.status === "Concluído & Arquivado"
    return true
  })

  return (
    <>
      <style>{`
        .sol-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .sol-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .sol-grid { grid-template-columns: repeat(4, 1fr); } }
        .sol-stats { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .sol-stats { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      {/* Service catalogue header */}
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 16 }}>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303' }}>
              Catálogo de Serviços Contábeis
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 2 }}>
              Selecione o serviço desejado para preencher a solicitação guiada
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#EFF6FF', padding: '6px 14px', borderRadius: 999, flexShrink: 0 }}>
            <svg width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round">
              <circle cx="10" cy="10" r="8" /><path d="M10 6v4l2.5 2.5" />
            </svg>
            <span style={{ fontSize: 11.5, fontWeight: 700, color: '#1D4ED8' }}>SLA Médio de Resposta: 4h úteis</span>
          </div>
        </div>

        <div className="sol-grid">
          {SERVICOS_RAPIDOS.map(s => (
            <div key={s.id}
              style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '22px 20px', cursor: 'pointer', boxShadow: '0 4px 16px rgba(3,3,3,0.04)', transition: 'all 0.15s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = s.cor }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = '#E2E8F0' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {s.icon}
                  </div>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: '#64748B', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '2px 8px', borderRadius: 6 }}>
                    {s.categoria}
                  </span>
                </div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#030303' }}>{s.titulo}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 4, lineHeight: 1.4 }}>{s.descricao}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', marginTop: 14, paddingTop: 10 }}>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: s.cor }}>Iniciar Solicitação</span>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke={s.cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KPI cards */}
      <div className="sol-stats">
        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 600, color: '#64748B' }}>Solicitações em Aberto</span>
            <span style={{ background: '#FEF3C7', color: '#D97706', fontSize: 10.5, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>2 ativas</span>
          </div>
          <div style={{ fontFamily: "'Michroma', monospace", fontSize: 24, color: '#030303', marginTop: 10 }}>2 Pedidos</div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B', marginTop: 6 }}>Em processamento pela equipe contábil</div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 600, color: '#64748B' }}>Concluídas no Mês</span>
            <span style={{ background: '#DCFCE7', color: '#15803D', fontSize: 10.5, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>100% no prazo</span>
          </div>
          <div style={{ fontFamily: "'Michroma', monospace", fontSize: 24, color: '#15803D', marginTop: 10 }}>14 Demandas</div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B', marginTop: 6 }}>Histórico arquivado no cofre</div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 600, color: '#64748B' }}>Satisfação do Atendimento</span>
            <div style={{ display: 'flex', gap: 2 }}>
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#F59E0B"><path d="M10 1l2.4 6.8H19l-5.4 4 2 6.8L10 14.5l-5.6 4.1 2-6.8L1 7.8h6.6z"/></svg>
              ))}
            </div>
          </div>
          <div style={{ fontFamily: "'Michroma', monospace", fontSize: 24, color: '#030303', marginTop: 10 }}>4.9 / 5.0</div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B', marginTop: 6 }}>Avaliação da titular Sheila Rozendo</div>
        </div>
      </div>

      {/* Requests table */}
      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
        <div style={{ padding: '20px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, borderBottom: '1px solid #F1F5F9' }}>
          <div style={{ display: 'flex', gap: 6, overflowX: 'auto' }}>
            {[
              { id: "todas",    label: "Todas (3)" },
              { id: "andamento", label: "Em Andamento (2)" },
              { id: "concluidas", label: "Concluídas (1)" },
            ].map(tab => (
              <button key={tab.id} onClick={() => setFiltroStatus(tab.id)} style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: filtroStatus === tab.id ? 700 : 500,
                fontSize: 12,
                color: filtroStatus === tab.id ? '#1D4ED8' : '#64748B',
                background: filtroStatus === tab.id ? '#EFF6FF' : 'transparent',
                border: 'none', borderRadius: 8, padding: '7px 14px', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
              }}>
                {tab.label}
              </button>
            ))}
          </div>
          <button style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12,
            color: '#FFFFFF', background: '#1D4ED8', border: 'none', borderRadius: 10,
            padding: '9px 18px', cursor: 'pointer', whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(29,78,216,0.25)',
          }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
              <line x1="10" y1="4" x2="10" y2="16" /><line x1="4" y1="10" x2="16" y2="10" />
            </svg>
            Nova Solicitação Avulsa
          </button>
        </div>

        <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
          <table style={{ width: '100%', minWidth: 680, borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #F1F5F9' }}>
                {['Protocolo', 'Assunto / Demanda', 'Solicitante', 'Abertura', 'Status do Pedido', 'Ações'].map((h, i) => (
                  <th key={h} style={{ padding: '13px ' + (i === 0 || i === 5 ? '24px' : '16px'), fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap', textAlign: i === 5 ? 'right' : 'left' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {listaFiltrada.map((item, i) => (
                <tr key={item.protocolo}
                  style={{ borderBottom: i < listaFiltrada.length - 1 ? '1px solid #F8FAFC' : 'none', transition: 'background 0.12s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#FAFAFA')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{ fontFamily: "'Michroma', monospace", fontSize: 12, fontWeight: 500, color: '#1D4ED8' }}>{item.protocolo}</span>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#030303' }}>{item.servico}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B', marginTop: 2 }}>{item.detalhe}</div>
                  </td>
                  <td style={{ padding: '16px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#030303', fontWeight: 500 }}>{item.solicitante}</td>
                  <td style={{ padding: '16px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', whiteSpace: 'nowrap' }}>{item.data}</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 10.5, padding: '3px 10px', borderRadius: 999, background: item.statusBg, color: item.statusColor, whiteSpace: 'nowrap' }}>
                      {item.status.includes("Concluído") ? (
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke={item.statusColor} strokeWidth="2.2" strokeLinecap="round" style={{ marginRight: 4 }}>
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      ) : (
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: item.statusColor, marginRight: 5, flexShrink: 0, display: 'inline-block' }} />
                      )}
                      {item.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <button style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11.5, color: '#1D4ED8', background: '#EFF6FF', border: '1px solid rgba(29,78,216,0.15)', borderRadius: 8, padding: '7px 14px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                      <svg width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                      Ver Chat / Detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

// ─── Dashboard content (route: /) ─────────────────────────────────────────────

function DashboardContent() {
  const [banner, setBanner] = useState(true)
  return (
    <>
      <style>{`
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
      {banner && <Banner onClose={() => setBanner(false)} />}
      <div className="hub-kpi-grid">
        <KPITributos />
        <KPIVencimento />
        <KPICertificado />
        <KPINotas />
      </div>
      <div className="hub-split">
        <div className="hub-col-main" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ObrigacoesCard />
          <AcoesCard />
        </div>
        <div className="hub-col-side" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <CalendarioCard />
          <FaturaCard />
          <ContadorCard />
        </div>
      </div>
    </>
  )
}

// ─── Root layout ───────────────────────────────────────────────────────────────

function Root() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <style>{`
        .sidebar-root { transform: translateX(-100%); }
        @media (min-width: 1024px) {
          .sidebar-root { transform: translateX(0) !important; position: sticky !important; top: 0; height: 100vh; }
          .sidebar-close-btn { display: none !important; }
        }
        @media (max-width: 1023px) {
          .sidebar-root { transform: translateX(-100%); }
          .sidebar-root.open { transform: translateX(0) !important; }
          .sidebar-close-btn { display: flex !important; }
        }
      `}</style>
      <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#F5F7FB", overflowX: "hidden" }}>
        <Sidebar mobileOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, overflowX: "hidden" }}>
          <Topbar onOpenMenu={() => setMenuOpen(true)} />
          <main style={{ flex: 1, padding: "24px 20px" }}>
            <div style={{ maxWidth: 1360, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

// ─── Configurações page (route: /configuracoes) ───────────────────────────────

const COLOR_PRESETS = [
  { id: "royal",   label: "Azul Royal",       hex: "#1D4ED8" },
  { id: "emerald", label: "Verde Esmeralda",   hex: "#059669" },
  { id: "purple",  label: "Violeta Tech",      hex: "#7C3AED" },
  { id: "amber",   label: "Âmbar Solar",       hex: "#D97706" },
  { id: "cyan",    label: "Ciano Elétrico",    hex: "#0284C7" },
]

function ConfiguracoesPage() {
  const [corPrimaria, setCorPrimaria] = useState("#1D4ED8")
  const [nomeEscritorio, setNomeEscritorio] = useState("HubContábil Financial & Gestão")
  const [crc, setCrc] = useState("CRC-SP 2SP034821/O-8")
  const [whatsapp, setWhatsapp] = useState("+55 (11) 98765-4321")
  const [salvo, setSalvo] = useState(false)
  const [modulos, setModulos] = useState({ certificado: true, tributos: true, solicitacoes: true, notas: true })
  const toggleModulo = (key: keyof typeof modulos) => setModulos(prev => ({ ...prev, [key]: !prev[key] }))
  const salvar = () => { setSalvo(true); setTimeout(() => setSalvo(false), 3000) }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10,
    padding: '10px 14px', fontSize: 13, color: '#030303', outline: 'none', boxSizing: 'border-box',
  }

  return (
    <>
      <style>{`
        .cfg-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        @media (min-width: 1024px) { .cfg-grid { grid-template-columns: 7fr 5fr; align-items: start; } }
        .cfg-modules { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .cfg-modules { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1280px) { .cfg-modules { grid-template-columns: repeat(4, 1fr); } }
        .cfg-fields { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .cfg-fields { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      {/* Action bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '16px 24px', boxShadow: '0 4px 16px rgba(3,3,3,0.04)', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14.5, color: '#030303' }}>Gerenciamento de Marca</div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 2 }}>As alterações salvas são refletidas em tempo real no portal dos seus clientes.</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {salvo && (
            <span style={{ fontSize: 12, fontWeight: 700, color: '#059669', background: '#ECFDF5', padding: '6px 14px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#059669" strokeWidth="2.2" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
              Salvo com sucesso!
            </span>
          )}
          <button onClick={salvar} style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: corPrimaria, color: '#FFFFFF', border: 'none', borderRadius: 10, padding: '10px 20px', fontSize: 12.5, fontWeight: 700, cursor: 'pointer', boxShadow: `0 4px 14px ${corPrimaria}40` }}>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21H3a2 2 0 01-2-2V4a2 2 0 012-2h11l5 5v12a2 2 0 01-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
            </svg>
            Salvar Alterações
          </button>
        </div>
      </div>

      {/* Two-column grid */}
      <div className="cfg-grid">
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Office identity */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke={corPrimaria} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="16" height="11" rx="1" /><path d="M5 7V5a7 7 0 0114 0v2" /><circle cx="10" cy="13" r="1.5" />
              </svg>
              Identidade do Escritório
            </div>

            {/* Logo upload */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 8 }}>Logotipo Oficial do Escritório</label>
              <div style={{ border: '1.5px dashed #CBD5E1', borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F8FAFC', flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: '#FFFFFF', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"><polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 700, color: '#030303' }}>logo_escritorio.svg</div>
                    <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 2 }}>SVG ou PNG transparente (máx. 2MB)</div>
                  </div>
                </div>
                <button style={{ fontSize: 12, fontWeight: 600, color: corPrimaria, background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 8, padding: '7px 14px', cursor: 'pointer' }}>
                  Substituir Logo
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Nome de Exibição do Escritório</label>
                <input type="text" value={nomeEscritorio} onChange={e => setNomeEscritorio(e.target.value)} style={inputStyle} />
              </div>
              <div className="cfg-fields">
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Registro CRC do Responsável</label>
                  <input type="text" value={crc} onChange={e => setCrc(e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>WhatsApp de Suporte</label>
                  <input type="text" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} style={inputStyle} />
                </div>
              </div>
            </div>
          </div>

          {/* Color picker */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={corPrimaria} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13.5" cy="6.5" r="2.5" /><circle cx="19" cy="12" r="2.5" /><circle cx="13.5" cy="17.5" r="2.5" /><circle cx="8" cy="12" r="2.5" />
              </svg>
              Cor Primária da Plataforma (Branding)
            </div>
            <div style={{ fontSize: 12, color: '#64748B', marginBottom: 18, lineHeight: 1.5 }}>
              Essa cor será aplicada dinamicamente em todos os botões, realces, ícones ativos e badges dos seus clientes.
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 18 }}>
              {COLOR_PRESETS.map(preset => (
                <button key={preset.id} onClick={() => setCorPrimaria(preset.hex)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 10, border: corPrimaria === preset.hex ? `2px solid ${preset.hex}` : '1px solid #E2E8F0', background: corPrimaria === preset.hex ? `${preset.hex}10` : '#FFFFFF', cursor: 'pointer', transition: 'all 0.15s' }}>
                  <span style={{ width: 14, height: 14, borderRadius: '50%', background: preset.hex, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, fontWeight: corPrimaria === preset.hex ? 700 : 500, color: '#030303' }}>{preset.label}</span>
                  {corPrimaria === preset.hex && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={preset.hex} strokeWidth="2" strokeLinecap="round"><path d="M10 3L5 8.5 2 5.5" /></svg>}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>Código HEX Customizado:</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8, padding: '5px 12px' }}>
                <input type="color" value={corPrimaria} onChange={e => setCorPrimaria(e.target.value)} style={{ width: 24, height: 24, border: 'none', background: 'transparent', cursor: 'pointer' }} />
                <span style={{ fontFamily: "'Michroma', monospace", fontSize: 12, color: '#030303' }}>{corPrimaria.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — live preview */}
        <div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={corPrimaria} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Pré-visualização em Tempo Real
              </div>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: corPrimaria, background: `${corPrimaria}15`, padding: '2px 8px', borderRadius: 999 }}>Ao Vivo</span>
            </div>
            <div style={{ fontSize: 12, color: '#64748B', marginBottom: 18, lineHeight: 1.4 }}>
              Veja como a interface do seu cliente responde à sua paleta:
            </div>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: 14, padding: 16 }}>
              <div style={{ background: '#FFFFFF', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #E2E8F0', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 6, height: 16, borderRadius: 999, background: corPrimaria }} />
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#030303' }}>{nomeEscritorio.slice(0, 16)}…</span>
                </div>
                <div style={{ background: corPrimaria, color: '#FFFFFF', fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 6 }}>+ Nova Ação</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div style={{ background: '#FFFFFF', padding: 12, borderRadius: 10, border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: 10, color: '#64748B' }}>Tributos Pendentes</div>
                  <div style={{ fontFamily: "'Michroma', monospace", fontSize: 14, color: '#030303', marginTop: 4 }}>R$ 1.240,00</div>
                  <div style={{ width: '100%', height: 4, background: '#F1F5F9', borderRadius: 999, marginTop: 8, overflow: 'hidden' }}>
                    <div style={{ width: '70%', height: '100%', background: corPrimaria }} />
                  </div>
                </div>
                <div style={{ background: '#FFFFFF', padding: 12, borderRadius: 10, border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: 10, color: '#64748B' }}>Status Fiscal</div>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: '#059669', marginTop: 4 }}>✓ Regular</div>
                  <div style={{ marginTop: 6, fontSize: 10, fontWeight: 600, color: corPrimaria, background: `${corPrimaria}15`, padding: '3px 6px', borderRadius: 4, textAlign: 'center' }}>Ver Certidão</div>
                </div>
              </div>
              <div style={{ background: '#FFFFFF', borderRadius: 10, border: '1px solid #E2E8F0', marginTop: 10, padding: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: corPrimaria, background: `${corPrimaria}15`, padding: '2px 6px', borderRadius: 4 }}>DAS</span>
                    <span style={{ fontSize: 10.5, fontWeight: 600, color: '#030303' }}>Simples Nacional</span>
                  </div>
                  <span style={{ background: corPrimaria, color: '#FFFFFF', fontSize: 9.5, fontWeight: 700, padding: '4px 8px', borderRadius: 6 }}>Baixar PDF</span>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 11.5, color: '#94A3B8', marginTop: 16, textAlign: 'center', lineHeight: 1.4 }}>
              Ao salvar, todos os clientes do escritório verão esta paleta instantaneamente.
            </div>
          </div>
        </div>
      </div>

      {/* CNAME domain */}
      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(2,132,199,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303' }}>Domínio Personalizado (CNAME)</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 2 }}>Permita que seus clientes acessem pelo endereço web do seu escritório</div>
            </div>
          </div>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#ECFDF5', color: '#059669', fontSize: 11, fontWeight: 700, padding: '5px 14px', borderRadius: 999, flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#059669" strokeWidth="1.8" strokeLinecap="round"><path d="M10 2L3 5v5c0 4.1 3 7.7 7 8.9C14 18.7 17 15.1 17 11V5l-7-3z" /><path d="M7 10l2 2 4-4" /></svg>
            SSL Ativo & Seguro
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 18, paddingTop: 18, borderTop: '1px solid #F1F5F9', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: '11px 16px', fontSize: 13, color: '#030303', fontFamily: "'Michroma', monospace" }}>
            app.apicecontabilidade.com.br
          </div>
          <button style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12.5, color: '#1D4ED8', background: '#EFF6FF', border: '1px solid rgba(29,78,216,0.15)', borderRadius: 10, padding: '11px 20px', cursor: 'pointer', flexShrink: 0 }}>
            Testar DNS
          </button>
        </div>
      </div>

      {/* Modules toggle */}
      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={corPrimaria} strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>
          Módulos Visíveis para seus Clientes
        </div>
        <div style={{ fontSize: 12, color: '#64748B', marginBottom: 20 }}>Ative ou desative seções de acordo com os serviços contratados:</div>
        <div className="cfg-modules">
          {[
            { key: "tributos",    label: "Central de Tributos",      desc: "Download de DAS, FGTS e PIX" },
            { key: "certificado", label: "Monitor de Certificado",   desc: "Avisos de expiração do e-CNPJ" },
            { key: "solicitacoes",label: "Catálogo de Solicitações", desc: "Admissões, férias e chamados" },
            { key: "notas",       label: "Emissor de Notas Fiscais", desc: "Módulo integrado de NFS-e" },
          ].map(item => {
            const ativo = modulos[item.key as keyof typeof modulos]
            return (
              <div key={item.key} onClick={() => toggleModulo(item.key as keyof typeof modulos)} style={{ padding: 18, borderRadius: 14, border: ativo ? `1.5px solid ${corPrimaria}` : '1px solid #E2E8F0', background: ativo ? `${corPrimaria}06` : '#FFFFFF', cursor: 'pointer', transition: 'all 0.15s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#030303' }}>{item.label}</span>
                  <div style={{ width: 36, height: 20, borderRadius: 999, background: ativo ? corPrimaria : '#CBD5E1', padding: 2, display: 'flex', alignItems: 'center', justifyContent: ativo ? 'flex-end' : 'flex-start', transition: 'background 0.2s', flexShrink: 0 }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }} />
                  </div>
                </div>
                <div style={{ fontSize: 11.5, color: '#64748B', lineHeight: 1.4 }}>{item.desc}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

// ─── Login page (route: /login — standalone, no Root layout) ──────────────────

function LoginPage() {
  const [email, setEmail] = useState("sheila@nexustech.com.br")
  const [senha, setSenha] = useState("")
  const [carregando, setCarregando] = useState(false)

  const entrar = (e: React.FormEvent) => {
    e.preventDefault()
    setCarregando(true)
    setTimeout(() => { window.location.href = "/" }, 700)
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#F5F7FB', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, boxSizing: 'border-box', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ width: '100%', maxWidth: 440, background: '#FFFFFF', borderRadius: 24, border: '1px solid #E2E8F0', padding: '40px 36px', boxShadow: '0 8px 30px rgba(3,3,3,0.06)', boxSizing: 'border-box' }}>
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 28 }}>
          <svg width="72" height="56" viewBox="0 0 400 313" fill="none" style={{ marginBottom: 12 }}>
            <path fillRule="evenodd" clipRule="evenodd" fill="#A155FF" stroke="#FFFFFF" strokeWidth="6" d="M238.81,240.28v-101.16c0-37.66-30.82-68.47-68.47-68.47h0c-37.66,0-68.47,30.81-68.47,68.47v169.63s68.47,0,68.47,0c37.66,0,68.47-30.81,68.47-68.47h0Z" />
            <path fillRule="evenodd" clipRule="evenodd" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="6" d="M398.76,240.28V68.47C398.76,30.81,367.95,0,330.29,0h0c-37.66,0-68.47,30.81-68.47,68.47v171.81c0,37.66,30.82,68.47,68.47,68.47h0c37.66,0,68.47-30.81,68.47-68.47h0Z" />
            <path fillRule="evenodd" clipRule="evenodd" fill="#43C1EF" d="M136.94,308.75v-68.48c0-37.65-30.82-68.47-68.47-68.47h0C30.82,171.81,0,202.63,0,240.28h0c0,37.66,30.82,68.48,68.47,68.48h68.48Z" />
            <path fillRule="evenodd" clipRule="evenodd" fill="#1D4ED8" d="M136.94,240.28v68.48h-35.07v-128.19c20.89,11.76,35.07,34.16,35.07,59.71h0Z" />
          </svg>
          <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em', color: '#030303' }}>HUBCONTÁBIL</div>
          <div style={{ fontSize: 10, letterSpacing: '0.24em', color: '#64748B', fontWeight: 700, marginTop: 2 }}>FINANCIAL & TAX SUITE</div>
        </div>

        {/* Welcome */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#030303', margin: 0 }}>Acesse seu Portal do Cliente</h2>
          <p style={{ fontSize: 12.5, color: '#64748B', marginTop: 6, marginBottom: 0 }}>Consulte seus tributos, certidões e rotinas em um só lugar</p>
        </div>

        {/* Form */}
        <form onSubmit={entrar} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>E-mail Corporativo</label>
            <div style={{ position: 'relative' }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                <rect x="2" y="4" width="16" height="12" rx="2" /><path d="M2 7l8 5 8-5" />
              </svg>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: '11px 14px 11px 42px', fontSize: 13, color: '#030303', outline: 'none', boxSizing: 'border-box' }} />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>Senha de Acesso</label>
              <a href="#" style={{ fontSize: 11.5, fontWeight: 600, color: '#1D4ED8', textDecoration: 'none' }}>Esqueceu?</a>
            </div>
            <div style={{ position: 'relative' }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                <rect x="3" y="9" width="14" height="10" rx="2" /><path d="M7 9V6a3 3 0 016 0v3" />
              </svg>
              <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="••••••••••••" style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: '11px 14px 11px 42px', fontSize: 13, color: '#030303', outline: 'none', boxSizing: 'border-box' }} />
            </div>
          </div>

          <button type="submit" disabled={carregando} style={{ marginTop: 8, background: '#1D4ED8', color: '#FFFFFF', border: 'none', borderRadius: 12, padding: '12px 18px', fontSize: 13, fontWeight: 700, cursor: carregando ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 4px 14px rgba(29,78,216,0.3)' }}>
            {carregando ? 'Autenticando…' : 'Entrar no Sistema'}
            {!carregando && <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="10" x2="15" y2="10" /><polyline points="10 5 15 10 10 15" /></svg>}
          </button>
        </form>

        {/* Demo notice */}
        <div style={{ marginTop: 24, padding: '14px 16px', background: 'rgba(29,78,216,0.05)', border: '1px solid rgba(29,78,216,0.2)', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" style={{ flexShrink: 0 }}>
            <circle cx="10" cy="10" r="8" /><path d="M10 6v4l2.5 2.5" />
          </svg>
          <div style={{ fontSize: 11.5, color: '#374151', lineHeight: 1.4 }}>
            <strong>Modo Portfólio Ativo:</strong> Clique em "Entrar no Sistema" para testar com a empresa modelo <em>Nexus Tech Studio Ltda</em>.
          </div>
        </div>

        {/* Security badge */}
        <div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: '#64748B', fontSize: 11 }}>
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#059669" strokeWidth="1.8" strokeLinecap="round"><path d="M10 2L3 5v5c0 4.1 3 7.7 7 8.9C14 18.7 17 15.1 17 11V5l-7-3z" /><path d="M7 10l2 2 4-4" /></svg>
          Ambiente Criptografado SSL • ICP-Brasil
        </div>
      </div>
    </div>
  )
}

// ─── Notas Fiscais placeholder (route: /notas) ────────────────────────────────

function NotasPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 320, gap: 16, textAlign: 'center' }}>
      <div style={{ width: 64, height: 64, borderRadius: 16, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
        </svg>
      </div>
      <div>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: '#030303' }}>Notas Fiscais</div>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: '#64748B', marginTop: 6 }}>Emissão, consulta e gestão de NFS-e — em breve</div>
      </div>
      <span style={{ background: '#FEF3C7', color: '#D97706', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 999 }}>Módulo em desenvolvimento</span>
    </div>
  )
}

// ─── Folha de Pagamento placeholder (route: /folha) ───────────────────────────

function FolhaPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 320, gap: 16, textAlign: 'center' }}>
      <div style={{ width: 64, height: 64, borderRadius: 16, background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      </div>
      <div>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: '#030303' }}>Folha de Pagamento</div>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: '#64748B', marginTop: 6 }}>eSocial, pró-labore e férias — em breve</div>
      </div>
      <span style={{ background: '#FEF3C7', color: '#D97706', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 999 }}>Módulo em desenvolvimento</span>
    </div>
  )
}

// ─── Router ────────────────────────────────────────────────────────────────────

const router = createHashRouter([
  { path: "/login", Component: LoginPage },
  {
    path: "/",
    Component: Root,
    children: [
      { index: true,              Component: DashboardContent },
      { path: "tributos",         Component: TributosPage },
      { path: "documentos",       Component: DocumentosPage },
      { path: "solicitacoes",     Component: SolicitacoesPage },
      { path: "configuracoes",    Component: ConfiguracoesPage },
      { path: "notas",            Component: NotasPageFull },
      { path: "folha",            Component: FolhaPageFull },
    ],
  },
])

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return <RouterProvider router={router} />
}
