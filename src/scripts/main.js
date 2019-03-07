import React from 'react';
import {render} from 'react-dom';
import {withConstrain} from './utils';

/**
 * Accordion
 */

import {Accordion, AccordionSection} from '@0bie/pattern-lib-react';
import {accordionContent} from './data/accordion';

const accordion1 =
  <Accordion classNames={['mb--md']}>
    <AccordionSection id="accd-sec1" title="Accordion Title 1">{accordionContent}</AccordionSection>
    <AccordionSection id="accd-sec2" title="Accordion Title 2">{accordionContent}</AccordionSection>
    <AccordionSection id="accd-sec3" title="Accordion Title 3">{accordionContent}</AccordionSection>
    <AccordionSection id="accd-sec4" title="Accordion Title 4">{accordionContent}</AccordionSection>
  </Accordion>;

const accordion2 =
  <Accordion rounded>
    <AccordionSection id="accd-sec5" title="Accordion Title 1">{accordionContent}</AccordionSection>
    <AccordionSection id="accd-sec6" title="Accordion Title 2">{accordionContent}</AccordionSection>
    <AccordionSection id="accd-sec7" title="Accordion Title 3">{accordionContent}</AccordionSection>
    <AccordionSection id="accd-sec8" title="Accordion Title 4">{accordionContent}</AccordionSection>
  </Accordion>;

const accordion =
  <React.Fragment>
    {withConstrain(accordion1)}
    {withConstrain(accordion2)}
  </React.Fragment>;

render(
  accordion,
  document.getElementById('accordion')
);

/**
 * Avatar
 */

import {Avatar} from '@0bie/pattern-lib-react';
import {userIcon} from './data/icon';
import {avatarProps, avatarWithImgProps} from './data/avatar';

const avatarSmall =
  <Avatar
    size="sm"
    icon={userIcon}
    classNames={['mr--xs']}
  />;

const avatarMedium =
  <Avatar
    rounded
    size="md"
    user={avatarProps}
    classNames={['mr--xs']}
  />;

const avatarLarge =
  <Avatar
    size="lg"
    classNames={['mr--xs']}
    user={avatarWithImgProps}
  />;

const avatarXtraLarge =
  <Avatar
    size="xl"
    rounded
    user={avatarWithImgProps}
  />;

const avatar =
  <React.Fragment>
    {avatarSmall}
    {avatarMedium}
    {avatarLarge}
    {avatarXtraLarge}
  </React.Fragment>;

render(
  avatar,
  document.getElementById('avatar')
);

/**
 * Blockquote
 */

import {Blockquote} from '@0bie/pattern-lib-react';
import {quote1, quote2} from './data/blockquote';

const blockquote1 =
  <Blockquote
    {...quote1}
    quote={quote1.user.quote}
  />;

const blockquote2 =
  <Blockquote
    {...quote2}
    quote={quote2.user.quote}
  />;

const blockquote =
  <React.Fragment>
    {withConstrain(blockquote1)}
    {withConstrain(blockquote2)}
  </React.Fragment>;

render(
  blockquote,
  document.getElementById('blockquote')
);

/**
 * Bulletlist
 */

import {Bulletlist} from '@0bie/pattern-lib-react';
import {bulletlistItems} from './data/bulletlist';

const bulletlist = <Bulletlist items={bulletlistItems} />;

render(
  withConstrain(bulletlist),
  document.getElementById('bulletlist')
);

/**
 * Button
 */

import {Button, ButtonGroup} from '@0bie/pattern-lib-react';
import {btnGroupBlock, btnGroupInline} from './data/button';

const buttonXs = <Button size="xs" label="Button-xs" disabled />;
const buttonSm = <Button size="sm" label="Button-sm" />;
const buttonMd = <Button size="md" label="Button-md" />;
const buttonLg = <Button size="lg" label="Button-lg" />;
const buttonXl = <Button size="xl" label="Button-xl" />;
const buttonFull = <Button size="xs" label="Button-Full" classNames={['btn--full']} />;

const buttonLoadingSm = <Button size="sm" loading />;
const buttonLoadingMd = <Button size="md" loading />;
const buttonLoadingLg = <Button size="lg" loading />;

const buttonHoverXs = <Button size="xs" label="Button-xs" rounded classNames={['btn--hover']} />;
const buttonHoverSm = <Button size="sm" label="Button-sm" rounded classNames={['btn--hover']} />;
const buttonHoverMd = <Button size="md" label="Button-md" rounded classNames={['btn--hover']} />;
const buttonHoverLg = <Button size="lg" label="Button-lg" rounded classNames={['btn--hover']} />;

/**
 * Button Group
 */

const buttonGroupInline =
  <ButtonGroup
    rounded
    display="inline"
    buttonArr={btnGroupInline}
  />;

const buttonGroupBlock =
  <ButtonGroup
    rounded
    display="block"
    buttonArr={btnGroupBlock}
  />;

const buttonGroup =
  <React.Fragment>
    <div className="mb--sm">{buttonGroupInline}</div>
    <div>{buttonGroupBlock}</div>
  </React.Fragment>;

const button =
  <React.Fragment>
    <div className="mb--sm">
      <span className="pr--xxs">{buttonXs}</span>
      <span className="pr--xxs">{buttonSm}</span>
      <span className="pr--xxs">{buttonMd}</span>
      <span className="pr--xxs">{buttonLg}</span>
      <span>{buttonXl}</span>
    </div>
    <div className="mb--md">{buttonFull}</div>
    <div>
      <span className="pr--xxs">{buttonHoverXs}</span>
      <span className="pr--xxs">{buttonHoverSm}</span>
      <span className="pr--xxs">{buttonHoverMd}</span>
      <span className="pr--xxs">{buttonHoverLg}</span>
    </div>
    <div className="mb--md">
      <span className="pr--xxs">{buttonLoadingSm}</span>
      <span className="pr--xxs">{buttonLoadingMd}</span>
      <span>{buttonLoadingLg}</span>
    </div>
    <div>
      {buttonGroup}
    </div>
  </React.Fragment>;

render(
  button,
  document.getElementById('button')
);

/**
 * Card
 */

import {Card} from '@0bie/pattern-lib-react';
import {card1, card2, card3, card4} from './data/card';

const cardOne =
  <Card
    footer
    {...card1}
  />;

const cardTwo =
  <Card
    footer
    rounded
    {...card2}
  />;

const cardThree =
  <Card
    footer
    {...card3}
  />;

const cardFour =
  <Card
    footer
    rounded
    {...card4}
  />;

const card =
  <React.Fragment>
    <div className="mb--md">{cardOne}</div>
    <div className="mb--md">{cardTwo}</div>
    <div className="mb--md">{cardThree}</div>
    <div className="mb--md">{cardFour}</div>
  </React.Fragment>;

render(
  card,
  document.getElementById('card')
);

/**
 * Cardlist
 */

import {Cardlist} from '@0bie/pattern-lib-react';
import {cardlistProps} from './data/cardlist';

const cardlist = <Cardlist {...cardlistProps} />;

render(
  cardlist,
  document.getElementById('cardlist')
);

/**
 * Caret
 */

import {Caret} from '@0bie/pattern-lib-react';

const caretTop = <Caret direction="top" />;
const caretRight = <Caret direction="right" />;
const caretBottom = <Caret direction="bottom" />;
const caretLeft = <Caret direction="left" />;

const caret =
  <React.Fragment>
    {caretTop}
    {caretRight}
    {caretBottom}
    {caretLeft}
  </React.Fragment>;

render(
  caret,
  document.getElementById('caret')
);

/**
 * Carousel
 */

import {Carousel, CarouselItem} from '@0bie/pattern-lib-react';
import {carouselProps, carouselImg} from './data/carousel';

const carousel1 =
  <Carousel>
    <CarouselItem title="Carousel Title 1" image={carouselImg.first} description={carouselProps.description} />
    <CarouselItem title="Carousel Title 2" image={carouselImg.second} description={carouselProps.description} />
    <CarouselItem title="Carousel Title 3" image={carouselImg.third} description={carouselProps.description} />
  </Carousel>;

const carousel2 =
  <Carousel rounded>
    <CarouselItem title="Carousel Title 1" image={carouselImg.first} description={carouselProps.description} />
    <CarouselItem title="Carousel Title 2" image={carouselImg.second} description={carouselProps.description} />
    <CarouselItem title="Carousel Title 3" image={carouselImg.third} description={carouselProps.description} />
  </Carousel>;

const carousel =
  <React.Fragment>
    {carousel1}
    {carousel2}
  </React.Fragment>;

render(
  carousel,
  document.getElementById('carousel')
);

/**
 * Caret
 */

import {Checkbox} from '@0bie/pattern-lib-react';

const checkboxSm =
  <Checkbox
    size="sm"
    id="check_sm"
    label="Checkbox Label"
    classNames={['mr--xs']}
  />;

const checkboxMd =
  <Checkbox
    size="md"
    id="check_md"
    label="Checkbox Label"
    classNames={['mr--xs']}
  />;

const checkboxLg =
  <Checkbox
    size="lg"
    id="check_lg"
    label="Checkbox Label"
  />;

const checkboxSm1 =
  <Checkbox
    rounded
    size="sm"
    id="check_sm1"
    label="Checkbox Label"
    classNames={['mr--xs']}
  />;

const checkboxMd1 =
  <Checkbox
    rounded
    size="md"
    id="check_md1"
    label="Checkbox Label"
    classNames={['mr--xs']}
  />;

const checkboxLg1 =
  <Checkbox
    rounded
    size="lg"
    id="check_lg1"
    label="Checkbox Label"
  />;

const checkbox =
  <React.Fragment>
    <div className="mb--md">
      {checkboxSm}
      {checkboxMd}
      {checkboxLg}
    </div>
    <div>
      {checkboxSm1}
      {checkboxMd1}
      {checkboxLg1}
    </div>
  </React.Fragment>;

render(
  checkbox,
  document.getElementById('checkbox')
);

/**
 * Data Tree
 */

import {DataTree} from '@0bie/pattern-lib-react';
import {dataTreeItems} from './data/datatree';

const dataTree = <DataTree items={dataTreeItems} />;

render(
  dataTree,
  document.getElementById('datatree')
);

/**
 * Dropdown
 */

import {Dropdown, Media, Icon} from '@0bie/pattern-lib-react';
import {favoriteIcon} from './data/icon';
import {dropdownProps, dropdownProps2, dropdownProps3, dropdownMedia} from './data/dropdown';

const mediaItemDropdown =
  <Image
    size="md"
    src="assets/bag/bag3.jpg"
  />;

const mediaFooterContent =
  <React.Fragment>
    Handcrafted with <Icon {...favoriteIcon} fill="EC675C" />
  </React.Fragment>;

const dropdown1 = <Dropdown {...dropdownProps} />;
const dropdown2 =
  <Dropdown
    {...dropdownProps2}
    content={<Media {...dropdownMedia} item={mediaItemDropdown} footerContent={mediaFooterContent} />}
  />;

const dropdown3 = <Dropdown {...dropdownProps3} />;

const dropdown =
  <React.Fragment>
    <span className="mr--xxxxl">{dropdown1}</span>
    <span className="mr--xxxxl">{dropdown2}</span>
    <span>{dropdown3}</span>
  </React.Fragment>;

render(
  dropdown,
  document.getElementById('dropdown')
);

/**
 * Hero
 */

import {Hero} from '@0bie/pattern-lib-react';
import {heroCta, heroImage} from './data/hero';

const heroImg =
  <Hero
    cta={heroCta}
    image={heroImage}
    subtitle="Hero subtitle"
    title="This is placeholder text for a hero title"
  />;

const heroNoImg =
  <Hero
    cta={heroCta}
    subtitle="Hero subtitle"
    title="This is placeholder text for a hero title"
  />;

const hero =
  <React.Fragment>
    <div className="mb--md">{heroNoImg}</div>
    <div className="mb--md">{heroImg}</div>
  </React.Fragment>;

render(
  hero,
  document.getElementById('hero')
);

/**
 * Icon
 */

import {twitterIcon, heartIcon, exitIcon} from './data/icon';

const icon =
  <React.Fragment>
    <span className="mr--sm">{<Icon {...twitterIcon} />}</span>
    <span className="mr--sm">{<Icon {...heartIcon} />}</span>
    <span className="ml--xs">{<Icon {...exitIcon} />}</span>
  </React.Fragment>;

render(
  icon,
  document.getElementById('icon')
);

/**
 * Image
 */

import {Image} from '@0bie/pattern-lib-react';
const imageSource = 'assets/bag/bag2.jpg';

const imageXs =
  <Image
    size="xs"
    src={imageSource}
  />;

const imageSm =
  <Image
    size="sm"
    src={imageSource}
  />;

const imageMd =
  <Image
    size="md"
    src={imageSource}
  />;

const imageLg =
  <Image
    size="lg"
    src={imageSource}
    caption="More colors available"
  />;

const imageXl =
  <Image
    size="xl"
    src={imageSource}
    caption="More colors available"
  />;

const image =
  <React.Fragment>
    {imageXs}
    {imageSm}
    {imageMd}
    {imageLg}
    {imageXl}
  </React.Fragment>;

render(
  image,
  document.getElementById('image')
);

/**
 * Input
 */

import {Input, InputGroup} from '@0bie/pattern-lib-react';
import {
  input_sm,
  input_md,
  input_lg,
  input_xl,
  input_xxl,
  input_search,
  input_search_rounded,
  input_rounded,
  input_rounded_md,
  input_rounded_lg,
  input_rounded_xl,
  input_rounded_xxl,
  inputGroupItems
} from './data/input';

const inputXs = <Input {...input_sm} size="xs" state="error" />;
const inputSm = <Input {...input_sm} />;
const inputMd = <Input {...input_md} />;
const inputLg = <Input {...input_lg} />;
const inputXl = <Input {...input_xl} />;
const inputXxl = <Input {...input_xxl} />;
const inputSearch = <Input {...input_search} />;
const inputSearchRounded = <Input {...input_search_rounded} />;
const inputRounded = <Input {...input_rounded} />;
const inputRoundedMd = <Input {...input_rounded_md} />;
const inputRoundedLg = <Input {...input_rounded_lg} />;
const inputRoundedXl = <Input {...input_rounded_xl} />;
const inputRoundedXxl = <Input {...input_rounded_xxl} />;
const inputGroup = <InputGroup display="inline" inputArr={inputGroupItems} />;

const input =
  <React.Fragment>
    <div className="mb--md">
      {inputXs}
      {inputSm}
      {inputMd}
      {inputLg}
      {inputXl}
      {inputXxl}
    </div>
    <div className="mb--md">
      {inputGroup}
    </div>
    <div className="mb--md">
      <div className="input-container">{inputSearch}</div>
      <div className="input-container">{inputSearchRounded}</div>
    </div>
    <div className="mb--md">
      {inputRounded}
      {inputRoundedMd}
      {inputRoundedLg}
      {inputRoundedXl}
      {inputRoundedXxl}
    </div>
  </React.Fragment>;

render(
  input,
  document.getElementById('input')
);

/**
 * List
 */

import {List} from '@0bie/pattern-lib-react';
import {listItems} from './data/list';

const list1 = <List items={listItems} classNames={['mb--md']} />;
const list2 = <List items={listItems} rounded />;

const list =
  <React.Fragment>
    {withConstrain(list1)}
    {withConstrain(list2)}
  </React.Fragment>;

render(
  list,
  document.getElementById('list')
);

/**
 * Media
 */

import {mediaDescription} from './data/media';

const mediaItem =
  <Image
    size="md"
    src='assets/bag/bag3.jpg'
  />;

const media1 =
  <Media
    footer
    item={mediaItem}
    title="Media Title"
    footerContent={mediaFooterContent}
    description="Handcrafted with the highest quality materials."
  />;

const media2 =
  <Media
    footer
    rounded
    item={mediaItem}
    title="Media Title"
    footerContent={mediaFooterContent}
    description="Handcrafted with the highest quality materials."
  />;

const mediaItemAvatar =
  <Avatar
    size="xxl"
    user={avatarWithImgProps}
  />;

const media3 =
  <Media
    rounded
    item={mediaItemAvatar}
    title="Joan Holloway"
    footerContent={mediaFooterContent}
    description={mediaDescription}
  />;

const media =
  <React.Fragment>
    <div className="mb--md">{withConstrain(media1)}</div>
    <div className="mb--md">{withConstrain(media2)}</div>
    <div>{withConstrain(media3)}</div>
  </React.Fragment>;

render(
  media,
  document.getElementById('media')
);

/**
 * Menu
 */

import {Menu} from '@0bie/pattern-lib-react';
import {menuProps, menuRoundedProps} from './data/menu';

const menu1 = <Menu {...menuProps} />;
const menu2 = <Menu {...menuRoundedProps} />;

const menu =
  <React.Fragment>
    <div className="mb--sm">{withConstrain(menu1)}</div>
    <div>{withConstrain(menu2)}</div>
  </React.Fragment>;

render(
  menu,
  document.getElementById('menu')
);

/**
 * Modal
 */

import {Modal} from '@0bie/pattern-lib-react';
import {modalProps} from './data/modal';

const modal1 = <Modal {...modalProps} />;
const modal2 =
  <Modal
    {...modalProps}
    rounded
    id="modal2"
    preventClose
  />;

const modal =
  <React.Fragment>
    <div className="mb--md">{modal1}</div>
    <div>{modal2}</div>
  </React.Fragment>;

render(
  modal,
  document.getElementById('modal')
);

/**
 * Notice
 */

import {Notice} from '@0bie/pattern-lib-react';
import {
  noticeProps,
  noticeWarnProps,
  noticeErrorProps,
  noticeSuccessProps,
} from './data/notice';

const noticeDefault = <Notice {...noticeProps} />;
const noticeWarn = <Notice {...noticeWarnProps} />;
const noticeError = <Notice {...noticeErrorProps} rounded />;
const noticeSuccess = <Notice {...noticeSuccessProps} rounded />;

const notice =
  <React.Fragment>
    <div className="mb--sm">{noticeDefault}</div>
    <div className="mb--sm">{noticeWarn}</div>
    <div className="mb--sm">{noticeError}</div>
    <div>{noticeSuccess}</div>
  </React.Fragment>;

render(
  withConstrain(notice),
  document.getElementById('notice')
);

/**
 * Pagination
 */

import {Pagination, PaginationB} from '@0bie/pattern-lib-react';
import {paginationItems} from './data/pagination';
import {paginationBItems} from './data/pagination-b';

const pagination1 = <Pagination items={paginationItems} />;
const pagination2 = <Pagination items={paginationItems} rounded />;
const pagination3 = <PaginationB items={paginationBItems} />;
const pagination4 = <PaginationB items={paginationBItems} rounded />;

const pagination =
  <React.Fragment>
    <div className="mb--sm">{pagination1}</div>
    <div className="mb--sm">{pagination2}</div>
    <div className="mb--sm">{pagination3}</div>
    <div>{pagination4}</div>
  </React.Fragment>;

render(
  pagination,
  document.getElementById('pagination')
);

/**
 * Picker
 */

import {Picker} from '@0bie/pattern-lib-react';
import {pickerItems, pickerGroups} from './data/picker';

const picker1 =
  <Picker
    id="picker"
    items={pickerItems}
    title="Picker Title"
    subtitle="Picker Subtitle"
  />;

const picker2 =
  <Picker
    rounded
    title="Picker Title"
    subtitle="Picker Subtitle"
    id="picker_rounded"
    groups={pickerGroups}
  />;

const picker =
  <React.Fragment>
    <div className="mb--md">{withConstrain(picker1)}</div>
    <div>{withConstrain(picker2)}</div>
  </React.Fragment>;

render(
  picker,
  document.getElementById('picker')
);

/**
 * Radio
 */

import {Radio} from '@0bie/pattern-lib-react';

const radioSm =
  <Radio
    size="sm"
    id="radio_sm"
    label="Radio Label"
  />;

const radioMd =
  <Radio
    size="md"
    id="radio_md"
    label="Radio Label"
  />;

const radioLg =
  <Radio
    size="lg"
    id="radio_lg"
    label="Radio Label"
  />;

const radio =
  <React.Fragment>
    <div className="mb--xs">{radioSm}</div>
    <div className="mb--xs">{radioMd}</div>
    <div>{radioLg}</div>
  </React.Fragment>;

render(
  radio,
  document.getElementById('radio')
);

/**
 * Sidebar
 */

import {Sidebar} from '@0bie/pattern-lib-react';
import {sidebarTop, sidebarRight, sidebarBottom, sidebarLeft} from './data/sidebar';

const sidebar1 = <Sidebar {...sidebarTop} />;
const sidebar2 = <Sidebar {...sidebarRight} />;
const sidebar3 = <Sidebar {...sidebarBottom} />;
const sidebar4 = <Sidebar {...sidebarLeft} />;

const sidebar =
  <React.Fragment>
    <div className="mb--sm">{sidebar1}</div>
    <div className="mb--sm">{sidebar2}</div>
    <div className="mb--sm">{sidebar3}</div>
    <div>{sidebar4}</div>
  </React.Fragment>;

render(
  withConstrain(sidebar),
  document.getElementById('sidebar')
);

/**
 * Spinner
 */

import {Spinner} from '@0bie/pattern-lib-react';

const spinnerSm = <Spinner size="sm" />;
const spinnerMd = <Spinner size="md" />;
const spinnerLg = <Spinner size="lg" />;
const spinnerXl = <Spinner size="xl" />;
const spinnerXxl = <Spinner size="xxl" />;

const spinner =
  <React.Fragment>
    {spinnerSm}
    {spinnerMd}
    {spinnerLg}
    {spinnerXl}
    {spinnerXxl}
  </React.Fragment>;

render(
  spinner,
  document.getElementById('spinner')
);


/**
 * Status
 */

import {Status} from '@0bie/pattern-lib-react';

const statusOn = <Status state="on" label="Online" />;
const statusIdle = <Status state="idle" label="Idle" />;
const statusOff = <Status state="off" label="Offline" />;

const status =
  <React.Fragment>
    <div className="mb--xs">{statusOn}</div>
    <div className="mb--xs">{statusIdle}</div>
    <div>{statusOff}</div>
  </React.Fragment>;

render(
  status,
  document.getElementById('status')
);

/**
 * Tabset
 */

import {TabSet, TabSection} from '@0bie/pattern-lib-react';

const tabsetContent =
  <React.Fragment>
    Handcrafted with <Icon {...favoriteIcon} fill="EC675C" />
  </React.Fragment>;

const tabset1 =
  <TabSet>
    <TabSection id="tab-sec1" title="A" content={tabsetContent} />
    <TabSection id="tab-sec2" title="B" content={tabsetContent} />
    <TabSection id="tab-sec3" title="C" content={tabsetContent} />
    <TabSection id="tab-sec4" title="D" content={tabsetContent} />
  </TabSet>;

const tabset2 =
  <TabSet rounded>
    <TabSection id="tab-sec5" title="A" content={tabsetContent} />
    <TabSection id="tab-sec6" title="B" content={tabsetContent} />
    <TabSection id="tab-sec7" title="C" content={tabsetContent} />
    <TabSection id="tab-sec8" title="D" content={tabsetContent} />
  </TabSet>;

const tabset =
  <React.Fragment>
    <div className="mb--md">{withConstrain(tabset1)}</div>
    <div>{withConstrain(tabset2)}</div>
  </React.Fragment>;

render(
  tabset,
  document.getElementById('tabset')
);

/**
 * Timeline
 */

import {Timeline} from '@0bie/pattern-lib-react';
import {timelineEvents} from './data/timeline';

const timeline = <Timeline events={timelineEvents} />;

render(
  withConstrain(timeline),
  document.getElementById('timeline')
);

/**
 * Todo
 */

import {Todo} from '@0bie/pattern-lib-react';
import {todoItems1, todoItems2} from './data/todo';

const todo1 =
  <Todo
    title="Todo Title"
    items={todoItems1}
  />;

const todo2 =
  <Todo
    rounded
    title="Todo Title"
    items={todoItems2}
    classNames={['rounded']}
  />;

const todo =
  <React.Fragment>
    <div className="mb--md">{withConstrain(todo1)}</div>
    <div>{withConstrain(todo2)}</div>
  </React.Fragment>;

render(
  todo,
  document.getElementById('todo')
);

/**
 * Toggle
 */

import {Toggle} from '@0bie/pattern-lib-react';

const toggleSm = <Toggle id="toggle_sm" size="sm" />;
const toggleMd = <Toggle id="toggle_md" size="md" />;
const toggleLg = <Toggle id="toggle_lg" size="lg" checked />;

const toggle =
  <React.Fragment>
    {toggleSm}
    {toggleMd}
    {toggleLg}
  </React.Fragment>;

render(
  toggle,
  document.getElementById('toggle')
);
