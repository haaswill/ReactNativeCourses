import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  // static make it a property of the class and not the instance
  // React Navigation uses navigationOptions as configuration for the navigator
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigation.navigate('settings')}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0,122,255,1)"
      />
    ),
    headerTitleStyle: {
      marginTop: (Platform.OS === 'andriod' ? 24 : 0)
    }
  });

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;