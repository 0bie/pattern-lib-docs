import React from 'react';
import Avatar from '../avatar';
import Button from '../button';

var imageIcon = {
  id: 'image1',
  size: 'md',
  title: 'Media icon',
  classNames: ['vert--mid']
};

var mailIcon = {
  id: 'inbox1',
  size: 'md',
  title: 'Inbox icon',
  classNames: ['vert--mid']
};

var statsIcon = {
  id: 'graph1',
  size: 'md',
  title: 'Statistics',
  classNames: ['vert--mid']
};

var calendarIcon = {
  id: 'calendar1',
  size: 'md',
  title: 'Calendar',
  classNames: ['vert--mid']
};

var avatarIcon = {
  id: 'people1',
  size: 'md',
  title: 'User icon',
  classNames: ['vert--mid']
};

var user = {
  size: 'sm',
  rounded: true,
  user: {
    firstName: 'Joan',
    lastName: 'Holloway',
    image: 'assets/avatar/avatar3.jpg'
  }
};

var avatarContent = React.createElement(
  React.Fragment,
  null,
  React.createElement(Avatar, user),
  React.createElement(
    'div',
    { className: 'text' },
    'Joan P. Holloway'
  )
);

var items = [{
  id: 'sidebar-item0',
  content: avatarContent,
  classNames: ['sidebar-item--avatar']
}, {
  id: 'sidebar-item1',
  content: React.createElement(Button, { size: 'md', icon: imageIcon, iconPosition: 'left', text: 'Gallery' })
}, {
  id: 'sidebar-item2',
  content: React.createElement(Button, { size: 'md', icon: mailIcon, iconPosition: 'left', text: 'Inbox' })
}, {
  id: 'sidebar-item3',
  content: React.createElement(Button, { size: 'md', icon: statsIcon, iconPosition: 'left', text: 'Trends' })
}, {
  id: 'sidebar-item4',
  content: React.createElement(Button, { size: 'md', icon: calendarIcon, iconPosition: 'left', text: 'Schedule' })
}, {
  id: 'sidebar-item5',
  content: React.createElement(Button, { size: 'md', icon: avatarIcon, iconPosition: 'left', text: 'Groups' })
}];

export var sidebarLeft = {
  items: items,
  id: 'sidebar_left',
  label: 'Toggle left sidebar'
};

export var sidebarRight = {
  items: items,
  position: 'right',
  id: 'sidebar_right',
  label: 'Toggle right sidebar'
};

export var sidebarTop = {
  items: items,
  position: 'top',
  id: 'sidebar_top',
  label: 'Toggle top sidebar'
};

export var sidebarBottom = {
  items: items,
  position: 'bottom',
  id: 'sidebar_bottom',
  label: 'Toggle bottom sidebar'
};