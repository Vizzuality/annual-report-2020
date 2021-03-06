import PropTypes from 'prop-types';
import SoundButton from 'components/sound-button';

const Footer = ({ onClick, isStatic }) => {
  return (
    <div className="l-footer">
      <div className="wrapper">
        <div className="footer-content">
          <p>Keep playing</p>
          <button
            aria-label="Go to next piece"
            type="button"
            onClick={onClick}
          >
            Fit the next piece
          </button>
        </div>
      </div>
      {!isStatic && <SoundButton
        className="-absolute -right"
      />}
    </div>
  );
};

Footer.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Footer;
