var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import PickerItem from './item';
import { addClassNames } from 'utils';

export default function PickerGroup(_ref) {
  var id = _ref.id,
      title = _ref.title,
      pickerArr = _ref.pickerArr,
      classNames = _ref.classNames;

  return React.createElement(
    'div',
    { id: id, className: 'picker-group ' + addClassNames(classNames) },
    React.createElement(
      'header',
      { className: 'picker-groupheader' },
      React.createElement(
        'h3',
        { className: 'picker-subtitle' },
        title
      )
    ),
    pickerArr.map(function (item) {
      return React.createElement(PickerItem, _extends({ key: item.id }, item));
    })
  );
}

PickerGroup.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  pickerArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.element,
    title: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};