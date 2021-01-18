import React, { useState, useEffect } from 'react';
import HeaderMobile from './header/mobile';
import HeaderDesktop from './header/desktop';
import breakpoints from 'utils/breakpoints';
import Content from './content';
import Footer from './footer';

import { CATEGORIES } from './constants';

const Layout = ({ story, onClose }) => {
  if (!story) return null;

  const [isMobile, setLayout] = useState(false);

  useEffect(() => {
    const handleResize = () => setLayout(window.innerWidth < breakpoints.sm);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className={`l-layout theme${story.category}`}>
      {isMobile && <HeaderMobile title={CATEGORIES[story.category].title} onClick={onClose} />}
      {!isMobile && <HeaderDesktop title={CATEGORIES[story.category].title} onClick={onClose} />}

      <Content>{CATEGORIES[story.category].index[story.index]()}</Content>
      <Footer onClick={onClose} />
    </div>
  )
};

export default Layout;
