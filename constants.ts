import { Product, FaqItem, PricingCategory } from './types';

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
    question: 'Qual o valor mínimo para pedido?',
    answer: 'O valor mínimo para pedido é de 12 peças.'
  },
  {
    question: 'Como funciona o envio do pedido?',
    answer: 'O envio é realizado apenas via Correios, com o frete por conta do cliente.'
  },
  {
    question: 'Qual o prazo de produção?',
    answer: 'Nosso prazo de produção é de 3 a 5 dias úteis. Caso ocorra qualquer imprevisto que altere este prazo, você será comunicado.'
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos pagamento somente via PIX. O valor total do pedido deve ser pago no ato da confirmação.'
  },
    {
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