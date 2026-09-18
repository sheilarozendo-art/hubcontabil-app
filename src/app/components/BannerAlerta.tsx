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
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Lado Esquerdo: Ícone + Textos */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
            boxShadow: "0 0 14px rgba(67, 193, 239, 0.2)",
          }}
        >
          <ShieldCheck size={22} color="#0284C7" />
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ fontWeight: 700, fontSize: 13.5, color: "#030303" }}>
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
                }}
              >
                {badge}
              </span>
            )}
          </div>
          <div style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>
            {descricao}
          </div>
        </div>
      </div>

      {/* Lado Direito: Ações */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
        {botaoSecundarioTexto && (
          <button
            onClick={onCliqueSecundario}
            style={{
              fontFamily: "inherit",
              fontWeight: 600,
              fontSize: 12.5,
              color: "#1D4ED8",
              background: "#FFFFFF",
              border: "1px solid rgba(29, 78, 216, 0.2)",
              borderRadius: 10,
              padding: "8px 14px",
              cursor: "pointer",
            }}
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
              fontSize: 12.5,
              color: "#FFFFFF",
              background: "#1D4ED8",
              border: "none",
              borderRadius: 10,
              padding: "9px 18px",
              cursor: "pointer",
              boxShadow: "0 2px 10px rgba(29, 78, 216, 0.25)",
            }}
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
            }}
          >
            <X size={14} color="#64748B" />
          </button>
        )}
      </div>
    </div>
  );
}