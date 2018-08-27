import React from 'react';
import Container from '../components/container';

/**
 * Constrain the width of a component
 * @param {function} component - The component
 * @returns {object} A component nested within `<Container>`
 */

export default function withConstrain(component) {
  return (
    <Container>
      {component}
    </Container>
  );
}
