"use client"

import { useState } from "react"
import type { CSSProperties } from "react"
import Banner from "../components/BannerAlerta"
import { I } from "../components/Icons"

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

export default function DocumentosPage() {
  const [filtro, setFiltro] = useState('todos')
  const [dragging, setDragging] = useState(false)
  const [bannerOpen, setBannerOpen] = useState(true)

  const arquivos = ARQUIVOS.filter(a =>
    filtro === 'cliente' ? a.por.includes('Você') :
    filtro === 'contador' ? a.por.includes('Contador') : true
  )

  const th: CSSProperties = {
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

              <div style={{ width: '100%', overflowX: 'auto', minWidth: 0, WebkitOverflowScrolling: 'touch' } as CSSProperties}>
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
