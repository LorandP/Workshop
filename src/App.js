
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '...',
      textColor: 'red',
    };
  }

  changeTitleAndColor() {
    const { textColor } = this.state;
    this.setState({
      text: 'Lorand',
      textColor: textColor === 'red' ? 'blue' : 'red',
    });
  }

  render() {
    const { text, textColor } = this.state;
    return (
      <View style={styles.container}>
        <Text style={[styles.text, { color: textColor }]}>
          {`Welcome ${text} to React native!`}
        </Text>
        <Button title="press me" onPress={() => this.changeTitleAndColor()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
