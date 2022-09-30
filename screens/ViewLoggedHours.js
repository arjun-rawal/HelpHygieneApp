import ModalDropdown from 'react-native-modal-dropdown';

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
} from "react-native";
import { color } from '@rneui/base';

function ViewLoggedHours() {
  return (
  <View>
  <Text>LoggedHours</Text>  
  <ModalDropdown options={['option 1', 'option 2']}style={styles.container}></ModalDropdown>
  </View>
  );
  }
export default ViewLoggedHours;

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },

});