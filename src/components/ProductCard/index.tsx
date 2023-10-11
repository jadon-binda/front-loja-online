import './styles.css'
import Product from '../../types/Product'
import { useNavigate } from 'react-router-dom'
import useProductDetail from '../../hooks/useProductDetail'
import ProductImage from '../ProductImage'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const navigate = useNavigate()
  const { handleInsertProduct } = useProductDetail()

  function handleProductDetail() {
    handleInsertProduct(product)
    navigate('/product')
  }

  return (
    <div
      className='product-card'
      onClick={handleProductDetail}
    >
      <ProductImage image={product.imageURL} name={product.name} />
      <h1>{product.name}</h1>
    </div>
  )
}