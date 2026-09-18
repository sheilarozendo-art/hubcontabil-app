"use client";

import React from "react";
import { Search, Bell, Plus } from "lucide-react";

export default function Topbar({ 
  title = "Dashboard Geral", 
  subtitle = "Competência: Setembro / 2024" 
}: { title?: string; subtitle?: string }) {
  return (
    <header style={{
      height: 76,
      background: '#FFFFFF',
      borderBottom: '1px solid #E2E8F0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      boxSizing: 'border-box',
      fontFamily: "'Plus Jakarta Sans', sans-serif"
    }}>
      <div>
        <div style={{ fontSize: 17, fontWeight: 800, color: '#030303', letterSpacing: '-0.02em' }}>{title}</div>
        <div style={{ fontSize: 11.5, color: '#64748B', marginTop: 2 }}>{subtitle}</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {/* Barra de Busca */}
        <div style={{ position: 'relative' }}>
          <Search size={14} color="#64748B" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Buscar guias, notas fiscais, DAS... ⌘K"
            style={{
              width: 320,
              background: '#F5F7FB',
              border: '1px solid #E2E8F0',
              borderRadius: 12,
              padding: '8px 14px 8px 36px',
              fontSize: 12,
              color: '#030303',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          />
        </div>

        {/* Status Fiscal */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: '#ECFDF5',
          border: '1px solid #A7F3D0',
          padding: '6px 12px',
          borderRadius: 999
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#059669' }} />
          <span style={{ fontSize: 11.5, fontWeight: 700, color: '#059669' }}>Situação: Regular</span>
        </div>

        {/* Sino */}
        <button style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          border: '1px solid #E2E8F0',
          background: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative'
        }}>
          <Bell size={15} color="#64748B" />
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#A155FF', position: 'absolute', top: 8, right: 8 }} />
        </button>

        {/* Botão Primário */}
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: '#1D4ED8',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: 10,
          padding: '9px 16px',
          fontSize: 12,
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(29,78,216,0.25)'
        }}>
          <Plus size={15} />
          <span>Nova Solicitação</span>
        </button>
      </div>
    </header>
  );
}