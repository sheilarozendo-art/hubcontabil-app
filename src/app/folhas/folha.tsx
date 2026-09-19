"use client";

import React, { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const COLABORADORES = [
  { id: 1, nome: "Lucas Silveira",  cargo: "Designer Pleno",          regime: "CLT",        salario: "R$ 5.200,00",  inss: "R$ 572,00",   irrf: "R$ 480,50",   fgts: "R$ 416,00", liquido: "R$ 4.147,50",  status: "Processado",       statusColor: "#15803D", statusBg: "#DCFCE7" },
  { id: 2, nome: "Mateus Ramos",    cargo: "Dev. Full Stack Sênior",  regime: "CLT",        salario: "R$ 9.800,00",  inss: "R$ 908,85",   irrf: "R$ 1.550,00", fgts: "R$ 784,00", liquido: "R$ 7.341,15",  status: "Processado",       statusColor: "#15803D", statusBg: "#DCFCE7" },
  { id: 3, nome: "Sheila Rozendo", cargo: "Sócia-Administradora",    regime: "Pró-labore", salario: "R$ 15.000,00", inss: "R$ 1.650,00", irrf: "R$ 2.988,00", fgts: "—",         liquido: "R$ 10.362,00", status: "Processado",       statusColor: "#15803D", statusBg: "#DCFCE7" },
  { id: 4, nome: "Fernanda Costa",  cargo: "Designer UX/UI",         regime: "CLT",        salario: "R$ 4.500,00",  inss: "R$ 495,00",   irrf: "R$ 315,00",   fgts: "R$ 360,00", liquido: "R$ 3.690,00",  status: "Férias (01–20 Nov)", statusColor: "#D97706", statusBg: "#FEF3C7" },
];

const EVENTOS = [
  { label: "Folha Processada (Out/2024)", data: "15/10/2024", cor: "#10B981", tipo: "done" },
  { label: "FGTS Recolhido (Out/2024)",   data: "07/10/2024", cor: "#10B981", tipo: "done" },
  { label: "eSocial S-1200 Enviado",      data: "10/10/2024", cor: "#10B981", tipo: "done" },
  { label: "Fechamento Folha Nov/2024",   data: "15/11/2024", cor: "#1D4ED8", tipo: "upcoming" },
  { label: "13º Salário — 1ª Parcela",   data: "30/11/2024", cor: "#F59E0B", tipo: "alert" },
];

const I = {
  download: (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M6.5 1v7M4 6l2.5 2.5L9 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.5 9.5v1A1.5 1.5 0 003 12h7a1.5 1.5 0 001.5-1.5v-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
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

export default function FolhaPageFull() {
  const [abaAtiva, setAbaAtiva] = useState("todos");

  const lista = COLABORADORES.filter((c) =>
    abaAtiva === "clt"       ? c.regime === "CLT" :
    abaAtiva === "prolabore" ? c.regime === "Pró-labore" : true
  );

  const totalBruto  = COLABORADORES.reduce((acc, c) => acc + parseFloat(c.salario.replace("R$ ", "").replace(".", "").replace(",", ".")), 0);
  const totalLiquido = COLABORADORES.reduce((acc, c) => acc + parseFloat(c.liquido.replace("R$ ", "").replace(".", "").replace(",", ".")), 0);

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
        .folha-split { display: flex; flex-direction: column; gap: 24px; }
        @media (min-width: 1024px) { .folha-split { flex-direction: row; align-items: flex-start; } .folha-col-main { flex: 1; min-width: 0; } .folha-col-side { width: 296px; flex-shrink: 0; } }
      `}</style>

      {/* Banner eSocial */}
      <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 14, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="3" width="16" height="14" rx="2" fill="#BBF7D0" stroke="#15803D" strokeWidth="1.4" />
              <path d="M6 8h8M6 12h5" stroke="#15803D" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13.5, color: "#14532D" }}>
              eSocial S-1200 transmitido com sucesso para Outubro/2024
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#15803D", marginTop: 2 }}>
              4 colaboradores processados · Protocolo ESOCIAL-2024-10-00842 · Sem inconsistências
            </div>
          </div>
        </div>
        <button style={{ background: "#15803D", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>
          Baixar Recibo eSocial
        </button>
      </div>

      {/* KPI Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: "#64748B", marginBottom: 8 }}>Custo Total da Folha</div>
          <div style={{ fontFamily: "'Michroma', monospace", fontSize: 20, color: "#030303", marginBottom: 4 }}>
            R$ {totalBruto.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#94A3B8" }}>Bruto · Outubro / 2024</div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: "#64748B" }}>Total Líquido Pago</div>
            <span style={{ background: "#DCFCE7", color: "#15803D", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10.5, padding: "2px 9px", borderRadius: 999 }}>4 pessoas</span>
          </div>
          <div style={{ fontFamily: "'Michroma', monospace", fontSize: 20, color: "#15803D", marginBottom: 4 }}>
            R$ {totalLiquido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#94A3B8" }}>Após descontos legais</div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: "#64748B" }}>FGTS a Recolher (Nov)</div>
            <span style={{ background: "#FEF3C7", color: "#D97706", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10.5, padding: "2px 9px", borderRadius: 999 }}>Vence 07/11</span>
          </div>
          <div style={{ fontFamily: "'Michroma', monospace", fontSize: 20, color: "#D97706", marginBottom: 4 }}>R$ 1.560,00</div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#94A3B8" }}>FGTS Digital · 3 colaboradores CLT</div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: "#64748B", marginBottom: 8 }}>Colaboradores Ativos</div>
          <div style={{ fontFamily: "'Michroma', monospace", fontSize: 20, color: "#030303", marginBottom: 8 }}>4 Pessoas</div>
          <div style={{ display: "flex", gap: 6 }}>
            <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: 10.5, fontWeight: 700, padding: "2px 8px", borderRadius: 999 }}>3 CLT</span>
            <span style={{ background: "rgba(161,85,255,0.1)", color: "#7C3AED", fontSize: 10.5, fontWeight: 700, padding: "2px 8px", borderRadius: 999 }}>1 Pró-labore</span>
          </div>
        </div>
      </div>

      {/* Split: table + side panel */}
      <div className="folha-split">
        <div className="folha-col-main">
          <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
            <div style={{ padding: "18px 24px 0", borderBottom: "1px solid #F1F5F9" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
                <div style={{ display: "flex", gap: 4 }}>
                  {[
                    { id: "todos",     label: "Todos (4)" },
                    { id: "clt",       label: "CLT (3)" },
                    { id: "prolabore", label: "Pró-labore (1)" },
                  ].map((t) => (
                    <button key={t.id} onClick={() => setAbaAtiva(t.id)} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: abaAtiva === t.id ? 700 : 500, fontSize: 12.5, color: abaAtiva === t.id ? "#1D4ED8" : "#64748B", background: "none", border: "none", borderBottom: abaAtiva === t.id ? "2px solid #1D4ED8" : "2px solid transparent", padding: "8px 14px", cursor: "pointer", whiteSpace: "nowrap", marginBottom: -1 }}>
                      {t.label}
                    </button>
                  ))}
                </div>
                <button style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12, color: "#1D4ED8", background: "#EFF6FF", border: "1px solid rgba(29,78,216,0.18)", borderRadius: 9, padding: "7px 14px", cursor: "pointer" }}>
                  <span style={{ color: "#1D4ED8" }}>{I.download}</span> Exportar Holerites
                </button>
              </div>
            </div>

            <div style={{ width: "100%", overflowX: "auto" }}>
              <table style={{ width: "100%", minWidth: 760, borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                    <th style={{ ...th, paddingLeft: 24 }}>Colaborador</th>
                    <th style={th}>Regime</th>
                    <th style={th}>Salário Bruto</th>
                    <th style={th}>INSS</th>
                    <th style={th}>IRRF</th>
                    <th style={th}>FGTS</th>
                    <th style={th}>Líquido</th>
                    <th style={{ ...th, textAlign: "right", paddingRight: 24 }}>Situação</th>
                  </tr>
                </thead>
                <tbody>
                  {lista.map((col, i) => (
                    <tr key={col.id} style={{ borderBottom: i < lista.length - 1 ? "1px solid #F8FAFC" : "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <td style={{ padding: "14px 16px 14px 24px", whiteSpace: "nowrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #1D4ED8, #A155FF)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 11, color: "#fff", flexShrink: 0 }}>
                            {col.nome.split(" ").map((n: string) => n[0]).slice(0, 2).join("")}
                          </div>
                          <div>
                            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: "#030303" }}>{col.nome}</div>
                            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "#94A3B8" }}>{col.cargo}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: "14px 16px", whiteSpace: "nowrap" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10.5, padding: "2px 9px", borderRadius: 999, background: col.regime === "CLT" ? "rgba(29,78,216,0.08)" : "rgba(161,85,255,0.1)", color: col.regime === "CLT" ? "#1D4ED8" : "#7C3AED" }}>
                          {col.regime}
                        </span>
                      </td>
                      <td style={{ padding: "14px 16px", fontFamily: "'Michroma', monospace", fontSize: 12, color: "#030303", whiteSpace: "nowrap" }}>{col.salario}</td>
                      <td style={{ padding: "14px 16px", fontFamily: "'Michroma', monospace", fontSize: 11.5, color: "#64748B", whiteSpace: "nowrap" }}>{col.inss}</td>
                      <td style={{ padding: "14px 16px", fontFamily: "'Michroma', monospace", fontSize: 11.5, color: "#64748B", whiteSpace: "nowrap" }}>{col.irrf}</td>
                      <td style={{ padding: "14px 16px", fontFamily: "'Michroma', monospace", fontSize: 11.5, color: col.fgts === "—" ? "#CBD5E1" : "#64748B", whiteSpace: "nowrap" }}>{col.fgts}</td>
                      <td style={{ padding: "14px 16px", fontFamily: "'Michroma', monospace", fontSize: 12.5, color: "#15803D", whiteSpace: "nowrap" }}>{col.liquido}</td>
                      <td style={{ padding: "14px 24px 14px 0", textAlign: "right", whiteSpace: "nowrap" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 10.5, padding: "3px 8px", borderRadius: 999, background: col.statusBg, color: col.statusColor }}>
                            {col.status === "Processado" && I.check(col.statusColor, 11)}
                            {col.status !== "Processado" && <span style={{ width: 5, height: 5, borderRadius: "50%", background: col.statusColor, display: "inline-block" }} />}
                            {col.status}
                          </span>
                          <button style={{ width: 30, height: 30, borderRadius: 8, background: "#F8FAFC", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#1D4ED8" }} title="Baixar holerite">
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
        </div>

        {/* Side panel */}
        <div className="folha-col-side" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", boxShadow: "0 2px 12px rgba(3,3,3,0.04)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#030303" }}>Agenda DP</div>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 10.5, padding: "2px 9px", borderRadius: 999 }}>Out / Nov</span>
            </div>
            <div style={{ fontFamily: "'Michroma', monospace", fontSize: 10.5, color: "#CBD5E1", letterSpacing: "0.1em", marginBottom: 16 }}>CALENDÁRIO DE OBRIGAÇÕES</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {EVENTOS.map((ev, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 9, height: 9, borderRadius: "50%", background: ev.cor, flexShrink: 0, boxShadow: ev.tipo === "upcoming" ? `0 0 6px ${ev.cor}60` : "none" }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: ev.tipo === "upcoming" ? 700 : 500, fontSize: 12.5, color: ev.tipo === "done" ? "#CBD5E1" : "#030303", textDecoration: ev.tipo === "done" ? "line-through" : "none" }}>
                      {ev.label}
                    </div>
                    <div style={{ fontFamily: "'Michroma', monospace", fontSize: 10, color: "#94A3B8", marginTop: 1 }}>{ev.data}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "linear-gradient(135deg, #1D4ED8, #7C3AED)", padding: 1.5, borderRadius: 17 }}>
            <div style={{ background: "#FFFFFF", borderRadius: 15.5, padding: "20px" }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#030303", marginBottom: 14 }}>Encargos do Mês</div>
              {[
                { label: "INSS Patronal (20%)", valor: "R$ 2.500,00", cor: "#1D4ED8" },
                { label: "FGTS (8%)",           valor: "R$ 1.560,00", cor: "#7C3AED" },
                { label: "IRRF Retido",          valor: "R$ 5.333,50", cor: "#43C1EF" },
              ].map((enc, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < 2 ? "1px solid #F1F5F9" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: enc.cor }} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12.5, color: "#374151" }}>{enc.label}</span>
                  </div>
                  <span style={{ fontFamily: "'Michroma', monospace", fontSize: 12, color: "#030303" }}>{enc.valor}</span>
                </div>
              ))}
              <div style={{ marginTop: 14, padding: "10px 14px", background: "#F8FAFC", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 12, color: "#030303" }}>Total Encargos</span>
                <span style={{ fontFamily: "'Michroma', monospace", fontSize: 13, color: "#1D4ED8" }}>R$ 9.393,50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
