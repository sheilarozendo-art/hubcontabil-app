"use client";

import React from "react";
import { Search, Bell, Plus } from "lucide-react";

export default function Topbar({ 
  title = "Dashboard Geral", 
  subtitle = "Competência: Setembro / 2024" 
}: { title?: string; subtitle?: string }) {
  return (
    <header className="h-16 lg:h-[76px] bg-white border-b border-[#E2E8F0] flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 font-sans">
      <div>
        <h2 className="text-base sm:text-lg font-extrabold text-[#030303] tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-[11px] text-[#64748B] hidden sm:block mt-0.5">
          {subtitle}
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3.5">
        {/* Campo de Busca (Oculto em telas muito pequenas para não quebrar) */}
        <div className="relative hidden md:block">
          <Search size={14} className="text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar guias, DAS... ⌘K"
            className="w-48 lg:w-72 bg-[#F5F7FB] border border-[#E2E8F0] rounded-xl pl-8 pr-3 py-1.5 text-xs text-[#030303] outline-none focus:ring-2 focus:ring-[#1D4ED8]"
          />
        </div>

        {/* Badge Situação Regular */}
        <div className="flex items-center gap-1.5 bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-1 rounded-full shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#059669]" />
          <span className="text-[11px] font-bold text-[#059669] hidden sm:inline">Regular</span>
        </div>

        {/* Notificações */}
        <button className="w-8 h-8 rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center cursor-pointer relative hover:bg-slate-50 transition shrink-0">
          <Bell size={14} color="#64748B" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#A155FF] absolute top-2 right-2" />
        </button>

        {/* Botão Nova Ação */}
        <button className="flex items-center gap-1.5 bg-[#1D4ED8] hover:bg-blue-700 text-white border-none rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-bold shadow-sm transition shrink-0 cursor-pointer">
          <Plus size={14} />
          <span className="hidden sm:inline">Nova Solicitação</span>
        </button>
      </div>
    </header>
  );
}