export function getInputState(state) {
  var stateClassName = '';
  if (state) stateClassName = 'input-field--' + state;
  return stateClassName;
}