/**
 * Add sprite to the `document`
 */

const xhr = new XMLHttpRequest();
xhr.open('GET', 'assets/sprite.svg');
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    document.getElementById('sprite').innerHTML = xhr.responseText;
  }
};
xhr.send();