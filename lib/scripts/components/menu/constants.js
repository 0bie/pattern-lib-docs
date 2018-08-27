import React from 'react';

var menuIcon = {
  id: 'menu',
  size: 'md',
  title: 'Menu icon',
  classNames: ['vert--mid']
};

var inboxIcon = {
  size: 'md',
  id: 'inbox1',
  title: 'Inbox',
  classNames: ['vert--mid']
};

var cartIcon = {
  size: 'md',
  id: 'cart3',
  title: 'Shopping cart',
  classNames: ['vert--mid'],
  descripition: 'Items in your cart'
};

var favoriteIcon = {
  size: 'md',
  id: 'heart',
  title: 'Favorites',
  classNames: ['vert--mid'],
  description: 'Your favorite items'
};

var settingsIcon = {
  id: 'cog',
  size: 'md',
  title: 'Settings',
  classNames: ['vert--mid'],
  description: 'Adjust your email preferences'
};

var statisticsIcon = {
  size: 'md',
  id: 'graph1',
  title: 'Statistics',
  classNames: ['vert--mid'],
  descriptions: 'Review your shopping history'
};

var calendarIcon = {
  size: 'md',
  id: 'calendar2',
  title: 'Calendar',
  classNames: ['vert--mid'],
  description: 'Organize scheduled shopping'
};

export var menuProps = {
  title: 'Go to',
  items: [{
    id: 'menuitem0',
    content: React.createElement(
      'a',
      { href: '#' },
      'Item 1'
    )
  }, {
    id: 'menuitem1',
    content: React.createElement(
      'a',
      { href: '#' },
      'Item 2'
    )
  }, {
    id: 'menuitem2',
    content: React.createElement(
      'a',
      { href: '#' },
      'Item 3'
    )
  }, {
    id: 'menuitem3',
    content: React.createElement('div', { className: 'divider' })
  }, {
    id: 'menuitem4',
    content: React.createElement(
      'a',
      { href: '#' },
      'Item 4'
    )
  }, {
    id: 'menuitem5',
    content: React.createElement(
      'a',
      { href: '#' },
      'Item 5'
    )
  }]
};

export var menuRoundedProps = {
  rounded: true,
  items: [{
    id: 'menuitem6',
    icon: menuIcon,
    content: React.createElement(
      'h4',
      { className: 'menu-title vert--mid' },
      'Menu'
    )
  }, { id: 'menuitem7', content: React.createElement('div', { className: 'divider' }) }, {
    id: 'menuitem8',
    icon: inboxIcon,
    classNames: ['ptb--xxs'],
    content: React.createElement(
      'a',
      { href: '#', title: 'Check your inbox' },
      'Inbox'
    )
  }, {
    id: 'menuitem9',
    icon: cartIcon,
    classNames: ['ptb--xxs'],
    content: React.createElement(
      'a',
      { href: '#', title: 'Items in your cart' },
      'My Bag'
    )
  }, {
    id: 'menuitem10',
    icon: favoriteIcon,
    classNames: ['ptb--xxs'],
    content: React.createElement(
      'a',
      { href: '#', title: 'Your favorite items' },
      'My Favorites'
    )
  }, {
    id: 'menuitem11',
    icon: settingsIcon,
    classNames: ['ptb--xxs'],
    content: React.createElement(
      'a',
      { href: '#', title: 'Adjust your email preferences' },
      'Settings'
    )
  }, {
    id: 'menuitem12',
    icon: statisticsIcon,
    classNames: ['ptb--xxs'],
    content: React.createElement(
      'a',
      { href: '#', title: 'Review your shopping history' },
      'Statistics'
    )
  }, {
    id: 'menuitem13',
    icon: calendarIcon,
    classNames: ['ptb--xxs'],
    content: React.createElement(
      'a',
      { href: '#', title: 'Organize scheduled shopping' },
      'My Calendar'
    )
  }]
};