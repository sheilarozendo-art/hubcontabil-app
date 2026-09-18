"use client";

import React from "react";
import { ShieldCheck, X } from "lucide-react";

interface BannerAlertaProps {
  titulo: React.ReactNode;
  descricao: string;
  badge?: string;
  botaoTexto?: string;
  botaoSecundarioTexto?: string;
  onClique?: () => void;
  onCliqueSecundario?: () => void;
  fechavel?: boolean;
  onFechar?: () => void;
}

export default function BannerAlerta({
  titulo,
  descricao,
  badge,
  botaoTexto,
  botaoSecundarioTexto,
  onClique,
  onCliqueSecundario,
  fechavel = false,
  onFechar,
}: BannerAlertaProps) {
  return (
    <div
      style={{
        background: "rgba(67, 193, 239, 0.07)",
        border: "1px solid rgba(67, 193, 239, 0.4)",
        borderRadius: 16,
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        boxSizing: "border-box",
        width: "100%",
      }}
      className="md:!flex-row md:!items-center md:!justify-between"
    >
      {/* Lado Esquerdo: Ícone + Textos */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            background: "rgba(67, 193, 239, 0.15)",
            border: "1px solid rgba(67, 193, 239, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginTop: 2
          }}
        >
          <ShieldCheck size={22} color="#0284C7" />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#030303" }}>
              {titulo}
            </div>
            {badge && (
              <span
                style={{
                  background: "#FEF3C7",
                  color: "#D97706",
                  fontSize: 10.5,
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: 999,
                  whiteSpace: "nowrap"
                }}
              >
                {badge}
              </span>
            )}
          </div>
          <div style={{ fontSize: 12, color: "#64748B", marginTop: 4, lineHeight: 1.4 }}>
            {descricao}
          </div>
        </div>
      </div>

      {/* Lado Direito: Ações (No celular quebram linha e mostram o texto COMPLETO sem cortar!) */}
      <div 
        style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 10, 
          flexWrap: "wrap",
          width: "100%"
        }}
        className="md:!w-auto md:!flex-nowrap shrink-0"
      >
        {botaoSecundarioTexto && (
          <button
            onClick={onCliqueSecundario}
            style={{
              fontFamily: "inherit",
              fontWeight: 600,
              fontSize: 12,
              color: "#1D4ED8",
              background: "#FFFFFF",
              border: "1px solid rgba(29, 78, 216, 0.2)",
              borderRadius: 10,
              padding: "9px 16px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              flex: "1 1 auto",
              textAlign: "center"
            }}
            className="md:!flex-initial"
          >
            {botaoSecundarioTexto}
          </button>
        )}

        {botaoTexto && (
          <button
            onClick={onClique}
            style={{
              fontFamily: "inherit",
              fontWeight: 600,
              fontSize: 12,
              color: "#FFFFFF",
              background: "#1D4ED8",
              border: "none",
              borderRadius: 10,
              padding: "9px 18px",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(29, 78, 216, 0.25)",
              whiteSpace: "nowrap",
              flex: "1 1 auto",
              textAlign: "center"
            }}
            className="md:!flex-initial"
          >
            {botaoTexto}
          </button>
        )}

        {fechavel && (
          <button
            onClick={onFechar}
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "rgba(100, 116, 139, 0.08)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0
            }}
          >
            <X size={14} color="#64748B" />
          </button>
        )}
      </div>
    </div>
  );
}