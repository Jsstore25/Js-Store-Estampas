import { Product, FaqItem, PricingCategory, ShowcaseImage } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Oversized',
    description: 'Nossa camiseta oversized é feita com malha de algodão penteado fio 30.1, garantindo conforto e durabilidade. Possui gola canelada 2×1 de 3cm e reforço de ombro a ombro. O caimento é amplo e estiloso, perfeito para um visual moderno. Disponível nos tamanhos P, M, G, GG e XGG.',
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/modelo-oversized-fenix.png',
    buttonText: 'BAIXAR PACOTE DE ESTAMPAS',
    downloadLink: 'https://drive.google.com/drive/folders/1I4g7KimfVIp9sJUGgLGvGxb8XJmj2ebR'
  },
  {
    id: 2,
    title: 'T-shirts',
    description: 'Nossa T-shirt é confeccionada em malha de algodão penteado fio 30.1, proporcionando um toque macio e excelente caimento. Possui gola canelada 2×1 de 2cm e reforço de ombro a ombro. É uma peça versátil e confortável para o dia a dia. Disponível nos tamanhos P, M, G, GG e XGG.',
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/modelo-t-shirt-fenix.png',
    buttonText: 'BAIXAR PACOTE DE ESTAMPAS',
    downloadLink: 'https://drive.google.com/drive/folders/16mlWjH6Z-fxR7ntbBoCzAEVvLhiBu_PV'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    question: 'Qual o valor mínimo para pedido?',
    answer: 'O valor mínimo para pedido é de 12 peças.'
  },
  {
    id: 2,
    question: 'Como funciona o envio do pedido?',
    answer: 'O envio é realizado apenas via Correios, com o frete por conta do cliente.'
  },
  {
    id: 3,
    question: 'Qual o prazo de produção?',
    answer: 'Nosso prazo de produção é de 3 a 5 dias úteis. Caso ocorra qualquer imprevisto que altere este prazo, você será comunicado.'
  },
  {
    id: 4,
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos pagamento somente via PIX. O valor total do pedido deve ser pago no ato da confirmação.'
  },
  {
    id: 5,
    question: 'Posso enviar minha própria arte?',
    answer: 'Sim! Você pode nos enviar sua arte em alta resolução (vetor ou PNG 300dpi).'
  }
];

export const PRICING_DATA: PricingCategory[] = [
  {
    title: 'Camisa T-Shirt',
    tiers: [
      { quantity: 12, price: 'R$ 35 (Cada)' },
      { quantity: 20, price: 'R$ 34 (Cada)' },
      { quantity: 30, price: 'R$ 33 (Cada)' },
      { quantity: 50, price: 'R$ 32 (Cada)' },
      { quantity: 100, price: 'R$ 31 (Cada)' },
    ],
  },
  {
    title: 'Over 100% algodão 30.1',
    tiers: [
      { quantity: 12, price: 'R$ 41 (Cada)' },
      { quantity: 20, price: 'R$ 40 (Cada)' },
      { quantity: 30, price: 'R$ 38,50 (Cada)' },
      { quantity: 50, price: 'R$ 37,50 (Cada)' },
      { quantity: 100, price: 'R$ 36 (Cada)' },
    ],
  },
  {
    title: 'Cotton peruana',
    tiers: [
      { quantity: 12, price: 'R$ 42 (Cada)' },
      { quantity: 20, price: 'R$ 41 (Cada)' },
      { quantity: 30, price: 'R$ 40 (Cada)' },
      { quantity: 50, price: 'R$ 39 (Cada)' },
      { quantity: 100, price: 'R$ 37 (Cada)' },
    ],
  },
  {
    title: 'Over Suedine',
    tiers: [
      { quantity: 12, price: 'R$ 55 (Cada)' },
      { quantity: 20, price: 'R$ 53 (Cada)' },
      { quantity: 30, price: 'R$ 50 (Cada)' },
      { quantity: 50, price: 'R$ 49 (Cada)' },
      { quantity: 100, price: 'R$ 48 (Cada)' },
    ],
  },
];

export const SHOWCASE_IMAGES: ShowcaseImage[] = [
  {
    id: 1,
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/arte-catalogo-1.jpg',
    alt: 'Camiseta personalizada com estampa de estátua usando óculos de realidade virtual',
  },
  {
    id: 2,
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/arte-catalogo-2.jpg',
    alt: 'Camiseta personalizada com estampa em homenagem a Kobe Bryant',
  },
  {
    id: 3,
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/arte-catalogo-3.jpg',
    alt: 'Camiseta personalizada com estampa da estátua de Hermes',
  },
  {
    id: 4,
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/arte-catalogo-4.jpg',
    alt: 'Camiseta personalizada com estampa de estátua e a frase "Just one left"',
  },
  {
    id: 5,
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/arte-catalogo-5.jpg',
    alt: 'Camiseta personalizada com estampa religiosa "Jesus Saves"',
  },
  {
    id: 6,
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/arte-catalogo-6.jpg',
    alt: 'Camiseta personalizada com estampa religiosa "Cristo Vive em Mim"',
  },
  {
    id: 7,
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/arte-catalogo-7.jpg',
    alt: 'Camiseta personalizada com estampa religiosa de Jesus e a frase "Foi por você"',
  },
  {
    id: 8,
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/arte-catalogo-8.jpg',
    alt: 'Camiseta personalizada com estampa religiosa de mãos orando e a frase "Posso todas as coisas em Cristo que me fortalece"',
  },
  {
    id: 9,
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/arte-catalogo-9.jpg',
    alt: 'Camiseta personalizada com estampa de símbolos religiosos',
  },
  {
    id: 10,
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/arte-catalogo-10.jpg',
    alt: 'Camiseta personalizada com estampa de anjo e a palavra "Blessed"',
  },
  {
    id: 11,
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/arte-catalogo-11.jpg',
    alt: 'Camiseta personalizada com estampa do rosto de Kobe Bryant',
  },
  {
    id: 12,
    imageUrl: 'https://fenix00atacado.com.br/wp-content/uploads/2024/05/arte-catalogo-12.jpg',
    alt: 'Camiseta personalizada com estampa "Visions of the future"',
  },
];