import React from 'react';

export const exitIcon = {
  id: 'x1',
  size: 'sm',
  title: 'Close',
  classNames: ['vert--mid'],
  description: 'close the modal',
};

/* eslint-disable */
const modalContent = <div><div className="mb--xs">Customer-centric design is the process of building your product or service based on
                     the wants, needs, and challenges of your customers.
                     A customer-centric product team is attentive to the voice of the customer at every stage
                     of product development: before you build, while you build, and after you build.</div>
                     <div className="mb--xs">Sometimes it's the same complaint that 50 people sent through the feedback funnel.
                     Sometimes it's half a dozen different feature requests that are all different ways to
                     solve the same problem, and you find that common thread and identify the smartest way to
                     solve it for everyone. Sometimes, it's a bulleted list of very specific things that a high-value
                     client sends over and wants you to make.</div>
                     <div>Even a feature that many users ask about may not be a good fit for your organization. You can't lose
                     sight of what exactly it is that you do and who you are as an organization. There are times when you
                     have to say no.</div></div>;
/* eslint-enable */

export const modalProps = {
  id: 'modal1',
  title: 'Modal Title',
  content: modalContent,
  classNames: ['constrain']
};
