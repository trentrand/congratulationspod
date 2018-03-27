import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>
        <Image 
          style={styles.wallpaper}
          source={require('../assets/wallpaper.jpg')} 
        />
        <Image 
          style={styles.logo}
          source={require('../assets/logo.png')} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6DCFF6',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 92,
    paddingTop: 62
  },
  logo: {
    width: 526,
    height: 90
  },
  wallpaper: {
    position: 'absolute',
    top: -141,
    left: 92,
    width: 1744,
    height: 1221
  }
});
