export function getActiveClass(isActive) {
  var className = '';
  if (isActive) className = 'accordion-section--active';
  return className;
}