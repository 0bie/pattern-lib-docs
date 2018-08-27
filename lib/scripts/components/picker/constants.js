var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import Avatar from '../avatar';

var user1 = {
  firstName: 'dick',
  lastName: 'whitman',
  image: 'assets/avatar/avatar2.png'
};

var user2 = {
  firstName: 'joan',
  lastName: 'holloway',
  image: 'assets/avatar/avatar3.jpg'
};

var avatar = {
  size: 'sm',
  rounded: true
};

export var exitIcon = {
  id: 'x1',
  size: 'sm',
  title: 'Close',
  description: 'Close the modal'
};

export var pickerItems = [{
  id: 'pickerItem1',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user1 })),
  title: 'Picker Item 1'
}, {
  id: 'pickerItem2',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user2 })),
  title: 'Picker Item 2'
}, {
  id: 'pickerItem3',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user1 })),
  title: 'Picker Item 3'
}, {
  id: 'pickerItem4',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user2 })),
  title: 'Picker Item 4'
}, {
  id: 'pickerItem5',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user1 })),
  title: 'Picker Item 5'
}, {
  id: 'pickerItem6',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user2 })),
  title: 'Picker Item 6'
}];

/* Groups */

var group_1 = [{
  id: 'pickerItem7',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user1 })),
  title: 'Picker Item 1'
}, {
  id: 'pickerItem8',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user2 })),
  title: 'Picker Item 2'
}, {
  id: 'pickerItem9',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user1 })),
  title: 'Picker Item 3'
}];

var group_2 = [{
  id: 'pickerItem10',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user2 })),
  title: 'Picker Item 4'
}, {
  id: 'pickerItem11',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user1 })),
  title: 'Picker Item 5'
}, {
  id: 'pickerItem12',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user2 })),
  title: 'Picker Item 6'
}];

var group_3 = [{
  id: 'pickerItem13',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user1 })),
  title: 'Picker Item 7'
}, {
  id: 'pickerItem14',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user2 })),
  title: 'Picker Item 8'
}, {
  id: 'pickerItem15',
  item: React.createElement(Avatar, _extends({}, avatar, { user: user1 })),
  title: 'Picker Item 9'
}];

var pickerItem_group1 = {
  id: 'group1',
  title: 'Group 1',
  pickerArr: group_1
};

var pickerItem_group2 = {
  id: 'group2',
  title: 'Group 2',
  pickerArr: group_2
};

var pickerItem_group3 = {
  id: 'group3',
  title: 'Group 3',
  pickerArr: group_3
};

export var pickerGroups = [pickerItem_group1, pickerItem_group2, pickerItem_group3];