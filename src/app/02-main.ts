import { ProductMemoryService } from "./service/product-memory.service";

//creamos una instancia

const ProductService = new ProductMemoryService();

ProductService.create({
    title: 'Producto 1',
    price: 100,
    description: 'bla bla bla',
    categoryId: 12,
    images: []
})

const products = ProductService.getAll();
const productId = products[0].id;
ProductService.update(productId,{
    title: 'nuevo nombre',
})

const rta = ProductService.findOne(productId);
console.log(rta);