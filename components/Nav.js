import { useState } from 'react';
import jump from 'jump.js';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__container container">
        <div className="nav__logo">Speakia.kz</div>
        <div className="nav__main">
          <ul className="nav__list">
            <li className="nav__list-item">
              <button onClick={() => jump('#programOfEducation')} className="nav__list-item-link" href="#">
                Программы обучения
              </button>
            </li>
            <li className="nav__list-item">
              <button onClick={() => jump('#ourTeam')} className="nav__list-item-link" href="#">
                Наша команда
              </button>
            </li>
            <li className="nav__list-item">
              <button onClick={() => jump('#reviews')} className="nav__list-item-link" href="#">
                Отзывы
              </button>
            </li>
          </ul>
          <a
            href={`https://api.whatsapp.com/send?phone=77082286415&text=Здравствуйте! Меня заинтереcовал один из курсов Speakia.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="nav__button">+7 (708) 228-64-15</button>
          </a>
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
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  jump('#programOfEducation');
                }}
                className="nav__mobile-menu-list-item-button"
              >
                Программы обучения
              </button>
            </li>
            <li className="nav__mobile-menu-list-item">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  jump('#ourTeam');
                }}
                className="nav__mobile-menu-list-item-button"
              >
                Наша команда
              </button>
            </li>
            <li className="nav__mobile-menu-list-item">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  jump('#reviews');
                }}
                className="nav__mobile-menu-list-item-button"
              >
                Отзывы
              </button>
            </li>
            <li className="nav__mobile-menu-list-item">
              <a href="tel:+77082286415" target="_blank" rel="noopener noreferrer">
                <button className="nav__button">+7 (708) 228-64-15</button>
              </a>
            </li>
          </ul>
          <button className="nav__mobile-menu-close-button" onClick={() => setIsMobileMenuOpen(false)}></button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
