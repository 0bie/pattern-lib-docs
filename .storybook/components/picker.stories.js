import React from 'react';
import {Container, Picker} from '@0bie/pattern-lib-react';
import {pickerItems, pickerGroups} from '../data/picker';
import {storiesOf} from '@storybook/react';

storiesOf('Picker', module)
  .add('default', () => (
    <Container>
      <Picker
        id="picker"
        items={pickerItems}
        title="Picker Title"
        subtitle="Picker Subtitle"
      />
    </Container>
  ))
  .add('rounded', () => (
    <Container>
      <Picker
        rounded
        title="Picker Title"
        subtitle="Picker Subtitle"
        id="picker_rounded"
        groups={pickerGroups}
      />
    </Container>
  ));
