import PropTypes from 'prop-types';
import SoundButton  from 'components/sound-button';

const Footer = ({ onClick, isMobile }) => {
  return (
    <div className="l-footer">
      <p>Keep playing</p>
      <button
        aria-label="Go to next piece"
        className="footer-piece-button"
        type="button"
        onClick={onClick}
      >
        Fit the next piece
      </button>
      {isMobile && (
        <div className="footer-sound-button">
          <SoundButton />
        </div>
      )}
    </div>
  );
};

Footer.propTypes = {
  onClick: PropTypes.func.isRequired,
  isMobile: PropTypes.bool
};

Footer.defaultProps = {
  isMobile: false
};

export default Footer;
