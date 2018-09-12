import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Title, Content } from 'native-base';

import GalleryItem from './GalleryItem';

import { getGalleryContentOn } from '../utils/firebaseServices';
import { convertObjectsToArray } from '../utils/helperFunctions';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentWillMount() {
    this.getGalleryContentOnListener = getGalleryContentOn((galleryContent) => {
      this.setState({ galleryContent: convertObjectsToArray(galleryContent), isLoading: false });
    });
  }

  renderGalleryItems() {
    return this.state.galleryContent.map((galleryItem) => {
      return (
        <GalleryItem key={galleryItem.key} galleryItem={galleryItem} />
      )
    });
  }

  render() {
    return (
      this.state.isLoading ?
      <Content style={styles.mainContent}>
        <Title>Cargando</Title>
      </Content>
      :
      <Content style={styles.mainContent}>
        {
            this.renderGalleryItems()
        }
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    padding: 5,
  },
  title: {
    color: '#030303',
  },
});
