import { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface Image {
  url: string;
  attribution: string;
  origin: string;
}

export interface Article extends ParsedContent {
  rating: number;
  date: string;
  author: string;
  img: Image
}
