import Page1 from './static-pages/page1.js';
import Page2 from './static-pages/page2.js';
import Page3 from './static-pages/page3.js';
import Page4 from './static-pages/page4.js';
import Page5 from './static-pages/page5.js';
import Page6 from './static-pages/page6.js';
import Page7 from './static-pages/page7.js';
import Page8 from './static-pages/page8.js';
import Page9 from './static-pages/page9.js';

export const CATEGORIES = {
  0: {
    title: 'Building knowledge',
    index: {
      0: Page1,
      1: Page2,
      2: Page3
    },
    color: '#A087FF'
  },
  1: {
    title: 'Future',
    index: {
      0: Page4,
      1: Page5,
      2: Page6
    },
    color: '#2BA4A0'
  },
  2: {
    title: 'Whatever',
    index: {
      0: Page7,
      1: Page8,
      2: Page9
    },
    color: '#FFAA36'
  }
};