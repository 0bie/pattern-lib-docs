import {twitterIcon} from '../icon/constants';

const quote = 'Advertising is based on one thing, happiness. And you know what happiness is? ' +
               'Happiness is the smell of a new car. It\'s freedom from fear. ' +
               'It\'s a billboard on the side of the road that screams reassurance ' +
               'that whatever you are doing is okay. You are okay.';

export const quote1 = {
  link: '#',
  footer: true,
  maxLength: 280,
  id: 'blockquote2',
  linkCta: twitterIcon,
  classNames: ['mb--xxl'],
  user: {
    lastName: 'Ford',
    firstName: 'Henry',
    quote: 'Whether you think you can or you think you can\'t, you\'re right.'
  }
};

export const quote2 = {
  link: '#',
  footer: true,
  maxLength: 200,
  id: 'blockquote',
  linkCta: twitterIcon,
  user: {
    quote,
    lastName: 'Whitman',
    firstName: 'Richard "Dick"',
    image: 'assets/avatar/avatar2.png'
  }
};
