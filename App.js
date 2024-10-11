import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import Activities from './screens/Activities';
import { DataProvider } from './context/dataContext';
import { ThemeProvider } from './context/themeContext';
import NewActivity from './screens/NewActivity';
import Diet from './screens/Diet';
import NewDiet from './screens/NewDiet';
import Settings from './screens/Settings';

const defaultScreenOptions = {
  headerStyle: { backgroundColor: 'purple' },
  headerTintColor: 'white',
};

function Tabs() {
  return (
    <Tab.Navigator screenOptions={defaultScreenOptions}>
      <Tab.Screen
        name="Activity"
        component={Activities}
        options={{
          title: 'Activities',
        }}
      />
      <Tab.Screen
        name="Diet"
        component={Diet}
        options={{
          title: 'Diet',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    /*    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>*/
    <ThemeProvider>
      <DataProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={defaultScreenOptions}>
            <Stack.Screen
              name="DietAndActivitiesTabs"
              component={Tabs}
              options={{
                headerShown: false,
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
              component={NewDiet}
              options={{
                title: 'Add a Diet Entry',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider>
    </ThemeProvider>
  );
}
