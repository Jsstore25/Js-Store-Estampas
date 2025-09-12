// Fix: Corrected import paths to use types and constants from within the src directory.
import { Product, FaqItem, ShowcaseImage } from '../types';
import { PRODUCTS as defaultProducts, FAQ_DATA as defaultFaq } from '../constants';

// Fix: Added default showcase images data.
const defaultShowcaseImages: ShowcaseImage[] = [
    { id: 1, imageUrl: 'https://i.ibb.co/6gBSV1D/photo-1521572163474-6864f9cf17ab.jpg', alt: 'T-shirt with custom design for a client' },
    { id: 2, imageUrl: 'https://i.ibb.co/bF9q1b2/photo-1576566588028-4147f3842f27.jpg', alt: 'Another custom t-shirt example' },
    { id: 3, imageUrl: 'https://i.ibb.co/z5ZJ1fP/photo-1527719327859-c6ce80353573.jpg', alt: 'Custom apparel for a brand' },
    { id: 4, imageUrl: 'https://i.ibb.co/k0V2dff/photo-1503341504253-dff4816485d1.jpg', alt: 'Client example of a printed t-shirt' },
];

const LS_KEYS = {
  PRODUCTS: 'jsstore_products',
  FAQ: 'jsstore_faq',
  // Fix: Added a local storage key for showcase images.
  SHOWCASE: 'jsstore_showcase_images',
};

// Initialize with default data if not present
export function initializeData() {
  if (!localStorage.getItem(LS_KEYS.PRODUCTS)) {
    localStorage.setItem(LS_KEYS.PRODUCTS, JSON.stringify(defaultProducts));
  }
  if (!localStorage.getItem(LS_KEYS.FAQ)) {
    localStorage.setItem(LS_KEYS.FAQ, JSON.stringify(defaultFaq));
  }
  // Fix: Added initialization for showcase images.
  if (!localStorage.getItem(LS_KEYS.SHOWCASE)) {
    localStorage.setItem(LS_KEYS.SHOWCASE, JSON.stringify(defaultShowcaseImages));
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

// Fix: Added functions to get and save showcase images.
// Showcase Functions
export function getShowcaseImages(): ShowcaseImage[] {
  const stored = localStorage.getItem(LS_KEYS.SHOWCASE);
  return stored ? JSON.parse(stored) : defaultShowcaseImages;
}
export function saveShowcaseImages(images: ShowcaseImage[]) {
  localStorage.setItem(LS_KEYS.SHOWCASE, JSON.stringify(images));
  window.dispatchEvent(new Event('storage'));
}