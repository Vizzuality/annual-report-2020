import React, { useState, useEffect } from 'react';
import CookieBannerComponent from './cookie-banner';

const initAccepted = () => {
  const value = acceptedCookieBanner.get();
  if (value) {
    return typeof JSON.parse(value) === 'number';
  }
  return false;
};

const acceptedCookieBanner = {
  key: 'ACCEPTED_COOKIE_BANNER',
  get() {
    return localStorage.getItem(this.key);
  },
  set(date) {
    return localStorage.setItem(this.key, date);
  }
};

const CookieBannerContainer = () => {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setAccepted(initAccepted())
  }, []);

  useEffect(() => {
    if (!acceptedCookieBanner.get() && accepted === true) {
      acceptedCookieBanner.set(Date.now());
    }
  }, [accepted]);

  return <CookieBannerComponent setAccepted={() => setAccepted(true)} accepted={accepted} />;
};

export default CookieBannerContainer;
