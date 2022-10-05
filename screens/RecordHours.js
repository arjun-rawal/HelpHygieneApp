import React, { component,useState } from 'react';
import ModalSelector from 'react-native-modal-selector'
import DateTimePicker from '@react-native-community/datetimepicker';
import NumericInput from 'react-native-numeric-input'

import {
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


function RecordingHours(){

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
    console.log(num);
  }
  const [reference, setReference] = useState(null);


  let x="Please select..."
    return (
        <ScrollView ref={(ref) => {setReference(ref);}} rehorizontal={false}keyboardDismissMode={'on-drag'}centerContent={true}contentContainerStyle={{ flexGrow: 1 }}>
              {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <Text style={styles.text1}>Activity Type</Text>
      <ModalSelector
                    data={data}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{x=option.label}}
                    >

                    <TextInput
                        style={styles.actSelector}
                        placeholderTextColor='blue'
                        editable={false}
                        placeholder={x}
                      />
                      </ModalSelector>
      <Text style={styles.text1}>Activity Date</Text>
      {!isPickerShow && (
      <Button onPress={showPicker} title="Please select..." color="blue" style={styles.dropdown1_text}></Button>
      )}
      {isPickerShow && (
      <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
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
            value={num}
            leftButtonBackgroundColor='red'/>
        </View>
      <Text style={styles.text1}>Activity Location</Text>
       <TextInput style={styles.locInput}placeholder="Enter Text Here"onPressIn={() => { reference.scrollToEnd({ animated: true }) }}/>
       <Button title="submit" onPress={changeNum}></Button>
       <Text style={{paddingTop:400}}> </Text>
        
 



        {/* </TouchableWithoutFeedback> */}
    </ScrollView>

        
    );
    };
const styles = StyleSheet.create({
    locInput:{
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
