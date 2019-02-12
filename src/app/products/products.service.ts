
import { Subject} from 'rxjs';

export class ProductsService {

  private  products  = ['A book'];
  productsUpdate = new Subject();

  addNewProduct(productName:string)
  {
     this.products.push(productName);
     this.productsUpdate.next();
  }
  getAllProducts()
  {
      return [...this.products];
  }
}