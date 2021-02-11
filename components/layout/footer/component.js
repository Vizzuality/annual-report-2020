import PropTypes from 'prop-types';
import SoundButton from 'components/sound-button';

const Footer = ({ onClick, allowedSound, setAllowedSound }) => {
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
      {!!setAllowedSound && <SoundButton
        className="-absolute -right"
        allowedSound={allowedSound}
        setAllowedSound={setAllowedSound}
      />}
    </div>
  );
};

Footer.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Footer;
