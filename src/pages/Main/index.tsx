import './styles.css';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import api from '../../services/api'
import { useEffect, useState } from 'react';
import Product from '../../types/Product';

function Main() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  async function loadProducts() {
    try {
      const response = await api.get('/product');

      setAllProducts([...response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="container">
      <Header />

      <div className='container-products'>
        {allProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;