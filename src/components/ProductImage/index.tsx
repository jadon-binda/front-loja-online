import './styles.css'

type Props = {
  image: string,
  name?: string,
  size?: number,
}

export default function ProductImage({ image, name, size }: Props) {
  const imageSize = size || 147

  return (
    <div>
      <img
        src={image}
        alt={name}
        className='product-image'
        style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
      />
    </div>
  )
}