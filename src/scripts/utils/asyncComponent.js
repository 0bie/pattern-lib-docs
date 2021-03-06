import React, {Component} from 'react';
import {Spinner} from '@0bie/pattern-lib-react';

/**
 * Asynchronously load a component
 * @param {function} getComponent - Callback that imports a given component
 * @returns {object} A component
 */

export default function asyncComponent(getComponent) {

  class AsyncComponent extends Component {
    state = {
      component: null
    }
    async componentDidMount() {
      const {default: component} = await getComponent();
      this.setState(() => ({
        component
      }));
    }
    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : <Spinner text="Loading..." />;
    }
  }
  return AsyncComponent;

}

// https://medium.com/@assortedPickle/es6-static-properties-b7fd2a163328
