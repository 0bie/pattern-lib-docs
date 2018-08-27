export function getActiveClassName(isActive) {
  var activeClassName = '';
  if (isActive) activeClassName = 'sidebar--active';
  return activeClassName;
}