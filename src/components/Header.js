import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Лого место в шапке" />
      <nav className="header__nav">
        <p className="header__nav-user">
          {props.email}
        </p>
        <Link to={props.link} className={"header__nav-link " + props.grey}>
          {props.title}
        </Link>
      </nav>
    </header>
  );
}
