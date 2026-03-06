import logo from '../assets/logo/logo.png'
import '../styles/header.css'

export default function Header() {

  return (
    <header className="hero">

      <div className="hero-title">

        <img src={logo} className="logo" />

        <h1>eveline#art</h1>

      </div>

    </header>
  )

}