import React, {Fragment} from 'react';
import {Container, Sidebar} from '@0bie/pattern-lib-react';
import {storiesOf} from '@storybook/react';
import {
  sidebarTop,
  sidebarRight,
  sidebarBottom,
  sidebarLeft
} from '../data/sidebar';

storiesOf('Sidebar', module)
  .add('default', () => (
    <div className="constrain" style={{paddingTop: 100}}>
      <div className="mb--sm">
        <Sidebar {...sidebarTop} />
      </div>
      <div className="mb--sm">
        <Sidebar {...sidebarRight} />
      </div>
      <div className="mb--sm">
        <Sidebar {...sidebarBottom} />
      </div>
      <div>
        <Sidebar {...sidebarLeft} />
      </div>
    </div>
  ));
