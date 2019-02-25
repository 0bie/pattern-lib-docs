import {addDecorator, configure} from '@storybook/react';
import {withOptions} from '@storybook/addon-options';
import '../src/styles/index.scss';

const req = require.context('./components', true, /\.stories\.js$/);

addDecorator(withOptions({
  name: 'Pattern Library'
}));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
