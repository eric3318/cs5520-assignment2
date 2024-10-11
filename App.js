import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Activities from './screens/Activities';
import { DataProvider } from './context/dataContext';
import NewActivity from './screens/NewActivity';
import Diet from './screens/Diet';

const defaultScreenOptions = {
  headerStyle: { backgroundColor: 'purple' },
  headerTintColor: 'white',
};

export default function App() {
  return (
    /*    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>*/
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={defaultScreenOptions}>
          <Stack.Screen
            name="Activity"
            component={Activities}
            options={{
              title: 'Activities',
            }}
          />
          <Stack.Screen
            name="New Activity"
            component={NewActivity}
            options={{
              title: 'Add an Activity',
            }}
          />
          <Stack.Screen
            name="New Diet"
            component={Diet}
            options={{
              title: 'Add a Diet Entry',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
