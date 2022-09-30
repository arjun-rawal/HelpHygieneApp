import React, { useState } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';

import {
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
} from "react-native";


function RecordingHours(){
  

    return (
    <View>
      <Text style={styles.text1}>Activity Type</Text>
      <ModalDropdown options={['Hygiene Drive', 'Drop Off Toiletries','Hygiene Workshop','Fundraising']}dropdownStyle={styles.dropdown1_drop}textStyle={styles.dropdown1_text}style={styles.dropdown1}></ModalDropdown>
      <Text style={styles.text1}>Activity Date</Text>
      <TextInput keyboardType= "numbers-and-punctuation"placeholderTextColor='red'placeholder="MM/DD/YYYY" maxLength={10} style={styles.dateinput}> </TextInput>
    </View>
        
    );
    };
const styles = StyleSheet.create({
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
        paddingTop:10,
        borderWidth:0,
        borderRadius:3,
        borderColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

      },
      dropdown1_text:{
        fontSize: 20,
        color:'blue'

      },
      dropdown1_drop:{
        width:115,
      }

    });   

export default RecordingHours;
