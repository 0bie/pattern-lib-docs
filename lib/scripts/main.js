var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// https://speakerdeck.com/jenncreighton/flexible-architecture-for-react-components?slide=4
import React from 'react';
import { render } from 'react-dom';
import { withConstrain } from './utils';

/**
 * Accordion
 */

import Accordion from './components/accordion';
import AccordionSection from './components/accordion/section';
import { accordionContent } from './components/accordion/constants';

var accordion1 = React.createElement(
  Accordion,
  { classNames: ['mb--md'] },
  React.createElement(
    AccordionSection,
    { id: 'accd-sec1', title: 'Accordion Title 1' },
    accordionContent
  ),
  React.createElement(
    AccordionSection,
    { id: 'accd-sec2', title: 'Accordion Title 2' },
    accordionContent
  ),
  React.createElement(
    AccordionSection,
    { id: 'accd-sec3', title: 'Accordion Title 3' },
    accordionContent
  ),
  React.createElement(
    AccordionSection,
    { id: 'accd-sec4', title: 'Accordion Title 4' },
    accordionContent
  )
);

var accordion2 = React.createElement(
  Accordion,
  { rounded: true },
  React.createElement(
    AccordionSection,
    { id: 'accd-sec5', title: 'Accordion Title 1' },
    accordionContent
  ),
  React.createElement(
    AccordionSection,
    { id: 'accd-sec6', title: 'Accordion Title 2' },
    accordionContent
  ),
  React.createElement(
    AccordionSection,
    { id: 'accd-sec7', title: 'Accordion Title 3' },
    accordionContent
  ),
  React.createElement(
    AccordionSection,
    { id: 'accd-sec8', title: 'Accordion Title 4' },
    accordionContent
  )
);

var accordion = React.createElement(
  React.Fragment,
  null,
  withConstrain(accordion1),
  withConstrain(accordion2)
);

render(accordion, document.getElementById('accordion'));

/**
 * Avatar
 */

import Avatar from './components/avatar';
import { avatarProps, avatarWithImgProps } from './components/avatar/constants';

var avatarSmall = React.createElement(Avatar, {
  size: 'sm',
  user: avatarProps,
  classNames: ['mr--xs']
});

var avatarMedium = React.createElement(Avatar, {
  rounded: true,
  size: 'md',
  user: avatarProps,
  classNames: ['mr--xs']
});

var avatarLarge = React.createElement(Avatar, {
  size: 'lg',
  classNames: ['mr--xs'],
  user: avatarWithImgProps
});

var avatarXtraLarge = React.createElement(Avatar, {
  size: 'xl',
  rounded: true,
  user: avatarWithImgProps
});

var avatar = React.createElement(
  React.Fragment,
  null,
  avatarSmall,
  avatarMedium,
  avatarLarge,
  avatarXtraLarge
);

render(avatar, document.getElementById('avatar'));

/**
 * Blockquote
 */

import Blockquote from './components/blockquote';
import { quote1, quote2 } from './components/blockquote/constants';

var blockquote1 = React.createElement(Blockquote, _extends({}, quote1, {
  quote: quote1.user.quote
}));

var blockquote2 = React.createElement(Blockquote, _extends({}, quote2, {
  quote: quote2.user.quote
}));

var blockquote = React.createElement(
  React.Fragment,
  null,
  withConstrain(blockquote1),
  withConstrain(blockquote2)
);

render(blockquote, document.getElementById('blockquote'));

/**
 * Bulletlist
 */

import Bulletlist from './components/bulletlist';
import { bulletlistItems } from './components/bulletlist/constants';

var bulletlist = React.createElement(Bulletlist, { items: bulletlistItems });

render(withConstrain(bulletlist), document.getElementById('bulletlist'));

/**
 * Button
 */

import Button from './components/button/index';
import ButtonGroup from './components/button/group';
import { btnGroupBlock, btnGroupInline } from './components/button/constants';

var buttonXs = React.createElement(Button, { size: 'xs', text: 'Button-xs', disabled: true });
var buttonSm = React.createElement(Button, { size: 'sm', text: 'Button-sm' });
var buttonMd = React.createElement(Button, { size: 'md', text: 'Button-md' });
var buttonLg = React.createElement(Button, { size: 'lg', text: 'Button-lg' });
var buttonXl = React.createElement(Button, { size: 'xl', text: 'Button-xl' });
var buttonFull = React.createElement(Button, { size: 'xs', text: 'Button-Full', classNames: ['btn--full'] });

var buttonLoadingSm = React.createElement(Button, { size: 'sm', loading: true });
var buttonLoadingMd = React.createElement(Button, { size: 'md', loading: true });
var buttonLoadingLg = React.createElement(Button, { size: 'lg', loading: true });

var buttonHoverXs = React.createElement(Button, { size: 'xs', text: 'Button-xs', rounded: true, classNames: ['btn--hover'] });
var buttonHoverSm = React.createElement(Button, { size: 'sm', text: 'Button-sm', rounded: true, classNames: ['btn--hover'] });
var buttonHoverMd = React.createElement(Button, { size: 'md', text: 'Button-md', rounded: true, classNames: ['btn--hover'] });
var buttonHoverLg = React.createElement(Button, { size: 'lg', text: 'Button-lg', rounded: true, classNames: ['btn--hover'] });

/**
 * Button Group
 */

var buttonGroupInline = React.createElement(ButtonGroup, {
  rounded: true,
  display: 'inline',
  buttonArr: btnGroupInline
});

var buttonGroupBlock = React.createElement(ButtonGroup, {
  rounded: true,
  display: 'block',
  buttonArr: btnGroupBlock
});

var buttonGroup = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--sm' },
    buttonGroupInline
  ),
  React.createElement(
    'div',
    null,
    buttonGroupBlock
  )
);

var button = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--sm' },
    React.createElement(
      'span',
      { className: 'pr--xxs' },
      buttonXs
    ),
    React.createElement(
      'span',
      { className: 'pr--xxs' },
      buttonSm
    ),
    React.createElement(
      'span',
      { className: 'pr--xxs' },
      buttonMd
    ),
    React.createElement(
      'span',
      { className: 'pr--xxs' },
      buttonLg
    ),
    React.createElement(
      'span',
      null,
      buttonXl
    )
  ),
  React.createElement(
    'div',
    { className: 'mb--md' },
    buttonFull
  ),
  React.createElement(
    'div',
    null,
    React.createElement(
      'span',
      { className: 'pr--xxs' },
      buttonHoverXs
    ),
    React.createElement(
      'span',
      { className: 'pr--xxs' },
      buttonHoverSm
    ),
    React.createElement(
      'span',
      { className: 'pr--xxs' },
      buttonHoverMd
    ),
    React.createElement(
      'span',
      { className: 'pr--xxs' },
      buttonHoverLg
    )
  ),
  React.createElement(
    'div',
    { className: 'mb--md' },
    React.createElement(
      'span',
      { className: 'pr--xxs' },
      buttonLoadingSm
    ),
    React.createElement(
      'span',
      { className: 'pr--xxs' },
      buttonLoadingMd
    ),
    React.createElement(
      'span',
      null,
      buttonLoadingLg
    )
  ),
  React.createElement(
    'div',
    null,
    buttonGroup
  )
);

render(button, document.getElementById('button'));

/**
 * Card
 */

import Card from './components/card';
import { card1, card2, card3, card4 } from './components/card/constants';

var cardOne = React.createElement(Card, _extends({
  footer: true
}, card1));

var cardTwo = React.createElement(Card, _extends({
  footer: true,
  rounded: true
}, card2));

var cardThree = React.createElement(Card, _extends({
  footer: true
}, card3));

var cardFour = React.createElement(Card, _extends({
  footer: true,
  rounded: true
}, card4));

var card = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--md' },
    cardOne
  ),
  React.createElement(
    'div',
    { className: 'mb--md' },
    cardTwo
  ),
  React.createElement(
    'div',
    { className: 'mb--md' },
    cardThree
  ),
  React.createElement(
    'div',
    { className: 'mb--md' },
    cardFour
  )
);

render(card, document.getElementById('card'));

/**
 * Cardlist
 */

import Cardlist from './components/cardlist';
import { cardlistProps } from './components/cardlist/constants';

var cardlist = React.createElement(Cardlist, cardlistProps);

render(cardlist, document.getElementById('cardlist'));

/**
 * Caret
 */

import Caret from './components/caret';

var caretTop = React.createElement(Caret, { direction: 'top' });
var caretRight = React.createElement(Caret, { direction: 'right' });
var caretBottom = React.createElement(Caret, { direction: 'bottom' });
var caretLeft = React.createElement(Caret, { direction: 'left' });

var caret = React.createElement(
  React.Fragment,
  null,
  caretTop,
  caretRight,
  caretBottom,
  caretLeft
);

render(caret, document.getElementById('caret'));

/**
 * Carousel
 */

import Carousel from './components/carousel';
import CarouselItem from './components/carousel/item';
import { carouselProps, carouselImg } from './components/carousel/constants';

var carousel = React.createElement(
  Carousel,
  null,
  React.createElement(CarouselItem, { title: 'Carousel Title 1', image: carouselImg.first, description: carouselProps.description }),
  React.createElement(CarouselItem, { title: 'Carousel Title 2', image: carouselImg.second, description: carouselProps.description }),
  React.createElement(CarouselItem, { title: 'Carousel Title 3', image: carouselImg.third, description: carouselProps.description })
);

render(carousel, document.getElementById('carousel'));

/**
 * Caret
 */

import Checkbox from './components/checkbox';

var checkboxSm = React.createElement(Checkbox, {
  size: 'sm',
  id: 'check_sm',
  label: 'Checkbox Label'
});

var checkboxMd = React.createElement(Checkbox, {
  size: 'md',
  id: 'check_md',
  label: 'Checkbox Label'
});

var checkboxLg = React.createElement(Checkbox, {
  rounded: true,
  size: 'lg',
  id: 'check_lg',
  label: 'Checkbox Label'
});

var checkbox = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--sm' },
    checkboxSm
  ),
  React.createElement(
    'div',
    { className: 'mb--sm' },
    checkboxMd
  ),
  React.createElement(
    'div',
    { className: 'mb--sm' },
    checkboxLg
  )
);

render(checkbox, document.getElementById('checkbox'));

/**
 * Data Tree
 */

import DataTree from './components/datatree';
import { dataTreeItems } from './components/datatree/constants';

var dataTree = React.createElement(DataTree, { items: dataTreeItems });

render(dataTree, document.getElementById('datatree'));

/**
 * Dropdown
 */

import Dropdown from './components/dropdown';
import Media from './components/media';
import Icon from './components/icon';
import { favoriteIcon } from './components/icon/constants';
import { dropdownProps, dropdownProps2, dropdownProps3, dropdownMedia } from './components/dropdown/constants';

var mediaFooterContent = React.createElement(
  React.Fragment,
  null,
  'Handcrafted with ',
  React.createElement(Icon, _extends({}, favoriteIcon, { fill: 'EC675C' }))
);

var dropdown1 = React.createElement(Dropdown, dropdownProps);
var dropdown2 = React.createElement(Dropdown, _extends({}, dropdownProps2, {
  content: React.createElement(Media, _extends({}, dropdownMedia, { footerContent: mediaFooterContent }))
}));

var dropdown3 = React.createElement(Dropdown, dropdownProps3);

var dropdown = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'span',
    { className: 'mr--xxxxl' },
    dropdown1
  ),
  React.createElement(
    'span',
    { className: 'mr--xxxxl' },
    dropdown2
  ),
  React.createElement(
    'span',
    null,
    dropdown3
  )
);

render(dropdown, document.getElementById('dropdown'));

/**
 * Hero
 */

import Hero from './components/hero';
import { heroCta, heroImage } from './components/hero/constants';

var heroImg = React.createElement(Hero, {
  cta: heroCta,
  image: heroImage,
  subtitle: 'Hero subtitle',
  title: 'This is placeholder text for a hero title'
});

var heroNoImg = React.createElement(Hero, {
  cta: heroCta,
  subtitle: 'Hero subtitle',
  title: 'This is placeholder text for a hero title'
});

var hero = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--md' },
    heroNoImg
  ),
  React.createElement(
    'div',
    { className: 'mb--md' },
    heroImg
  )
);

render(hero, document.getElementById('hero'));

/**
 * Icon
 */

import { twitterIcon, heartIcon, exitIcon } from './components/icon/constants';

var icon = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'span',
    { className: 'mr--sm' },
    React.createElement(Icon, twitterIcon)
  ),
  React.createElement(
    'span',
    { className: 'mr--sm' },
    React.createElement(Icon, heartIcon)
  ),
  React.createElement(
    'span',
    { className: 'ml--xs' },
    React.createElement(Icon, exitIcon)
  )
);

render(icon, document.getElementById('icon'));

/**
 * Image
 */

import Image from './components/image';
var imageSource = 'assets/bag/bag2.jpg';

var imageXs = React.createElement(Image, {
  size: 'xs',
  src: imageSource
});

var imageSm = React.createElement(Image, {
  size: 'sm',
  src: imageSource
});

var imageMd = React.createElement(Image, {
  size: 'md',
  src: imageSource
});

var imageLg = React.createElement(Image, {
  size: 'lg',
  src: imageSource,
  caption: 'More colors available'
});

var imageXl = React.createElement(Image, {
  size: 'xl',
  src: imageSource,
  caption: 'More colors available'
});

var image = React.createElement(
  React.Fragment,
  null,
  imageXs,
  imageSm,
  imageMd,
  imageLg,
  imageXl
);

render(image, document.getElementById('image'));

/**
 * Input
 */

import Input from './components/input';
import { input_sm, input_md, input_lg, input_xl, input_xxl, input_search, input_search_rounded, input_rounded, input_rounded_md, input_rounded_lg, input_rounded_xl, input_rounded_xxl } from './components/input/constants';

var inputSm = React.createElement(Input, _extends({}, input_sm, { state: 'success' }));
var inputMd = React.createElement(Input, input_md);
var inputLg = React.createElement(Input, input_lg);
var inputXl = React.createElement(Input, input_xl);
var inputXxl = React.createElement(Input, input_xxl);
var inputSearch = React.createElement(Input, input_search);
var inputSearchRounded = React.createElement(Input, input_search_rounded);
var inputRounded = React.createElement(Input, input_rounded);
var inputRoundedMd = React.createElement(Input, input_rounded_md);
var inputRoundedLg = React.createElement(Input, input_rounded_lg);
var inputRoundedXl = React.createElement(Input, input_rounded_xl);
var inputRoundedXxl = React.createElement(Input, input_rounded_xxl);

var input = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--md' },
    inputSm,
    inputMd,
    inputLg,
    inputXl,
    inputXxl
  ),
  React.createElement(
    'div',
    { className: 'mb--md' },
    React.createElement(
      'div',
      { className: 'input-container' },
      inputSearch
    ),
    React.createElement(
      'div',
      { className: 'input-container' },
      inputSearchRounded
    )
  ),
  React.createElement(
    'div',
    { className: 'mb--md' },
    inputRounded,
    inputRoundedMd,
    inputRoundedLg,
    inputRoundedXl,
    inputRoundedXxl
  )
);

render(input, document.getElementById('input'));

/**
 * List
 */

import List from './components/list';
import { listItems } from './components/list/constants';

var list = React.createElement(List, { items: listItems });

render(withConstrain(list), document.getElementById('list'));

/**
 * Media
 */

import { mediaItem } from './components/media/constants';

var media1 = React.createElement(Media, {
  footer: true,
  item: mediaItem,
  title: 'Media Title',
  footerContent: mediaFooterContent,
  description: 'Handcrafted with the highest quality materials.'
});

var media2 = React.createElement(Media, {
  footer: true,
  rounded: true,
  item: mediaItem,
  title: 'Media Title',
  footerContent: mediaFooterContent,
  description: 'Handcrafted with the highest quality materials.'
});

var media = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--md' },
    withConstrain(media1)
  ),
  React.createElement(
    'div',
    null,
    withConstrain(media2)
  )
);

render(media, document.getElementById('media'));

/**
 * Menu
 */

import Menu from './components/menu';
import { menuProps, menuRoundedProps } from './components/menu/constants';

var menu1 = React.createElement(Menu, menuProps);
var menu2 = React.createElement(Menu, menuRoundedProps);

var menu = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--sm' },
    withConstrain(menu1)
  ),
  React.createElement(
    'div',
    null,
    withConstrain(menu2)
  )
);

render(menu, document.getElementById('menu'));

/**
 * Modal
 */

import Modal from './components/modal';
import { modalProps } from './components/modal/constants';

var modal1 = React.createElement(Modal, modalProps);
var modal2 = React.createElement(Modal, _extends({}, modalProps, {
  rounded: true,
  id: 'modal2',
  preventClose: true
}));

var modal = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--md' },
    modal1
  ),
  React.createElement(
    'div',
    null,
    modal2
  )
);

render(modal, document.getElementById('modal'));

/**
 * Notice
 */

import Notice from './components/notice';
import { noticeProps, noticeWarnProps, noticeErrorProps, noticeSuccessProps } from './components/notice/constants';

var noticeDefault = React.createElement(Notice, noticeProps);
var noticeWarn = React.createElement(Notice, noticeWarnProps);
var noticeError = React.createElement(Notice, _extends({}, noticeErrorProps, { rounded: true }));
var noticeSuccess = React.createElement(Notice, _extends({}, noticeSuccessProps, { rounded: true }));

var notice = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--sm' },
    noticeDefault
  ),
  React.createElement(
    'div',
    { className: 'mb--sm' },
    noticeWarn
  ),
  React.createElement(
    'div',
    { className: 'mb--sm' },
    noticeError
  ),
  React.createElement(
    'div',
    null,
    noticeSuccess
  )
);

render(withConstrain(notice), document.getElementById('notice'));

/**
 * Pagination
 */

import Pagination from './components/pagination';
import PaginationB from './components/pagination-b';
import { paginationItems } from './components/pagination/constants';
import { paginationBItems } from './components/pagination-b/constants';

var pagination1 = React.createElement(Pagination, { items: paginationItems });
var pagination2 = React.createElement(PaginationB, { items: paginationBItems });

var pagination = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--sm' },
    pagination1
  ),
  React.createElement(
    'div',
    null,
    pagination2
  )
);

render(pagination, document.getElementById('pagination'));

/**
 * Picker
 */

import Picker from './components/picker';
import { pickerItems, pickerGroups } from './components/picker/constants';

var picker1 = React.createElement(Picker, {
  id: 'picker',
  items: pickerItems,
  title: 'Picker Title',
  subtitle: 'Picker Subtitle'
});

var picker2 = React.createElement(Picker, {
  rounded: true,
  title: 'Picker Title',
  subtitle: 'Picker Subtitle',
  id: 'picker_rounded',
  groups: pickerGroups
});

var picker = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--md' },
    withConstrain(picker1)
  ),
  React.createElement(
    'div',
    null,
    withConstrain(picker2)
  )
);

render(picker, document.getElementById('picker'));

/**
 * Radio
 */

import Radio from './components/radio';

var radioSm = React.createElement(Radio, {
  size: 'sm',
  id: 'radio_sm',
  label: 'Radio Label'
});

var radioMd = React.createElement(Radio, {
  size: 'md',
  id: 'radio_md',
  label: 'Radio Label'
});

var radioLg = React.createElement(Radio, {
  size: 'lg',
  id: 'radio_lg',
  label: 'Radio Label'
});

var radio = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--xs' },
    radioSm
  ),
  React.createElement(
    'div',
    { className: 'mb--xs' },
    radioMd
  ),
  React.createElement(
    'div',
    null,
    radioLg
  )
);

render(radio, document.getElementById('radio'));

/**
 * Sidebar
 */

import Sidebar from './components/sidebar';
import { sidebarTop, sidebarRight, sidebarBottom, sidebarLeft } from './components/sidebar/constants';

var sidebar1 = React.createElement(Sidebar, sidebarTop);
var sidebar2 = React.createElement(Sidebar, sidebarRight);
var sidebar3 = React.createElement(Sidebar, sidebarBottom);
var sidebar4 = React.createElement(Sidebar, sidebarLeft);

var sidebar = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--sm' },
    sidebar1
  ),
  React.createElement(
    'div',
    { className: 'mb--sm' },
    sidebar2
  ),
  React.createElement(
    'div',
    { className: 'mb--sm' },
    sidebar3
  ),
  React.createElement(
    'div',
    null,
    sidebar4
  )
);

render(withConstrain(sidebar), document.getElementById('sidebar'));

/**
 * Spinner
 */

import Spinner from './components/spinner';

var spinnerSm = React.createElement(Spinner, { size: 'sm' });
var spinnerMd = React.createElement(Spinner, { size: 'md' });
var spinnerLg = React.createElement(Spinner, { size: 'lg' });
var spinnerXl = React.createElement(Spinner, { size: 'xl' });
var spinnerXxl = React.createElement(Spinner, { size: 'xxl' });

var spinner = React.createElement(
  React.Fragment,
  null,
  spinnerSm,
  spinnerMd,
  spinnerLg,
  spinnerXl,
  spinnerXxl
);

render(spinner, document.getElementById('spinner'));

/**
 * Status
 */

import Status from './components/status';

var statusOn = React.createElement(Status, { state: 'on', text: 'Online' });
var statusIdle = React.createElement(Status, { state: 'idle', text: 'Idle' });
var statusOff = React.createElement(Status, { state: 'off', text: 'Offline' });

var status = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--xs' },
    statusOn
  ),
  React.createElement(
    'div',
    { className: 'mb--xs' },
    statusIdle
  ),
  React.createElement(
    'div',
    null,
    statusOff
  )
);

render(status, document.getElementById('status'));

/**
 * Tabset
 */

import Tabset from './components/tabset';
import TabSection from './components/tabset/section';

var tabsetContent = React.createElement(
  React.Fragment,
  null,
  'Handcrafted with ',
  React.createElement(Icon, _extends({}, favoriteIcon, { fill: 'EC675C' }))
);

var tabset1 = React.createElement(
  Tabset,
  null,
  React.createElement(TabSection, { id: 'tab-sec1', title: 'A', content: tabsetContent }),
  React.createElement(TabSection, { id: 'tab-sec2', title: 'B', content: tabsetContent }),
  React.createElement(TabSection, { id: 'tab-sec3', title: 'C', content: tabsetContent }),
  React.createElement(TabSection, { id: 'tab-sec4', title: 'D', content: tabsetContent })
);

var tabset2 = React.createElement(
  Tabset,
  { rounded: true },
  React.createElement(TabSection, { id: 'tab-sec5', title: 'A', content: tabsetContent }),
  React.createElement(TabSection, { id: 'tab-sec6', title: 'B', content: tabsetContent }),
  React.createElement(TabSection, { id: 'tab-sec7', title: 'C', content: tabsetContent }),
  React.createElement(TabSection, { id: 'tab-sec8', title: 'D', content: tabsetContent })
);

var tabset = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--md' },
    withConstrain(tabset1)
  ),
  React.createElement(
    'div',
    null,
    withConstrain(tabset2)
  )
);

render(tabset, document.getElementById('tabset'));

/**
 * Timeline
 */

import Timeline from './components/timeline';
import { timelineEvents } from './components/timeline/constants';

var timeline = React.createElement(Timeline, { events: timelineEvents });

render(withConstrain(timeline), document.getElementById('timeline'));

/**
 * Todo
 */

import Todo from './components/todo';
import { todoItems1, todoItems2 } from './components/todo/constants';

var todo1 = React.createElement(Todo, {
  title: 'Todo Title',
  items: todoItems1
});

var todo2 = React.createElement(Todo, {
  rounded: true,
  title: 'Todo Title',
  items: todoItems2,
  classNames: ['rounded']
});

var todo = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'div',
    { className: 'mb--md' },
    withConstrain(todo1)
  ),
  React.createElement(
    'div',
    null,
    withConstrain(todo2)
  )
);

render(todo, document.getElementById('todo'));

/**
 * Toggle
 */

import Toggle from './components/toggle';

var toggleSm = React.createElement(Toggle, { id: 'toggle_sm', size: 'sm' });
var toggleMd = React.createElement(Toggle, { id: 'toggle_md', size: 'md' });
var toggleLg = React.createElement(Toggle, { id: 'toggle_lg', size: 'lg', checked: true });

var toggle = React.createElement(
  React.Fragment,
  null,
  toggleSm,
  toggleMd,
  toggleLg
);

render(toggle, document.getElementById('toggle'));