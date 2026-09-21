# Tend Tudo Showcase

Catálogo demonstrativo responsivo da Tend Tudo Aviamentos, loja de aviamentos, costura e artesanato em Parangaba, Fortaleza. A página permite selecionar produtos, montar uma lista de orçamento e abrir uma mensagem pronta no WhatsApp.

Este projeto é uma demonstração, não uma loja virtual. Preços, estoque, modelos e condições devem ser confirmados diretamente com a loja.

## Funcionalidades

- Página única com seções de início, catálogo, atendimento e loja.
- Layout responsivo com menu para celular.
- Catálogo com 13 produtos em quatro categorias:
	- Linhas e fios
	- Botões
	- Argolas e acabamentos
	- Acessórios de costura
- Filtro por categoria e imagens locais identificadas como ilustrativas.
- Lista de orçamento em painel lateral, com adição, remoção e alteração de quantidade.
- Campo de observações para cores, medidas e modelos.
- Link para o WhatsApp com mensagem gerada e codificada no navegador.
- Links para WhatsApp e Instagram, metadados básicos de SEO e suporte a página 404.

## Stack

- React 19 e TypeScript
- TanStack Start e TanStack Router
- Vite, Nitro e SSR
- Tailwind CSS 4
- Radix UI no padrão shadcn/ui
- Lucide React para ícones
- ESLint e Prettier

O estado da lista de orçamento é local ao navegador. Não há banco de dados, autenticação, backend comercial ou integração com estoque.

## Requisitos

- Node.js 24 ou versão compatível com as dependências do projeto
- npm 11 ou versão compatível
- Acesso à internet para instalar as dependências e carregar as fontes do Google Fonts

## Executar localmente

Na raiz do projeto:

```bash
npm ci
npm run dev
```

Abra o endereço exibido no terminal. Para encerrar o servidor, pressione `Ctrl+C`.

No Windows, caso o PowerShell bloqueie `npm.ps1`, use o perfil Command Prompt do terminal do VS Code ou execute `npm.cmd ci` e `npm.cmd run dev`.

Não abra um arquivo HTML diretamente: a aplicação precisa do servidor de desenvolvimento do Vite/TanStack Start.

## Scripts

```bash
npm run dev        # inicia o servidor de desenvolvimento
npm run build      # gera o build de produção
npm run build:dev  # gera o build usando o modo development
npm run preview    # serve o build localmente
npm run lint       # executa o ESLint
npm run format     # formata os arquivos com Prettier
```

O projeto não possui atualmente um script ou runner de testes automatizados.

## Estrutura principal

```text
src/
	data/store.ts          # contatos, categorias, produtos e imagens
	routes/index.tsx       # página do catálogo e lista de orçamento
	routes/__root.tsx      # shell HTML, fontes, metadados e estados de erro
	components/ui/         # componentes reutilizáveis Radix/shadcn
	styles.css             # tema, tipografia e estilos globais
	router.tsx             # criação do roteador
	start.ts               # inicialização do TanStack Start
	server.ts              # entrada SSR e tratamento de erros
public/
	__l5e/assets-v1/       # imagens locais do catálogo
```

O arquivo `src/routeTree.gen.ts` é gerado pelo TanStack Router e não deve ser editado manualmente.

## Onde editar

| Necessidade | Local |
| --- | --- |
| Nome, endereço, WhatsApp, Instagram e produtos | `src/data/store.ts` |
| Textos, seções e comportamento da página | `src/routes/index.tsx` |
| Cores, espaçamento e tipografia | `src/styles.css` |
| Título geral, fontes e metadados | `src/routes/__root.tsx` |
| Imagens usadas pelo catálogo | `public/__l5e/assets-v1/` e `src/assets/catalogo/` |
| Ícone da aba | `public/favicon.svg` |

Os dados de contato ficam centralizados em `store` dentro de `src/data/store.ts`. Ao trocar uma imagem, mantenha o texto alternativo fiel ao conteúdo visual e use arquivos autorizados.

## Contatos configurados

- Endereço: Avenida Augusto dos Anjos, 1366 — Parangaba, Fortaleza — Ceará
- WhatsApp: [(85) 99925-6177](https://wa.me/5585999256177)
- Instagram: [@aviamentostendtudo](https://www.instagram.com/aviamentostendtudo/)

O site não publica horário de funcionamento, preços ou disponibilidade sem confirmação. O número do WhatsApp usado nos links é o divulgado no Instagram.

## Build e hospedagem

```bash
npm run build
npm run preview
```

A configuração atual usa TanStack Start/Nitro com destino Cloudflare. O build gera uma aplicação com servidor; não é uma pasta de HTML estático universal. Para publicar fora do ambiente de origem, use uma hospedagem compatível com o destino configurado ou adapte `vite.config.ts` e a estratégia de deploy.

## Pendências antes de um lançamento

- Confirmar a logo oficial e sua autorização de uso.
- Substituir ou confirmar as imagens ilustrativas, especialmente a imagem da seção “Nossa loja”.
- Validar endereço, WhatsApp e Instagram com o proprietário.
- Confirmar catálogo, preços, modelos, estoque e horários atuais.
- Fazer uma revisão manual em celular, tablet e desktop, incluindo links e abertura do WhatsApp.

Para instruções complementares de edição e exportação, consulte [LEIA-ME-PRIMEIRO.md](LEIA-ME-PRIMEIRO.md) e [INSTRUCOES.md](INSTRUCOES.md).


```
