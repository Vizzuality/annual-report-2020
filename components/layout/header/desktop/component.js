import PropTypes from 'prop-types';
import Download from 'components/download';
import Icon from 'components/icon';

const HeaderDesktop = ({ title, onClick }) => (
    <header className="l-header">
        <div className="wrapper">
            <div className="l-header-content">
                <p>2020 impact review by <span>vizzuality</span></p>
                <button
                    type="button"
                    className="l-header-close--btn"
                    onClick={(e) => e.stopPropagation() || onClick()}
                >
                    <Icon name="cross" />
                </button>
            </div>
        </div>
        <h1 className="l-header-title">{title}</h1>
    </header>
);

HeaderDesktop.PropTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HeaderDesktop;
