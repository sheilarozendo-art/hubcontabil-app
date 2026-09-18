"use client";

import React from "react";
import { Search, Bell, Plus } from "lucide-react";

export default function Topbar({ 
  title = "Dashboard Geral", 
  subtitle = "Competência: Setembro / 2024" 
}: { title?: string; subtitle?: string }) {
  return (
    <header 
      style={{
        height: 74,
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px', /* Respiro elegante garantido na esquerda e na direita */
        boxSizing: 'border-box',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        flexShrink: 0,
        width: '100%'
      }}
      className="sm:!px-8 lg:!px-10"
    >
      {/* 1. Lado Esquerdo: Título com margem de segurança garantida */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0, paddingRight: 12 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: '#030303', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </h2>
        <p className="hidden md:block" style={{ fontSize: 11.5, color: '#64748B', margin: '3px 0 0 0', fontWeight: 500, whiteSpace: 'nowrap' }}>
          {subtitle}
        </p>
      </div>

      {/* 2. Lado Direito: Ações */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        {/* Campo de Busca (Apenas no Desktop) */}
        <div className="relative hidden lg:block">
          <Search size={14} color="#64748B" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Buscar guias, notas fiscais, DAS... ⌘K"
            style={{
              width: 260,
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: 12,
              padding: '8px 14px 8px 38px',
              fontSize: 12,
              color: '#030303',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          />
        </div>

        {/* Badge Situação Regular */}
        <div className="hidden sm:flex items-center gap-1.5 bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1.5 rounded-full">
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#059669' }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#059669' }}>Regular</span>
        </div>

        {/* Notificações */}
        <button 
          title="Notificações"
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            border: '1px solid #E2E8F0',
            background: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <Bell size={14} color="#64748B" />
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#A155FF', position: 'absolute', top: 7, right: 7 }} />
        </button>

        {/* Botão Nova Solicitação */}
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: '#1D4ED8',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: 10,
          padding: '8px 14px',
          fontSize: 12,
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(29,78,216,0.25)'
        }}>
          <Plus size={14} />
          <span className="hidden sm:inline">Nova Solicitação</span>
        </button>
      </div>
    </header>
  );
}