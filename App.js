import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
} from "react-native";
import CategoriesScreen from "./screens/Dashboard";
import RecordingHours from "./screens/RecordHours";
import ViewLoggedHours from "./screens/ViewLoggedHours";
import Home from "./screens/Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Home} />
        <Stack.Screen name="Record-Hours" component={RecordingHours} />
        <Stack.Screen name="Logged-Hours" component={ViewLoggedHours} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default withAuthenticator(App, { includeGreetings: true });
