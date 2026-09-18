"use client";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { 
  UserPlus, 
  CalendarRange, 
  UserMinus, 
  FileText, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Plus, 
  Star,
  ChevronRight
} from "lucide-react";

const SERVICOS_RAPIDOS = [
  {
    id: "admissao",
    titulo: "Admitir Funcionário",
    descricao: "Envio de ficha cadastral e CTPS digital",
    categoria: "DP / RH",
    cor: "#1D4ED8",
    bg: "rgba(29,78,216,0.08)",
    icon: <UserPlus size={20} color="#1D4ED8" />
  },
  {
    id: "ferias",
    titulo: "Programar Férias",
    descricao: "Aviso prévio e cálculo de 1/3 constitucional",
    categoria: "DP / RH",
    cor: "#A155FF",
    bg: "rgba(161,85,255,0.08)",
    icon: <CalendarRange size={20} color="#A155FF" />
  },
  {
    id: "rescisao",
    titulo: "Rescisão de Contrato",
    descricao: "Cálculo de verbas rescisórias e aviso",
    categoria: "DP / RH",
    cor: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
    icon: <UserMinus size={20} color="#EF4444" />
  },
  {
    id: "certidao",
    titulo: "Certidões & Declarações",
    descricao: "Declaração de faturamento e certidões",
    categoria: "Fiscal",
    cor: "#0284C7",
    bg: "rgba(2,132,199,0.08)",
    icon: <FileText size={20} color="#0284C7" />
  }
];

const SOLICITACOES_DATA = [
  {
    protocolo: "#SOL-9821",
    servico: "Admissão CLT - Designer Pleno",
    detalhe: "Novo colaborador: Lucas Silveira",
    solicitante: "Sheila Rozendo (Você)",
    data: "Hoje às 10:15",
    status: "Em Análise Contábil",
    statusColor: "#D97706",
    statusBg: "#FEF3C7",
    categoria: "DP / RH"
  },
  {
    protocolo: "#SOL-9804",
    servico: "Declaração de Faturamento para Banco",
    detalhe: "Finalidade: Linha de crédito PJ",
    solicitante: "Sheila Rozendo (Você)",
    data: "Ontem às 14:30",
    status: "Aguardando Assinatura",
    statusColor: "#0284C7",
    statusBg: "#E0F2FE",
    categoria: "Fiscal"
  },
  {
    protocolo: "#SOL-9742",
    servico: "Férias Colaborador - Mateus Ramos",
    detalhe: "Período: 01/11 a 20/11",
    solicitante: "Sheila Rozendo (Você)",
    data: "08 Out 2024",
    status: "Concluído & Arquivado",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
    categoria: "DP / RH"
  }
];

export default function SolicitacoesPage() {
  const [filtroStatus, setFiltroStatus] = useState("todas");

  const listaFiltrada = SOLICITACOES_DATA.filter(item => {
    if (filtroStatus === "andamento") return item.status !== "Concluído & Arquivado";
    if (filtroStatus === "concluidas") return item.status === "Concluído & Arquivado";
    return true;
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%', background: '#F5F7FB' }}>
      <Sidebar activeTab="solicitacoes" />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Topbar title="Central de Solicitações & Serviços" subtitle="Abra demandas e acompanhe o fluxo de atendimento da sua contabilidade sem ruídos" />

        {/* Espaçamento generoso de 32px no topo e laterais */}
        <main style={{ flex: 1, padding: '28px 20px', overflowY: 'auto', boxSizing: 'border-box' }}>
            <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>

            {/* 1. Catálogo de Serviços */}
            <div>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                gap: 12, 
                marginBottom: 16 
              }}>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303' }}>
                    Catálogo de Serviços Contábeis
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 2 }}>
                    Selecione o serviço desejado para preencher a solicitação guiada
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#EFF6FF', padding: '6px 14px', borderRadius: 999 }}>
                  <Clock size={13} color="#1D4ED8" />
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: '#1D4ED8' }}>SLA Médio de Resposta: 4h úteis</span>
                </div>
              </div>

              {/* 4 Cards de Serviços com Grid Perfeito */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                gap: 16 
              }}>
                {SERVICOS_RAPIDOS.map(s => (
                  <div key={s.id} style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: 16,
                    padding: '22px 20px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(3,3,3,0.04)',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = s.cor;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {s.icon}
                        </div>
                        <span style={{ fontSize: 10.5, fontWeight: 700, color: '#64748B', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '2px 8px', borderRadius: 6 }}>
                          {s.categoria}
                        </span>
                      </div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#030303' }}>
                        {s.titulo}
                      </div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 4, lineHeight: 1.4 }}>
                        {s.descricao}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', marginTop: 14, paddingTop: 10 }}>
                      <span style={{ fontSize: 11.5, fontWeight: 600, color: s.cor }}>Iniciar Solicitação</span>
                      <ChevronRight size={14} color={s.cor} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Indicadores de Atendimento */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: 16 
            }}>
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '24px', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>Solicitações em Aberto</span>
                  <span style={{ background: '#FEF3C7', color: '#D97706', fontSize: 10.5, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>2 ativas</span>
                </div>
                <div style={{ fontFamily: "'Michroma', sans-serif", fontSize: 24, color: '#030303', marginTop: 10 }}>2 Pedidos</div>
                <div style={{ fontSize: 11.5, color: '#64748B', marginTop: 6 }}>Em processamento pela equipe contábil</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '24px', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>Concluídas no Mês</span>
                  <span style={{ background: '#DCFCE7', color: '#15803D', fontSize: 10.5, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>100% no prazo</span>
                </div>
                <div style={{ fontFamily: "'Michroma', sans-serif", fontSize: 24, color: '#15803D', marginTop: 10 }}>14 Demandas</div>
                <div style={{ fontSize: 11.5, color: '#64748B', marginTop: 6 }}>Histórico arquivado no cofre</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '24px', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>Satisfação do Atendimento</span>
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                </div>
                <div style={{ fontFamily: "'Michroma', sans-serif", fontSize: 24, color: '#030303', marginTop: 10 }}>4.9 / 5.0</div>
                <div style={{ fontSize: 11.5, color: '#64748B', marginTop: 6 }}>Avaliação da titular Sheila Rozendo</div>
              </div>
            </div>

            {/* 3. Tabela de Acompanhamento */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 0, overflow: 'hidden', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
              
              <div style={{ 
                padding: '20px 24px', 
                display: 'flex', 
                flexWrap: 'wrap', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                gap: 12,
                borderBottom: '1px solid #F1F5F9' 
              }}>
                <div style={{ display: 'flex', gap: 6, overflowX: 'auto', maxWidth: '100%' }}>
                  {[
                    { id: "todas", label: "Todas as Solicitações (3)" },
                    { id: "andamento", label: "Em Andamento (2)" },
                    { id: "concluidas", label: "Concluídas (1)" }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setFiltroStatus(tab.id)}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: filtroStatus === tab.id ? 700 : 500,
                        fontSize: 12,
                        color: filtroStatus === tab.id ? '#1D4ED8' : '#64748B',
                        background: filtroStatus === tab.id ? '#EFF6FF' : 'transparent',
                        border: 'none',
                        borderRadius: 8,
                        padding: '7px 14px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        flexShrink: 0
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                  color: '#FFFFFF',
                  background: '#1D4ED8',
                  border: 'none',
                  borderRadius: 10,
                  padding: '9px 18px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 8px rgba(29,78,216,0.25)'
                }}>
                  <Plus size={14} />
                  <span>Nova Solicitação Avulsa</span>
                </button>
              </div>

              {/* Tabela com Rolagem Suave */}
              <div style={{ width: '100%', maxWidth: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                <table style={{ width: '100%', minWidth: 650, borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #F1F5F9' }}>
                      <th style={{ padding: '14px 24px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Protocolo</th>
                      <th style={{ padding: '14px 16px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Assunto / Demanda</th>
                      <th style={{ padding: '14px 16px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Solicitante</th>
                      <th style={{ padding: '14px 16px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Abertura</th>
                      <th style={{ padding: '14px 16px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Status do Pedido</th>
                      <th style={{ padding: '14px 24px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase', textAlign: 'right' }}>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listaFiltrada.map((item, i) => (
                      <tr
                        key={item.protocolo}
                        style={{
                          borderBottom: i < listaFiltrada.length - 1 ? '1px solid #F8FAFC' : 'none',
                          transition: 'background 0.12s'
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#FAFAFA')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        <td style={{ padding: '16px 24px' }}>
                          <span style={{ fontFamily: "'Michroma', sans-serif", fontSize: 12, fontWeight: 500, color: '#1D4ED8' }}>
                            {item.protocolo}
                          </span>
                        </td>

                        <td style={{ padding: '16px 16px' }}>
                          <div>
                            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#030303' }}>
                              {item.servico}
                            </div>
                            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11.5, color: '#64748B', marginTop: 2 }}>
                              {item.detalhe}
                            </div>
                          </div>
                        </td>

                        <td style={{ padding: '16px 16px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#030303', fontWeight: 500 }}>
                          {item.solicitante}
                        </td>

                        <td style={{ padding: '16px 16px', fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748B' }}>
                          {item.data}
                        </td>

                        <td style={{ padding: '16px 16px' }}>
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
                            {item.status.includes("Concluído") && <CheckCircle2 size={12} style={{ marginRight: 4 }} />}
                            {!item.status.includes("Concluído") && <span style={{ width: 5, height: 5, borderRadius: '50%', background: item.statusColor, marginRight: 5 }} />}
                            {item.status}
                          </span>
                        </td>

                        <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                          <button style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 5,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: 11.5,
                            color: '#1D4ED8',
                            background: '#EFF6FF',
                            border: '1px solid rgba(29,78,216,0.15)',
                            borderRadius: 8,
                            padding: '7px 14px',
                            cursor: 'pointer'
                          }}>
                            <MessageSquare size={13} />
                            <span>Ver Chat / Detalhes</span>
                          </button>
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