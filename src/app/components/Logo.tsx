"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  tamanho?: "sm" | "md" | "lg";
  comTexto?: boolean;
}

export default function Logo({ tamanho = "md", comTexto = true }: LogoProps) {
  const alturas = {
    sm: { h1: 24, h2: 18, h3: 12, w: 7, font: 13, gap: 3 },
    md: { h1: 34, h2: 26, h3: 18, w: 10, font: 16, gap: 4 },
    lg: { h1: 44, h2: 34, h3: 24, w: 13, font: 20, gap: 5 },
  }[tamanho];

  return (
    <Link href="/" style={{ textDecoration: "none" }} className="flex items-center gap-3 cursor-pointer group">
      {/* SÍMBOLO DAS 3 PÍLULAS OFICIAIS */}
      <div className="flex items-end" style={{ gap: alturas.gap, height: alturas.h1 }}>
        {/* Pílula 1: Azul Royal */}
        <span
          style={{
            width: alturas.w,
            height: alturas.h1,
            backgroundColor: "#1D4ED8",
            borderRadius: 999,
          }}
        />
        {/* Pílula 2: Violeta */}
        <span
          style={{
            width: alturas.w,
            height: alturas.h2,
            backgroundColor: "#A155FF",
            borderRadius: 999,
          }}
        />
        {/* Pílula 3: Ciano */}
        <span
          style={{
            width: alturas.w,
            height: alturas.h3,
            backgroundColor: "#43C1EF",
            borderRadius: 999,
          }}
        />
      </div>

      {/* TIPOGRAFIA OFICIAL: HUB (BOLD) CONTÁBIL (LIGHT ESPAÇADO) */}
      {comTexto && (
        <div className="flex flex-col">
          <div
            style={{
              fontSize: alturas.font,
              color: "#030303",
              lineHeight: 1,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <span style={{ fontWeight: 800 }}>HUB</span>
            <span style={{ fontWeight: 300, letterSpacing: "0.18em", marginLeft: 2 }}>CONTÁBIL</span>
          </div>
          <span style={{ fontSize: 8.5, letterSpacing: "0.25em", color: "#64748B", fontWeight: 700, marginTop: 3 }}>
            FINANCIAL
          </span>
        </div>
      )}
    </Link>
  );
}