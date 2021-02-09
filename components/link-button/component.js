import React from 'react';

const Button = ({ children, category, index, handleClick }) => (
  <>
    <button
      role="menuitem"
      className="menu-link"
      onClick={() => handleClick({ category, index })}
      key={`link${category}-${index}`}
      tabIndex = "0"
    >
      {children}
    </button>
      <a
      className="hidden"
      aria-hidden="true"
      href={`reports/${category}/${index}`}
    >
      {children}
    </a>
  </>
);

export default Button;