import SectionDividerLine from 'components/Shared/SectionDividerLine';
import React from 'react';
import Form from './Form';
import Nav from './Nav';

function Header() {
  return (
    <header className="header">
      <Nav />
      <SectionDividerLine />
      <div className="header__main">
        <div className="header__container container">
          <div className="header__title_arrow">
            <div className="header__text-container">
              <h1 className="header__title">КУРСЫ АНГЛИЙСКОГО ЯЗЫКА с опытными преподавателями</h1>
              <h2 className="header__subtitle">
                Оставьте заявку и получите бонус - <span className="text--orange">Спикинг клаб</span> 0 тенге
              </h2>
            </div>
            <img className="header__arrow" src="/images/arrow.png" alt="arrow" />
          </div>
          <Form />
        </div>
      </div>
    </header>
  );
}

export default Header;
