import Page1 from './static-pages/page1.js';
import Page2 from './static-pages/page2.js';
// import page3 from './static-pages';

export const CATEGORIES = {
  0: {
    title: 'Building knowledge',
    index: {
      0: Page1,
      1: Page2,
      2: 'page3'
    },
    color: 'blue',
  },
  1: {
    title: 'Future',
    index: {
      0: 'page4',
      1: 'page5',
      2: 'page6'
    },
    color: 'orange',
  },
  2: {
    title: 'Whatever',
    index: {
      0: 'page7',
      1: 'page8',
      2: 'page9'
    },
    color: 'orange',
  }
};