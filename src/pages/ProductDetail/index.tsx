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
        <ProductImage image={product?.imageURL || ''} name={product?.name || ''} size={200} />
        <h1>{product?.name}</h1>
        <div className='horizontal-line'></div>
        <h3>Preço: R$ {product?.price}</h3>
        <span>Quantidade em estoque: {product?.stock}</span>
        <p>
          Descrição: <br />
          {product?.description}
        </p>
      </div>
    </div>
  )
}