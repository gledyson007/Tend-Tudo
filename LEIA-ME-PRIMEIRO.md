# Tend Tudo Showcase — abrir e editar no computador

Esta pasta contém o código exportado do projeto Tend Tudo Showcase, com as 15 fotos do catálogo incluídas localmente. Você pode editar os arquivos no VS Code sem usar créditos de geração do Lovable.

## 1. Preparar

1. Extraia o ZIP inteiro. Não execute o projeto de dentro do arquivo compactado.
2. Instale o Node.js 24 e o VS Code, caso ainda não tenha. O teste desta exportação usou Node.js 24.19.0 e npm 11.9.0.
3. No VS Code, escolha **Arquivo > Abrir Pasta** e selecione **Tend-Tudo-Showcase**, a pasta que contém `package.json`.
4. Abra **Terminal > Novo Terminal**.

## 2. Instalar e iniciar

No terminal aberto dentro da pasta do projeto, execute:

```sh
npm ci
npm run dev
```

A instalação precisa de internet. Depois do segundo comando, abra o endereço local mostrado no terminal. Deixe o terminal aberto enquanto usa o site. Para encerrar, pressione **Ctrl+C**.

No Windows, se o PowerShell bloquear `npm.ps1`, selecione o perfil **Command Prompt / Prompt de Comando** no terminal do VS Code e execute os mesmos comandos. Você também pode usar `npm.cmd ci` e `npm.cmd run dev`.

Não abra um arquivo HTML com duplo clique: este projeto usa React, TypeScript, Vite e TanStack Start e precisa do servidor de desenvolvimento.

## 3. Onde fazer as alterações

| O que alterar | Arquivo ou pasta |
| --- | --- |
| Contatos, categorias, nomes e descrições dos produtos | `src/data/store.ts` |
| Textos das seções e estrutura da página | `src/routes/index.tsx` |
| Cores, estilos e tipografia | `src/styles.css` |
| Título geral, fontes e metadados | `src/routes/__root.tsx` |
| Fotos locais | `public/__l5e/assets-v1/` |
| Endereço de cada foto | `src/assets/catalogo/*.asset.json`, campo `url` |
| Ícone da aba | `public/favicon.svg` |

As subpastas das fotos preservam os endereços usados no Lovable. Cada arquivo mantém um nome descritivo, como `01-hero-foto-principal.png` ou `08-botoes-de-madeira.png`.

Para substituir uma foto, troque o PNG correspondente mantendo seu nome e pasta. Para usar outro nome ou formato, coloque a nova imagem em `public/imagens/` e atualize o campo `url` do respectivo `.asset.json`, por exemplo, para `/imagens/minha-foto.jpg`. O caminho público não inclui a palavra `public`.

## 4. Conferir a compilação

```sh
npm run build
```

A configuração original gera uma aplicação com servidor usando o destino Cloudflare do Nitro. A saída não é uma pasta de HTML estático para qualquer hospedagem. Para hospedar fora do Lovable, use uma hospedagem compatível ou adapte a configuração de implantação.

## 5. O que esta exportação contém

- Os 92 arquivos de texto/código recuperados do projeto, incluindo os componentes, configurações e instruções.
- As 15 fotografias originais usadas no catálogo, servidas a partir desta pasta, sem depender das permissões do Google Drive ou dos endereços de mídia do Lovable.
- Um `package-lock.json` gerado durante a instalação testada, para repetir as versões com `npm ci`.
- Um favicon SVG com o mesmo texto “TT” usado na demonstração. Ele substitui apenas o ícone da aba; não é uma logo oficial da loja.

O conector não forneceu os seis arquivos binários antigos do repositório em formato utilizável. O `public/favicon.ico` foi substituído pelo SVG. Os outros cinco JPGs antigos, sem uso no catálogo atual, não estão incluídos: `produtos-acessorios.jpg`, `produtos-argolas.jpg`, `produtos-botoes.jpg`, `produtos-linhas.jpg` e `tend-tudo-hero.jpg`. Todas as 15 fotos atualmente referenciadas pelo site estão incluídas.

As dependências (`node_modules`) e os resultados de compilação não vão no ZIP: são recriados pelos comandos acima. Não é necessário configurar banco de dados ou chaves de API para este catálogo.

## 6. Origem e edição independente

- Projeto: Tend Tudo Showcase.
- Versão exportada: `6cde7b61f464db5c58e5df2bad6a1a10bb74d1ae`.
- Data da exportação: 21/09/2026.
- Editor de origem: https://lovable.dev/projects/b9fbe913-41d5-4ca4-b17c-c374f6c66a50

Esta é uma cópia para edição local. Alterações feitas nesta pasta não são enviadas automaticamente ao Lovable. O projeto original não foi alterado nesta exportação.

O site continua sendo uma demonstração. Consulte também `INSTRUCOES.md` para as informações da loja que precisam de confirmação antes de um lançamento.
