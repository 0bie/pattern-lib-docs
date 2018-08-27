const twitterIcon = {
  size: 'sm',
  id: 'twitter',
  title: 'twitter',
  description: 'follow on twitter',
  classNames: ['vert--mid', 'mr--xs']
};

const labelIcon = {
  size: 'sm',
  id: 'ellipses',
  title: 'More options',
  classNames: ['vert--mid']
};

export const dropdownPositions = {
  top: 'dropdown-list--top',
  left: 'dropdown-list--left',
  right: 'dropdown-list--right',
  bottom: 'dropdown-list--bottom'
};

export const dropdownProps = {
  id: 'dropdown',
  label: 'dropdown label',
  items: [
    {
      id: 'dropdownitem1',
      label: 'Item 1'
    },
    {
      id: 'dropdownitem2',
      label: 'Item 2'
    },
    {
      id: 'dropdownitem3',
      label: 'Item 3'
    },
    {
      id: 'dropdownitem4',
      label: 'Item 4'
    }
  ]
};

export const dropdownProps2 = {
  labelIcon,
  rounded: true,
  id: 'dropdown3',
  wrapClassNames: ['dropdown-wrap--media', 'rounded']
};

export const dropdownProps3 = {
  rounded: true,
  id: 'dropdown2',
  label: 'dropdown label',
  items: [
    {
      id: 'dropdown3-item1',
      label: 'Item 1',
      icon: twitterIcon,
      iconPosition: 'left'
    },
    {
      id: 'dropdown3-item2',
      label: 'Item 2',
      icon: twitterIcon,
      iconPosition: 'left'
    },
    {
      id: 'dropdown3-item3',
      label: 'Item 3',
      icon: twitterIcon,
      iconPosition: 'left'
    },
    {
      id: 'dropdown3-item4',
      label: 'Item 4',
      icon: twitterIcon,
      iconPosition: 'left'
    }
  ]
};

export const dropdownMedia = {
  footer: true,
  title: 'Media Title',
  classNames: ['rounded']
};
