import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';

export default class Description extends React.Component {
  static propTypes = {
    /**
     * The episode's title.
     * 
     * E.g. "Episode 60 - Jojo’s Cup"
     */
    title: PropTypes.string,
    /**
     * The episode's timestamp.
     * 
     * E.g. "MAR 19, 2018"
     */
    timestamp: PropTypes.string,
    /**
     * The episode's description.
     * 
     * E.g. "It's the 60th episode! On today's show..."
     */
    description: PropTypes.string,
  }

  render() {
    const { title, timestamp, description } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{ title.toUpperCase() }</Text>
        <Text style={styles.timestamp}>{ timestamp }</Text>
        <Text style={styles.description}>{ description }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 930,
    height: 350,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: 'Abel',
    fontSize: 57,
    color: 'white',
    letterSpacing: 0.2,
    lineHeight: 66,
  },
  timestamp: {
    opacity: 0.6,
    fontFamily: 'SourceCodePro-Regular',
    fontSize: 29,
    color: 'white',
    letterSpacing: -0.94,
    lineHeight: 36.1,
    paddingBottom: 32
  },
  description: {
    fontFamily: 'SourceCodePro-Regular',
    fontSize: 29,
    color: 'white',
    letterSpacing: -0.94,
    lineHeight: 36.1
  }
});
