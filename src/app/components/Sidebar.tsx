"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Receipt, 
  FolderArchive, 
  Headset, 
  ChevronDown, 
  MessageSquare, 
  ArrowUpRight, 
  Settings,
  Menu,
  X
} from "lucide-react";

export default function Sidebar({ activeTab = "dashboard" }: { activeTab?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", href: "/", icon: <LayoutDashboard size={16} />, label: "Dashboard" },
    { id: "tributos", href: "/tributos", icon: <Receipt size={16} />, label: "Tributos & Guias", badge: "1 a vencer" },
    { id: "documentos", href: "/documentos", icon: <FolderArchive size={16} />, label: "Documentos & Cofre" },
    { id: "solicitacoes", href: "/solicitacoes", icon: <Headset size={16} />, label: "Solicitações" },
    { id: "configuracoes", href: "/configuracoes", icon: <Settings size={16} />, label: "Personalização White-label" },
  ];

  const menuContent = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: '24px 20px', boxSizing: 'border-box' }}>
      <div>
        {/* Logo HubContábil Oficial */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
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

          {/* Botão X para fechar gaveta no mobile */}
          {mobileOpen && (
            <button 
              onClick={() => setMobileOpen(false)}
              className="lg:hidden"
              style={{ background: '#F1F5F9', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <X size={18} color="#64748B" />
            </button>
          )}
        </div>

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
          <ChevronDown size={14} color="#64748B" />
        </div>

        {/* Links de Navegação */}
        <nav style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileOpen(false)}
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
                  transition: 'background 0.15s ease'
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
          <div style={{ fontSize: 11, color: '#64748B', marginTop: 4 }}>
            Resposta média em até 15 min.
          </div>
          <a
            href="https://wa.me/55SEUDDDSEUNUMERO?text=Ol%C3%A1%20Sheila!%20Acessei%20o%20HubCont%C3%A1bil%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            style={{
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
              gap: 6,
              textDecoration: 'none',
              boxSizing: 'border-box'
            }}
          >
            <span>WhatsApp</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Perfil Único com Logout */}
        <Link href="/login" style={{ textDecoration: 'none' }}>
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
              <div style={{ fontSize: 10.5, color: '#64748B' }}>Sócia • Sair</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Botão Hambúrguer flutuante (Só visível no celular/tablet) */}
      <button
        onClick={() => setMobileOpen(true)}
        className="flex lg:hidden fixed bottom-5 right-5 z-50 bg-[#1D4ED8] text-white border-none rounded-full w-13 h-13 shadow-xl cursor-pointer items-center justify-center"
        aria-label="Abrir Menu"
      >
        <Menu size={24} />
      </button>

      {/* Barra Lateral Fixa do Desktop (FICA OCULTA NO CELULAR E SÓ APARECE NO COMPUTADOR!) */}
      <aside 
        className="hidden lg:flex flex-col justify-between w-[270px] min-w-[270px] bg-white border-r border-[#E2E8F0] min-h-screen shrink-0"
      >
        {menuContent}
      </aside>

      {/* Gaveta Deslizante no Mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div 
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
          />
          <div className="relative w-[280px] max-w-[85%] bg-white h-full shadow-2xl z-10 flex flex-col justify-between">
            {menuContent}
          </div>
        </div>
      )}
    </>
  );
}