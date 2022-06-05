import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">
            Copyright &copy;All Rights Reserved by
            <a href="#">Love Your Hair</a>.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li>
              <Link class="linkedin" to="/">
                <i class="fa fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link class="linkedin" to="/">
                <i class="fa fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link class="linkedin" to="/">
                <i class="fa fa-dribbble"></i>
              </Link>
            </li>
            <li>
              <Link class="linkedin" to="/">
                <i class="fa fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
