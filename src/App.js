
import React, { Component } from 'react';
import {
  StyleSheet, TextInput, View, Text,
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  changeText(text) {
    this.setState({
      text,
    });
  }

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          placeholder="Enter the name of your favorite movie"
          onChangeText={input => this.changeText(input)}
          value={text}
        />
        <Text>{`Title: ${text}`}</Text>
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
