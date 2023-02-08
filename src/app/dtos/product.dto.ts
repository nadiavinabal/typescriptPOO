import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
  //categoryId: string; -> si la entidad cambia de tipo no cambia aca
  categoryId: Category['id']; // toma el tipo que tiene la entidad. cambia el tipo dinamicamente
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
