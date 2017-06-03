import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class DeckScreen extends Component {
  render() {
    return (
      <View>

      </View>
    );
  }
}

const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.results };
};

export default connect(mapStateToProps)(DeckScreen);
