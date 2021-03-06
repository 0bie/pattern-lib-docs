import React from 'react';

const menuIcon = {
  id: 'menu',
  size: 'sm',
  title: 'Menu icon',
  classNames: ['vert--mid']
};

const inboxIcon = {
  size: 'md',
  id: 'inbox1',
  title: 'Inbox',
  classNames: ['vert--mid']
};

const cartIcon = {
  size: 'md',
  id: 'cart3',
  title: 'Shopping cart',
  classNames: ['vert--mid'],
  descripition: 'Items in your cart',
};

const favoriteIcon = {
  size: 'md',
  id: 'heart',
  title: 'Favorites',
  classNames: ['vert--mid'],
  description: 'Your favorite items',
};

const settingsIcon = {
  id: 'cog',
  size: 'md',
  title: 'Settings',
  classNames: ['vert--mid'],
  description: 'Adjust your email preferences',
};

const statisticsIcon = {
  size: 'md',
  id: 'graph1',
  title: 'Statistics',
  classNames: ['vert--mid'],
  descriptions: 'Review your shopping history',
};

const calendarIcon = {
  size: 'md',
  id: 'calendar2',
  title: 'Calendar',
  classNames: ['vert--mid'],
  description: 'Organize scheduled shopping',
};

export const menuProps = {
  title: 'Go to',
  items: [
    {
      id: 'menuitem0',
      content: <span href="#">Item 1</span>
    },
    {
      id: 'menuitem1',
      content: <span href="#">Item 2</span>
    },
    {
      id: 'menuitem2',
      content: <span href="#">Item 3</span>
    },
    {
      id: 'menuitem3',
      classNames: ['menu-divider'],
      content: <div className="divider" />
    },
    {
      id: 'menuitem4',
      content: <span href="#">Item 4</span>
    },
    {
      id: 'menuitem5',
      content: <span href="#">Item 5</span>
    }
  ]
};

export const menuRoundedProps = {
  rounded: true,
  items: [
    {
      id: 'menuitem6',
      icon: menuIcon,
      content: <h4 className="menu-title vert--mid">Menu</h4>
    },
    {
      id: 'menuitem7',
      classNames: ['menu-divider'],
      content: <div className="divider" />
    },
    {
      id: 'menuitem8',
      icon: inboxIcon,
      classNames: ['ptb--xxs'],
      content: <span href="#" title="Check your inbox">Inbox</span>
    },
    {
      id: 'menuitem9',
      icon: cartIcon,
      classNames: ['ptb--xxs'],
      content: <span href="#" title="Items in your cart">My Bag</span>
    },
    {
      id: 'menuitem10',
      icon: favoriteIcon,
      classNames: ['ptb--xxs'],
      content: <span href="#" title="Your favorite items">My Favorites</span>
    },
    {
      id: 'menuitem11',
      icon: settingsIcon,
      classNames: ['ptb--xxs'],
      content: <span href="#" title="Adjust your email preferences">Settings</span>
    },
    {
      id: 'menuitem12',
      icon: statisticsIcon,
      classNames: ['ptb--xxs'],
      content: <span href="#" title="Review your shopping history">Statistics</span>
    },
    {
      id: 'menuitem13',
      icon: calendarIcon,
      classNames: ['ptb--xxs'],
      content: <span href="#" title="Organize scheduled shopping">My Calendar</span>
    }
  ]
};
