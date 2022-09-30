import { authenticator } from '@aws-amplify/ui-react';
import { Button, StyleSheet, Text, TextInput, View,Image, Dimensions } from 'react-native';



function Home({navigation}){
    function toRecordHours(){
        navigation.navigate('Record-Hours');

    }
    function toViewLoggedHours(){
        navigation.navigate('Logged-Hours');
    }
    return (
        <View>
        <Button title="Record Hours" style={{backgroundColor:'red',}} onPress={() => toRecordHours()}></Button>
        <Button title="View Logged Hours" onPress={()=> toViewLoggedHours()}></Button>
        </View>
 
    );
}
export default Home;