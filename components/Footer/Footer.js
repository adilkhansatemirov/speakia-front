function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__text-container">
          <p className="footer__ref-text">© Speakia.kz 2021</p>
          <p className="footer__logo-text">Speakia.kz</p>
          <p className="footer__ref-text">+ 7 (708) 228-64-15</p>
        </div>
        <div className="footer__socials-container">
          <a href="https://www.instagram.com/speakia.kz/" target="_blank" rel="noopener noreferrer">
            <img className="footer__socials-item" src="/images/instagram_icon.svg" alt="instagram" />
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=77082286415&text=Здравствуйте! Меня заинтереcовал один из курсов Speakia.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer__socials-item" src="/images/whatsapp_icon.svg" alt="whatsapp" />
          </a>
        </div>
        <div className="footer__ref-mobile-container">
          <p className="footer__ref-mobile-text">+ 7 (708) 228-64-15</p>
          <p className="footer__ref-mobile-text">© Speakia.kz 2021</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
