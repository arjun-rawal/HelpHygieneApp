import { DataStore } from '@aws-amplify/datastore';
import { VolunteeringData } from '../src/models';
import { Auth } from 'aws-amplify';

import {
  ScrollView,
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


  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


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
 
    <ScrollView > 
      <Image style={{width:null,height:500}}source = {require("../assets/8.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/5.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/4.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/13.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/6.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/7.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/2.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/9.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/10.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/11.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/12.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/19.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/14.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/15.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/16.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/17.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/18.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/5.jpg")}></Image>
      <Image style={{width:null,height:500}}source = {require("../assets/20.jpg")}></Image>


    </ScrollView>
    </View>
  );
}
export default Home;
