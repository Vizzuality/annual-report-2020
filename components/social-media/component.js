import React from 'react';
import cx from 'classnames';
import Icon from 'components/icon';

const SocialMedia = ({ className }) => (
  <div className={cx('c-social-media', { [className]: className } )}>
    <span className="title">Follow us:</span>
    <ul className="social-networks">
      <li>
        <a href="https://twitter.com/vizzuality" target="_blank">
          <Icon name="twitter" className="social-media -medium" />
      </a>
      </li>
      <li>
        <a href="https://facebook.com/vizzuality/" target="_blank">
          <Icon name="facebook" className="social-media -medium" />
      </a>
      </li>
      <li>
        <a href="https://linkedin.com/company/vizzuality" target="_blank">
          <Icon name="linkedin" className="social-media -medium" />
      </a>
      </li>
      <li>
        <a href="https://github.com/Vizzuality" target="_blank">
        <Icon name="github" className="social-media -medium" />
        </a>
        </li>
    </ul>
  </div>
);

export default SocialMedia;