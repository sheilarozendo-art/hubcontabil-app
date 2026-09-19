"use client"

import { useState } from "react"
import type { CSSProperties } from "react"
import Banner from "./components/BannerAlerta"
import { I } from "./components/Icons"

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

const card: CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid #E2E8F0",
  borderRadius: 16,
  padding: "20px",
  boxShadow: "0 2px 12px rgba(3,3,3,0.04)",
}

const pill = (bg: string, color: string): CSSProperties => ({
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

const lbl: CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontWeight: 600,
  fontSize: 12,
  color: "#64748B",
}

const mono = (size = 22): CSSProperties => ({
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

  const th: CSSProperties = {
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

// ─── Dashboard content (route: /) ─────────────────────────────────────────────

export default function DashboardPage() {
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
