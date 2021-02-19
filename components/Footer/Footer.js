function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__text-container">
          <p className="footer__ref-text">© Speakia.kz 2021</p>
          <p className="footer__logo-text">Speakia.kz</p>
          <p className="footer__ref-text">+ 7 (777) 000-00-00</p>
        </div>
        <div className="footer__socials-container">
          <img className="footer__socials-item" src="/images/instagram_icon.svg" alt="instagram" />
          <img className="footer__socials-item" src="/images/whatsapp_icon.svg" alt="instagram" />
        </div>
        <div className="footer__ref-mobile-container">
          <p className="footer__ref-mobile-text">+ 7 (777) 000-00-00</p>
          <p className="footer__ref-mobile-text">© Speakia.kz 2021</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
