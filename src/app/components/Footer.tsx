"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, HelpCircle, FileText, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #E2E8F0",
        backgroundColor: "#FFFFFF",
        padding: "20px 24px",
        marginTop: "auto",
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
      className="sm:!px-8 lg:!px-10"
    >
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        {/* Lado Esquerdo: Copyright e Compliance */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div style={{ fontSize: 12, color: "#64748B", fontWeight: 500 }}>
            © {new Date().getFullYear()} <strong style={{ color: "#030303" }}>HubContábil Financial</strong>. Todos os direitos reservados.
          </div>

          <span className="hidden md:inline" style={{ color: "#CBD5E1" }}>•</span>

          <div className="hidden sm:flex" style={{ alignItems: "center", gap: 6, fontSize: 11.5, color: "#64748B" }}>
            <ShieldCheck size={14} color="#059669" />
            <span>ICP-Brasil & LGPD Compliant</span>
          </div>
        </div>

        {/* Lado Direito: Status dos Serviços + Links Rápidos */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          {/* Status do Sistema (Semáforo Verde com Pulso) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "#ECFDF5",
              border: "1px solid #A7F3D0",
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            <span style={{ position: "relative", display: "flex", width: 7, height: 7 }}>
              <span
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  backgroundColor: "#10B981",
                  opacity: 0.75,
                  animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                }}
              />
              <span
                style={{
                  position: "relative",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#059669",
                }}
              />
            </span>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#059669" }}>
              Sistemas Operacionais
            </span>
          </div>

          {/* Links Úteis */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a
              href="#"
              style={{
                fontSize: 12,
                color: "#64748B",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1D4ED8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
            >
              Termos de Uso
            </a>

            <span style={{ color: "#E2E8F0" }}>•</span>

            <a
              href="#"
              style={{
                fontSize: 12,
                color: "#64748B",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1D4ED8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
            >
              Privacidade
            </a>

            <span style={{ color: "#E2E8F0" }}>•</span>

            <span style={{ fontSize: 11, color: "#94A3B8", fontFamily: "'Michroma', sans-serif" }}>
              v2.4.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}