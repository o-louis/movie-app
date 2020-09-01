import React  from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__menu">
                <span className="header__menu__logo">
                    <Link to="/">Moovee</Link>
                </span>

                <nav className="header__menu__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-list__item">
                            <Link to="/search">Search</Link>
                        </li>
                        <li className="header__nav-list__item">
                            <Link to="/favorites">Favorites</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
