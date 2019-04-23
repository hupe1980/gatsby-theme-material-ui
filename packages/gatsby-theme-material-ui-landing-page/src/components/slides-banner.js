import React from 'react';

import SlideContent from './slide-content';
import useBannerSlides from '../hooks/use-banner-slides';

export default function SlidesBanner() {
  const { bannerDuration, slides } = useBannerSlides();

  return (
    <>
      {slides.map((slide, index) => (
        <SlideContent key={index} {...slide} />
      ))}
    </>
  );
}
