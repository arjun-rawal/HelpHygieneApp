import React, { component,useState } from 'react';
import ModalSelector from 'react-native-modal-selector'
import DateTimePicker from '@react-native-community/datetimepicker';
import NumericInput from 'react-native-numeric-input'
import { DataStore } from '@aws-amplify/datastore';
import { VolunteeringData } from '../src/models';

import { Auth } from 'aws-amplify';

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
import { ConsoleLogger } from '@aws-amplify/core';


function RecordingHours({navigation}){
  let activityLocation="";

  let x1 =0;
    let today = new Date();
  console.log(today);

  let index = 0;
  const data = [
      { key: index++, section: true, label: 'Activities' },
      { key: index++, label: 'Hygiene Drive' },
      { key: index++, label: 'Drop Off Toiletries' },
      { key: index++, label: 'Hygiene Workshop' },
      { key: index++, label: 'Fundraising' }
  ];


  let num=0;



  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };
  const hidePicker = () => {
    setIsPickerShow(false);
    console.log("a");
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };
  const changeNum=()=>{
    console.log("num");
  }
  const [reference, setReference] = useState(null);
  const [errorMessage, showError] = useState("none")

  let x="Please select..."
  

  async function sendData(){
    const user = await Auth.currentAuthenticatedUser();
    if((placeHolderName != "Please select...") && (numOfHours>0) && (activityLocation != "")){
    changeVis(true);
    setTimeout(() => {navigation.navigate("Dashboard");}, 1500);

    if (finDate==undefined){
    (numChange(today));
    }
  
 

      await DataStore.save(
      
      new VolunteeringData({
      "ActType": placeHolderName,
      "ActDate": finDate,
      "ActHours": numOfHours,
      "ActLocation": activityLocation,
      "Email":user.attributes.email,
    })
  );
  }
  else{
    showError("block");
  }
}
  let finDate=numChange(today);

  function numChange(date1){
    const DayOfMonth = date1.getDate();
    const Month = date1.getMonth();
    const Year = date1.getFullYear(); 
    finDate = (Month+1) + "-" + (DayOfMonth) + "-" + Year;
  }
let numOfHours=0;
let nDate="";
let pickedDate=date;

const [placeHolderName,updatePlaceHolder]= useState("Please select...");
const [isVisible, changeVis] = useState(false);

    return (
        <ScrollView ref={(ref) => {setReference(ref);}} rehorizontal={false}keyboardDismissMode={'on-drag'}centerContent={true}contentContainerStyle={{ flexGrow: 1 }}>
      <Text style={styles.text1}>Activity Type</Text>
      <ModalSelector
                    data={data}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{ x=option.label; updatePlaceHolder(option.label); }}
                    >

                    <TextInput
                        style={styles.actSelector} 
                        placeholderTextColor='blue'
                        editable={false}
                        placeholder={placeHolderName}
                      />
                      </ModalSelector>
      <Text style={styles.text1}>Activity Date</Text>
      {!isPickerShow && (
      <Button onPress={showPicker} title="Please select..." color="blue" style={styles.dropdown1_text}></Button>
      )}
      {isPickerShow && (
      <DateTimePicker
          minimumDate="1972-10-07T21:13:12.046Z"
          maximumDate={date}
          value={today}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={(event,date1)=>{numChange(date1)}}
          style={styles.datePicker}
        />
      )}
      <Text style={styles.text1}>Activity Hours</Text>
      <View style={styles.numHours}>
      <NumericInput 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            minValue={0}  
            maxValue={24}
            totalWidth={180} 
            totalHeight={50} 
            step={1}
            valueType='real'
            rounded
            textColor='blue' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='blue' 
            value={0}
            onChange={value=> numOfHours=value}
            leftButtonBackgroundColor='red'/>
        </View>
      <Text style={styles.text1}>Activity Location</Text>
       <TextInput onChangeText={text=> activityLocation=text}textContentType='addressCityAndState'style={styles.locInput}placeholder="Enter Text Here"onPressIn={() => { reference.scrollToEnd({ animated: true }) }}/>
      
      
       <Button title="Submit" onPress={sendData}style={styles.smbbutton}>

        </Button>
        
 

        <ActivityIndicator animating={isVisible}/>

        <Text style={{color:'red',textAlign:'center',fontSize:'20',display:errorMessage}}>Fill Out All Fields!!!</Text>
       <Text style={{paddingTop:400}}> </Text>
    </ScrollView>


        
    );
    };
const styles = StyleSheet.create({
    smbbuttonText:{
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'blue',
      fontSize: 16,

    },
    smbbutton:{
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      backgroundColor: '#1ca2ff',
 
    },
    locInput:{
      marginLeft:'12.5%',
      textAlignVertical: 'top',

        alignItems:'center',
        justifyContent:'center',
        width:'75%',
        borderWidth:3,
        borderRadius:10,
        borderColor:'black',
        textAlign:'center',
        fontSize: 18,
        color:'blue'
    },
    container:{flex:1},
      numHours:{
        justifyContent: 'space-between',
      alignItems: 'center',
      },
      actSelector:{
        textAlign:'center', padding:10,  height:30,
        fontSize:18,
      },
      dateinput:{ 
        width:"100%",
        borderRadius:100,
        textAlign:'center',

        borderWidth: 1,
        padding: 10,
      },
      text1:{
        paddingTop:20,
        fontSize:25,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',

      },
      dropdown1: {
        textAlign:'center',
        paddingTop:10,
        borderWidth:0,
        borderRadius:3,
        borderColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

      },
      dropdown1_text:{
        fontSize: 18,
        color:'blue'

      },
      dropdown1_drop:{
        width:115,
      }

    });   

export default RecordingHours;