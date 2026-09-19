"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import HubContabilLogo from "./Logo"
import { I } from "./Icons"

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
  { id: "folha",        label: "Folha de Pagamento",   href: "/folhas" },
  { id: "docs",         label: "Documentos",           href: "/documentos" },
  { id: "solicitacoes", label: "Solicitações",         href: "/solicitacoes" },
]

function useActiveNav() {
  const pathname = usePathname()
  if (pathname === "/") return "dashboard"
  const match = NAV.find(n => n.href !== "/" && pathname.startsWith(n.href))
  return match?.id ?? "dashboard"
}

// ─── Sidebar ───────────────────────────────────────────────────────────────────

export default function Sidebar({ mobileOpen, onClose }: { mobileOpen: boolean; onClose: () => void }) {
  const active = useActiveNav()
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
