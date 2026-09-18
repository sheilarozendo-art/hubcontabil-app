"use client";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import BannerAlerta from "../components/BannerAlerta";
import Topbar from "../components/Topbar";
import { 
  Download, 
  Copy, 
  CheckCircle2, 
  ShieldCheck, 
  Filter, 
  ArrowUpDown,
  FileCheck2,
  Receipt,
  FileSpreadsheet
} from "lucide-react";

const TRIBUTOS_DATA = [
  {
    id: 1,
    tag: "DAS",
    tagColor: "#1D4ED8",
    tagBg: "rgba(29,78,216,0.08)",
    titulo: "DAS - Simples Nacional",
    competencia: "09/2024",
    vencimento: "20/10/2024",
    valor: "R$ 1.240,00",
    status: "Aguardando Pagamento",
    tipo: "federal",
    statusColor: "#D97706",
    statusBg: "#FEF3C7",
    paid: false,
    pix: "00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-42661417400052040000530398654041240.005802BR5925NEXUS TECH STUDIO6009SAO PAULO62070503***6304ABCD"
  },
  {
    id: 2,
    tag: "FGTS",
    tagColor: "#0891B2",
    tagBg: "rgba(8,145,178,0.08)",
    titulo: "FGTS Digital",
    competencia: "09/2024",
    vencimento: "07/10/2024",
    valor: "R$ 680,00",
    status: "Pago & Baixado",
    tipo: "folha",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
    paid: true
  },
  {
    id: 3,
    tag: "GPS",
    tagColor: "#7C3AED",
    tagBg: "rgba(124,58,237,0.08)",
    titulo: "INSS / Pró-Labore Sócios",
    competencia: "09/2024",
    vencimento: "15/10/2024",
    valor: "R$ 2.900,50",
    status: "Pago & Baixado",
    tipo: "folha",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
    paid: true
  },
  {
    id: 4,
    tag: "DARF",
    tagColor: "#EA580C",
    tagBg: "rgba(234,88,12,0.08)",
    titulo: "IRPJ - Lucro Estimado",
    competencia: "08/2024",
    vencimento: "30/09/2024",
    valor: "R$ 890,20",
    status: "Pago & Baixado",
    tipo: "federal",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
    paid: true
  }
];

export default function TributosPage() {
  const [abaAtiva, setAbaAtiva] = useState("todas");
  const [pixCopiadoId, setPixCopiadoId] = useState<number | null>(null);

  const copiarPix = (id: number, pix: string) => {
    navigator.clipboard.writeText(pix);
    setPixCopiadoId(id);
    setTimeout(() => setPixCopiadoId(null), 3000);
  };

  const listaFiltrada = TRIBUTOS_DATA.filter((item) => {
    if (abaAtiva === "pendentes") return !item.paid;
    if (abaAtiva === "pagos") return item.paid;
    if (abaAtiva === "folha") return item.tipo === "folha";
    return true;
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%', background: '#F5F7FB' }}>
      {/* 1. Sidebar Ativa em 'tributos' */}
      <Sidebar activeTab="tributos" />

      {/* 2. Área de Conteúdo */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Topbar title="Tributos & Guias Fiscais" subtitle="Gestão centralizada de guias, apurações e comprovantes de quitação" />

        <main style={{ flex: 1, padding: '28px 36px', overflowY: 'auto' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
            
            {/* Banner Padronizado CND */}
            <BannerAlerta
              titulo="Situação Fiscal 100% Regular perante a Receita Federal"
              descricao="Certidão Negativa de Débitos (CND Federal) emitida e válida até 14/12/2024."
              botaoTexto="Baixar CND Atualizada"
            />

            {/* Linha de KPIs de Tributos */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '20px', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 600, color: '#64748B' }}>Total Apurado (Setembro)</div>
                <div style={{ fontFamily: "'Michroma', sans-serif", fontSize: 24, color: '#030303', marginTop: 8 }}>R$ 4.820,50</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B', marginTop: 4 }}>4 guias geradas pela contabilidade</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '20px', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 600, color: '#64748B' }}>Total Pendente</div>
                  <span style={{ background: '#FEF3C7', color: '#D97706', fontSize: 10.5, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>1 a vencer</span>
                </div>
                <div style={{ fontFamily: "'Michroma', sans-serif", fontSize: 24, color: '#D97706', marginTop: 8 }}>R$ 1.240,00</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B', marginTop: 4 }}>DAS Simples vence dia 20/10</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '20px', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 600, color: '#64748B' }}>Total Liquidado</div>
                  <span style={{ background: '#DCFCE7', color: '#15803D', fontSize: 10.5, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>3 quitadas</span>
                </div>
                <div style={{ fontFamily: "'Michroma', sans-serif", fontSize: 24, color: '#15803D', marginTop: 8 }}>R$ 3.580,50</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B', marginTop: 4 }}>Comprovantes arquivados no cofre</div>
              </div>
            </div>

            {/* Container da Tabela com Filtros */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 0, overflow: 'hidden', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
              
              {/* Header da Tabela */}
              <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9' }}>
                {/* Abas */}
                <div style={{ display: 'flex', gap: 6 }}>
                  {[
                    { id: "todas", label: "Todas as Guias (4)" },
                    { id: "pendentes", label: "Pendentes (1)" },
                    { id: "pagos", label: "Pagas (3)" },
                    { id: "folha", label: "Folha de Pagamento (2)" }
                  ].map((aba) => (
                    <button
                      key={aba.id}
                      onClick={() => setAbaAtiva(aba.id)}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: abaAtiva === aba.id ? 700 : 500,
                        fontSize: 12.5,
                        color: abaAtiva === aba.id ? '#1D4ED8' : '#64748B',
                        background: abaAtiva === aba.id ? '#EFF6FF' : 'transparent',
                        border: 'none',
                        borderRadius: 10,
                        padding: '8px 14px',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {aba.label}
                    </button>
                  ))}
                </div>

                {/* Botão Baixar Lote */}
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                  color: '#1D4ED8',
                  background: '#EFF6FF',
                  border: '1px solid rgba(29,78,216,0.15)',
                  borderRadius: 10,
                  padding: '8px 14px',
                  cursor: 'pointer',
                }}>
                  <Download size={14} />
                  <span>Baixar Pacote do Mês (.ZIP)</span>
                </button>
              </div>

              {/* Tabela de Guias */}
              <div style={{ width: '100%', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #F1F5F9' }}>
                      <th style={{ padding: '12px 24px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Obrigação Fiscal</th>
                      <th style={{ padding: '12px 14px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Competência</th>
                      <th style={{ padding: '12px 14px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Vencimento</th>
                      <th style={{ padding: '12px 14px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Valor da Guia</th>
                      <th style={{ padding: '12px 14px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Status</th>
                      <th style={{ padding: '12px 24px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase', textAlign: 'right' }}>Ações Rápidas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listaFiltrada.map((item, i) => (
                      <tr
                        key={item.id}
                        style={{
                          borderBottom: i < listaFiltrada.length - 1 ? '1px solid #F8FAFC' : 'none',
                          transition: 'background 0.12s'
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#FAFAFA')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 700,
                              fontSize: 10,
                              background: item.tagBg,
                              color: item.tagColor,
                              padding: '3px 8px',
                              borderRadius: 6,
                              letterSpacing: '0.04em'
                            }}>
                              {item.tag}
                            </span>
                            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#030303' }}>
                              {item.titulo}
                            </span>
                          </div>
                        </td>

                        <td style={{ padding: '16px 14px', fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748B' }}>
                          {item.competencia}
                        </td>

                        <td style={{ padding: '16px 14px', fontFamily: "'Michroma', sans-serif", fontSize: 11, color: '#374151' }}>
                          {item.vencimento}
                        </td>

                        <td style={{ padding: '16px 14px', fontFamily: "'Michroma', sans-serif", fontSize: 12.5, color: '#030303' }}>
                          {item.valor}
                        </td>

                        <td style={{ padding: '16px 14px' }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: 10.5,
                            padding: '3px 10px',
                            borderRadius: 999,
                            background: item.statusBg,
                            color: item.statusColor,
                            whiteSpace: 'nowrap'
                          }}>
                            {item.paid && <CheckCircle2 size={12} style={{ marginRight: 4 }} />}
                            {!item.paid && <span style={{ width: 5, height: 5, borderRadius: '50%', background: item.statusColor, marginRight: 5 }} />}
                            {item.status}
                          </span>
                        </td>

                        <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                            {!item.paid && item.pix && (
                              <button
                                onClick={() => copiarPix(item.id, item.pix)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 5,
                                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                                  fontWeight: 600,
                                  fontSize: 11.5,
                                  color: pixCopiadoId === item.id ? '#059669' : '#1D4ED8',
                                  background: pixCopiadoId === item.id ? '#ECFDF5' : '#EFF6FF',
                                  border: 'none',
                                  borderRadius: 8,
                                  padding: '6px 12px',
                                  cursor: 'pointer',
                                  transition: 'all 0.15s ease'
                                }}
                              >
                                <Copy size={13} />
                                <span>{pixCopiadoId === item.id ? "Copiado!" : "Copiar PIX"}</span>
                              </button>
                            )}

                            <button style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 5,
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontWeight: 600,
                              fontSize: 11.5,
                              color: item.paid ? '#030303' : '#FFFFFF',
                              background: item.paid ? '#F8FAFC' : '#1D4ED8',
                              border: item.paid ? '1px solid #E2E8F0' : 'none',
                              borderRadius: 8,
                              padding: '6px 14px',
                              cursor: 'pointer',
                              boxShadow: item.paid ? 'none' : '0 2px 6px rgba(29,78,216,0.2)'
                            }}>
                              <Download size={13} />
                              <span>{item.paid ? "Comprovante" : "Baixar Guia PDF"}</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}