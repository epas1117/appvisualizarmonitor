import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import { updateGalleryItemToDisplayInUserFrame } from '../utils/firebaseServices';

export default class GalleryItem extends Component {
  constructor(props) {
    super(props);
  }

  pushArtworkToFrames() {

    updateGalleryItemToDisplayInUserFrame(this.props.galleryItem);
  }

  render() {
    return (
        <Card>
          <CardItem>
            <Left>
              <Thumbnail square style={styles.image} source={{uri: this.props.galleryItem.previaImagenURL}} />
              <Body >
                <Text>{this.props.galleryItem.nombreImagen}</Text>
                <Text note>{this.props.galleryItem.descripcionImagen}</Text>
              </Body>
            </Left>
              <Icon style={styles.airplay} name="desktop" onPress={ this.pushArtworkToFrames.bind(this) }/>
          </CardItem>
        </Card>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginRight: 5
  },
  airplay: {
    color: 'black'
  }
});
