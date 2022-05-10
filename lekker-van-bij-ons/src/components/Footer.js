function Footer(props) {
  return (
    <footer>
      <div className="footerComponent">
        <a><img src={props.logo} alt="Lekker van bij ons logo" /></a>
      </div>
      <div className="footerComponent">
        <a className="t">Recepten</a>
        <a>Aperitiefhapje</a>
        <a>Voorgerecht</a>
        <a>Snack</a>
        <a>Hoofdgerecht</a>
        <a>Dessert</a>
      </div>
      <div className="footerComponent">
        <a className="t">Lekker Van bij ons</a>
        <a>Tips & Ideeën</a>
        <a>Contacteer ons</a>
        <a>Over ons</a>
      </div>
      <div className="footerComponent">
        <a className="t">Social</a>
        <a href="https://www.facebook.com/lekkervanbijons.be/" target="_blank">
          <i className="fab fa-facebook"></i>
          <p>Facebook</p>
        </a>
        <a href="https://www.instagram.com/lekkervanbijons/" target="_blank">
          <i className="fab fa-instagram"></i>
          <p>Instagram</p>
        </a>
        <a href="https://www.pinterest.com/lekkervanbijons/" target="_blank">
          <i className="fab fa-pinterest"></i>
          <p>Pinterest</p>
        </a>
        <a href="https://twitter.com/lekkervanbijons" target="_blank">
          <i className="fab fa-twitter-square"></i>
          <p>Twitter</p>
        </a>
        <a href="https://www.youtube.com/user/vlamlekkervanbijons/videos" target="_blank">
          <i className="fab fa-youtube"></i>
          <p>Youtube</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;