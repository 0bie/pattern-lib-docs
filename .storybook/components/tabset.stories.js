import React, {Fragment} from 'react';
import {
  Container,
  Icon,
  TabSet,
  TabSection
} from '@0bie/pattern-lib-react';
import {storiesOf} from '@storybook/react';
import {favoriteIcon} from '../data/icon';

const tabsetContent =
  <Fragment>
    Handcrafted with <Icon {...favoriteIcon} fill="EC675C" />
  </Fragment>;

storiesOf('Tabset', module)
  .add('default', () => (
    <div className="constrain">
      <TabSet>
        <TabSection id="tab-sec1" title="A" content={tabsetContent} />
        <TabSection id="tab-sec2" title="B" content={tabsetContent} />
        <TabSection id="tab-sec3" title="C" content={tabsetContent} />
        <TabSection id="tab-sec4" title="D" content={tabsetContent} />
      </TabSet>
      <TabSet rounded>
        <TabSection id="tab-sec5" title="A" content={tabsetContent} />
        <TabSection id="tab-sec6" title="B" content={tabsetContent} />
        <TabSection id="tab-sec7" title="C" content={tabsetContent} />
        <TabSection id="tab-sec8" title="D" content={tabsetContent} />
      </TabSet>
    </div>
  ));
