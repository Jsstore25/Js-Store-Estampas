export interface Product {
  // FIX: Added id to uniquely identify products.
  id: number;
  title: string;
  description: string;
  // FIX: Added imageUrl for product images.
  imageUrl: string;
  buttonText: string;
  downloadLink: string;
}

export interface FaqItem {
  // FIX: Added id to uniquely identify FAQ items.
  id: number;
  question: string;
  answer: string;
}

// FIX: Added ShowcaseImage interface for customization examples.
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