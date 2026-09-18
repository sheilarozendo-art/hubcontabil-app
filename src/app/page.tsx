"use client";

import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

// ─── Ícones SVG Rápidos ───────────────────────────────────────────────────────

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 2l10 10M12 2L2 12" stroke="#64748B" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function ShieldCheckIcon({ color = '#43C1EF', size = 20 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M10 2L3 5v5c0 4.1 3 7.7 7 8.9C14 18.7 17 15.1 17 11V5l-7-3z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 10l2 2 4-4" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="#64748B" strokeWidth="1.3" />
      <path d="M2 10V2h8" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M6.5 1v7M4 6l2.5 2.5L9 6" stroke="#1D4ED8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.5 9.5v1A1.5 1.5 0 003 12h7a1.5 1.5 0 001.5-1.5v-1" stroke="#1D4ED8" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function ReceiptIcon({ color = '#1D4ED8' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 1h10v12l-2-1.5-1.5 1.5L7 11.5 5.5 13 4 11.5 2 13V1z" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M4.5 5h5M4.5 7.5h3" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function CheckCircleIcon({ color = '#10B981', size = 14 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.3" />
      <path d="M4.5 7l2 2 3-3" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BankIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect width="22" height="22" rx="8" fill="#EFF6FF" />
      <path d="M11 4l7 3.5v1H4V7.5L11 4z" fill="#1D4ED8" fillOpacity="0.9" />
      <rect x="5.5" y="9.5" width="2" height="5" rx="0.5" fill="#1D4ED8" fillOpacity="0.7" />
      <rect x="10" y="9.5" width="2" height="5" rx="0.5" fill="#1D4ED8" fillOpacity="0.7" />
      <rect x="14.5" y="9.5" width="2" height="5" rx="0.5" fill="#1D4ED8" fillOpacity="0.7" />
      <rect x="4" y="15.5" width="14" height="1.5" rx="0.75" fill="#1D4ED8" fillOpacity="0.5" />
    </svg>
  )
}

function LightningIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect width="22" height="22" rx="8" fill="rgba(161,85,255,0.1)" />
      <path d="M13 4L7.5 11.5H11L9 18l7-9H12L13 4z" fill="#A155FF" />
    </svg>
  )
}

function TeamIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect width="22" height="22" rx="8" fill="rgba(67,193,239,0.1)" />
      <circle cx="8" cy="9" r="2.5" stroke="#43C1EF" strokeWidth="1.3" />
      <circle cx="14" cy="9" r="2.5" stroke="#43C1EF" strokeWidth="1.3" />
      <path d="M4 17c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4" stroke="#43C1EF" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function UploadIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 18V8M10 12l4-4 4 4" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 20h16" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function GoogleMeetIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="4" width="9" height="8" rx="1.5" fill="#1976D2" />
      <path d="M10 7l4-3v8l-4-3V7z" fill="#4CAF50" />
    </svg>
  )
}

function WhatsAppSmallIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 1a7 7 0 015.53 11.27L15 15l-2.84-1.43A7 7 0 118 1z" fill="#25D366" />
      <path d="M5.7 5.5c.1.4.4 1.2 1.2 2S8.7 9.2 9.1 9.3c.4.1.6-.1.8-.3l.4-.4c.2-.2.2-.4 0-.6L9.5 7.2c-.2-.2-.4-.2-.6 0l-.2.2c-.1.1-.2.1-.3 0C8.1 7.1 7.1 6.1 7 5.8c-.1-.1-.1-.2 0-.3l.2-.2c.2-.2.2-.4 0-.6L6.4 4c-.2-.2-.4-.2-.6 0l-.4.4C5.2 4.6 5.1 5.1 5.7 5.5z" fill="white" />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 5l4 4 4-4" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SparklineBars() {
  const bars = [6, 9, 7, 11, 8, 14, 10, 16, 12, 18]
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 24, marginTop: 10 }}>
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            width: 5,
            height: h,
            borderRadius: 2,
            background: i === bars.length - 1 ? '#1D4ED8' : i >= bars.length - 3 ? '#A155FF' : '#E2E8F0',
          }}
        />
      ))}
    </div>
  )
}

// ─── Estilos Base Compactos (Sem esticar) ─────────────────────────────────────

const cardStyle: React.CSSProperties = {
  background: '#FFFFFF',
  border: '1px solid #E2E8F0',
  borderRadius: 16,
  padding: '20px',
  boxShadow: '0 4px 16px rgba(3,3,3,0.04)',
}

const labelStyle: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontWeight: 600,
  fontSize: 12,
  color: '#64748B',
  letterSpacing: '0.01em',
}

const pillStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontWeight: 600,
  fontSize: 11,
  padding: '3px 9px',
  borderRadius: 999,
  whiteSpace: 'nowrap',
  flexShrink: 0,
}

const iconBtnStyle: React.CSSProperties = {
  width: 28, height: 28, borderRadius: 7,
  background: '#F8FAFC', border: '1px solid #E2E8F0',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', flexShrink: 0,
}

const outlineBtnStyle: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 5,
  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 11.5,
  color: '#1D4ED8', background: 'transparent',
  border: '1px solid rgba(29,78,216,0.25)', borderRadius: 7,
  padding: '5px 10px', cursor: 'pointer', whiteSpace: 'nowrap',
}

// ─── KPI Cards ────────────────────────────────────────────────────────────────

function KPITributos() {
  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={labelStyle}>Total de Tributos (Outubro)</span>
        <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(29,78,216,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ReceiptIcon color="#1D4ED8" />
        </div>
      </div>
      <div style={{ fontFamily: "'Michroma', sans-serif", fontSize: 22, color: '#030303', letterSpacing: '-0.01em', marginBottom: 4 }}>
        R$ 4.820,50
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B', marginBottom: 10 }}>
        3 de 4 guias pagas
      </div>
      <div style={{ background: '#F1F5F9', borderRadius: 999, height: 5, overflow: 'hidden' }}>
        <div style={{ width: '75%', height: '100%', background: '#1D4ED8', borderRadius: 999 }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, color: '#94A3B8' }}>0%</span>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, color: '#1D4ED8', fontWeight: 600 }}>75%</span>
      </div>
    </div>
  )
}

function KPIVencimento() {
  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={labelStyle}>Próximo Vencimento</span>
        <span style={{ ...pillStyle, background: '#FEF3C7', color: '#D97706' }}>A Vencer</span>
      </div>
      <div style={{ fontFamily: "'Michroma', sans-serif", fontSize: 24, color: '#030303', letterSpacing: '-0.01em', marginBottom: 4 }}>
        20 Out
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B', marginBottom: 10 }}>
        DAS - Simples Nacional
      </div>
      <div style={{ display: 'inline-flex', alignItems: 'center', background: '#EFF6FF', borderRadius: 8, padding: '4px 10px' }}>
        <span style={{ fontFamily: "'Michroma', sans-serif", fontSize: 12, color: '#1D4ED8', fontWeight: 500 }}>R$ 1.240,00</span>
      </div>
    </div>
  )
}

function KPICertificado() {
  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={labelStyle}>Certificado Digital</span>
        <ShieldCheckIcon size={18} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#43C1EF', boxShadow: '0 0 6px rgba(67,193,239,0.7)' }} />
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#030303' }}>Ativo & Seguro</span>
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B' }}>
        Validade: <span style={{ fontFamily: "'Michroma', sans-serif", fontSize: 11, color: '#030303' }}>18/11/2024</span>
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10.5, color: '#94A3B8', marginTop: 3 }}>
        e-CNPJ A1 · ICP-Brasil
      </div>
      <div style={{ marginTop: 10, background: '#F1F5F9', borderRadius: 999, height: 4, overflow: 'hidden' }}>
        <div style={{ width: '88%', height: '100%', background: 'linear-gradient(90deg, #43C1EF, #1D4ED8)', borderRadius: 999 }} />
      </div>
    </div>
  )
}

function KPINotas() {
  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={labelStyle}>Notas Fiscais</span>
        <span style={{ ...pillStyle, background: '#DCFCE7', color: '#15803D' }}>+12% vs. ant.</span>
      </div>
      <div style={{ fontFamily: "'Michroma', sans-serif", fontSize: 22, color: '#030303', letterSpacing: '-0.01em', marginBottom: 4 }}>
        28 Emitidas
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B' }}>
        Outubro 2024
      </div>
      <SparklineBars />
    </div>
  )
}

// ─── Tabela de Obrigações ─────────────────────────────────────────────────────

const TABS = ['Todas', 'Pendentes (1)', 'Pagas (3)']

const ROWS = [
  {
    tag: 'DAS',
    tagColor: '#1D4ED8',
    tagBg: 'rgba(29,78,216,0.08)',
    title: 'DAS - Simples Nacional',
    comp: '09/2024',
    venc: '20/10/2024',
    valor: 'R$ 1.240,00',
    status: 'Aguardando Pagamento',
    statusColor: '#D97706',
    statusBg: '#FEF3C7',
    paid: false,
  },
  {
    tag: 'FGTS',
    tagColor: '#0891B2',
    tagBg: 'rgba(8,145,178,0.08)',
    title: 'FGTS Digital',
    comp: '09/2024',
    venc: '07/10/2024',
    valor: 'R$ 680,00',
    status: 'Pago',
    statusColor: '#15803D',
    statusBg: '#DCFCE7',
    paid: true,
  },
  {
    tag: 'GPS',
    tagColor: '#7C3AED',
    tagBg: 'rgba(124,58,237,0.08)',
    title: 'Pró-Labore & GPS',
    comp: '09/2024',
    venc: '15/10/2024',
    valor: 'R$ 2.900,50',
    status: 'Pago',
    statusColor: '#15803D',
    statusBg: '#DCFCE7',
    paid: true,
  },
]

function ObrigacoesCard() {
  const [activeTab, setActiveTab] = useState('Todas')
  const [month] = useState('Outubro 2024')

  const filtered = ROWS.filter(r => {
    if (activeTab === 'Pendentes (1)') return !r.paid
    if (activeTab === 'Pagas (3)') return r.paid
    return true
  })

  return (
    <div style={{ ...cardStyle, padding: 0, overflow: 'hidden' }}>
      {/* Header do Card */}
      <div style={{ padding: '20px 24px 0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303' }}>
              Obrigações e Guias a Pagar
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 2 }}>
              Competência Setembro/2024
            </div>
          </div>
          <button
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: 12,
              color: '#64748B', background: '#F8FAFC', border: '1px solid #E2E8F0',
              borderRadius: 8, padding: '6px 12px', cursor: 'pointer',
            }}
          >
            {month}
            <ChevronDown />
          </button>
        </div>

        {/* Abas */}
        <div style={{ display: 'flex', gap: 2, borderBottom: '1px solid #F1F5F9' }}>
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: activeTab === t ? 600 : 500,
                fontSize: 12.5,
                color: activeTab === t ? '#1D4ED8' : '#64748B',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === t ? '2px solid #1D4ED8' : '2px solid transparent',
                padding: '8px 14px',
                cursor: 'pointer',
                marginBottom: -1,
                transition: 'color 0.15s',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Tabela Limpa */}
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #F1F5F9' }}>
              <th style={{ padding: '12px 20px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Guia / Tributo</th>
              <th style={{ padding: '12px 14px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Comp.</th>
              <th style={{ padding: '12px 14px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Vencimento</th>
              <th style={{ padding: '12px 14px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Valor</th>
              <th style={{ padding: '12px 14px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Situação</th>
              <th style={{ padding: '12px 20px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', letterSpacing: '0.04em', textTransform: 'uppercase', textAlign: 'right' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr
                key={i}
                style={{
                  borderBottom: i < filtered.length - 1 ? '1px solid #F8FAFC' : 'none',
                  transition: 'background 0.12s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#FAFAFA')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {/* Nome */}
                <td style={{ padding: '14px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                    <span style={{
                      fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 10,
                      background: row.tagBg, color: row.tagColor,
                      padding: '2px 7px', borderRadius: 6, letterSpacing: '0.04em', flexShrink: 0
                    }}>{row.tag}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#030303', whiteSpace: 'nowrap' }}>
                      {row.title}
                    </span>
                  </div>
                </td>

                {/* Comp */}
                <td style={{ padding: '14px 14px', fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748B', whiteSpace: 'nowrap' }}>
                  {row.comp}
                </td>

                {/* Vencimento */}
                <td style={{ padding: '14px 14px', fontFamily: "'Michroma', sans-serif", fontSize: 11, color: '#374151', whiteSpace: 'nowrap' }}>
                  {row.venc}
                </td>

                {/* Valor */}
                <td style={{ padding: '14px 14px', fontFamily: "'Michroma', sans-serif", fontSize: 12, color: '#030303', fontWeight: 400, whiteSpace: 'nowrap' }}>
                  {row.valor}
                </td>

                {/* Situação */}
                <td style={{ padding: '14px 14px', whiteSpace: 'nowrap' }}>
                  <span style={{ ...pillStyle, background: row.statusBg, color: row.statusColor, width: 'fit-content' }}>
                    {!row.paid && <span style={{ width: 5, height: 5, borderRadius: '50%', background: row.statusColor, display: 'inline-block', marginRight: 5 }} />}
                    {row.paid && <CheckCircleIcon color="#10B981" size={12} />}
                    <span style={{ marginLeft: row.paid ? 4 : 0 }}>{row.status}</span>
                  </span>
                </td>

                {/* Ações */}
                <td style={{ padding: '14px 20px', textAlign: 'right' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    {!row.paid ? (
                      <>
                        <button style={iconBtnStyle} title="Copiar Linha Digitável"><CopyIcon /></button>
                        <button style={outlineBtnStyle}>
                          <DownloadIcon />
                          <span>Baixar PDF</span>
                        </button>
                      </>
                    ) : (
                      <button style={outlineBtnStyle}>
                        <CheckCircleIcon color="#10B981" size={12} />
                        <span>Comprovante</span>
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

// ─── Ações Rápidas ────────────────────────────────────────────────────────────

function AcoesRapidasCard() {
  const [dragging, setDragging] = useState(false)

  const actions = [
    {
      icon: <BankIcon />,
      title: 'Enviar Extrato Bancário',
      sub: 'Formatos aceitos: OFX, PDF',
      special: 'upload',
      accent: '#1D4ED8',
    },
    {
      icon: <LightningIcon />,
      title: 'Emitir Nota Fiscal (NFS-e)',
      sub: 'Autorizado pela prefeitura',
      accent: '#A155FF',
    },
    {
      icon: <TeamIcon />,
      title: 'Solicitar Admissão / Férias',
      sub: 'eSocial integrado',
      accent: '#43C1EF',
    },
  ]

  return (
    <div style={{ ...cardStyle, padding: '20px' }}>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', marginBottom: 14 }}>
        Ações Rápidas & Envios
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {actions.map((a, i) => (
          <div
            key={i}
            onDragOver={a.special === 'upload' ? e => { e.preventDefault(); setDragging(true) } : undefined}
            onDragLeave={a.special === 'upload' ? () => setDragging(false) : undefined}
            onDrop={a.special === 'upload' ? e => { e.preventDefault(); setDragging(false) } : undefined}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 14px',
              background: dragging && a.special === 'upload' ? 'rgba(29,78,216,0.04)' : '#F8FAFC',
              border: dragging && a.special === 'upload'
                ? '1.5px dashed #1D4ED8'
                : '1px solid #F1F5F9',
              borderRadius: 12,
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {a.special === 'upload' ? (
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'rgba(29,78,216,0.06)',
                border: '1.5px dashed rgba(29,78,216,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <UploadIcon />
              </div>
            ) : (
              <div style={{ flexShrink: 0 }}>{a.icon}</div>
            )}
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#030303' }}>
                {a.title}
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#94A3B8', marginTop: 1 }}>
                {a.special === 'upload' ? 'Arraste ou clique para enviar · OFX, PDF' : a.sub}
              </div>
            </div>
            <div style={{
              width: 26, height: 26, borderRadius: 8,
              background: a.accent + '12',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5h6M5 2l3 3-3 3" stroke={a.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Calendário Fiscal ────────────────────────────────────────────────────────

const CALENDAR_ITEMS = [
  { date: '07 Out', label: 'Prazo Envio Extratos', state: 'done' },
  { date: '15 Out', label: 'Fechamento Pró-labore e Folha', state: 'today' },
  { date: '20 Out', label: 'Vencimento Simples Nacional', state: 'upcoming-amber' },
  { date: '31 Out', label: 'Prazo Limite NF-e Entradas', state: 'upcoming' },
]

function CalendarioCard() {
  return (
    <div style={{ ...cardStyle, padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#030303' }}>
          Rotinas Fiscais
        </div>
        <span style={{ ...pillStyle, background: '#EFF6FF', color: '#1D4ED8' }}>
          Hoje: 15 Terça
        </span>
      </div>

      <div style={{ fontFamily: "'Michroma', sans-serif", fontSize: 11.5, color: '#94A3B8', letterSpacing: '0.06em', marginBottom: 14 }}>
        OUTUBRO 2024
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {CALENDAR_ITEMS.map((item, i) => {
          const dotColor =
            item.state === 'done' ? '#10B981' :
            item.state === 'today' ? '#1D4ED8' :
            item.state === 'upcoming-amber' ? '#F59E0B' : '#CBD5E1'

          return (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: dotColor, flexShrink: 0 }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
                <span style={{ fontFamily: "'Michroma', sans-serif", fontSize: 11, color: '#94A3B8', flexShrink: 0 }}>{item.date}</span>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: item.state === 'today' ? 700 : 500,
                  fontSize: 12.5,
                  color: item.state === 'done' ? '#94A3B8' : item.state === 'today' ? '#030303' : '#374151',
                  textDecoration: item.state === 'done' ? 'line-through' : 'none',
                }}>
                  {item.label}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Fatura Contábil ──────────────────────────────────────────────────────────

function FaturaCard() {
  return (
    <div style={{ ...cardStyle, padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#030303' }}>
          Fatura Contábil
        </div>
        <span style={{ ...pillStyle, background: '#DCFCE7', color: '#15803D' }}>
          <CheckCircleIcon color="#10B981" size={12} />
          <span style={{ marginLeft: 4 }}>Pago</span>
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
        <span style={{ fontFamily: "'Michroma', sans-serif", fontSize: 22, color: '#030303' }}>R$ 450,00</span>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#94A3B8' }}>/mês</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
        <CheckCircleIcon color="#10B981" size={13} />
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B' }}>
          Pago via PIX no dia 05/10
        </span>
      </div>

      <button style={{
        display: 'flex', alignItems: 'center', gap: 6,
        fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12,
        color: '#1D4ED8', background: '#EFF6FF', border: 'none',
        borderRadius: 8, padding: '7px 12px', cursor: 'pointer', width: '100%',
        justifyContent: 'center',
      }}>
        <DownloadIcon />
        Ver Nota Fiscal do Escritório
      </button>
    </div>
  )
}

// ─── Contador Dedicado ────────────────────────────────────────────────────────

function ContadorCard() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #1D4ED8, #A155FF)', padding: 1.5, borderRadius: 16 }}>
      <div style={{ background: '#FFFFFF', borderRadius: 14.5, padding: '20px' }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#030303', marginBottom: 14 }}>
          Seu Contador Dedicado
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'linear-gradient(135deg, #1D4ED8, #A155FF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
            fontSize: 14, color: '#fff',
          }}>CE</div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13.5, color: '#030303' }}>
              Carlos Eduardo
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B' }}>
              CRC-SP · Contador Responsável
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 4 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 600, color: '#15803D' }}>Online agora</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12,
            color: '#1D4ED8', background: '#EFF6FF',
            border: '1px solid rgba(29,78,216,0.15)', borderRadius: 9,
            padding: '8px 10px', cursor: 'pointer',
          }}>
            <GoogleMeetIcon />
            Meet
          </button>
          {/* Botão Oficial do WhatsApp com seu link e ícone integrado */}
          <a
            href="https://wa.me/5521993253591?text=Ol%C3%A1%20Sheila!%20Acessei%20a%20demonstra%C3%A7%C3%A3o%20do%20HubCont%C3%A1bil%20e%20gostaria%20de%20conversar%20sobre%20a%20plataforma."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: 12,
              color: '#fff',
              background: '#25D366',
              border: 'none',
              borderRadius: 9,
              padding: '8px 10px',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'opacity 0.15s ease'
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFFFFF" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.477-.15-.678.15-.2.301-.778.979-.954 1.18-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.238-.244-.588-.492-.508-.678-.518l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.23 3.111c.15.201 2.124 3.243 5.145 4.549 3.021 1.306 3.021.871 3.573.821.552-.05 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zM12 2a10 10 0 00-8.584 15.112L2 22l4.988-1.309A10 10 0 1012 2zm0 18.25a8.214 8.214 0 01-4.19-1.149l-.3-.178-3.113.816.83-3.033-.195-.311A8.25 8.25 0 1112 20.25z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── Componente Principal ─────────────────────────────────────────────────────

export default function Dashboard() {
  const [bannerVisible, setBannerVisible] = useState(true)

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%', background: '#F5F7FB' }}>
      {/* 1. Sidebar Inteligente */}
      <Sidebar activeTab="dashboard" />

        {/* Área de Conteúdo com Alinhamento Perfeito e Respiro Generoso */}
        <main style={{ flex: 1, padding: '32px 40px', overflowY: 'auto', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1360, display: 'flex', flexDirection: 'column', gap: 28 }}>
            
            {/* Banner Preventivo */}
            {bannerVisible && (
              <div style={{
                background: 'rgba(67,193,239,0.07)',
                border: '1px solid rgba(67,193,239,0.4)',
                borderRadius: 16,
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 16,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: 'rgba(67,193,239,0.15)',
                    border: '1px solid rgba(67,193,239,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <ShieldCheckIcon size={22} color="#43C1EF" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#030303' }}>
                      Certificado Digital A1 vence em{' '}
                      <span style={{ fontFamily: "'Michroma', sans-serif", fontSize: 13, color: '#0E7490' }}>18 dias!</span>
                    </div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 3 }}>
                      Evite bloqueio na emissão de NF-e. Renove online em 5 minutos com desconto exclusivo.
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                  <button style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13,
                    color: '#fff', background: '#1D4ED8',
                    border: 'none', borderRadius: 10, padding: '9px 18px', cursor: 'pointer',
                    boxShadow: '0 2px 10px rgba(29,78,216,0.25)'
                  }}>
                    Renovar Certificado
                  </button>
                  <button
                    onClick={() => setBannerVisible(false)}
                    style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: 'rgba(100,116,139,0.08)', border: 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <XIcon />
                  </button>
                </div>
              </div>
            )}

            {/* LINHA DE KPIS COM ESPAÇAMENTO PERFEITO */}
            <div className="kpi-grid">
              <KPITributos />
              <KPIVencimento />
              <KPICertificado />
              <KPINotas />
            </div>

            {/* GRID PRINCIPAL */}
            <div className="dashboard-layout">
              {/* Coluna Esquerda */}
              <div className="dashboard-main-col">
                <ObrigacoesCard />
                <AcoesRapidasCard />
              </div>

              {/* Coluna Direita */}
              <div className="dashboard-side-col">
                <CalendarioCard />
                <FaturaCard />
                <ContadorCard />
              </div>
            </div>

          </div>
        </main>
    </div>
  )
}