import React, { useState } from 'react';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__container container">
        <div className="nav__logo">
          <span className="nav__logo-main">Speakia</span>
          {/* <span className="nav__logo-since">since 2020</span> */}
        </div>
        <div className="nav__main">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a className="nav__list-item-link" href="#">
                Программы обучения
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-item-link" href="#">
                Наша команда
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-item-link" href="#">
                Отзывы
              </a>
            </li>
          </ul>
          <button className="nav__button">+7 (777) 777-77-77</button>
        </div>
        <button className="nav__hamburger-menu" onClick={() => setIsMobileMenuOpen(true)}>
          <span className="nav__hamburger-menu-item"></span>
          <span className="nav__hamburger-menu-item"></span>
          <span className="nav__hamburger-menu-item"></span>
        </button>
      </div>
      <div className={`nav__mobile-menu ${isMobileMenuOpen && 'nav__mobile-menu--opened'}`}>
        <div className="nav__mobile_menu-container container">
          <ul>
            <li className="nav__mobile-menu-list-item">
              <button className="nav__mobile-menu-list-item-button">Программы обучения</button>
            </li>
            <li className="nav__mobile-menu-list-item">
              <button className="nav__mobile-menu-list-item-button">Наша команда</button>
            </li>
            <li className="nav__mobile-menu-list-item">
              <button className="nav__mobile-menu-list-item-button">Отзывы</button>
            </li>
          </ul>
          <button className="nav__mobile-menu-close-button" onClick={() => setIsMobileMenuOpen(false)}></button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
