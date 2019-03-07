import React from 'react';
import {Avatar} from '@0bie/pattern-lib-react';

const user1 = {
  firstName: 'dick',
  lastName: 'whitman',
  image: {
    alt: '',
    src: 'assets/avatar/avatar2.png'
  }
};

const user2 = {
  firstName: 'joan',
  lastName: 'holloway',
  image: {
    alt: '',
    src: 'assets/avatar/avatar3.jpg'
  }
};

const avatar = {
  size: 'sm',
  rounded: true
};

export const exitIcon = {
  id: 'x1',
  size: 'sm',
  title: 'Close',
  description: 'Close the modal',
};

export const pickerItems = [
  {
    id: 'pickerItem1',
    item: <Avatar {...avatar} user={user1} />,
    title: 'Picker Item 1'
  },
  {
    id: 'pickerItem2',
    item: <Avatar {...avatar} user={user2} />,
    title: 'Picker Item 2'
  },
  {
    id: 'pickerItem3',
    item: <Avatar {...avatar} user={user1} />,
    title: 'Picker Item 3'
  },
  {
    id: 'pickerItem4',
    item: <Avatar {...avatar} user={user2} />,
    title: 'Picker Item 4'
  },
  {
    id: 'pickerItem5',
    item: <Avatar {...avatar} user={user1} />,
    title: 'Picker Item 5'
  },
  {
    id: 'pickerItem6',
    item: <Avatar {...avatar} user={user2} />,
    title: 'Picker Item 6'
  }
];

/* Groups */

const group_1 = [
  {
    id: 'pickerItem7',
    item: <Avatar {...avatar} user={user1} />,
    title: 'Picker Item 1'
  },
  {
    id: 'pickerItem8',
    item: <Avatar {...avatar} user={user2} />,
    title: 'Picker Item 2'
  },
  {
    id: 'pickerItem9',
    item: <Avatar {...avatar} user={user1} />,
    title: 'Picker Item 3'
  }
];

const group_2 = [
  {
    id: 'pickerItem10',
    item: <Avatar {...avatar} user={user2} />,
    title: 'Picker Item 4'
  },
  {
    id: 'pickerItem11',
    item: <Avatar {...avatar} user={user1} />,
    title: 'Picker Item 5'
  },
  {
    id: 'pickerItem12',
    item: <Avatar {...avatar} user={user2} />,
    title: 'Picker Item 6'
  }
];

const group_3 = [
  {
    id: 'pickerItem13',
    item: <Avatar {...avatar} user={user1} />,
    title: 'Picker Item 7'
  },
  {
    id: 'pickerItem14',
    item: <Avatar {...avatar} user={user2} />,
    title: 'Picker Item 8'
  },
  {
    id: 'pickerItem15',
    item: <Avatar {...avatar} user={user1} />,
    title: 'Picker Item 9'
  }
];

const pickerItem_group1 = {
  id: 'group1',
  title: 'Group 1',
  pickerArr: group_1
};

const pickerItem_group2 = {
  id: 'group2',
  title: 'Group 2',
  pickerArr: group_2
};

const pickerItem_group3 = {
  id: 'group3',
  title: 'Group 3',
  pickerArr: group_3
};

export const pickerGroups = [
  pickerItem_group1,
  pickerItem_group2,
  pickerItem_group3
];
