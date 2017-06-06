import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
  // check if we have ever created a token
  let previousToken = await AsyncStorage.getItem('pushToken');
  console.log(previousToken);
  if (previousToken) {
    return;
  } else {
    // asks for permission
    let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
    if (status !== 'granted') {
      return;
    }
    // if user granted permission, create and save token created by expo to backend service
    let token = await Notifications.getExponentPushTokenAsync();
    await axios.post(PUSH_ENDPOINT, { token: { token } });
    // save token to AsyncStorage
    AsyncStorage.setItem('pushToken', token);
  }
};
