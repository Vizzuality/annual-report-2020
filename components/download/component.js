import React from 'react';
import Icon from 'components/icon';

export default function Download() {

  return (
    <div className="c-download">
      <a
        href={'href'}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download report.
      </a>
      <Icon name="download" className="-medium"/>
    </div>
  );
}


