function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__text-container">
          <p>© Speakia.kz 2021</p>
          <p className="footer__logo-text">Speakia.kz</p>
          <p>+ 7 (777) 000-00-00</p>
        </div>
        <div className="footer__socials-container">
          <img className="footer__socials-item" src="/images/instagram_icon.svg" alt="instagram" />
          <img className="footer__socials-item" src="/images/whatsapp_icon.svg" alt="instagram" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
