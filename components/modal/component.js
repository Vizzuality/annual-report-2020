import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Components
import Modal from 'react-modal';

const ModalComponent = ({
  children,
  isOpen,
  className,
  onAfterOpen,
  onRequestClose,
}) => {

  const classNames = classnames({
    [className]: !!className,
  });

  return (
    <Modal
      className={`c-modal ${classNames}`}
      overlayClassName="c-modal-overlay"
      bodyOpenClassName="-no-scroll"
      isOpen={isOpen}
      ariaHideApp={false}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
    >
      <div className="modal-content">{children}</div>
    </Modal>
  );
};

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  // Content
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  // Func
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func.isRequired,
};

ModalComponent.defaultProps = {
  className: '',
  onAfterOpen: () => { },
};

export default ModalComponent;
