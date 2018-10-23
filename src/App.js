
import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, Platform, Image } from 'react-native';
import { Segment, Button, Header, Container } from 'native-base';

type Props = {};
type State = {
  switched: boolean;
}
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      switched: false,
      imageSource: null
    };
  }

  renderImage = (source) => {
    this.setState({
      imageSource: source
    });
  }
  render() {
    const cat1 = require('./../assets/cat1.jpeg');
    const cat2 = require('./../assets/cat2.jpg');

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  text: {
    fontSize: 18
  },
  button: {
    padding: 10
  },
  image: {
    resizeMode: 'center'
  }
});
