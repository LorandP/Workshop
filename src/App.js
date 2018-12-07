
import React, { Component } from 'react';
import {
  View, FlatList, Text, StyleSheet, Image,
} from 'react-native';
import restApi from './restApi';
import images from './images';
import Welcome from './Welcome';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      splashScreenFinished: false,
    };
  }

  async componentDidMount() {
    const data = await restApi();
    this.setState({
      data,
    });
  }

  renderItem = (item) => {
    return (
      <View style={styles.cardBase}>
        <View style={styles.titleContainer}>
          <Image
            style={styles.image}
            source={{ uri: images[item.symbol] }}
          />
          <Text>{item.name}</Text>
        </View>
        <Text>{item.price_usd.slice(0, item.price_usd.length - 5)} $</Text>
      </View>
    );
  }

  keyExtractor = (item) => {
    return item.id.toString();
  }

  splashScreenFinish = () => {
    this.setState({
      splashScreenFinished: true,
    });
  }

  render() {
    const { data, splashScreenFinished } = this.state;
    console.log('data -- ', data);
    return (
      <View style={styles.container}>
        {
          !splashScreenFinished
          && (
          <Welcome
            onSplashscreenFinish={() => this.splashScreenFinish()}
          />)
        }
        {
          data.length !== 0
          && splashScreenFinished
          && (
            <FlatList
              data={data}
              style={{ marginTop: 50 }}
              keyExtractor={this.keyExtractor}
              renderItem={item => this.renderItem(item.item)}
            />)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  text: {
    fontSize: 18,
  },
  image: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  cardBase: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
