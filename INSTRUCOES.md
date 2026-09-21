# Tend Tudo Aviamentos — guia de edição

Esta é uma versão demonstrativa de catálogo. Ela não consulta estoque, não calcula preços e não envia mensagens automaticamente.

## Conteúdo, contatos e produtos
Edite `src/data/store.ts` para alterar nome, endereço, WhatsApp, Instagram, categorias e produtos. As 15 imagens atuais vieram da pasta “Tend Tudo Aviamentos — Fotos” no Google Drive. Para trocar uma foto, adicione o novo arquivo aos recursos do projeto, importe-o no início do arquivo e use seu endereço no campo `image`. Use fotos autorizadas e mantenha o texto alternativo fiel.

## Textos, cores e fontes
Os textos ficam em `src/routes/index.tsx`. Cores e fontes ficam em `src/styles.css`. Evite publicar horários, preços ou disponibilidade sem confirmação.

## Executar localmente
Instale o Bun, execute `bun install` e depois `bun run dev`. Abra o endereço exibido no terminal.

## Exportar e hospedar
O código usa React com TanStack Start e pode ser exportado pelos recursos disponíveis na plataforma e hospedado em serviço compatível. A disponibilidade de exportação e publicação depende do plano e das regras atuais da plataforma; confirme antes de escolher a hospedagem.

## Confirmar antes do lançamento
- Logo oficial e autorização de uso.
- Confirmar quais imagens do acervo são fotos reais da loja e quais são apenas referências ilustrativas.
- Horários de funcionamento.
- Catálogo, modelos, disponibilidade e condições atuais.
- Endereço, WhatsApp e Instagram com o proprietário.
