import axios from 'axios';
import { Product } from './models/product.model';
(async ()=> {

     //existen varias formas de tipar: 
     //1) -> es tipado solo para afuera de la funcion. Dentro de la funcion la respuesta es any.
      async function getProducts(): Promise<Product[]> {
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        return rta.data; // -> res.data es any
      }

      //2) axios soporta tipado
      async function getProductsAxios() {
        const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
        //data.find -> arreglo de productos
        return data;
      }

      //3) si no soporta el tipado axios -> usar CAST
      async function getProductsCast() {
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        const data = rta.data as Product[];
        return data;
      }
      const products = await getProducts();
      console.log(products);

      console.log(products.map((item) => `${item.id} - ${item.title}`))

  })();