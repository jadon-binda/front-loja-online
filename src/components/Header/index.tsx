import './styles.css'
const Logo = require('../../assets/logo.png')

export default function Header() {

  return (
    <header>
      <img src={Logo} alt="logo" />
    </header>
  )
}