export function getActiveClass(isActive) {
  var className = '';
  if (isActive) className = 'tab-item--active';
  return className;
}