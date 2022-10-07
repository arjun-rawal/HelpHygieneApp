import React, {useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
    KeyboardAvoidingView,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
Keyboard,
Platform,

} from "react-native";
import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { VolunteeringData } from '../src/models';
import DateTimePicker from '@react-native-community/datetimepicker';

function ViewLoggedHours() {
  const [isVisible, changeVis] = useState(true);

  setTimeout(() => getUserInfo(), 1500);


  async function getUserInfo() {
    changeVis(false);
    const user = await Auth.currentAuthenticatedUser();
    console.log(user.attributes.email);
    const VolunteeringDataRead = await DataStore.query(VolunteeringData, c => c.Email("eq", user.attributes.email));
    console.log(VolunteeringDataRead[1].ActHours);
    // console.log(VolunteeringDataRead.length)
  }
  return (
    <View>
              <ActivityIndicator animating={isVisible}/>


    </View>
  )  
};

  
export default ViewLoggedHours;
