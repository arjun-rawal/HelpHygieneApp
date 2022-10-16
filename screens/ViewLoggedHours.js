import React, {useState} from 'react';
import GridFlatList from 'grid-flatlist-react-native';
import {
  FlexBoxLayout,
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
FlatList,

} from "react-native";
import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { VolunteeringData } from '../src/models';
import DateTimePicker from '@react-native-community/datetimepicker';




function ViewLoggedHours({navigation}) {
  const [adminButton,adminVis] = useState("none");
  const [totalAmtOfHrs,updHours] = useState(0);
  const [isVisible, changeVis] = useState(true);
  const [gridData, updateData] = useState(["Type","Date","Hours","Location"])
  setTimeout(() => getUserInfo(), 1500);
  let x = new Array("Type","Date","Hours","Location");
  let t = 4;
  let aasd = true;
  async function getUserInfo() {
    changeVis(false);
    const user = await Auth.currentAuthenticatedUser();
    if ((user.attributes.email == "arawalarjun@gmail.com") && (aasd)){
      adminVis("Block");
      aasd=false;
    }
    const VolunteeringDataRead = await DataStore.query(VolunteeringData, c => c.Email("eq", user.attributes.email));

    for(let i =0;i<VolunteeringDataRead.length;i++){
      x[t] = VolunteeringDataRead[i].ActType;
      x[t+1] = VolunteeringDataRead[i].ActDate;
      x[t+2] = VolunteeringDataRead[i].ActHours;
      x[t+3] = VolunteeringDataRead[i].ActLocation;

      t+=4;
    }
    updateData(x);
    let totalHours=0;
    for(let ad=0;ad<VolunteeringDataRead.length;ad++){
      totalHours+= VolunteeringDataRead[ad].ActHours;
    }
    updHours(totalHours);
  }
  return (
    <View>
      <ActivityIndicator animating={isVisible}/>
      <View style={{display:adminButton}}>
      <Button title="viewAll"></Button>
      </View>
      <Text>Total Hours: {totalAmtOfHrs}</Text> 
      <GridFlatList
      showsVerticalScrollIndicator={true}
        data={gridData}
        renderItem={(item) => (<View style><Text style={{fontSize:'15',color:'black'}}>{item}</Text></View>)}
        gap={20}
        paddingHorizontal={10} 
        numColumns="4"
/>
      </View>
  )  
};
const styles = StyleSheet.create({
  app: {
    flex: 4, 
    marginHorizontal: "auto",
    width: 400
  },
  item: {
    flex: 1,
    maxWidth: "25%", 
    alignItems: "center"},
});

  
export default ViewLoggedHours;

