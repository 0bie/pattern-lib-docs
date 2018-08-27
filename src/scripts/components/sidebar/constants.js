import React from 'react';
import Avatar from '../avatar';
import Button from '../button';

const imageIcon = {
  id: 'image1',
  size: 'md',
  title: 'Media icon',
  classNames: ['vert--mid']
};

const mailIcon = {
  id: 'inbox1',
  size: 'md',
  title: 'Inbox icon',
  classNames: ['vert--mid']
};

const statsIcon = {
  id: 'graph1',
  size: 'md',
  title: 'Statistics',
  classNames: ['vert--mid']
};

const calendarIcon = {
  id: 'calendar1',
  size: 'md',
  title: 'Calendar',
  classNames: ['vert--mid']
};

const avatarIcon = {
  id: 'people1',
  size: 'md',
  title: 'User icon',
  classNames: ['vert--mid']
};

const user = {
  size: 'sm',
  rounded: true,
  user: {
    firstName: 'Joan',
    lastName: 'Holloway',
    image: 'assets/avatar/avatar3.jpg'
  }
};

const avatarContent =
  <React.Fragment>
    <Avatar {...user} />
    <div className="text">Joan P. Holloway</div>
  </React.Fragment>;

const items = [
  {
    id: 'sidebar-item0',
    content: avatarContent,
    classNames: ['sidebar-item--avatar']
  },
  {
    id: 'sidebar-item1',
    content: <Button size="md" icon={imageIcon} iconPosition="left" label="Gallery" />
  },
  {
    id: 'sidebar-item2',
    content: <Button size="md" icon={mailIcon} iconPosition="left" label="Inbox" />
  },
  {
    id: 'sidebar-item3',
    content: <Button size="md" icon={statsIcon} iconPosition="left" label="Trends" />
  },
  {
    id: 'sidebar-item4',
    content: <Button size="md" icon={calendarIcon} iconPosition="left" label="Schedule" />
  },
  {
    id: 'sidebar-item5',
    content: <Button size="md" icon={avatarIcon} iconPosition="left" label="Groups" />
  }
];

export const sidebarLeft = {
  items,
  id: 'sidebar_left',
  label: 'Toggle left sidebar'
};

export const sidebarRight = {
  items,
  position: 'right',
  id: 'sidebar_right',
  label: 'Toggle right sidebar'
};

export const sidebarTop = {
  items,
  position: 'top',
  id: 'sidebar_top',
  label: 'Toggle top sidebar'
};

export const sidebarBottom = {
  items,
  position: 'bottom',
  id: 'sidebar_bottom',
  label: 'Toggle bottom sidebar'
};
