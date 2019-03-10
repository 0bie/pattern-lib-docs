import React from 'react';
import {Pagination, PaginationB} from '@0bie/pattern-lib-react';
import {paginationItems} from '../data/pagination';
import {paginationBItems} from '../data/pagination-b';
import {storiesOf} from '@storybook/react';

storiesOf('Pagination', module)
  .add('default', () => (
    <div className="constrain">
      <Pagination items={paginationItems} classNames={['mb--sm']} />
      <PaginationB items={paginationBItems} />
    </div>
  ))
  .add('rounded', () => (
    <div className="constrain">
      <Pagination items={paginationItems} rounded />
      <PaginationB items={paginationBItems} rounded />
    </div>
  ));

