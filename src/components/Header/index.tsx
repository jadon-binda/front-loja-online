import { useNavigate } from 'react-router-dom'
import './styles.css'
import Logo from '../../assets/logo.png'
import ArrowBack from '../../assets/arrow-back-left-icon.svg'

type Props = {
  showArrowBack?: boolean
}

export default function Header({ showArrowBack }: Props) {
  const navigate = useNavigate()

  return (
    <header>
      {
        showArrowBack &&
        <img
          src={ArrowBack}
          alt="arrow back"
          className='arrow-back'
          onClick={() => navigate(-1)}
        />
      }
      <img src={Logo} alt="logotipo" />
    </header>
  )
}