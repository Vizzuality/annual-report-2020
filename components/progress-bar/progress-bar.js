import cx from 'classnames';
import { useEffect, useState } from 'react';

const ProggresBar = ({ positionedPieces }) => {
  const categories = [0, 1, 2];
  const pages = [0, 1 ,2];
  const getSteps = () => categories.map(c => pages.map(p => ({
    category: c,
    page: p,
    active: positionedPieces && positionedPieces[c] && positionedPieces[c][p]
  }))).flat();
  const [steps, setSteps] = useState(getSteps());
  useEffect(() => {
    setSteps(getSteps());
  }, [positionedPieces]);

  return (
    <div className="c-progress-bar">
      <div className="progress-container">
        {steps && steps.map(s => (<span className={cx('step', `step-${s.category}`, {'active': s.active})} />))}
      </div>
    </div>
  );
};

export default ProggresBar;