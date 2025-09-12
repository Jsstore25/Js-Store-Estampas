export interface Product {
  // Fix: Added id and imageUrl to support admin functionality and fix type errors.
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  downloadLink: string;
}

export interface FaqItem {
  // Fix: Added id to support admin functionality and fix type errors.
  id: number;
  question: string;
  answer: string;
}

// Fix: Added ShowcaseImage interface for customization examples.
export interface ShowcaseImage {
  id: number;
  imageUrl: string;
  alt: string;
}

export interface PriceTier {
  quantity: number;
  price: string;
}

export interface PricingCategory {
  title: string;
  tiers: PriceTier[];
}
