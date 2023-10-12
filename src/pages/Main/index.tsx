import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import api from '../../services/api'
import Product from '../../types/Product'
import SearchBar from '../../components/SearchBar'
import './styles.css'

function Main() {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [searchValue, setSearchValue] = useState('')

  async function loadProducts() {
    try {
      const response = await api.get('/product')

      setAllProducts([...response.data])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="container">
      <Header />

      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

      <div className='container-products'>
        {
          allProducts.filter((product) => {
            const productNameLowerCase = product.name.toLocaleLowerCase()
            const searchValueLowerCase = searchValue.toLocaleLowerCase()
            return productNameLowerCase.includes(searchValueLowerCase)
          }).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Main