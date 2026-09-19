# HubContábil — arquivos separados

Este pacote separa o documento monolítico em arquivos individuais.

## Estrutura principal

- `src_app/page.tsx` → Dashboard
- `src_app/tributos/page.tsx`
- `src_app/documentos/page.tsx`
- `src_app/notas/page.tsx`
- `src_app/folhas/page.tsx`
- `src_app/solicitacoes/page.tsx`
- `src_app/configuracoes/page.tsx`
- `src_app/login/page.tsx`
- `src_app/components/Sidebar.tsx`
- `src_app/components/Topbar.tsx`
- `src_app/components/BannerAlerta.tsx`
- `src_app/components/Logo.tsx`
- `src_app/components/Footer.tsx`

## Arquivos de suporte adicionados

- `src_app/components/Icons.tsx` → ícones compartilhados do documento original.
- `src_app/components/AppShell.tsx` → substitui o `Root` monolítico e concentra Sidebar + Topbar + conteúdo + Footer.

## Observações

- O código foi adaptado do React Router usado no documento para o App Router do Next.js.
- O estado ativo da Sidebar usa `usePathname()`.
- A rota de Folha foi padronizada para `/folhas`, conforme a estrutura solicitada.
- O login continua sendo uma página standalone e deve ficar fora do AppShell no layout de produção.
- Os dados, textos e estilos do documento original foram preservados, salvo as adaptações necessárias para separar os módulos.
