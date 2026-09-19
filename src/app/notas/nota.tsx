"use client";

import React, { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NOTAS_DATA = [
  { id: 1, numero: "NFS-e 000842", tomador: "Acme Soluções Digitais Ltda", cnpj: "11.222.333/0001-44", servico: "Consultoria em TI e Desenvolvimento", competencia: "10/2024", emissao: "02/10/2024", valor: "R$ 8.500,00", iss: "R$ 425,00", status: "Autorizada", statusColor: "#15803D", statusBg: "#DCFCE7" },
  { id: 2, numero: "NFS-e 000843", tomador: "Bravo Marketing EIRELI", cnpj: "22.333.444/0001-55", servico: "Gestão de Tráfego e Mídia Paga", competencia: "10/2024", emissao: "05/10/2024", valor: "R$ 3.200,00", iss: "R$ 160,00", status: "Autorizada", statusColor: "#15803D", statusBg: "#DCFCE7" },
  { id: 3, numero: "NFS-e 000844", tomador: "Delta Construções S.A.", cnpj: "33.444.555/0001-66", servico: "Assessoria Contábil Mensal", competencia: "10/2024", emissao: "08/10/2024", valor: "R$ 1.800,00", iss: "R$ 90,00", status: "Aguardando SEFAZ", statusColor: "#D97706", statusBg: "#FEF3C7" },
  { id: 4, numero: "NFS-e 000840", tomador: "Epsilon Educação Ltda", cnpj: "44.555.666/0001-77", servico: "Desenvolvimento de Sistema Web", competencia: "09/2024", emissao: "20/09/2024", valor: "R$ 4.750,00", iss: "R$ 237,50", status: "Cancelada", statusColor: "#DC2626", statusBg: "#FEE2E2" },
  { id: 5, numero: "NFS-e 000845", tomador: "Zeta Saúde Digital ME", cnpj: "55.666.777/0001-88", servico: "Suporte Técnico e Infraestrutura", competencia: "10/2024", emissao: "10/10/2024", valor: "R$ 1.000,00", iss: "R$ 50,00", status: "Autorizada", statusColor: "#15803D", statusBg: "#DCFCE7" },
];

const TABS_NOTAS = [
  { id: "todas",       label: "Todas (5)" },
  { id: "autorizadas", label: "Autorizadas (3)" },
  { id: "pendentes",   label: "Pendentes (1)" },
  { id: "canceladas",  label: "Canceladas (1)" },
];

const I = {
  download: (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M6.5 1v7M4 6l2.5 2.5L9 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.5 9.5v1A1.5 1.5 0 003 12h7a1.5 1.5 0 001.5-1.5v-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  eye: (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M1 6.5S3 2.5 6.5 2.5 12 6.5 12 6.5 10 10.5 6.5 10.5 1 6.5 1 6.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="6.5" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  check: (c = "#10B981", s = 14) => (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.3" />
      <path d="M4.5 7l2 2 3-3" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// ─── Page Content ──────────────────────────────────────────────────────────────

export default function NotasPageFull() {
  const [abaAtiva, setAbaAtiva] = useState("todas");
  const [busca, setBusca] = useState("");

  const lista = NOTAS_DATA.filter((n) => {
    const matchTab =
      abaAtiva === "autorizadas" ? n.status === "Autorizada" :
      abaAtiva === "pendentes"   ? n.status === "Aguardando SEFAZ" :
      abaAtiva === "canceladas"  ? n.status === "Cancelada" : true;
    const matchBusca = busca === "" || n.tomador.toLowerCase().includes(busca.toLowerCase()) || n.numero.toLowerCase().includes(busca.toLowerCase());
    return matchTab && matchBusca;
  });

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
        .notas-banner { background: linear-gradient(135deg, #EFF6FF, #F5F3FF); border: 1px solid rgba(29,78,216,0.15); border-radius: 14px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; }
      `}</style>

      {/* Banner */}
      <div className="notas-banner">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(29,78,216,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="2" width="14" height="16" rx="2" fill="rgba(29,78,216,0.15)" stroke="#1D4ED8" strokeWidth="1.4" />
              <path d="M7 7h6M7 11h4" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13.5, color: "#1E3A8A" }}>
              Integração NFS-e ativa — Prefeitura de São Paulo
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#3B82F6", marginTop: 2 }}>
              Emissão automatizada via webservice municipal · ISS retido na fonte calculado automaticamente
            </div>
          </div>
        </div>
        <button style={{ background: "#1D4ED8", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>
          Emitir Nova NFS-e
        </button>
      </div>

      {/* KPI Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: "#64748B", marginBottom: 8 }}>Faturamento Autorizado</div>
          <div style={{ fontFamily: "'Michroma', monospace", fontSize: 20, color: "#030303", marginBottom: 4 }}>R$ 13.500,00</div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#94A3B8" }}>3 NFS-e autorizadas · Out/2024</div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: "#64748B" }}>ISS Retido</div>
            <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10.5, padding: "2px 9px", borderRadius: 999 }}>5%</span>
          </div>
          <div style={{ fontFamily: "'Michroma', monospace", fontSize: 20, color: "#1D4ED8", marginBottom: 4 }}>R$ 675,00</div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#94A3B8" }}>Retido na fonte automaticamente</div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: "#64748B" }}>Aguardando Autorização</div>
            <span style={{ background: "#FEF3C7", color: "#D97706", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10.5, padding: "2px 9px", borderRadius: 999 }}>Pendente</span>
          </div>
          <div style={{ fontFamily: "'Michroma', monospace", fontSize: 20, color: "#D97706", marginBottom: 4 }}>R$ 1.800,00</div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#94A3B8" }}>1 NFS-e aguardando SEFAZ</div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: "#64748B", marginBottom: 8 }}>Notas Emitidas</div>
          <div style={{ fontFamily: "'Michroma', monospace", fontSize: 20, color: "#030303", marginBottom: 8 }}>5 NFS-e</div>
          <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 28 }}>
            {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
              <div key={i} style={{ flex: 1, background: i === 6 ? "#1D4ED8" : "#E2E8F0", borderRadius: 2, height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Table card */}
      <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
        <div style={{ padding: "18px 24px 0", borderBottom: "1px solid #F1F5F9" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
            <div style={{ display: "flex", gap: 4, overflowX: "auto" }}>
              {TABS_NOTAS.map((t) => (
                <button key={t.id} onClick={() => setAbaAtiva(t.id)} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: abaAtiva === t.id ? 700 : 500, fontSize: 12.5, color: abaAtiva === t.id ? "#1D4ED8" : "#64748B", background: "none", border: "none", borderBottom: abaAtiva === t.id ? "2px solid #1D4ED8" : "2px solid transparent", padding: "8px 14px", cursor: "pointer", whiteSpace: "nowrap", marginBottom: -1 }}>
                  {t.label}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Buscar tomador ou número…" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#030303", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 9, padding: "7px 12px", outline: "none", width: 220 }} />
            </div>
          </div>
        </div>

        <div style={{ width: "100%", overflowX: "auto" }}>
          <table style={{ width: "100%", minWidth: 800, borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                <th style={{ ...th, paddingLeft: 24 }}>Número / Tomador</th>
                <th style={th}>Serviço Prestado</th>
                <th style={th}>Emissão</th>
                <th style={th}>Valor Bruto</th>
                <th style={th}>ISS</th>
                <th style={th}>Status</th>
                <th style={{ ...th, textAlign: "right", paddingRight: 24 }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((n, i) => (
                <tr key={n.id} style={{ borderBottom: i < lista.length - 1 ? "1px solid #F8FAFC" : "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <td style={{ padding: "14px 16px 14px 24px", whiteSpace: "nowrap" }}>
                    <div style={{ fontFamily: "'Michroma', monospace", fontSize: 11.5, color: "#1D4ED8", marginBottom: 2 }}>{n.numero}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12.5, color: "#030303" }}>{n.tomador}</div>
                    <div style={{ fontFamily: "'Michroma', monospace", fontSize: 10, color: "#94A3B8" }}>{n.cnpj}</div>
                  </td>
                  <td style={{ padding: "14px 16px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12.5, color: "#64748B", maxWidth: 220 }}>
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{n.servico}</div>
                    <div style={{ fontFamily: "'Michroma', monospace", fontSize: 10, color: "#CBD5E1", marginTop: 2 }}>{n.competencia}</div>
                  </td>
                  <td style={{ padding: "14px 16px", fontFamily: "'Michroma', monospace", fontSize: 11.5, color: "#64748B", whiteSpace: "nowrap" }}>{n.emissao}</td>
                  <td style={{ padding: "14px 16px", fontFamily: "'Michroma', monospace", fontSize: 12.5, color: "#030303", whiteSpace: "nowrap" }}>{n.valor}</td>
                  <td style={{ padding: "14px 16px", fontFamily: "'Michroma', monospace", fontSize: 11.5, color: "#64748B", whiteSpace: "nowrap" }}>{n.iss}</td>
                  <td style={{ padding: "14px 16px", whiteSpace: "nowrap" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 10.5, padding: "3px 9px", borderRadius: 999, background: n.statusBg, color: n.statusColor }}>
                      {n.status === "Autorizada" && I.check(n.statusColor, 11)}
                      {n.status !== "Autorizada" && <span style={{ width: 5, height: 5, borderRadius: "50%", background: n.statusColor, display: "inline-block" }} />}
                      {n.status}
                    </span>
                  </td>
                  <td style={{ padding: "14px 24px 14px 0", textAlign: "right", whiteSpace: "nowrap" }}>
                    {n.status !== "Cancelada" ? (
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <button style={{ width: 30, height: 30, borderRadius: 8, background: "#F8FAFC", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#64748B" }} title="Visualizar">
                          {I.eye}
                        </button>
                        <button style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11, color: "#1D4ED8", background: "#EFF6FF", border: "1px solid rgba(29,78,216,0.18)", borderRadius: 8, padding: "6px 10px", cursor: "pointer" }}>
                          {I.download} PDF
                        </button>
                      </div>
                    ) : (
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "#CBD5E1" }}>Cancelada</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ padding: "14px 24px", borderTop: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#94A3B8" }}>
            Exibindo {lista.length} de {NOTAS_DATA.length} notas fiscais
          </div>
          <button style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: "#1D4ED8", background: "#EFF6FF", border: "1px solid rgba(29,78,216,0.18)", borderRadius: 9, padding: "7px 14px", cursor: "pointer" }}>
            {I.download} Exportar XML / CSV
          </button>
        </div>
      </div>
    </>
  );
}
