var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import TimelineEvent from './event';
import { addClassNames } from 'utils';

export default function Timeline(_ref) {
  var events = _ref.events,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['events', 'classNames']);

  return React.createElement(
    'div',
    _extends({ className: 'timeline ' + addClassNames(classNames) }, props),
    React.createElement(
      'div',
      { className: 'timeline-content' },
      events.map(function (_ref2) {
        var id = _ref2.id,
            time = _ref2.time,
            title = _ref2.title,
            avatar = _ref2.avatar,
            content = _ref2.content,
            classNames = _ref2.classNames;
        return React.createElement(TimelineEvent, {
          key: id,
          time: time,
          title: title,
          avatar: avatar,
          content: content,
          classNames: classNames
        });
      })
    )
  );
}

Timeline.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  events: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string,
    title: PropTypes.string,
    avatar: PropTypes.shape({
      rounded: PropTypes.bool,
      classNames: PropTypes.array,
      size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
      user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        image: PropTypes.string
      })
    }),
    content: PropTypes.any,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};