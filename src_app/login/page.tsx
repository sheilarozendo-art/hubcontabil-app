"use client"

import { useState, type FormEvent } from "react"

// ─── Login page (route: /login — standalone, no Root layout) ──────────────────

export default function LoginPage() {
  const [email, setEmail] = useState("sheila@nexustech.com.br")
  const [senha, setSenha] = useState("")
  const [carregando, setCarregando] = useState(false)

  const entrar = (e: FormEvent) => {
    e.preventDefault()
    setCarregando(true)
    setTimeout(() => { window.location.href = "/" }, 700)
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#F5F7FB', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, boxSizing: 'border-box', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ width: '100%', maxWidth: 440, background: '#FFFFFF', borderRadius: 24, border: '1px solid #E2E8F0', padding: '40px 36px', boxShadow: '0 8px 30px rgba(3,3,3,0.06)', boxSizing: 'border-box' }}>
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 28 }}>
          <svg width="72" height="56" viewBox="0 0 400 313" fill="none" style={{ marginBottom: 12 }}>
            <path fillRule="evenodd" clipRule="evenodd" fill="#A155FF" stroke="#FFFFFF" strokeWidth="6" d="M238.81,240.28v-101.16c0-37.66-30.82-68.47-68.47-68.47h0c-37.66,0-68.47,30.81-68.47,68.47v169.63s68.47,0,68.47,0c37.66,0,68.47-30.81,68.47-68.47h0Z" />
            <path fillRule="evenodd" clipRule="evenodd" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="6" d="M398.76,240.28V68.47C398.76,30.81,367.95,0,330.29,0h0c-37.66,0-68.47,30.81-68.47,68.47v171.81c0,37.66,30.82,68.47,68.47,68.47h0c37.66,0,68.47-30.81,68.47-68.47h0Z" />
            <path fillRule="evenodd" clipRule="evenodd" fill="#43C1EF" d="M136.94,308.75v-68.48c0-37.65-30.82-68.47-68.47-68.47h0C30.82,171.81,0,202.63,0,240.28h0c0,37.66,30.82,68.48,68.47,68.48h68.48Z" />
            <path fillRule="evenodd" clipRule="evenodd" fill="#1D4ED8" d="M136.94,240.28v68.48h-35.07v-128.19c20.89,11.76,35.07,34.16,35.07,59.71h0Z" />
          </svg>
          <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em', color: '#030303' }}>HUBCONTÁBIL</div>
          <div style={{ fontSize: 10, letterSpacing: '0.24em', color: '#64748B', fontWeight: 700, marginTop: 2 }}>FINANCIAL & TAX SUITE</div>
        </div>

        {/* Welcome */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#030303', margin: 0 }}>Acesse seu Portal do Cliente</h2>
          <p style={{ fontSize: 12.5, color: '#64748B', marginTop: 6, marginBottom: 0 }}>Consulte seus tributos, certidões e rotinas em um só lugar</p>
        </div>

        {/* Form */}
        <form onSubmit={entrar} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>E-mail Corporativo</label>
            <div style={{ position: 'relative' }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                <rect x="2" y="4" width="16" height="12" rx="2" /><path d="M2 7l8 5 8-5" />
              </svg>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: '11px 14px 11px 42px', fontSize: 13, color: '#030303', outline: 'none', boxSizing: 'border-box' }} />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>Senha de Acesso</label>
              <a href="#" style={{ fontSize: 11.5, fontWeight: 600, color: '#1D4ED8', textDecoration: 'none' }}>Esqueceu?</a>
            </div>
            <div style={{ position: 'relative' }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                <rect x="3" y="9" width="14" height="10" rx="2" /><path d="M7 9V6a3 3 0 016 0v3" />
              </svg>
              <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="••••••••••••" style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: '11px 14px 11px 42px', fontSize: 13, color: '#030303', outline: 'none', boxSizing: 'border-box' }} />
            </div>
          </div>

          <button type="submit" disabled={carregando} style={{ marginTop: 8, background: '#1D4ED8', color: '#FFFFFF', border: 'none', borderRadius: 12, padding: '12px 18px', fontSize: 13, fontWeight: 700, cursor: carregando ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 4px 14px rgba(29,78,216,0.3)' }}>
            {carregando ? 'Autenticando…' : 'Entrar no Sistema'}
            {!carregando && <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="10" x2="15" y2="10" /><polyline points="10 5 15 10 10 15" /></svg>}
          </button>
        </form>

        {/* Demo notice */}
        <div style={{ marginTop: 24, padding: '14px 16px', background: 'rgba(29,78,216,0.05)', border: '1px solid rgba(29,78,216,0.2)', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" style={{ flexShrink: 0 }}>
            <circle cx="10" cy="10" r="8" /><path d="M10 6v4l2.5 2.5" />
          </svg>
          <div style={{ fontSize: 11.5, color: '#374151', lineHeight: 1.4 }}>
            <strong>Modo Portfólio Ativo:</strong> Clique em "Entrar no Sistema" para testar com a empresa modelo <em>Nexus Tech Studio Ltda</em>.
          </div>
        </div>

        {/* Security badge */}
        <div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: '#64748B', fontSize: 11 }}>
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#059669" strokeWidth="1.8" strokeLinecap="round"><path d="M10 2L3 5v5c0 4.1 3 7.7 7 8.9C14 18.7 17 15.1 17 11V5l-7-3z" /><path d="M7 10l2 2 4-4" /></svg>
          Ambiente Criptografado SSL • ICP-Brasil
        </div>
      </div>
    </div>
  )
}
