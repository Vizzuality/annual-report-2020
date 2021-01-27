import React from 'react';
import HeaderMobile from './header/mobile';
import HeaderDesktop from './header/desktop';
import Content from './content';
import Footer from './footer';

import { CATEGORIES } from './constants';

const Layout = ({ story, onClose, isMobile }) => {
  if (!story) return null;

  return (
    <div className={`l-layout theme${story.category}`}>
      {isMobile && <HeaderMobile title={CATEGORIES[story.category].title} onClick={onClose} />}
      {!isMobile && <HeaderDesktop title={CATEGORIES[story.category].title} onClick={onClose} />}

      <Content>{CATEGORIES[story.category].index[story.index]()}</Content>
      <Footer onClick={onClose} isMobile={isMobile} />
    </div>
  )
};

export default Layout;
