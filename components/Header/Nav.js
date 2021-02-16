import React from 'react';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container container">
        <div className="nav__logo">Logo</div>
        <div className="nav__main">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a className="nav__list-item-link" href="#">Программы обучения</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-item-link" href="#">Наша команда</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-item-link" href="#">Отзывы</a>
            </li>
          </ul>
          <button className="nav__button">+7 (777) 777-77-77</button>
        </div>
        <button className="nav__hamburger-menu">
          <span className="nav__hamburger-menu-item"></span>
          <span className="nav__hamburger-menu-item"></span>
          <span className="nav__hamburger-menu-item"></span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
