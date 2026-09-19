"use client";

import React, { useState } from "react";
import Link from "next/link";

// ─── Logo Oficial ──────────────────────────────────────────────────────────────

function HubContabilLogo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, overflow: "hidden" }}>
      <svg width="36" height="28" viewBox="0 0 400 313" fill="none" style={{ flexShrink: 0 }}>
        <path fillRule="evenodd" clipRule="evenodd" fill="#A155FF" stroke="#FFFFFF" strokeWidth="6"
          d="M238.81,240.28v-101.16c0-37.66-30.82-68.47-68.47-68.47h0c-37.66,0-68.47,30.81-68.47,68.47v169.63s68.47,0,68.47,0c37.66,0,68.47-30.81,68.47-68.47h0Z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="6"
          d="M398.76,240.28V68.47C398.76,30.81,367.95,0,330.29,0h0c-37.66,0-68.47,30.81-68.47,68.47v171.81c0,37.66,30.82,68.47,68.47,68.47h0c37.66,0,68.47-30.81,68.47-68.47h0Z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#43C1EF"
          d="M136.94,308.75v-68.48c0-37.65-30.82-68.47-68.47-68.47h0C30.82,171.81,0,202.63,0,240.28h0c0,37.66,30.82,68.48,68.47,68.48h68.48Z" />
        <path fillRule="evenodd" clipRule="evenodd" fill="#1D4ED8"
          d="M136.94,240.28v68.48h-35.07v-128.19c20.89,11.76,35.07,34.16,35.07,59.71h0Z" />
      </svg>
      {!collapsed && (
        <div style={{ lineHeight: 1.15 }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 14.5, color: "#030303", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
            HUB<span style={{ fontWeight: 500, letterSpacing: "0.03em" }}>Contábil</span>
          </div>
          <div style={{ fontFamily: "'Michroma', monospace", fontSize: 8, color: "#94A3B8", letterSpacing: "0.30em", textTransform: "uppercase" }}>
            FINANCIAL
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Ícones ────────────────────────────────────────────────────────────────────

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
  check: (c = "#10B981", s = 14) => (
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
};

// ─── Ícones da Navegação ───────────────────────────────────────────────────────

function NavIcon({ id }: { id: string }) {
  const paths: Record<string, React.ReactElement> = {
    dashboard: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="12" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="12" width="7" height="7" rx="1.5" /><rect x="12" y="12" width="7" height="7" rx="1.5" /></>,
    tributos: <><path d="M4 2h10v14l-2-1.5-1.5 1.5L9 14.5 7.5 16 6 14.5 4 16V2z" /><path d="M7 7h4M7 10h2" strokeLinecap="round" /></>,
    documentos: <><path d="M4 2h10l4 4v14a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" /><path d="M14 2v4h4" /></>,
    solicitacoes: <><circle cx="10" cy="7" r="3" /><path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" /></>,
    configuracoes: <><circle cx="10" cy="10" r="3" /><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.9 4.9l1.4 1.4M13.7 13.7l1.4 1.4M4.9 15.1l1.4-1.4M13.7 6.3l1.4-1.4" strokeLinecap="round" /></>,
  };
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      {paths[id]}
    </svg>
  );
}

const NAV = [
  { id: "dashboard", href: "/", label: "Dashboard" },
  { id: "tributos", href: "/tributos", label: "Tributos & Guias" },
  { id: "documentos", href: "/documentos", label: "Documentos & Cofre" },
  { id: "solicitacoes", href: "/solicitacoes", label: "Solicitações" },
  { id: "configuracoes", href: "/configuracoes", label: "Personalização White-label" },
];

// ─── Sidebar Conectada ─────────────────────────────────────────────────────────

function Sidebar({ mobileOpen, onClose }: { mobileOpen: boolean; onClose: () => void }) {
  return (
    <>
      {mobileOpen && (
        <div
          onClick={onClose}
          style={{
            position: "fixed", inset: 0, background: "rgba(3,3,3,0.35)",
            zIndex: 39, backdropFilter: "blur(2px)",
          }}
        />
      )}

      <aside
        style={{
          position: "fixed", top: 0, left: 0, bottom: 0,
          width: 264, background: "#FFFFFF", borderRight: "1px solid #E2E8F0",
          display: "flex", flexDirection: "column", zIndex: 40,
          transition: "transform 0.22s ease",
        }}
        className={`sidebar-root${mobileOpen ? " open" : ""}`}
      >
        <div style={{ height: 64, display: "flex", alignItems: "center", padding: "0 20px", borderBottom: "1px solid #F1F5F9", flexShrink: 0 }}>
          <HubContabilLogo />
          <button onClick={onClose} className="sidebar-close-btn" style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "#94A3B8", padding: 4 }}>
            {I.x}
          </button>
        </div>

        {/* Empresa Ativa: Nexus Tech Studio */}
        <div style={{ padding: "14px 14px 0" }}>
          <div style={{
            width: "100%", display: "flex", alignItems: "center", gap: 10,
            background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 10,
            padding: "9px 12px", textAlign: "left", boxSizing: "border-box"
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: "linear-gradient(135deg, #1D4ED8, #A155FF)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
              fontSize: 11, color: "#fff", flexShrink: 0,
            }}>SR</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12.5, color: "#030303", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                Nexus Tech Studio Ltda
              </div>
              <div style={{ fontFamily: "'Michroma', monospace", fontSize: "9px", color: "#94A3B8", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
                CNPJ 42.109.876/0001-50
              </div>
            </div>
            {I.chevDown}
          </div>
        </div>

        {/* Links Reais do Menu */}
        <nav style={{ flex: 1, padding: "8px 14px", overflowY: "auto" }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10, color: "#CBD5E1", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 8px 6px" }}>
            Menu Principal
          </div>
          {NAV.map((item) => {
            const isActive = item.id === "tributos";
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: 10,
                  background: isActive ? "#EFF6FF" : "transparent",
                  border: "none", borderRadius: 9, padding: "9px 10px",
                  color: isActive ? "#1D4ED8" : "#64748B",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: isActive ? 700 : 500, fontSize: 13,
                  marginBottom: 2, textDecoration: "none", boxSizing: "border-box"
                }}
              >
                <NavIcon id={item.id} />
                <span style={{ flex: 1 }}>{item.label}</span>
                {isActive && (
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1D4ED8" }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Perfil Oficial da Sheila */}
        <Link href="/login" style={{ textDecoration: "none" }}>
          <div style={{ padding: "12px 14px", borderTop: "1px solid #F1F5F9", flexShrink: 0, cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "linear-gradient(135deg, #1D4ED8, #A155FF)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
                fontSize: 12, color: "#fff", flexShrink: 0,
              }}>SR</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: "#030303", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Sheila Rozendo
                </div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "#94A3B8" }}>
                  Sócia • Sair
                </div>
              </div>
            </div>
          </div>
        </Link>
      </aside>
    </>
  );
}

// ─── Topbar ────────────────────────────────────────────────────────────────────

function Topbar({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <>
      <style>{`
        .topbar-root {
          background: #FFFFFF; border-bottom: 1px solid #E2E8F0;
          position: sticky; top: 0; z-index: 30;
          display: flex; align-items: center; gap: 12px;
          padding: 0 16px; min-height: 56px; flex-wrap: nowrap; overflow: hidden;
        }
        .topbar-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 6px; color: #64748B; }
        .topbar-brand { display: none; flex-shrink: 0; align-items: center; }
        .topbar-title-block { flex: 1; min-width: 0; }
        .topbar-title {
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700;
          font-size: clamp(14px, 2vw, 18px); color: #030303; line-height: 1.2;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .topbar-subtitle {
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 400;
          font-size: clamp(10px, 1.4vw, 12px); color: #94A3B8;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        @media (min-width: 1024px) {
          .topbar-root { padding: 0 28px; gap: 16px; min-height: 64px; }
          .topbar-hamburger { display: none !important; }
          .topbar-brand { display: none !important; }
        }
        @media (max-width: 1023px) {
          .topbar-hamburger { display: flex !important; }
          .topbar-brand { display: flex !important; }
        }
      `}</style>

      <header className="topbar-root">
        <button className="topbar-hamburger" onClick={onOpenMenu} aria-label="Abrir menu">
          {I.menu}
        </button>
        <div className="topbar-brand">
          <HubContabilLogo />
        </div>
        <div className="topbar-title-block">
          <div className="topbar-title">Tributos & Guias Fiscais</div>
          <div className="topbar-subtitle">Gestão centralizada de guias, apurações e comprovantes</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #1D4ED8, #A155FF)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 12, color: "#fff" }}>
            SR
          </div>
        </div>
      </header>
    </>
  );
}

// ─── Dados de Tributos ─────────────────────────────────────────────────────────

const TRIBUTOS_DATA = [
  {
    id: 1, tag: "DAS", tagColor: "#1D4ED8", tagBg: "rgba(29,78,216,0.08)",
    titulo: "DAS - Simples Nacional", competencia: "09/2024", vencimento: "20/10/2024",
    valor: "R$ 1.240,00", status: "Aguardando Pagamento", tipo: "federal",
    statusColor: "#D97706", statusBg: "#FEF3C7", paid: false,
    pix: "00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-42661417400052040000530398654041240.005802BR5925NEXUS TECH STUDIO6009SAO PAULO62070503***6304ABCD",
  },
  {
    id: 2, tag: "FGTS", tagColor: "#0891B2", tagBg: "rgba(8,145,178,0.08)",
    titulo: "FGTS Digital", competencia: "09/2024", vencimento: "07/10/2024",
    valor: "R$ 680,00", status: "Pago & Baixado", tipo: "folha",
    statusColor: "#15803D", statusBg: "#DCFCE7", paid: true, pix: "",
  },
  {
    id: 3, tag: "GPS", tagColor: "#7C3AED", tagBg: "rgba(124,58,237,0.08)",
    titulo: "INSS / Pró-Labore Sócios", competencia: "09/2024", vencimento: "15/10/2024",
    valor: "R$ 2.900,50", status: "Pago & Baixado", tipo: "folha",
    statusColor: "#15803D", statusBg: "#DCFCE7", paid: true, pix: "",
  },
  {
    id: 4, tag: "DARF", tagColor: "#EA580C", tagBg: "rgba(234,88,12,0.08)",
    titulo: "IRPJ - Lucro Estimado", competencia: "08/2024", vencimento: "30/09/2024",
    valor: "R$ 890,20", status: "Pago & Baixado", tipo: "federal",
    statusColor: "#15803D", statusBg: "#DCFCE7", paid: true, pix: "",
  },
];

const TRIBUTOS_TABS = [
  { id: "todas", label: "Todas (4)" },
  { id: "pendentes", label: "Pendentes (1)" },
  { id: "pagas", label: "Pagas (3)" },
  { id: "folha", label: "Folha de Pagamento (2)" },
];

// ─── PÁGINA PRINCIPAL OFICIAL DE TRIBUTOS ──────────────────────────────────────

export default function TributosPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState("todas");
  const [pixCopiadoId, setPixCopiadoId] = useState<number | null>(null);

  const copiarPix = (id: number, pix: string) => {
    navigator.clipboard.writeText(pix);
    setPixCopiadoId(id);
    setTimeout(() => setPixCopiadoId(null), 3000);
  };

  const lista = TRIBUTOS_DATA.filter((r) =>
    abaAtiva === "pendentes" ? !r.paid :
    abaAtiva === "pagas" ? r.paid :
    abaAtiva === "folha" ? r.tipo === "folha" : true
  );

  const th: React.CSSProperties = {
    padding: "12px 16px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 600, fontSize: 11, color: "#94A3B8",
    letterSpacing: "0.06em", textTransform: "uppercase",
    whiteSpace: "nowrap", background: "#F8FAFC",
  };

  return (
    <>
      <style>{`
        .sidebar-root { transform: translateX(-100%); }
        @media (min-width: 1024px) {
          .sidebar-root { transform: translateX(0) !important; position: sticky !important; top: 0; height: 100vh; }
          .sidebar-close-btn { display: none !important; }
        }
        @media (max-width: 1023px) {
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
              
              {/* Banner CND Verde de Sucesso */}
              <div style={{
                background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 14,
                padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between",
                flexWrap: "wrap", gap: 14,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="8" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.5" />
                      <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="#15803D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13.5, color: "#14532D" }}>
                      Situação Fiscal 100% Regular perante a Receita Federal
                    </div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#15803D", marginTop: 2 }}>
                      Certidão Negativa de Débitos (CND Federal) emitida e válida até 14/12/2024.
                    </div>
                  </div>
                </div>
                <button style={{
                  background: "#15803D", color: "#FFFFFF", border: "none", borderRadius: 8,
                  padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer",
                }}>
                  Baixar CND Atualizada
                </button>
              </div>

              {/* 3 Cartões de Resumo Financeiro */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: "#64748B", marginBottom: 8 }}>Total Apurado (Setembro)</div>
                  <div style={{ fontFamily: "'Michroma', monospace", fontSize: 22, color: "#030303", marginBottom: 4 }}>R$ 4.820,50</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#94A3B8" }}>4 obrigações apuradas no mês</div>
                </div>

                <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: "#64748B" }}>Total Pendente</div>
                    <span style={{ background: "#FEF3C7", color: "#D97706", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10.5, padding: "2px 9px", borderRadius: 999 }}>1 a vencer</span>
                  </div>
                  <div style={{ fontFamily: "'Michroma', monospace", fontSize: 22, color: "#D97706", marginBottom: 4 }}>R$ 1.240,00</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#94A3B8" }}>DAS Simples vence dia 20/10</div>
                </div>

                <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: "#64748B" }}>Total Liquidado</div>
                    <span style={{ background: "#DCFCE7", color: "#15803D", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10.5, padding: "2px 9px", borderRadius: 999 }}>3 pagas</span>
                  </div>
                  <div style={{ fontFamily: "'Michroma', monospace", fontSize: 22, color: "#15803D", marginBottom: 4 }}>R$ 3.580,50</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#94A3B8" }}>Comprovantes baixados</div>
                </div>
              </div>

              {/* Tabela de Guias Completa */}
              <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
                <div style={{ padding: "18px 24px 0", borderBottom: "1px solid #F1F5F9" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
                    <div style={{ display: "flex", gap: 4, overflowX: "auto" }}>
                      {TRIBUTOS_TABS.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setAbaAtiva(t.id)}
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: abaAtiva === t.id ? 700 : 500, fontSize: 12.5,
                            color: abaAtiva === t.id ? "#1D4ED8" : "#64748B",
                            background: "none", border: "none",
                            borderBottom: abaAtiva === t.id ? "2px solid #1D4ED8" : "2px solid transparent",
                            padding: "8px 14px", cursor: "pointer", whiteSpace: "nowrap", marginBottom: -1,
                          }}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                    <button style={{
                      display: "flex", alignItems: "center", gap: 6,
                      fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12,
                      color: "#1D4ED8", background: "#EFF6FF", border: "1px solid rgba(29,78,216,0.18)",
                      borderRadius: 9, padding: "7px 14px", cursor: "pointer", whiteSpace: "nowrap",
                    }}>
                      {I.download} Baixar Pacote do Mês (.ZIP)
                    </button>
                  </div>
                </div>

                <div style={{ width: "100%", overflowX: "auto", minWidth: 0 }}>
                  <table style={{ width: "100%", minWidth: 760, borderCollapse: "collapse", textAlign: "left" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <th style={{ ...th, paddingLeft: 24 }}>Obrigação Fiscal</th>
                        <th style={th}>Competência</th>
                        <th style={th}>Vencimento</th>
                        <th style={th}>Valor</th>
                        <th style={th}>Status</th>
                        <th style={{ ...th, textAlign: "right", paddingRight: 24, minWidth: 240 }}>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lista.map((row, i) => (
                        <tr
                          key={row.id}
                          style={{ borderBottom: i < lista.length - 1 ? "1px solid #F8FAFC" : "none" }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          <td style={{ padding: "15px 16px 15px 24px", whiteSpace: "nowrap" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10, background: row.tagBg, color: row.tagColor, padding: "2px 7px", borderRadius: 5, letterSpacing: "0.04em", flexShrink: 0 }}>
                                {row.tag}
                              </span>
                              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: "#030303" }}>
                                {row.titulo}
                              </span>
                            </div>
                          </td>
                          <td style={{ padding: "15px 16px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#64748B", whiteSpace: "nowrap" }}>
                            {row.competencia}
                          </td>
                          <td style={{ padding: "15px 16px", fontFamily: "'Michroma', monospace", fontSize: 11, color: "#374151", whiteSpace: "nowrap" }}>
                            {row.vencimento}
                          </td>
                          <td style={{ padding: "15px 16px", fontFamily: "'Michroma', monospace", fontSize: 12.5, color: "#030303", whiteSpace: "nowrap" }}>
                            {row.valor}
                          </td>
                          <td style={{ padding: "15px 16px", whiteSpace: "nowrap" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 10.5, padding: "3px 10px", borderRadius: 999, background: row.statusBg, color: row.statusColor }}>
                              {row.paid ? I.check(row.statusColor, 12) : <span style={{ width: 5, height: 5, borderRadius: "50%", background: row.statusColor, display: "inline-block" }} />}
                              {row.status}
                            </span>
                          </td>
                          <td style={{ padding: "15px 24px 15px 0", textAlign: "right", whiteSpace: "nowrap" }}>
                            <div style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                              {!row.paid && row.pix && (
                                <button
                                  onClick={() => copiarPix(row.id, row.pix)}
                                  style={{
                                    display: "inline-flex", alignItems: "center", gap: 5,
                                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11.5,
                                    height: 32, padding: "0 12px", borderRadius: 8, cursor: "pointer",
                                    color: pixCopiadoId === row.id ? "#059669" : "#1D4ED8",
                                    background: pixCopiadoId === row.id ? "#ECFDF5" : "#EFF6FF",
                                    border: "1px solid rgba(29,78,216,0.18)", transition: "all 0.15s",
                                  }}
                                >
                                  {I.copy}
                                  {pixCopiadoId === row.id ? "Copiado!" : "Copiar PIX"}
                                </button>
                              )}
                              <button style={{
                                display: "inline-flex", alignItems: "center", gap: 5,
                                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11.5,
                                height: 32, padding: "0 14px", borderRadius: 8, cursor: "pointer",
                                color: row.paid ? "#030303" : "#FFFFFF",
                                background: row.paid ? "#FFFFFF" : "#1D4ED8",
                                border: row.paid ? "1px solid #E2E8F0" : "none",
                                boxShadow: row.paid ? "none" : "0 2px 8px rgba(29,78,216,0.22)",
                              }}>
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
          </main>
        </div>
      </div>
    </>
  );
}