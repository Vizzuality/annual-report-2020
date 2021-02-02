import PropTypes from 'prop-types';
import Icon from 'components/icon';

const HeaderMobile = ({ title, onClick }) => (
  <header className="l-header -mobile">
    <h1 className="l-header-title">{title}</h1>
    <button
      type="button"
      className="l-header-close--btn -border"
      onClick={(e) => e.stopPropagation() || onClick()}
    >
      <Icon name="menu-close" className="-medium" />
    </button>
  </header>
);

HeaderMobile.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default HeaderMobile;