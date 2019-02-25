import React, {Fragment} from 'react';
import {Dropdown, Image, Media, Icon} from 'pattern-lib-react';
import {favoriteIcon} from '../data/icon';
import {dropdownProps, dropdownProps2, dropdownProps3, dropdownMedia} from '../data/dropdown';
import {storiesOf} from '@storybook/react';

const mediaItemDropdown =
  <Image
    size="md"
    src="/bag/bag3.jpg"
  />;

const mediaFooterContent =
  <Fragment>
    Handcrafted with <Icon {...favoriteIcon} fill="EC675C" />
  </Fragment>;

storiesOf('Dropdown', module)
  .add('default', () => (
    <Dropdown {...dropdownProps} />
  ), {notes: 'dropdown?'})
  .add('rounded', () => (
    <Dropdown
      {...dropdownProps2}
      content={<Media {...dropdownMedia} item={mediaItemDropdown} footerContent={mediaFooterContent} />}
    />
  ), {notes: 'dropdown?'})
  .add('rounded with list', () => (
    <Dropdown {...dropdownProps3} />
  ), {notes: 'dropdown?'});
