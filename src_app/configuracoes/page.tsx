"use client"

import { useState } from "react"
import type { CSSProperties } from "react"

// ─── Configurações page (route: /configuracoes) ───────────────────────────────

const COLOR_PRESETS = [
  { id: "royal",   label: "Azul Royal",       hex: "#1D4ED8" },
  { id: "emerald", label: "Verde Esmeralda",   hex: "#059669" },
  { id: "purple",  label: "Violeta Tech",      hex: "#7C3AED" },
  { id: "amber",   label: "Âmbar Solar",       hex: "#D97706" },
  { id: "cyan",    label: "Ciano Elétrico",    hex: "#0284C7" },
]

export default function ConfiguracoesPage() {
  const [corPrimaria, setCorPrimaria] = useState("#1D4ED8")
  const [nomeEscritorio, setNomeEscritorio] = useState("HubContábil Financial & Gestão")
  const [crc, setCrc] = useState("CRC-SP 2SP034821/O-8")
  const [whatsapp, setWhatsapp] = useState("+55 (11) 98765-4321")
  const [salvo, setSalvo] = useState(false)
  const [modulos, setModulos] = useState({ certificado: true, tributos: true, solicitacoes: true, notas: true })
  const toggleModulo = (key: keyof typeof modulos) => setModulos(prev => ({ ...prev, [key]: !prev[key] }))
  const salvar = () => { setSalvo(true); setTimeout(() => setSalvo(false), 3000) }

  const inputStyle: CSSProperties = {
    width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10,
    padding: '10px 14px', fontSize: 13, color: '#030303', outline: 'none', boxSizing: 'border-box',
  }

  return (
    <>
      <style>{`
        .cfg-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        @media (min-width: 1024px) { .cfg-grid { grid-template-columns: 7fr 5fr; align-items: start; } }
        .cfg-modules { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .cfg-modules { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1280px) { .cfg-modules { grid-template-columns: repeat(4, 1fr); } }
        .cfg-fields { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .cfg-fields { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      {/* Action bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '16px 24px', boxShadow: '0 4px 16px rgba(3,3,3,0.04)', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14.5, color: '#030303' }}>Gerenciamento de Marca</div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 2 }}>As alterações salvas são refletidas em tempo real no portal dos seus clientes.</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {salvo && (
            <span style={{ fontSize: 12, fontWeight: 700, color: '#059669', background: '#ECFDF5', padding: '6px 14px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#059669" strokeWidth="2.2" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
              Salvo com sucesso!
            </span>
          )}
          <button onClick={salvar} style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: corPrimaria, color: '#FFFFFF', border: 'none', borderRadius: 10, padding: '10px 20px', fontSize: 12.5, fontWeight: 700, cursor: 'pointer', boxShadow: `0 4px 14px ${corPrimaria}40` }}>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21H3a2 2 0 01-2-2V4a2 2 0 012-2h11l5 5v12a2 2 0 01-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
            </svg>
            Salvar Alterações
          </button>
        </div>
      </div>

      {/* Two-column grid */}
      <div className="cfg-grid">
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Office identity */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke={corPrimaria} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="16" height="11" rx="1" /><path d="M5 7V5a7 7 0 0114 0v2" /><circle cx="10" cy="13" r="1.5" />
              </svg>
              Identidade do Escritório
            </div>

            {/* Logo upload */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 8 }}>Logotipo Oficial do Escritório</label>
              <div style={{ border: '1.5px dashed #CBD5E1', borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F8FAFC', flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: '#FFFFFF', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"><polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 700, color: '#030303' }}>logo_escritorio.svg</div>
                    <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 2 }}>SVG ou PNG transparente (máx. 2MB)</div>
                  </div>
                </div>
                <button style={{ fontSize: 12, fontWeight: 600, color: corPrimaria, background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 8, padding: '7px 14px', cursor: 'pointer' }}>
                  Substituir Logo
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Nome de Exibição do Escritório</label>
                <input type="text" value={nomeEscritorio} onChange={e => setNomeEscritorio(e.target.value)} style={inputStyle} />
              </div>
              <div className="cfg-fields">
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Registro CRC do Responsável</label>
                  <input type="text" value={crc} onChange={e => setCrc(e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>WhatsApp de Suporte</label>
                  <input type="text" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} style={inputStyle} />
                </div>
              </div>
            </div>
          </div>

          {/* Color picker */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={corPrimaria} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13.5" cy="6.5" r="2.5" /><circle cx="19" cy="12" r="2.5" /><circle cx="13.5" cy="17.5" r="2.5" /><circle cx="8" cy="12" r="2.5" />
              </svg>
              Cor Primária da Plataforma (Branding)
            </div>
            <div style={{ fontSize: 12, color: '#64748B', marginBottom: 18, lineHeight: 1.5 }}>
              Essa cor será aplicada dinamicamente em todos os botões, realces, ícones ativos e badges dos seus clientes.
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 18 }}>
              {COLOR_PRESETS.map(preset => (
                <button key={preset.id} onClick={() => setCorPrimaria(preset.hex)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 10, border: corPrimaria === preset.hex ? `2px solid ${preset.hex}` : '1px solid #E2E8F0', background: corPrimaria === preset.hex ? `${preset.hex}10` : '#FFFFFF', cursor: 'pointer', transition: 'all 0.15s' }}>
                  <span style={{ width: 14, height: 14, borderRadius: '50%', background: preset.hex, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, fontWeight: corPrimaria === preset.hex ? 700 : 500, color: '#030303' }}>{preset.label}</span>
                  {corPrimaria === preset.hex && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={preset.hex} strokeWidth="2" strokeLinecap="round"><path d="M10 3L5 8.5 2 5.5" /></svg>}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>Código HEX Customizado:</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8, padding: '5px 12px' }}>
                <input type="color" value={corPrimaria} onChange={e => setCorPrimaria(e.target.value)} style={{ width: 24, height: 24, border: 'none', background: 'transparent', cursor: 'pointer' }} />
                <span style={{ fontFamily: "'Michroma', monospace", fontSize: 12, color: '#030303' }}>{corPrimaria.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — live preview */}
        <div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={corPrimaria} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Pré-visualização em Tempo Real
              </div>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: corPrimaria, background: `${corPrimaria}15`, padding: '2px 8px', borderRadius: 999 }}>Ao Vivo</span>
            </div>
            <div style={{ fontSize: 12, color: '#64748B', marginBottom: 18, lineHeight: 1.4 }}>
              Veja como a interface do seu cliente responde à sua paleta:
            </div>
            <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: 14, padding: 16 }}>
              <div style={{ background: '#FFFFFF', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #E2E8F0', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 6, height: 16, borderRadius: 999, background: corPrimaria }} />
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#030303' }}>{nomeEscritorio.slice(0, 16)}…</span>
                </div>
                <div style={{ background: corPrimaria, color: '#FFFFFF', fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 6 }}>+ Nova Ação</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div style={{ background: '#FFFFFF', padding: 12, borderRadius: 10, border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: 10, color: '#64748B' }}>Tributos Pendentes</div>
                  <div style={{ fontFamily: "'Michroma', monospace", fontSize: 14, color: '#030303', marginTop: 4 }}>R$ 1.240,00</div>
                  <div style={{ width: '100%', height: 4, background: '#F1F5F9', borderRadius: 999, marginTop: 8, overflow: 'hidden' }}>
                    <div style={{ width: '70%', height: '100%', background: corPrimaria }} />
                  </div>
                </div>
                <div style={{ background: '#FFFFFF', padding: 12, borderRadius: 10, border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: 10, color: '#64748B' }}>Status Fiscal</div>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: '#059669', marginTop: 4 }}>✓ Regular</div>
                  <div style={{ marginTop: 6, fontSize: 10, fontWeight: 600, color: corPrimaria, background: `${corPrimaria}15`, padding: '3px 6px', borderRadius: 4, textAlign: 'center' }}>Ver Certidão</div>
                </div>
              </div>
              <div style={{ background: '#FFFFFF', borderRadius: 10, border: '1px solid #E2E8F0', marginTop: 10, padding: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: corPrimaria, background: `${corPrimaria}15`, padding: '2px 6px', borderRadius: 4 }}>DAS</span>
                    <span style={{ fontSize: 10.5, fontWeight: 600, color: '#030303' }}>Simples Nacional</span>
                  </div>
                  <span style={{ background: corPrimaria, color: '#FFFFFF', fontSize: 9.5, fontWeight: 700, padding: '4px 8px', borderRadius: 6 }}>Baixar PDF</span>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 11.5, color: '#94A3B8', marginTop: 16, textAlign: 'center', lineHeight: 1.4 }}>
              Ao salvar, todos os clientes do escritório verão esta paleta instantaneamente.
            </div>
          </div>
        </div>
      </div>

      {/* CNAME domain */}
      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(2,132,199,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303' }}>Domínio Personalizado (CNAME)</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 2 }}>Permita que seus clientes acessem pelo endereço web do seu escritório</div>
            </div>
          </div>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#ECFDF5', color: '#059669', fontSize: 11, fontWeight: 700, padding: '5px 14px', borderRadius: 999, flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#059669" strokeWidth="1.8" strokeLinecap="round"><path d="M10 2L3 5v5c0 4.1 3 7.7 7 8.9C14 18.7 17 15.1 17 11V5l-7-3z" /><path d="M7 10l2 2 4-4" /></svg>
            SSL Ativo & Seguro
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 18, paddingTop: 18, borderTop: '1px solid #F1F5F9', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: '11px 16px', fontSize: 13, color: '#030303', fontFamily: "'Michroma', monospace" }}>
            app.apicecontabilidade.com.br
          </div>
          <button style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 12.5, color: '#1D4ED8', background: '#EFF6FF', border: '1px solid rgba(29,78,216,0.15)', borderRadius: 10, padding: '11px 20px', cursor: 'pointer', flexShrink: 0 }}>
            Testar DNS
          </button>
        </div>
      </div>

      {/* Modules toggle */}
      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={corPrimaria} strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>
          Módulos Visíveis para seus Clientes
        </div>
        <div style={{ fontSize: 12, color: '#64748B', marginBottom: 20 }}>Ative ou desative seções de acordo com os serviços contratados:</div>
        <div className="cfg-modules">
          {[
            { key: "tributos",    label: "Central de Tributos",      desc: "Download de DAS, FGTS e PIX" },
            { key: "certificado", label: "Monitor de Certificado",   desc: "Avisos de expiração do e-CNPJ" },
            { key: "solicitacoes",label: "Catálogo de Solicitações", desc: "Admissões, férias e chamados" },
            { key: "notas",       label: "Emissor de Notas Fiscais", desc: "Módulo integrado de NFS-e" },
          ].map(item => {
            const ativo = modulos[item.key as keyof typeof modulos]
            return (
              <div key={item.key} onClick={() => toggleModulo(item.key as keyof typeof modulos)} style={{ padding: 18, borderRadius: 14, border: ativo ? `1.5px solid ${corPrimaria}` : '1px solid #E2E8F0', background: ativo ? `${corPrimaria}06` : '#FFFFFF', cursor: 'pointer', transition: 'all 0.15s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#030303' }}>{item.label}</span>
                  <div style={{ width: 36, height: 20, borderRadius: 999, background: ativo ? corPrimaria : '#CBD5E1', padding: 2, display: 'flex', alignItems: 'center', justifyContent: ativo ? 'flex-end' : 'flex-start', transition: 'background 0.2s', flexShrink: 0 }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }} />
                  </div>
                </div>
                <div style={{ fontSize: 11.5, color: '#64748B', lineHeight: 1.4 }}>{item.desc}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
