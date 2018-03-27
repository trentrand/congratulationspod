import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image } from 'react-native';

import Description from './components/Description';
import EpisodeList from './components/EpisodeList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focusedItem: -1 };
  }

  handleEpisodeFocus = (episode) => {
    console.log(episode, 'focused');
    this.setState({
      focusedItem: episode.id
    })
  }

  handleEpisodeSelect = (episode) => {
    console.log(episode, 'selected');
  }

  render() {
    const { focusedId } = this.state;

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
        <EpisodeList
          style={styles.list}
          focusedId={focusedId}
          onItemFocus={this.handleEpisodeFocus}
          onItemSelect={this.handleEpisodeSelect}
        />
        <Description
          style={styles.description}
          title="Episode 60 - Jojo's Cup"
          timestamp="MAR 19, 2018"
          description={
            "It's the 60th episode! On today's show, Chris talks about childhood influences. " +
            "Also discussed: childhood influences, following Sebastian, nude beach babysitters, " +
            "showing your family love, an email from Uncle Vinny, and bouncy balls. " +
            "Also, Chris answers a bunch of questions from Twitter. "
          }
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
