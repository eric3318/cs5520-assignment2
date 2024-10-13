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
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import { colors } from './helper';

const defaultScreenOptions = {
  headerStyle: { backgroundColor: colors.headerBackgroundColor },
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
          tabBarIcon: () => (
            <FontAwesome5 name="running" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Diet"
        component={Diet}
        options={{
          title: 'Diet',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="food-drumstick"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: () => <Feather name="settings" size={24} color="black" />,
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
