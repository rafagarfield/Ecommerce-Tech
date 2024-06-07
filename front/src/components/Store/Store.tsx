
import Benefits from '../Benefits/Benefits';
import Cards from '../Cards/Cards';
import { getProducts } from '@/helpers/product.helper';

const Store = async() => {
    const products = await getProducts();
    
  return (
    
    <div>
        
        <Cards  products={products}/>
        <Benefits/>
    </div>
  )
}

export default Store
