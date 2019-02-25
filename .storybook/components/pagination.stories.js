import React from 'react';
import {Container, Pagination, PaginationB} from 'pattern-lib-react';
import {paginationItems} from '../data/pagination';
import {paginationBItems} from '../data/pagination-b';
import {storiesOf} from '@storybook/react';

storiesOf('Pagination', module)
  .add('default', () => (
    <div className="constrain">
      <Pagination items={paginationItems} classNames={['mb--sm']} />
      <PaginationB items={paginationBItems} />
    </div>
  ), {notes: 'modal'})
  .add('rounded', () => (
    <div className="constrain">
      <Pagination items={paginationItems} rounded />
      <PaginationB items={paginationBItems} rounded />
    </div>
  ), {notes: 'pagination'});

