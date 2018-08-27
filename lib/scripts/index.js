import 'babel-polyfill';
import './main';

// Require stylesheet from 'pattern-lib'
require('../styles/index.scss');

// https://dribbble.com/shots/4853643-Music-player
// https://github.com/kentcdodds/simply-react
// https://www.youtube.com/watch?v=woA9h3oqCLw
// https://www.youtube.com/watch?v=WqFlnolg7mo
// https://www.youtube.com/watch?v=rB62gSER9fg
// https://www.youtube.com/watch?v=SuzutbwjUp8

/**
 * Add sprite to the `document`
 */

var xhr = new XMLHttpRequest();
xhr.open('GET', 'assets/sprite.svg');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    document.getElementById('sprite').innerHTML = xhr.responseText;
  }
};
xhr.send();