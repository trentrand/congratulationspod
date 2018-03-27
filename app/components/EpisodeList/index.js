import React from 'react';
import PropTypes from 'prop-types';

import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Image,
  TouchableHighlight
} from 'react-native';

const MOCK_DATASOURCE = [
  {
    id: 60,
    title: "Episode 60 - Jojo's Cup",
    timestamp: "MAR 19, 2018",
    description: (
      "It's the 60th episode! On today's show, Chris talks about childhood influences. " +
      "Also discussed: childhood influences, following Sebastian, nude beach babysitters, " +
      "showing your family love, an email from Uncle Vinny, and bouncy balls. " +
      "Also, Chris answers a bunch of questions from Twitter. "
    ),
    thumbnailPath: "../../../assets/placeholders/hqdefault-1.jpg"
  },
  {
    id: 59,
    title: "Episode 60 - Jojo's Cup",
    timestamp: "MAR 21, 2018",
    description: (
      "It's the 60th episode! On today's show, Chris talks about childhood influences. " +
      "Also discussed: childhood influences, following Sebastian, nude beach babysitters, " +
      "showing your family love, an email from Uncle Vinny, and bouncy balls. " +
      "Also, Chris answers a bunch of questions from Twitter. "
    ),
    thumbnailPath: "../../../assets/placeholders/hqdefault-1.jpg"
  },
  {
    id: 58,
    title: "Episode 60 - Jojo's Cup",
    timestamp: "MAR 22, 2018",
    description: (
      "It's the 60th episode! On today's show, Chris talks about childhood influences. " +
      "Also discussed: childhood influences, following Sebastian, nude beach babysitters, " +
      "showing your family love, an email from Uncle Vinny, and bouncy balls. " +
      "Also, Chris answers a bunch of questions from Twitter. "
    ),
    thumbnailPath: "../../../assets/placeholders/hqdefault-1.jpg"
  },
  {
    id: 57,
    title: "Episode 60 - Jojo's Cup",
    timestamp: "MAR 23, 2018",
    description: (
      "It's the 60th episode! On today's show, Chris talks about childhood influences. " +
      "Also discussed: childhood influences, following Sebastian, nude beach babysitters, " +
      "showing your family love, an email from Uncle Vinny, and bouncy balls. " +
      "Also, Chris answers a bunch of questions from Twitter. "
    ),
    thumbnailPath: "../../../assets/placeholders/hqdefault-1.jpg"
  },
  {
    id: 56,
    title: "Episode 60 - Jojo's Cup",
    timestamp: "MAR 24, 2018",
    description: (
      "It's the 60th episode! On today's show, Chris talks about childhood influences. " +
      "Also discussed: childhood influences, following Sebastian, nude beach babysitters, " +
      "showing your family love, an email from Uncle Vinny, and bouncy balls. " +
      "Also, Chris answers a bunch of questions from Twitter. "
    ),
    thumbnailPath: "../../../assets/placeholders/hqdefault-1.jpg"
  }
]

export default class EpisodeList extends React.Component {
  static propTypes = {
    /**
     * The id of the currently focused episode.
     */
    focusedId: PropTypes.number,
    /**
     * Called when an item is focused.
     * 
     * This function should update the UI to reflect this new selection.
     */
    onItemFocus: PropTypes.func,
    /**
     * Called when an item is selected.
     * 
     * This function should play the cooresponding video.
     */
    onItemSelect: PropTypes.func
  }

  keyExtractor = (item, index) => item.id;

  renderEpisodeThumbnail = (episode) => {
    const { onItemFocus, onItemSelect, focusedId } = this.props;
    
    const isFocused = episode.id === focusedId;
    const path = episode.thumbnailPath;
    
    return (
      <View style={styles.thumbnailContainer}>
        <TouchableHighlight
          onPressIn={() => onItemFocus(episode)}
          onPress={() => onItemSelect(episode)}
          activeOpacity={1}
          tvParallaxProperties={{
            enabled: true,
            magnification: 1.2,
            activeOpacity: 1,
            shiftDistanceY: -21,
            pressMagnification: 1.3,
            pressDuration: 0.6
          }}
        >
          <Image
            style={[styles.thumbnail, isFocused ? styles.focused: undefined]}
            source={require('../../../assets/placeholders/hqdefault-1.jpg')}
          />
        </TouchableHighlight>
      </View>
      
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={MOCK_DATASOURCE}
          renderItem={this.renderEpisodeThumbnail}
          keyExtractor={this.keyExtractor}
          horizontal={true}
          removeClippedSubviews={false}
          style={styles.list}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginBottom: 25,
    marginLeft: -92,
    paddingTop: 25,
    paddingLeft: 92,
    height: 325,
  },
  list: {
    overflow: 'visible'
  },
  thumbnailContainer: {
    width: 375,
    height: 211,
    paddingTop: 25,
    marginRight: 75
  },
  focused: {
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 26 },
    shadowOpacity: 0.17,
    shadowRadius: 22,
    backgroundColor: 'black'
  },
  thumbnail: {
    width: 375,
    height: 211,
    resizeMode: 'stretch'
  }
});
