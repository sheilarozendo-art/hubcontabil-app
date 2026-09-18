"use client";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { 
  Palette, 
  UploadCloud, 
  Globe, 
  ShieldCheck, 
  Check, 
  Sliders, 
  Sparkles, 
  Building, 
  CheckCircle2, 
  Save
} from "lucide-react";

const COLOR_PRESETS = [
  { id: "royal", label: "Azul Royal", hex: "#1D4ED8" },
  { id: "emerald", label: "Verde Esmeralda", hex: "#059669" },
  { id: "purple", label: "Violeta Tech", hex: "#7C3AED" },
  { id: "amber", label: "Âmbar Solar", hex: "#D97706" },
  { id: "cyan", label: "Ciano Elétrico", hex: "#0284C7" },
];

export default function ConfiguracoesWhiteLabelPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [corPrimaria, setCorPrimaria] = useState("#1D4ED8");
  const [nomeEscritorio, setNomeEscritorio] = useState("HubContábil Financial & Gestão");
  const [crc, setCrc] = useState("CRC-SP 2SP034821/O-8");
  const [whatsapp, setWhatsapp] = useState("+55 (11) 98765-4321");
  const [salvo, setSalvo] = useState(false);

  const [modulos, setModulos] = useState({
    certificado: true,
    tributos: true,
    solicitacoes: true,
    notas: true,
  });

  const alternarModulo = (key: keyof typeof modulos) => {
    setModulos(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const salvarAlteracoes = () => {
    setSalvo(true);
    setTimeout(() => setSalvo(false), 3000);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%', backgroundColor: '#F5F7FB', overflowX: 'hidden' }}>
      {/* 1. Sidebar Inteligente (Opaca e sem vazamento) */}
      <Sidebar 
        activeTab="configuracoes" 
        mobileOpen={mobileMenuOpen} 
        onCloseMobile={() => setMobileMenuOpen(false)} 
      />

      {/* 2. Área de Conteúdo */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowX: 'hidden' }}>
        
        {/* Topbar Oficial com Risquinhos do Menu */}
        <Topbar 
          title="Personalização White-label" 
          subtitle="Configure a identidade visual da sua marca e canais oficiais"
          onOpenMenu={() => setMobileMenuOpen(true)}
        />

        {/* Conteúdo com Respiros Generosos (Nada grudado!) */}
        <main className="hub-main-content" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          
          {/* Barra de Ação Superior (Salvar) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: 16,
            padding: '16px 24px',
            boxShadow: '0 4px 16px rgba(3,3,3,0.04)',
            flexWrap: 'wrap',
            gap: 12
          }}>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14.5, color: '#030303' }}>
                Gerenciamento de Marca
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 2 }}>
                As alterações salvas são refletidas em tempo real no portal dos seus clientes.
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {salvo && (
                <span style={{ fontSize: 12, fontWeight: 700, color: '#059669', background: '#ECFDF5', padding: '6px 14px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <CheckCircle2 size={14} />
                  <span>Salvo com sucesso!</span>
                </span>
              )}
              <button
                onClick={salvarAlteracoes}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  backgroundColor: corPrimaria,
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: 10,
                  padding: '10px 20px',
                  fontSize: 12.5,
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: `0 4px 14px ${corPrimaria}40`,
                  transition: 'all 0.15s ease'
                }}
              >
                <Save size={15} />
                <span>Salvar Alterações</span>
              </button>
            </div>
          </div>

          {/* GRID PRINCIPAL: 2 Colunas no Desktop / 1 Coluna Empilhada no Celular com Respiro de 32px */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            
            {/* COLUNA ESQUERDA: FORMULÁRIOS DE MARCA (7 colunas no PC) */}
            <div className="lg:col-span-7 flex flex-col gap-8 w-full">
              
              {/* 1. Identidade do Escritório */}
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '24px', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Building size={16} color={corPrimaria} />
                  <span>Identidade do Escritório</span>
                </div>

                {/* Upload de Logo */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 8 }}>
                    Logotipo Oficial do Escritório
                  </label>
                  <div style={{
                    border: '1.5px dashed #CBD5E1',
                    borderRadius: 12,
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#F8FAFC',
                    flexWrap: 'wrap',
                    gap: 12
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: '#FFFFFF', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <UploadCloud size={22} color="#64748B" />
                      </div>
                      <div>
                        <div style={{ fontSize: 12.5, fontWeight: 700, color: '#030303' }}>logo_escritorio.svg</div>
                        <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 2 }}>SVG ou PNG transparente (máx. 2MB)</div>
                      </div>
                    </div>
                    <button style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: corPrimaria,
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: 8,
                      padding: '7px 14px',
                      cursor: 'pointer'
                    }}>
                      Substituir Logo
                    </button>
                  </div>
                </div>

                {/* Campos com espaçamento generoso */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>
                      Nome de Exibição do Escritório
                    </label>
                    <input
                      type="text"
                      value={nomeEscritorio}
                      onChange={e => setNomeEscritorio(e.target.value)}
                      style={{
                        width: '100%',
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: 10,
                        padding: '10px 14px',
                        fontSize: 13,
                        color: '#030303',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>
                        Registro CRC do Responsável
                      </label>
                      <input
                        type="text"
                        value={crc}
                        onChange={e => setCrc(e.target.value)}
                        style={{
                          width: '100%',
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          borderRadius: 10,
                          padding: '10px 14px',
                          fontSize: 13,
                          color: '#030303',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>
                        WhatsApp de Suporte
                      </label>
                      <input
                        type="text"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        style={{
                          width: '100%',
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          borderRadius: 10,
                          padding: '10px 14px',
                          fontSize: 13,
                          color: '#030303',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Seletor de Cores da Marca */}
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '24px', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Palette size={16} color={corPrimaria} />
                  <span>Cor Primária da Plataforma (Branding)</span>
                </div>
                <div style={{ fontSize: 12, color: '#64748B', marginBottom: 18, lineHeight: 1.5 }}>
                  Essa cor será aplicada dinamicamente em todos os botões, realces, ícones ativos e badges dos seus clientes.
                </div>

                {/* Pílulas de Presets */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 18 }}>
                  {COLOR_PRESETS.map(preset => (
                    <button
                      key={preset.id}
                      onClick={() => setCorPrimaria(preset.hex)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '8px 16px',
                        borderRadius: 10,
                        border: corPrimaria === preset.hex ? `2px solid ${preset.hex}` : '1px solid #E2E8F0',
                        background: corPrimaria === preset.hex ? `${preset.hex}10` : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <span style={{ width: 14, height: 14, borderRadius: '50%', background: preset.hex }} />
                      <span style={{ fontSize: 12, fontWeight: corPrimaria === preset.hex ? 700 : 500, color: '#030303' }}>
                        {preset.label}
                      </span>
                      {corPrimaria === preset.hex && <Check size={12} color={preset.hex} />}
                    </button>
                  ))}
                </div>

                {/* Input Hex */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>Código HEX Customizado:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8, padding: '5px 12px' }}>
                    <input
                      type="color"
                      value={corPrimaria}
                      onChange={e => setCorPrimaria(e.target.value)}
                      style={{ width: 24, height: 24, border: 'none', background: 'transparent', cursor: 'pointer' }}
                    />
                    <span style={{ fontFamily: "'Michroma', sans-serif", fontSize: 12, color: '#030303' }}>{corPrimaria.toUpperCase()}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* COLUNA DIREITA: LIVE PREVIEW (5 colunas no PC) */}
            <div className="lg:col-span-5 w-full">
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '24px', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Sparkles size={16} color={corPrimaria} />
                    <span>Pré-visualização em Tempo Real</span>
                  </div>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: corPrimaria, background: `${corPrimaria}15`, padding: '2px 8px', borderRadius: 999 }}>
                    Ao Vivo
                  </span>
                </div>
                <div style={{ fontSize: 12, color: '#64748B', marginBottom: 18, lineHeight: 1.4 }}>
                  Veja como a interface do seu cliente responde instantaneamente à sua paleta:
                </div>

                {/* Miniatura do Dashboard */}
                <div style={{
                  background: '#F8FAFC',
                  border: '1px solid #CBD5E1',
                  borderRadius: 14,
                  padding: 16,
                  boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.03)'
                }}>
                  {/* Mini Topbar */}
                  <div style={{
                    background: '#FFFFFF',
                    borderRadius: 10,
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid #E2E8F0',
                    marginBottom: 14
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ width: 6, height: 16, borderRadius: 999, background: corPrimaria }} />
                      <span style={{ fontSize: 11, fontWeight: 800, color: '#030303' }}>{nomeEscritorio.slice(0, 16)}...</span>
                    </div>
                    <div style={{
                      background: corPrimaria,
                      color: '#FFFFFF',
                      fontSize: 10,
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 6
                    }}>
                      + Nova Ação
                    </div>
                  </div>

                  {/* Mini Cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    <div style={{ background: '#FFFFFF', padding: 12, borderRadius: 10, border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: 10, color: '#64748B' }}>Tributos Pendentes</div>
                      <div style={{ fontFamily: "'Michroma', sans-serif", fontSize: 14, color: '#030303', marginTop: 4 }}>R$ 1.240,00</div>
                      <div style={{ width: '100%', height: 4, background: '#F1F5F9', borderRadius: 999, marginTop: 8, overflow: 'hidden' }}>
                        <div style={{ width: '70%', height: '100%', background: corPrimaria }} />
                      </div>
                    </div>

                    <div style={{ background: '#FFFFFF', padding: 12, borderRadius: 10, border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: 10, color: '#64748B' }}>Status Fiscal</div>
                      <div style={{ fontSize: 11.5, fontWeight: 700, color: '#059669', marginTop: 4 }}>✓ Regular</div>
                      <div style={{
                        marginTop: 6,
                        fontSize: 10,
                        fontWeight: 600,
                        color: corPrimaria,
                        background: `${corPrimaria}15`,
                        padding: '3px 6px',
                        borderRadius: 4,
                        textAlign: 'center'
                      }}>
                        Ver Certidão
                      </div>
                    </div>
                  </div>

                  {/* Mini Tabela */}
                  <div style={{ background: '#FFFFFF', borderRadius: 10, border: '1px solid #E2E8F0', marginTop: 10, padding: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: 9, fontWeight: 700, color: corPrimaria, background: `${corPrimaria}15`, padding: '2px 6px', borderRadius: 4 }}>DAS</span>
                        <span style={{ fontSize: 10.5, fontWeight: 600, color: '#030303' }}>Simples Nacional</span>
                      </div>
                      <span style={{
                        background: corPrimaria,
                        color: '#FFFFFF',
                        fontSize: 9.5,
                        fontWeight: 700,
                        padding: '4px 8px',
                        borderRadius: 6
                      }}>
                        Baixar PDF
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: 11.5, color: '#94A3B8', marginTop: 16, textAlign: 'center', lineHeight: 1.4 }}>
                  Ao salvar, todas as empresas atendidas pelo escritório verão esta paleta instantaneamente.
                </div>
              </div>
            </div>

          </div>

          {/* 3. Domínio Personalizado (CNAME) com Respiro Generoso */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '24px', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(2,132,199,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Globe size={22} color="#0284C7" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303' }}>
                    Domínio Personalizado (CNAME)
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 2 }}>
                    Permita que seus clientes acessem diretamente pelo endereço web do seu escritório
                  </div>
                </div>
              </div>

              <span style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#ECFDF5', color: '#059669', fontSize: 11, fontWeight: 700, padding: '5px 14px', borderRadius: 999 }}>
                <ShieldCheck size={14} />
                <span>SSL Ativo & Seguro</span>
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 18, paddingTop: 18, borderTop: '1px solid #F1F5F9', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: '11px 16px', fontSize: 13, color: '#030303', fontFamily: "'Michroma', sans-serif" }}>
                app.apicecontabilidade.com.br
              </div>
              <button style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: 12.5,
                color: '#1D4ED8',
                background: '#EFF6FF',
                border: '1px solid rgba(29,78,216,0.15)',
                borderRadius: 10,
                padding: '11px 20px',
                cursor: 'pointer'
              }}>
                Testar DNS
              </button>
            </div>
          </div>

          {/* 4. Módulos Visíveis com Respiro Generoso */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '24px', boxShadow: '0 4px 16px rgba(3,3,3,0.04)' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#030303', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Sliders size={16} color={corPrimaria} />
              <span>Módulos Visíveis para seus Clientes</span>
            </div>
            <div style={{ fontSize: 12, color: '#64748B', marginBottom: 20 }}>
              Ative ou desative seções da plataforma de acordo com os serviços contratados por cada cliente:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { key: "tributos", label: "Central de Tributos", desc: "Download de DAS, FGTS e PIX" },
                { key: "certificado", label: "Monitor de Certificado", desc: "Avisos de expiração do e-CNPJ" },
                { key: "solicitacoes", label: "Catálogo de Solicitações", desc: "Admissões, férias e chamados" },
                { key: "notas", label: "Emissor de Notas Fiscais", desc: "Módulo integrado de NFS-e" }
              ].map(item => {
                const ativo = modulos[item.key as keyof typeof modulos];
                return (
                  <div
                    key={item.key}
                    onClick={() => alternarModulo(item.key as keyof typeof modulos)}
                    style={{
                      padding: '18px',
                      borderRadius: 14,
                      border: ativo ? `1.5px solid ${corPrimaria}` : '1px solid #E2E8F0',
                      background: ativo ? `${corPrimaria}06` : '#FFFFFF',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxSizing: 'border-box'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#030303' }}>{item.label}</span>
                      <div style={{
                        width: 36,
                        height: 20,
                        borderRadius: 999,
                        background: ativo ? corPrimaria : '#CBD5E1',
                        padding: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: ativo ? 'flex-end' : 'flex-start',
                        transition: 'background 0.2s'
                      }}>
                        <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }} />
                      </div>
                    </div>
                    <div style={{ fontSize: 11.5, color: '#64748B', lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}