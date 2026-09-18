"use client";

import React from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Receipt, 
  FolderArchive, 
  FileText, 
  ShieldCheck, 
  Headset, 
  Building2, 
  ChevronDown, 
  MessageSquare,
  ArrowUpRight,
  Settings
} from "lucide-react";

export default function Sidebar({ activeTab = "dashboard" }: { activeTab?: string }) {
  const menuItems = [
    { id: "dashboard", href: "/", icon: <LayoutDashboard size={16} />, label: "Dashboard" },
    { id: "tributos", href: "/tributos", icon: <Receipt size={16} />, label: "Tributos & Guias", badge: "1 a vencer" },
    { id: "documentos", href: "/documentos", icon: <FolderArchive size={16} />, label: "Documentos & Cofre" },
    { id: "solicitacoes", href: "/solicitacoes", icon: <Headset size={16} />, label: "Solicitações" },
    { id: "configuracoes", href: "/configuracoes", icon: <Settings size={16} />, label: "Personalização White-label" },
  ];

  return (
    <aside style={{
      width: 270,
      background: '#FFFFFF',
      borderRight: '1px solid #E2E8F0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexShrink: 0,
      minHeight: '100vh',
      padding: '24px 20px',
      boxSizing: 'border-box',
      fontFamily: "'Plus Jakarta Sans', sans-serif"
    }}>
      <div>
        {/* Logo HubContábil */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 8px 16px 8px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 32 }}>
              <span style={{ width: 9, height: 32, background: '#1D4ED8', borderRadius: 999 }} />
              <span style={{ width: 9, height: 24, background: '#A155FF', borderRadius: 999 }} />
              <span style={{ width: 9, height: 16, background: '#43C1EF', borderRadius: 999 }} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: '-0.02em', color: '#030303', lineHeight: 1 }}>HUBCONTÁBIL</div>
              <div style={{ fontSize: 9, letterSpacing: '0.22em', color: '#64748B', fontWeight: 700, marginTop: 3 }}>FINANCIAL</div>
            </div>
          </div>
        </Link>

        {/* Empresa Ativa */}
        <div style={{
          marginTop: 12,
          padding: '12px 14px',
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer'
        }}>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#030303', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Nexus Tech Studio Ltda
            </div>
            <div style={{ fontSize: 10, color: '#64748B', marginTop: 2 }}>
              CNPJ: 42.109.876/0001-50
            </div>
          </div>
          <ChevronDown size={15} color="#64748B" />
        </div>

        {/* Menu de Navegação Dinâmico */}
        <nav style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: 12,
                  background: isActive ? '#EFF6FF' : 'transparent',
                  color: isActive ? '#1D4ED8' : '#64748B',
                  fontWeight: isActive ? 700 : 600,
                  fontSize: 12.5,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {React.cloneElement(item.icon, { color: isActive ? '#1D4ED8' : '#64748B' })}
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span style={{ background: '#FEF3C7', color: '#D97706', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>
                    {item.badge}
                  </span>
                )}

                {isActive && (
                  <span style={{ width: 5, height: 16, background: '#1D4ED8', borderRadius: 999 }} />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Rodapé da Sidebar */}
      <div>
        <div style={{
          padding: '14px',
          background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
          border: '1px solid #E2E8F0',
          borderRadius: 14,
          marginBottom: 16
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#1D4ED8' }}>
              <MessageSquare size={14} />
              <span>Contador Dedicado</span>
            </div>
            <span style={{ fontSize: 9, background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '2px 6px', borderRadius: 6, color: '#059669', fontWeight: 700 }}>
              Online
            </span>
          </div>
          <div style={{ fontSize: 11, color: '#64748B', marginTop: 4, lineHeight: 1.4 }}>
            Resposta média em até 15 min.
          </div>
          <button style={{
            width: '100%',
            marginTop: 10,
            background: '#1D4ED8',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: 10,
            padding: '8px 12px',
            fontSize: 11.5,
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6
          }}>
            <span>WhatsApp</span>
            <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Perfil com Link para /login */}
        <Link href="/login" style={{ textDecoration: 'none' }} title="Clique para sair / trocar de usuário">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 12, borderTop: '1px solid #F1F5F9', cursor: 'pointer' }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1D4ED8, #A155FF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: 12
            }}>
              SR
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#030303' }}>Sheila Rozendo</div>
              <div style={{ fontSize: 10.5, color: '#64748B' }}>Sócia Administradora • Sair</div>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  );
}