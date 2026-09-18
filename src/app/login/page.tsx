"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, ArrowRight, Lock, Mail, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("sheila@nexustech.com.br");
  const [senha, setSenha] = useState("••••••••••••");
  const [carregando, setCarregando] = useState(false);

  const entrarNoSistema = (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    setTimeout(() => {
      router.push("/");
    }, 600);
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: '#F5F7FB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      boxSizing: 'border-box',
      fontFamily: "'Plus Jakarta Sans', sans-serif"
    }}>
      <div style={{
        width: '100%',
        maxWidth: 440,
        background: '#FFFFFF',
        borderRadius: 24,
        border: '1px solid #E2E8F0',
        padding: '40px 36px',
        boxShadow: '0 8px 30px rgba(3, 3, 3, 0.06)',
        boxSizing: 'border-box'
      }}>
        {/* LOGO HUBCONTÁBIL OFICIAL */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 38, marginBottom: 14 }}>
            <span style={{ width: 11, height: 38, background: '#1D4ED8', borderRadius: 999 }} />
            <span style={{ width: 11, height: 28, background: '#A155FF', borderRadius: 999 }} />
            <span style={{ width: 11, height: 18, background: '#43C1EF', borderRadius: 999 }} />
          </div>
          <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em', color: '#030303', textAlign: 'center' }}>
            HUBCONTÁBIL
          </div>
          <div style={{ fontSize: 10, letterSpacing: '0.24em', color: '#64748B', fontWeight: 700, marginTop: 2, textAlign: 'center' }}>
            FINANCIAL & TAX SUITE
          </div>
        </div>

        {/* CABEÇALHO DE BOAS-VINDAS */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#030303', margin: 0 }}>
            Acesse seu Portal do Cliente
          </h2>
          <p style={{ fontSize: 12.5, color: '#64748B', marginTop: 6, margin: '6px 0 0 0' }}>
            Consulte seus tributos, certidões e rotinas em um só lugar
          </p>
        </div>

        {/* FORMULÁRIO */}
        <form onSubmit={entrarNoSistema} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* E-mail */}
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>
              E-mail Corporativo
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="#94A3B8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: 12,
                  padding: '11px 14px 11px 42px',
                  fontSize: 13,
                  color: '#030303',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Senha */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>
                Senha de Acesso
              </label>
              <a href="#" style={{ fontSize: 11.5, fontWeight: 600, color: '#1D4ED8', textDecoration: 'none' }}>
                Esqueceu?
              </a>
            </div>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#94A3B8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                required
                style={{
                  width: '100%',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: 12,
                  padding: '11px 14px 11px 42px',
                  fontSize: 13,
                  color: '#030303',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* BOTÃO PRINCIPAL */}
          <button
            type="submit"
            disabled={carregando}
            style={{
              marginTop: 8,
              background: '#1D4ED8',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 12,
              padding: '12px 18px',
              fontSize: 13,
              fontWeight: 700,
              cursor: carregando ? 'wait' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              boxShadow: '0 4px 14px rgba(29, 78, 216, 0.3)',
              transition: 'all 0.15s ease'
            }}
          >
            <span>{carregando ? "Autenticando..." : "Entrar no Sistema"}</span>
            {!carregando && <ArrowRight size={15} />}
          </button>
        </form>

        {/* CARD DE DEMO RÁPIDA (PARA QUEM AVALIAR O PORTFÓLIO) */}
        <div style={{
          marginTop: 24,
          padding: '14px 16px',
          background: 'rgba(29, 78, 216, 0.05)',
          border: '1px solid rgba(29, 78, 216, 0.2)',
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
          <CheckCircle2 size={18} color="#1D4ED8" style={{ flexShrink: 0 }} />
          <div style={{ fontSize: 11.5, color: '#374151', lineHeight: 1.4 }}>
            <strong>Modo Portfólio Ativo:</strong> Clique em "Entrar no Sistema" para testar com a empresa modelo <em>Nexus Tech Studio Ltda</em>.
          </div>
        </div>

        {/* SELO DE SEGURANÇA NO RODAPÉ */}
        <div style={{
          marginTop: 24,
          paddingTop: 18,
          borderTop: '1px solid #F1F5F9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          color: '#64748B',
          fontSize: 11
        }}>
          <ShieldCheck size={14} color="#059669" />
          <span>Ambiente Criptografado SSL • ICP-Brasil</span>
        </div>
      </div>
    </div>
  );
}