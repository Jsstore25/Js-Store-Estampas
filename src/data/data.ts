import { Product, FaqItem, ShowcaseImage } from '../types';
import { PRODUCTS as defaultProducts, FAQ_DATA as defaultFaq, SHOWCASE_IMAGES as defaultShowcase } from '../constants';

const LS_KEYS = {
  PRODUCTS: 'jsstore_products',
  FAQ: 'jsstore_faq',
  SHOWCASE: 'jsstore_showcase',
};

// Initialize with default data if not present
export function initializeData() {
  if (!localStorage.getItem(LS_KEYS.PRODUCTS)) {
    localStorage.setItem(LS_KEYS.PRODUCTS, JSON.stringify(defaultProducts));
  }
  if (!localStorage.getItem(LS_KEYS.FAQ)) {
    localStorage.setItem(LS_KEYS.FAQ, JSON.stringify(defaultFaq));
  }
  if (!localStorage.getItem(LS_KEYS.SHOWCASE)) {
    localStorage.setItem(LS_KEYS.SHOWCASE, JSON.stringify(defaultShowcase));
  }
}

// Product Functions
export function getProducts(): Product[] {
  const stored = localStorage.getItem(LS_KEYS.PRODUCTS);
  return stored ? JSON.parse(stored) : defaultProducts;
}
export function saveProducts(products: Product[]) {
  localStorage.setItem(LS_KEYS.PRODUCTS, JSON.stringify(products));
  window.dispatchEvent(new Event('storage')); // Notify other tabs
}

// FAQ Functions
export function getFaqData(): FaqItem[] {
  const stored = localStorage.getItem(LS_KEYS.FAQ);
  return stored ? JSON.parse(stored) : defaultFaq;
}
export function saveFaqData(faqData: FaqItem[]) {
  localStorage.setItem(LS_KEYS.FAQ, JSON.stringify(faqData));
  window.dispatchEvent(new Event('storage'));
}

// Showcase Functions
export function getShowcaseImages(): ShowcaseImage[] {
  const stored = localStorage.getItem(LS_KEYS.SHOWCASE);
  return stored ? JSON.parse(stored) : defaultShowcase;
}
export function saveShowcaseImages(images: ShowcaseImage[]) {
  localStorage.setItem(LS_KEYS.SHOWCASE, JSON.stringify(images));
  window.dispatchEvent(new Event('storage'));
}