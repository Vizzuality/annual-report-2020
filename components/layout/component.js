import React from 'react';
import HeaderMobile from './header/mobile';
import HeaderDesktop from './header/desktop';
import dynamic from 'next/dynamic';
import Content from './content';
import Footer from './footer';

import { CATEGORIES } from './constants';

const Layout = ({ story, onClose, isMobile, isStatic }) => {
  if (!story) return null;

  const id = CATEGORIES[story.category].index[story.index]
  const DynamicComponent = dynamic(() => import(`components/layout/static-pages/${id}`));

  return (
    <div className={`l-layout block${story.category}`}>
      {isMobile && <HeaderMobile title={CATEGORIES[story.category].title} onClick={onClose} />}
      {!isMobile && <HeaderDesktop title={CATEGORIES[story.category].title} onClick={onClose} />}

      <Content><DynamicComponent /></Content>
      <Footer
        onClick={onClose}
        isMobile={isMobile}
        isStatic={isStatic}
      />
    </div>
  )
};

export default Layout;
