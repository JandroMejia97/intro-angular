import { Brand } from './brand.model';
import { Category } from './category.model';
import { Resource } from './resource.model';
import { Variation } from './variation.model';

export interface Product extends Resource {
  brand: Brand;
  category: Category;
  name: string;
  currentPrice: string;
  rawPrice: string;
  likesCount: number;
  discount: number;
  isNew: false;
  model: string;
  url: string;
  variations: Variation[];
  imageUrl: string;
}
