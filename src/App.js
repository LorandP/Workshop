
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Platform, Image,
} from 'react-native';
import {
  Segment, Button, Header,
} from 'native-base';

type Props = {};

const cat1 = require('./../assets/cat1.jpeg');
const cat2 = require('./../assets/cat2.jpg');

export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      imageSource: null,
    };
  }

  renderImage = (source) => {
    this.setState({
      imageSource: source,
    });
  }
  
  render() {
    const { imageSource } = this.state;
    return (
      <View style={styles.container}>
        <Header
          hasSegment
        />
        <Segment>
          <Button
            first
            style={styles.button}
            onPress={() => this.renderImage(cat1)}
          >
            <Text style={[styles.text, Platform.OS === 'android' ? { color: 'white' } : {}]}>Drama</Text>
          </Button>
          <Button
            last
            style={styles.button}
            onPress={() => this.renderImage(cat2)
            }
          >
            <Text style={[styles.text, Platform.OS === 'android' ? { color: 'white' } : {}]}>Comedy</Text>
          </Button>
        </Segment>
        {
          imageSource ? (
            <Image
              style={styles.image}
              source={imageSource}
            />
          )
            : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
  button: {
    padding: 10,
  },
  image: {
    flex: 1,
    width: null,
    resizeMode: 'contain',
  },
});
