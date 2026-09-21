import heroImage from "@/assets/catalogo/01-hero-foto-principal.png.asset.json";
import storeImage from "@/assets/catalogo/02-interior-ilustrativo.png.asset.json";
import sewingThreadImage from "@/assets/catalogo/03-linha-de-costura.png.asset.json";
import crochetThreadImage from "@/assets/catalogo/04-fio-para-croche.png.asset.json";
import embroideryThreadImage from "@/assets/catalogo/05-linha-de-bordado.png.asset.json";
import decorativeButtonsImage from "@/assets/catalogo/06-botoes-decorativos.png.asset.json";
import snapButtonsImage from "@/assets/catalogo/07-botoes-de-pressao.png.asset.json";
import woodenButtonsImage from "@/assets/catalogo/08-botoes-de-madeira.png.asset.json";
import ringsImage from "@/assets/catalogo/09-argolas-para-acabamento.png.asset.json";
import eyeletsImage from "@/assets/catalogo/10-ilhoses-e-rebites.png.asset.json";
import zippersImage from "@/assets/catalogo/11-ziperes-e-fechos.png.asset.json";
import seamRippersImage from "@/assets/catalogo/12-descosturadores.png.asset.json";
import needlesImage from "@/assets/catalogo/13-agulhas-para-costura.png.asset.json";
import elasticsImage from "@/assets/catalogo/14-elasticos.png.asset.json";
import measuringImage from "@/assets/catalogo/15-fita-metrica-e-regua.png.asset.json";

export const store = {
  name: "Tend Tudo Aviamentos",
  displayName: "TendTudo | Aviamentos & Costura",
  address: "Avenida Augusto dos Anjos, 1366 — Parangaba, Fortaleza — Ceará",
  whatsappLabel: "(85) 99925-6177",
  whatsappNumber: "5585999256177",
  instagramUrl: "https://www.instagram.com/aviamentostendtudo/",
  instagramHandle: "@aviamentostendtudo",
};

export const categories = ["Todos", "Linhas e fios", "Botões", "Argolas e acabamentos", "Acessórios de costura"] as const;
export type Category = (typeof categories)[number];
export type Product = { id: string; name: string; category: Exclude<Category, "Todos">; description: string; image: string; imageAlt: string };

export const images = {
  hero: heroImage.url,
  store: storeImage.url,
};

export const products: Product[] = [
  { id: "linha-costura", name: "Linhas de costura", category: "Linhas e fios", description: "Consulte cores, tipos e metragem.", image: sewingThreadImage.url, imageAlt: "Carretéis de linha de costura em várias cores" },
  { id: "fio-croche", name: "Fios para crochê", category: "Linhas e fios", description: "Consulte cores, espessuras e opções disponíveis.", image: crochetThreadImage.url, imageAlt: "Novelos de fios para crochê em cores suaves" },
  { id: "linha-bordado", name: "Linhas de bordado", category: "Linhas e fios", description: "Consulte a variedade de cores e tipos.", image: embroideryThreadImage.url, imageAlt: "Meadas de linha de bordado organizadas por cor" },
  { id: "botoes-decorativos", name: "Botões decorativos", category: "Botões", description: "Consulte modelos e acabamentos.", image: decorativeButtonsImage.url, imageAlt: "Seleção de botões decorativos variados" },
  { id: "botoes-pressao", name: "Botões de pressão", category: "Botões", description: "Consulte modelos, tamanhos e acabamentos.", image: snapButtonsImage.url, imageAlt: "Botões de pressão metálicos" },
  { id: "botoes-madeira", name: "Botões de madeira", category: "Botões", description: "Consulte formatos e tamanhos disponíveis.", image: woodenButtonsImage.url, imageAlt: "Botões de madeira em formatos redondos e quadrados" },
  { id: "argolas-acabamentos", name: "Argolas para acabamento", category: "Argolas e acabamentos", description: "Consulte medidas e materiais.", image: ringsImage.url, imageAlt: "Argolas metálicas douradas e prateadas" },
  { id: "ilhoses-rebites", name: "Ilhoses e rebites", category: "Argolas e acabamentos", description: "Consulte tamanhos, cores e aplicações.", image: eyeletsImage.url, imageAlt: "Ilhoses e rebites em acabamentos dourado e prateado" },
  { id: "ziperes-fechos", name: "Zíperes e fechos", category: "Argolas e acabamentos", description: "Consulte cores, comprimentos e modelos.", image: zippersImage.url, imageAlt: "Zíperes em diferentes cores" },
  { id: "descosturadores", name: "Descosturadores", category: "Acessórios de costura", description: "Consulte modelos disponíveis.", image: seamRippersImage.url, imageAlt: "Descosturadores com cabos coloridos" },
  { id: "agulhas-costura", name: "Agulhas para costura", category: "Acessórios de costura", description: "Consulte tipos e tamanhos disponíveis.", image: needlesImage.url, imageAlt: "Agulhas para costura em diversos tamanhos" },
  { id: "elasticos", name: "Elásticos", category: "Acessórios de costura", description: "Consulte larguras, cores e opções disponíveis.", image: elasticsImage.url, imageAlt: "Elásticos brancos e pretos em diferentes larguras" },
  { id: "medicao", name: "Fitas métricas e réguas", category: "Acessórios de costura", description: "Consulte modelos e tamanhos disponíveis.", image: measuringImage.url, imageAlt: "Fita métrica amarela e régua transparente" },
];
