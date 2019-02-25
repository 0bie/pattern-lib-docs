const cardDescription1 = 'Generating content isn\'t easy, especially if it\'s a process you go through daily. ' +
  'On more than one occasion, I\'ve started a document template for a post idea ' +
  ' -- blank screen for an hour. Nothing. Zilch.';

const cardDescription2 = 'The inspiration was to modernize classic leather messenger bags, tote bags, ' +
  'duffle bags, backpacks, belts, and wallets. In the world of ' +
  'fast-fashion where many brands have moved away from high-quality products.';

export const card1 = {
  title: 'card title',
  ctaLabel: 'Button',
  description: cardDescription1,
  classNames: ['constrain'],
  actions: [
    {
      size: 'md',
      id: 'heart',
      title: 'Favorite this product',
      classNames: ['vert--mid']
    },
    {
      size: 'md',
      id: 'share',
      title: 'Share this product',
      classNames: ['vert--mid']
    },
    {
      size: 'md',
      id: 'ellipses',
      title: 'More options',
      classNames: ['vert--mid']
    }
  ]
};

export const card2 = Object.assign({}, card1, {
  classNames: ['constrain']
});

export const card3 = Object.assign({}, card1, {
  description: cardDescription2,
  image: {
    alt: ' ',
    src: 'assets/bag/bag1.jpg'
  }
});

export const card4 = Object.assign({}, card1, {
  description: cardDescription2,
  image: {
    alt: ' ',
    src: 'assets/bag/bag1.jpg'
  },
  classNames: ['constrain']
});
