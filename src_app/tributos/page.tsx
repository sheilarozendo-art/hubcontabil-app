"use client"

import { useState } from "react"
import type { CSSProperties } from "react"
import Banner from "../components/BannerAlerta"
import { I } from "../components/Icons"

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

export default function TributosPage() {
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

  const th: CSSProperties = {
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
                  } as CSSProperties
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
