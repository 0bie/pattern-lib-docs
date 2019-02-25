import React from 'react';
import {Accordion, AccordionSection, Container} from 'pattern-lib-react';
import {accordionContent} from '../data/accordion';
import {storiesOf} from '@storybook/react';

storiesOf('Accordion', module)
  .add('default', () => (
    <Container>
      <Accordion classNames={['mb--md']}>
        <AccordionSection id="accd-sec1" title="Accordion Title 1">{accordionContent}</AccordionSection>
        <AccordionSection id="accd-sec2" title="Accordion Title 2">{accordionContent}</AccordionSection>
        <AccordionSection id="accd-sec3" title="Accordion Title 3">{accordionContent}</AccordionSection>
        <AccordionSection id="accd-sec4" title="Accordion Title 4">{accordionContent}</AccordionSection>
      </Accordion>
    </Container>
  ), {notes: 'accordion?'})
  .add('rounded', () => (
    <Container>
      <Accordion rounded>
        <AccordionSection id="accd-sec5" title="Accordion Title 1">{accordionContent}</AccordionSection>
        <AccordionSection id="accd-sec6" title="Accordion Title 2">{accordionContent}</AccordionSection>
        <AccordionSection id="accd-sec7" title="Accordion Title 3">{accordionContent}</AccordionSection>
        <AccordionSection id="accd-sec8" title="Accordion Title 4">{accordionContent}</AccordionSection>
      </Accordion>
    </Container>
  ), {notes: 'accordion rounded?'});
