
import './styles.css'

type Props = {
  searchValue: string,
  setSearchValue: Function,
}

export default function SearchBar({ searchValue, setSearchValue }: Props) {
  return (
    <div className='container-search'>
      <input
        type="search"
        name='product-search'
        id='product-search'
        placeholder='Pesquisar...'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  )
}