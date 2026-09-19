"use client"

import { usePathname } from "next/navigation"
import HubContabilLogo from "./Logo"
import { I } from "./Icons"

// ─── Topbar ────────────────────────────────────────────────────────────────────
// Global, fully responsive — same component on every page, no hidden elements at any breakpoint.

function usePageMeta() {
  const pathname = usePathname()
  const map: Record<string, { title: string; subtitle: string }> = {
    "/": { title: "Dashboard Geral", subtitle: "Competência: Setembro / 2024" },
    "/tributos": { title: "Tributos & Guias Fiscais", subtitle: "Gestão de guias, apurações e comprovantes" },
    "/documentos": { title: "Cofre de Documentos & GED", subtitle: "Armazenamento seguro em nuvem com conformidade LGPD e ICP-Brasil" },
    "/notas": { title: "Notas Fiscais", subtitle: "Emissão, consulta e gestão de NFS-e" },
    "/folhas": { title: "Folha de Pagamento", subtitle: "eSocial, pró-labore e férias" },
    "/configuracoes": { title: "Configurações White-label", subtitle: "Configure a identidade visual da sua marca e canais oficiais" },
    "/solicitacoes": { title: "Central de Solicitações", subtitle: "Abra demandas e acompanhe o fluxo de atendimento da sua contabilidade" },
  }
  return map[pathname] ?? map["/"]
}

export default function Topbar({ onOpenMenu }: { onOpenMenu: () => void }) {
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
