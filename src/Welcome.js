import React, { Component } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class Welcome extends Component {
  async componentDidMount() {
    const { onSplashscreenFinish } = this.props;

    this.timeout = setTimeout(async () => {
      SplashScreen.hide();
      onSplashscreenFinish();
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <View />
    );
  }
}
