"use client"

import { useState } from "react"

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

export default function SolicitacoesPage() {
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

        <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' } as CSSProperties}>
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
