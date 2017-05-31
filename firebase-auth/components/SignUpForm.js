import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-d704a.cloudfunctions.net';

class SignUpForm extends Component {
  state = { phone: '' };

  // using an arrow function prevent the need of  ".bind(this) when the helper function is called"
  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
    } catch (err) {
      console.log(err);
    }
  }

  // handleSubmit = () => {
  //   axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
  //     .then(() => {
  //       axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
  //     })
  //    .catch(() => console.log());
  // }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button
          title='Submit'
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default SignUpForm;
