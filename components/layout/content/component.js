import React from 'react';


const Content = ({ children }) => {
  return (
      <div className="l-content">
        <div className="wrapper">
          {children}
        </div>
      </div>
  )
};

export default Content;
