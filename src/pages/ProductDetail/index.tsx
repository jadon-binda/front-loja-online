import Header from '../../components/Header'
import './styles.css'
import useProductDetail from '../../hooks/useProductDetail'
import { useEffect, useState } from 'react'
import Product from '../../types/Product'
import ProductImage from '../../components/ProductImage'

export default function ProductDetail() {
  const { handleGetProduct } = useProductDetail()
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    const currentProduct = handleGetProduct()
    if (currentProduct) {
      setProduct(currentProduct)
    }
  }, [])

  return (
    <div className='container'>
      <Header showArrowBack />
      <div className='product-detail'>
        <ProductImage image={product?.imageURL || ''} name={product?.name || ''} size={180} />
        <h1>{product?.name}</h1>
        <div className='horizontal-line line'></div>
        <div className='price-stock-wrapper'>
          <h3>Preço: <span>R$ {product?.price}</span></h3>
          <h3>Estoque: <span>{product?.stock}</span></h3>
        </div>
        <h3>Descrição:</h3>
        <p>
          {product?.description}
        </p>
        <button className='btn btn-white'>Comprar</button>
      </div>
    </div>
  )
}