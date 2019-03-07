import React from 'react';
import {Notice, Container} from '@0bie/pattern-lib-react';
import {
  noticeProps,
  noticeWarnProps,
  noticeErrorProps,
  noticeSuccessProps,
} from '../data/notice';
import {storiesOf} from '@storybook/react';

storiesOf('Notice', module)
  .add('default', () => (
    <Container>
      <Notice {...noticeProps} />
    </Container>
  ))
  .add('states', () => (
    <div className="constrain">
      <Notice {...noticeWarnProps} classNames={['mb--sm']} />
      <Notice {...noticeErrorProps} classNames={['mb--sm']}/>
      <Notice {...noticeSuccessProps} />
    </div>
  ))
  .add('rounded', () => (
    <div className="constrain">
      <Notice rounded {...noticeWarnProps} classNames={['mb--sm']} />
      <Notice rounded {...noticeErrorProps} classNames={['mb--sm']} />
      <Notice rounded {...noticeSuccessProps} />
    </div>
  ))
  .add('children', () => (
    <Container>
      <Notice {...noticeWarnProps}>
        <p>This is a child element within notice.</p>
      </Notice>
    </Container>
  ));
