import { useState } from 'react'
import './styles.css'

type Props = {
  title: string,
}

export default function QtyCounter({ title }: Props) {
  const [qtyCount, setQtyCount] = useState<number>(0)

  function handleChangeQuantity(value: number) {
    const nextValue = qtyCount + (value)
    if (nextValue < 0) return
    setQtyCount(nextValue)
  }

  return (
    <div className='container-counter'>
      <h4>{title}</h4>
      <div className='container-counter-buttons'>
        <button
          className='btn-white counter-buttons'
          onClick={() => handleChangeQuantity(-1)}
        >
          -
        </button>
        <div className='container-quantity'>
          {qtyCount}
        </div>
        <button
          className='btn-white counter-buttons'
          onClick={() => handleChangeQuantity(1)}
        >
          +
        </button>
      </div>
    </div>
  )
}