export function getNoticeState(state) {
  var stateClassName = '';
  if (state) stateClassName = 'notice--' + state;
  return stateClassName;
}