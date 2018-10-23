import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Platform, Image,
} from 'react-native';
import { Segment, Button, Header } from 'native-base';

const Styles = () => {
  return (
    <View style={styles.container}>
      <Header hasSegment>

      </Header>
      <Segment>
        <Button
          first style={styles.button}
          onPress={() => this.renderImage(cat1)}
        >
          <Text style={[styles.text, Platform.OS === 'android' ? { color: 'white' } : {}]}>Drama</Text>
        </Button>
        <Button last style={styles.button}
          onPress={() => this.renderImage(cat2)
          }>
          <Text style={[styles.text, Platform.OS === 'android' ? { color: 'white' } : {}]}>Comedy</Text>
        </Button>
      </Segment>
      {
        this.state.imageSource ?
        <View
        >
          <Image
          style={styles.image}
            source={this.state.imageSource}
          />
        </View>
          : null
      }
    </View>
  );
}