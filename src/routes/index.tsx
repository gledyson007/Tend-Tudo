import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  Scissors,
  ShoppingBag,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { categories, images, products, store, type Category, type Product } from "@/data/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tend Tudo Aviamentos — Costura e artesanato em Fortaleza" },
      {
        name: "description",
        content: "Explore linhas, botões, acabamentos e acessórios e monte seu orçamento com a Tend Tudo Aviamentos, em Fortaleza.",
      },
      { property: "og:title", content: "Tend Tudo Aviamentos — Catálogo de aviamentos" },
      {
        property: "og:description",
        content: "Escolha seus produtos e consulte modelos, cores e preços diretamente pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type QuoteItem = Product & { quantity: number };

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label="Tend Tudo Aviamentos — início">
      <span className="flex size-11 -skew-x-6 items-center justify-center rounded-full border-2 border-primary font-display text-lg font-black text-primary transition-transform group-hover:-rotate-3">
        TT
      </span>
      <span className={compact ? "hidden leading-none sm:block" : "leading-none"}>
        <span className="block font-display text-lg font-black italic text-secondary-foreground sm:text-xl">TEND TUDO</span>
        <span className="mt-1 block text-[10px] font-bold tracking-[0.18em] text-primary">AVIAMENTOS</span>
      </span>
    </a>
  );
}

function Index() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [notes, setNotes] = useState("");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProducts = useMemo(
    () => products.filter((product) => activeCategory === "Todos" || product.category === activeCategory),
    [activeCategory],
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const addProduct = (product: Product) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      return existing
        ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...product, quantity: 1 }];
    });
    setQuoteOpen(true);
  };

  const setQuantity = (id: string, next: number) => {
    if (!Number.isInteger(next) || next < 1) return;
    setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: next } : item));
  };

  const whatsappUrl = useMemo(() => {
    const productLines = items.map((item) => `• ${item.name} — quantidade desejada: ${item.quantity}`).join("\n");
    const notesLine = notes.trim() ? `\n\nObservações: ${notes.trim()}` : "";
    const message = `Olá, Tend Tudo! Gostaria de consultar preços e disponibilidade:\n\n${productLines}${notesLine}\n\nPodem confirmar os modelos disponíveis e o valor do orçamento?`;
    return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [items, notes]);

  return (
    <div id="inicio" className="min-h-screen bg-background text-foreground">
      <div className="bg-primary px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.08em] text-primary-foreground sm:text-sm">
        Catálogo demonstrativo • valores e disponibilidade sob consulta
      </div>

      <header className="sticky top-0 z-40 border-b border-secondary-foreground/10 bg-secondary/95 text-secondary-foreground backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Brand compact />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            <a href="#catalogo" className="text-sm font-semibold transition-colors hover:text-primary">Catálogo</a>
            <a href="#loja" className="text-sm font-semibold transition-colors hover:text-primary">Nossa loja</a>
            <a href="#contato" className="text-sm font-semibold transition-colors hover:text-primary">Contato</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button onClick={() => setQuoteOpen(true)} size="lg" className="h-11 px-3 sm:px-5" aria-label={`Meu orçamento, ${itemCount} itens`}>
              <ShoppingBag aria-hidden="true" />
              <span className="hidden sm:inline">Meu orçamento</span>
              <span className="flex size-6 items-center justify-center rounded-full bg-secondary text-xs text-secondary-foreground">{itemCount}</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-secondary-foreground md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-secondary-foreground/10 px-4 py-3 md:hidden" aria-label="Navegação móvel">
            <div className="mx-auto grid max-w-7xl gap-1">
              {[["Catálogo", "#catalogo"], ["Nossa loja", "#loja"], ["Contato", "#contato"]].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 font-semibold hover:bg-secondary-foreground/10">{label}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative isolate min-h-[560px] overflow-hidden bg-secondary text-secondary-foreground sm:min-h-[620px]">
          <img src={images.hero} alt="Composição de linhas, botões, tesoura e acessórios de costura" width={1122} height={1402} className="absolute inset-0 h-full w-full object-cover object-[65%_45%] opacity-60 sm:object-[70%_46%] sm:opacity-75" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--secondary)_0%,color-mix(in_oklab,var(--secondary)_88%,transparent)_45%,color-mix(in_oklab,var(--secondary)_15%,transparent)_100%)]" />
          <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-4 py-16 sm:min-h-[620px] sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-primary"><Scissors className="size-4" /> Aviamentos, costura & artesanato</p>
              <h1 className="font-display text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">Sua ideia.<br />Seus detalhes.<br /><span className="text-primary">Tend Tudo.</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-secondary-foreground/85">Linhas, botões e acabamentos para transformar seu próximo projeto em realidade.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 px-6 text-base"><a href="#catalogo">Explorar catálogo <ArrowDown /></a></Button>
                <Button asChild variant="outline" size="lg" className="h-12 border-secondary-foreground/40 bg-secondary/50 px-6 text-base text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"><a href={`https://wa.me/${store.whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle /> Conversar com a loja</a></Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-card px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3">
            <div className="flex items-center gap-3"><Sparkles className="size-5 shrink-0 text-primary" /><p className="text-sm font-semibold">Variedade para costura e artesanato</p></div>
            <div className="flex items-center gap-3"><MessageCircle className="size-5 shrink-0 text-primary" /><p className="text-sm font-semibold">Atendimento direto pelo WhatsApp</p></div>
            <div className="flex items-center gap-3"><MapPin className="size-5 shrink-0 text-primary" /><p className="text-sm font-semibold">Parangaba, Fortaleza — CE</p></div>
          </div>
        </section>

        <section id="catalogo" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">Nosso catálogo</p>
                <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Um mundo de possibilidades.</h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">Escolha o que você precisa e consulte cores, modelos e quantidades com a nossa equipe.</p>
              </div>
              <p className="max-w-xs text-sm leading-6 text-muted-foreground">Imagens do acervo fornecido para esta demonstração. Confirme as opções disponíveis.</p>
            </div>

            <div className="mt-9 flex gap-2 overflow-x-auto pb-3" role="group" aria-label="Filtrar produtos por categoria">
              {categories.map((category) => (
                <Button key={category} variant={activeCategory === category ? "default" : "outline"} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className="h-11 shrink-0 text-sm">
                  {category}
                </Button>
              ))}
            </div>

            <div className="mt-7 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleProducts.map((product) => (
                <article key={product.id} className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/50">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img src={product.image} alt={product.imageAlt} width={1448} height={1086} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                    <span className="absolute bottom-2 left-2 rounded bg-secondary/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-secondary-foreground backdrop-blur-sm">Imagem ilustrativa</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary">{product.category}</p>
                    <h3 className="mt-2 font-display text-xl font-bold">{product.name}</h3>
                    <p className="mt-2 flex-1 text-base leading-6 text-muted-foreground">{product.description}</p>
                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                      <span className="text-sm font-bold">Preço sob consulta</span>
                      <Button onClick={() => addProduct(product)} size="icon" className="size-11 shrink-0" aria-label={`Adicionar ${product.name} ao orçamento`} title="Adicionar ao orçamento"><Plus /></Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">Não encontrou o que procura? Envie uma foto ou descrição para nossa equipe.</p>
          </div>
        </section>

        <section id="contato" className="scroll-mt-24 bg-primary px-4 py-14 sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground/70">Atendimento personalizado</p>
              <h2 className="mt-2 font-display text-3xl font-black text-primary-foreground sm:text-4xl">Procurando algo específico?</h2>
              <p className="mt-3 text-lg text-primary-foreground/80">Envie uma foto ou descreva sua ideia no WhatsApp.</p>
            </div>
            <Button asChild variant="secondary" size="lg" className="h-12 text-base"><a href={`https://wa.me/${store.whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle /> Falar com a Tend Tudo</a></Button>
          </div>
        </section>

        <section id="loja" className="scroll-mt-24 bg-card px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <figure className="overflow-hidden rounded-lg bg-muted">
              <img src={images.store} alt="Interior ilustrativo de uma loja organizada com materiais de costura" width={1672} height={941} loading="lazy" className="aspect-[16/10] h-full w-full object-cover" />
              <figcaption className="px-4 py-3 text-xs text-muted-foreground">Imagem ilustrativa do acervo — foto real da loja pendente de confirmação.</figcaption>
            </figure>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">Nossa loja</p>
              <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Detalhes que fazem a diferença.</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">Do primeiro ponto ao acabamento: encontre materiais para seus projetos de costura e artesanato na Tend Tudo, em Fortaleza.</p>
              <div className="mt-8 border-y border-border py-6">
                <div className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-primary" aria-hidden="true" /><div><p className="font-bold">Parangaba, Fortaleza</p><address className="mt-1 not-italic leading-7 text-muted-foreground">{store.address}</address></div></div>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12"><a href={`https://wa.me/${store.whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle /> {store.whatsappLabel}</a></Button>
                <Button asChild variant="outline" size="lg" className="h-12"><a href={store.instagramUrl} target="_blank" rel="noreferrer"><Instagram /> Ver Instagram <ArrowUpRight /></a></Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary px-4 py-10 text-secondary-foreground sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 border-b border-secondary-foreground/15 pb-8 md:grid-cols-3">
          <Brand />
          <address className="not-italic text-sm leading-6 text-secondary-foreground/70">{store.address}</address>
          <div className="text-sm leading-7 md:text-right"><a className="block hover:text-primary" href={`https://wa.me/${store.whatsappNumber}`} target="_blank" rel="noreferrer">{store.whatsappLabel}</a><a className="block hover:text-primary" href={store.instagramUrl} target="_blank" rel="noreferrer">{store.instagramHandle}</a></div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-6 text-xs text-secondary-foreground/55 sm:flex-row sm:justify-between"><p>© 2026 {store.name}</p><p>Versão demonstrativa — não representa site oficial aprovado.</p></div>
      </footer>

      <Sheet open={quoteOpen} onOpenChange={setQuoteOpen}>
        <SheetContent className="flex w-full flex-col p-0 sm:max-w-lg">
          <SheetHeader className="border-b border-border p-6 pr-14 text-left">
            <SheetTitle className="font-display text-2xl font-black">Meu orçamento</SheetTitle>
            <SheetDescription>Organize sua lista e consulte valores e disponibilidade pelo WhatsApp.</SheetDescription>
          </SheetHeader>
          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-muted"><ShoppingBag className="text-muted-foreground" /></span>
              <h3 className="mt-5 text-xl font-bold">Sua lista está vazia</h3>
              <p className="mt-2 max-w-xs text-muted-foreground">Adicione produtos do catálogo para pedir informações à equipe.</p>
              <SheetClose asChild><Button className="mt-6 h-11" asChild><a href="#catalogo">Voltar ao catálogo <ChevronRight /></a></Button></SheetClose>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-2">
                {items.map((item) => (
                  <div key={item.id} className="border-b border-border py-5">
                    <div className="flex gap-4">
                      <img src={item.image} alt="" width={80} height={80} className="size-20 rounded-md object-cover" />
                      <div className="min-w-0 flex-1"><h3 className="font-bold">{item.name}</h3><p className="mt-1 text-sm text-muted-foreground">Preço sob consulta</p></div>
                      <Button variant="ghost" size="icon" onClick={() => setItems((current) => current.filter((candidate) => candidate.id !== item.id))} aria-label={`Remover ${item.name}`}><Trash2 /></Button>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium">Quantidade desejada</span>
                      <div className="flex h-10 items-center rounded-md border border-input">
                        <Button variant="ghost" size="icon" className="h-9 w-9" disabled={item.quantity <= 1} onClick={() => setQuantity(item.id, item.quantity - 1)} aria-label={`Diminuir quantidade de ${item.name}`}><Minus /></Button>
                        <input type="number" min="1" step="1" value={item.quantity} onChange={(event) => setQuantity(item.id, Number(event.target.value))} className="h-9 w-12 border-x border-input bg-background text-center text-base font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none" aria-label={`Quantidade de ${item.name}`} />
                        <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setQuantity(item.id, item.quantity + 1)} aria-label={`Aumentar quantidade de ${item.name}`}><Plus /></Button>
                      </div>
                    </div>
                  </div>
                ))}
                <label htmlFor="quote-notes" className="mt-6 block text-sm font-bold">Observações opcionais</label>
                <Textarea id="quote-notes" value={notes} onChange={(event) => setNotes(event.target.value)} className="mt-2 min-h-28 text-base" placeholder="Cores, medidas, modelos ou outros detalhes..." />
              </div>
              <div className="border-t border-border bg-background p-6">
                <p className="mb-4 text-xs leading-5 text-muted-foreground">O WhatsApp será aberto com a mensagem pronta. Você revisa e envia por lá.</p>
                <Button asChild size="lg" className="h-12 w-full text-base"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> Pedir orçamento no WhatsApp</a></Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}