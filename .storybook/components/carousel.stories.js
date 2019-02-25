import React from 'react';
import {Carousel, CarouselItem} from 'pattern-lib-react';
import {carouselProps, carouselImg} from '../data/carousel';
import {storiesOf} from '@storybook/react';

storiesOf('Carousel', module)
  .add('default', () => (
    <Carousel>
      <CarouselItem title="Carousel Title 1" image={carouselImg.first} description={carouselProps.description} />
      <CarouselItem title="Carousel Title 2" image={carouselImg.second} description={carouselProps.description} />
      <CarouselItem title="Carousel Title 3" image={carouselImg.third} description={carouselProps.description} />
    </Carousel>
  ), {notes: 'caret?'})
  .add('rounded', () => (
    <Carousel rounded>
      <CarouselItem title="Carousel Title 1" image={carouselImg.first} description={carouselProps.description} />
      <CarouselItem title="Carousel Title 2" image={carouselImg.second} description={carouselProps.description} />
      <CarouselItem title="Carousel Title 3" image={carouselImg.third} description={carouselProps.description} />
    </Carousel>
  ), {notes: 'caret?'});
