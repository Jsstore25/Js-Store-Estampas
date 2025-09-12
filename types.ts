export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  downloadLink: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PriceTier {
  quantity: number;
  price: string;
}

export interface PricingCategory {
  title: string;
  tiers: PriceTier[];
}
