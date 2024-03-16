import PropTypes from 'prop-types';

const Footer = ({ data,fetched }) => {
  const { ImgLink, name } = data;
  const date = new Date;
  const currentYear = date.getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="footer-avatar">
            <img src={fetched.about.avatar.url} title="" alt="" />
          </div>
          <h6>{fetched.about.name}</h6>
        </div>
        <p className="copyright">© {currentYear} copyright all right reserved</p>
      </div>
    </footer>
  )
}
Footer.propTypes = {
  data: PropTypes.object
}

export default Footer;
