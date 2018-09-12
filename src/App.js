import React, {Component} from 'react';
import { Container } from 'native-base';

import MyHeader from './components/MyHeader';
import Gallery from './components/Gallery';

export default class App extends Component {
  render() {
    return (
      <Container>
        <MyHeader/>
        <Gallery/>
      </Container>
    );
  }
}
