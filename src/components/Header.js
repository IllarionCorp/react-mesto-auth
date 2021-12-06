import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Лого место в шапке" />
      <nav className="header_navigate">

      </nav>
    </header>
  );
}
