export function getActiveClass(isActive) {
  var className = '';
  if (isActive) className = 'carousel-item--active';
  return className;
}