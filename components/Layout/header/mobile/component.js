import PropTypes from 'prop-types';
import Icon from 'components/icon';

const HeaderMobile = ({ title, onClick }) => (
    <header className="l-header -mobile">
        <div className="wrapper">
            <div className="l-header-content">

                <h1 className="l-header-title">{title}</h1>

                <button
                    type="button"
                    className="l-header-close--btn"
                    onClick={(e) => e.stopPropagation() || onClick()}
                >
                    <Icon name="cross" />
                </button>
            </div>
        </div>
    </header>
);

HeaderMobile.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
export default HeaderMobile;