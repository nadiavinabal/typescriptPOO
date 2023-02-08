import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";
import axios from 'axios';

export class ProductHttpService implements ProductService {

    private url = 'https://api.escuelajs.co/api/v1/products';
    async getAll() {
        const {data} = await axios.get<Product[]>(this.url);
        return data;
    }
    async update(id: number, change: UpdateProductDto) {
        const {data} = await axios.put(`${this.url}/${id}`,change);
        return data;
    }
    async create(dto: CreateProductDto) {
        const {data} = await axios.post(this.url,dto);
        return data;
    }
    async findOne(id: number) {
        const {data} = await axios.get(`${this.url}/${id}`);
        return data;
    }
  
}