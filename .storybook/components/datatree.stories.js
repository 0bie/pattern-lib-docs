import React from 'react';
import {DataTree} from '@0bie/pattern-lib-react';
import {dataTreeItems} from '../data/datatree';
import {storiesOf} from '@storybook/react';

storiesOf('Datatree', module)
  .add('default', () => (
    <DataTree items={dataTreeItems} />
  ));
