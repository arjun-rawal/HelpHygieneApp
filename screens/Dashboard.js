import { DataStore } from '@aws-amplify/datastore';
import { VolunteeringData } from '../src/models';
import { Auth } from 'aws-amplify';

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  Alert
} from "react-native";



function Home({ navigation }) {
  async function deleteUser() {
    try {
      const result = await Auth.deleteUser();
      console.log(result);
    } catch (error) {
      console.log('Error deleting user', error);
    }
  }

  function toRecordHours() {
    navigation.navigate("Record-Hours");
  }
  function toViewLoggedHours() {
    navigation.navigate("Logged-Hours");
  }
  function warnDelete(){
    Alert.alert(
      "Delete Your Account",
      "Are you sure?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text:'Continue',
          onPress: () => deleteUser(),
        },
      ],
      {
        cancelable: true,
      },


     
    );
  }
  return (
    <View>
      <Button
        title="Record Hours"
        onPress={() => toRecordHours()}
      ></Button>
      <Button
        title="View Logged Hours"
        onPress={() => toViewLoggedHours()}
      ></Button>
      <Button onPress={() => warnDelete()}title="Delete Account"></Button>
    </View>
  );
}
export default Home;
