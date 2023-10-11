import './styles.css';
import Product from '../../types/Product';

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {

  return (
    <div className='product-card'>
      <img src={product.imageURL} alt='computador' className='product-image' />
      <h1>{product.name}</h1>
    </div>
  )
}