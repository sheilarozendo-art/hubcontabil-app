"use client";

import React, { useState } from "react";
import BannerAlerta from "../components/BannerAlerta";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { 
  Folder, 
  UploadCloud, 
  Download, 
  Eye, 
  ShieldCheck, 
  FileText, 
  FileCheck2, 
  BarChart3, 
  Users
} from "lucide-react";

const PASTAS = [
  {
    id: "fiscal",
    titulo: "Fiscal & Tributário",
    qtd: "148 arquivos",
    ultimo: "DAS_092024.pdf",
    cor: "#1D4ED8",
    bg: "rgba(29,78,216,0.08)",
    icon: <FileText size={20} color="#1D4ED8" />
  },
  {
    id: "dp",
    titulo: "Departamento Pessoal",
    qtd: "34 arquivos",
    ultimo: "Folha_Set2024.pdf",
    cor: "#A155FF",
    bg: "rgba(161,85,255,0.08)",
    icon: <Users size={20} color="#A155FF" />
  },
  {
    id: "contabil",
    titulo: "Contábil & Bancário",
    qtd: "82 arquivos",
    ultimo: "Extrato_Itau_Set.ofx",
    cor: "#0284C7",
    bg: "rgba(2,132,199,0.08)",
    icon: <BarChart3 size={20} color="#0284C7" />
  },
  {
    id: "societario",
    titulo: "Societário & Licenças",
    qtd: "12 arquivos",
    ultimo: "Contrato_Social_Consolidado.pdf",
    cor: "#059669",
    bg: "rgba(5,150,105,0.08)",
    icon: <FileCheck2 size={20} color="#059669" />
  }
];

const ARQUIVOS_RECENTES = [
  {
    id: 1,
    nome: "Extrato_Bancario_Inter_Setembro.pdf",
    categoria: "Contábil",
    enviadoPor: "Sheila Rozendo (Você)",
    data: "Hoje às 09:12",
    tamanho: "1.4 MB",
    formato: "PDF"
  },
  {
    id: 2,
    nome: "Lote_NFe_Entradas_Setembro.xml",
    categoria: "Fiscal",
    enviadoPor: "Sheila Rozendo (Você)",
    data: "Ontem às 16:45",
    tamanho: "3.8 MB",
    formato: "XML"
  },
  {
    id: 3,
    nome: "Balancete_Semestral_Assinado.pdf",
    categoria: "Contábil",
    enviadoPor: "Carlos Eduardo (Contador)",
    data: "02 Out 2024",
    tamanho: "4.2 MB",
    formato: "PDF"
  },
  {
    id: 4,
    nome: "Cartao_CNPJ_Atualizado.pdf",
    categoria: "Societário",
    enviadoPor: "Carlos Eduardo (Contador)",
    data: "15 Set 2024",
    tamanho: "520 KB",
    formato: "PDF"
  }
];

export default function DocumentosPage() {
  const [filtroAutor, setFiltroAutor] = useState("todos");
  const [dragging, setDragging] = useState(false);

  const arquivosFiltrados = ARQUIVOS_RECENTES.filter(arq => {
    if (filtroAutor === "cliente") return arq.enviadoPor.includes("Você");
    if (filtroAutor === "contador") return arq.enviadoPor.includes("Contador");
    return true;
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%', background: '#F5F7FB' }}>
      <Sidebar activeTab="documentos" />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Topbar title="Cofre de Documentos & GED" subtitle="Armazenamento seguro em nuvem com conformidade LGPD e ICP-Brasil" />

        <main style={{ flex: 1, padding: '36px 40px', overflowY: 'auto', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>

            {/* 1. Banner Padronizado Certificado */}
            <BannerAlerta
              titulo="Certificado Digital e-CNPJ A1"
              badge="Expira em 18 dias"
              descricao="Titular: Nexus Tech Studio Ltda • Emissor: Certisign AC • Validade até 18/11/2024"
              botaoSecundarioTexto="Renovação com Desconto"
              botaoTexto="Upload Novo Certificado (.pfx)"
            />

            {/* 2. As 4 Pastas Organizacionais com Grid Perfeito */}
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', marginBottom: 14 }}>
                Pastas Organizacionais do Escritório
              </div>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                gap: 16 
              }}>
                {PASTAS.map(p => (
                  <div key={p.id} style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: 16,
                    padding: '22px 20px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(3,3,3,0.04)',
                    transition: 'all 0.15s ease',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = p.cor;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                      {p.icon}
                    </div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#030303' }}>
                      {p.titulo}
                    </div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 4 }}>
                      {p.qtd}
                    </div>
                    <div style={{ borderTop: '1px solid #F1F5F9', marginTop: 14, paddingTop: 10, fontSize: 11, color: '#94A3B8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Último: {p.ultimo}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Área de Drag & Drop para Upload */}
            <div
              onDragOver={e => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={e => { e.preventDefault(); setDragging(false); }}
              style={{
                background: dragging ? 'rgba(29,78,216,0.04)' : '#FFFFFF',
                border: dragging ? '2px dashed #1D4ED8' : '2px dashed #CBD5E1',
                borderRadius: 16,
                padding: '36px 20px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: '0 4px 16px rgba(3,3,3,0.02)'
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
                <UploadCloud size={24} color="#1D4ED8" />
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14.5, color: '#030303' }}>
                Arraste seus extratos bancários, recibos ou contratos aqui
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 4 }}>
                Suporta arquivos OFX, PDF, XML e ZIP de até 50MB
              </div>
              <button style={{
                marginTop: 16,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: 12,
                color: '#1D4ED8',
                background: '#EFF6FF',
                border: '1px solid rgba(29,78,216,0.15)',
                borderRadius: 8,
                padding: '8px 18px',
                cursor: 'pointer'
              }}>
                Selecionar arquivos do computador
              </button>
            </div>

            {/* 4. Tabela de Arquivos Recentes */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: 0, overflow: 'hidden', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
              
              {/* Header com Filtros */}
              <div style={{ 
                padding: '20px 24px', 
                display: 'flex', 
                flexWrap: 'wrap', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                gap: 12,
                borderBottom: '1px solid #F1F5F9' 
              }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303' }}>
                  Arquivos Recentes no Cofre
                </div>

                <div style={{ display: 'flex', gap: 6, overflowX: 'auto', maxWidth: '100%' }}>
                  {[
                    { id: "todos", label: "Todos os Arquivos" },
                    { id: "cliente", label: "Enviados por Mim" },
                    { id: "contador", label: "Enviados pelo Escritório" }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setFiltroAutor(tab.id)}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: filtroAutor === tab.id ? 700 : 500,
                        fontSize: 12,
                        color: filtroAutor === tab.id ? '#1D4ED8' : '#64748B',
                        background: filtroAutor === tab.id ? '#EFF6FF' : 'transparent',
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
              </div>

              {/* Tabela com Rolagem Suave */}
              <div style={{ width: '100%', maxWidth: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                <table style={{ width: '100%', minWidth: 650, borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #F1F5F9' }}>
                      <th style={{ padding: '14px 24px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Nome do Documento</th>
                      <th style={{ padding: '14px 14px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Pasta</th>
                      <th style={{ padding: '14px 14px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Enviado Por</th>
                      <th style={{ padding: '14px 14px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Data</th>
                      <th style={{ padding: '14px 14px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase' }}>Tamanho</th>
                      <th style={{ padding: '14px 24px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, color: '#94A3B8', textTransform: 'uppercase', textAlign: 'right' }}>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arquivosFiltrados.map((arq, i) => (
                      <tr
                        key={arq.id}
                        style={{
                          borderBottom: i < arquivosFiltrados.length - 1 ? '1px solid #F8FAFC' : 'none',
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
                              background: arq.formato === 'PDF' ? 'rgba(239,68,68,0.08)' : 'rgba(2,132,199,0.08)',
                              color: arq.formato === 'PDF' ? '#DC2626' : '#0284C7',
                              padding: '2px 6px',
                              borderRadius: 5
                            }}>
                              {arq.formato}
                            </span>
                            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#030303' }}>
                              {arq.nome}
                            </span>
                          </div>
                        </td>

                        <td style={{ padding: '16px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B' }}>
                          <span style={{ background: '#F1F5F9', padding: '3px 8px', borderRadius: 6, fontSize: 11, fontWeight: 600 }}>
                            {arq.categoria}
                          </span>
                        </td>

                        <td style={{ padding: '16px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#030303', fontWeight: 500 }}>
                          {arq.enviadoPor}
                        </td>

                        <td style={{ padding: '16px 14px', fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748B' }}>
                          {arq.data}
                        </td>

                        <td style={{ padding: '16px 14px', fontFamily: "'Michroma', sans-serif", fontSize: 11, color: '#64748B' }}>
                          {arq.tamanho}
                        </td>

                        <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                            <button
                              title="Visualizar"
                              style={{
                                width: 32,
                                height: 32,
                                borderRadius: 8,
                                border: '1px solid #E2E8F0',
                                background: '#FFFFFF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                              }}
                            >
                              <Eye size={14} color="#64748B" />
                            </button>
                            <button
                              title="Baixar Arquivo"
                              style={{
                                width: 32,
                                height: 32,
                                borderRadius: 8,
                                border: '1px solid rgba(29,78,216,0.2)',
                                background: '#EFF6FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                              }}
                            >
                              <Download size={14} color="#1D4ED8" />
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