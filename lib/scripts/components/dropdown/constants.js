var twitterIcon = {
  size: 'sm',
  id: 'twitter',
  title: 'twitter',
  description: 'follow on twitter',
  classNames: ['vert--mid', 'mr--xs']
};

var labelIcon = {
  size: 'sm',
  id: 'ellipses',
  title: 'More options',
  classNames: ['vert--mid']
};

var mediaImage = {
  size: 'md',
  src: 'assets/bag/bag3.jpg'
};

export var dropdownPositions = {
  top: 'dropdown-list--top',
  left: 'dropdown-list--left',
  right: 'dropdown-list--right',
  bottom: 'dropdown-list--bottom'
};

export var dropdownProps = {
  id: 'dropdown',
  label: 'dropdown label',
  items: [{
    id: 'dropdownitem1',
    text: 'Item 1'
  }, {
    id: 'dropdownitem2',
    text: 'Item 2'
  }, {
    id: 'dropdownitem3',
    text: 'Item 3'
  }, {
    id: 'dropdownitem4',
    text: 'Item 4'
  }]
};

export var dropdownProps2 = {
  labelIcon: labelIcon,
  rounded: true,
  id: 'dropdown3',
  wrapClassNames: ['dropdown-wrap--media', 'rounded']
};

export var dropdownProps3 = {
  rounded: true,
  id: 'dropdown2',
  label: 'dropdown label',
  items: [{
    id: 'dropdown3-item1',
    text: 'Item 1',
    icon: twitterIcon,
    iconPosition: 'left'
  }, {
    id: 'dropdown3-item2',
    text: 'Item 2',
    icon: twitterIcon,
    iconPosition: 'left'
  }, {
    id: 'dropdown3-item3',
    text: 'Item 3',
    icon: twitterIcon,
    iconPosition: 'left'
  }, {
    id: 'dropdown3-item4',
    text: 'Item 4',
    icon: twitterIcon,
    iconPosition: 'left'
  }]
};

export var dropdownMedia = {
  footer: true,
  title: 'Media Title',
  classNames: ['rounded'],
  item: { image: mediaImage }
};