import PropTypes from 'prop-types';

const Footer = ({ onClick }) => {
  return (
    <div className="l-footer">
      <div className="wrapper">
        <div className="footer-content">
          <div className="footer-info">
            <img alt="piece" src="https://dummyimage.com/16:9x1080/" />
            <p>If you want to see more about people fit this piece</p>
          </div>
          <button
            className="footer-button"
            type="button"
            onClick={onClick}
          >
            Fit the next piece
          </button>
        </div>
      </div>
    </div>
  );
};

Footer.PropTypes = {
  onClick: PropTypes.func.isRequired
};

export default Footer;
