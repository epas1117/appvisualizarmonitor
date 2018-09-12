import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title } from 'native-base';



export default class MyHeader extends Component {
  render() {
    return (
        <Header style={styles.header}>
            <Title style={styles.title}>AppImagenMonitor</Title>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E8E8E8',
    alignItems: 'center'
  },
  title: {
    color: '#030303',
  },
});
