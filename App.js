
import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer}  from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import devicesScreen from "./screens/devicesScreen";
import connectionScreen from "./screens/connectionScreen";
import Icon from "react-native-vector-icons/FontAwesome";


const Tab = createBottomTabNavigator();

const App: () => Node = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Devices') {
              iconName = 'home';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            } else if (route.name === 'Connection') {
              iconName = 'cog';
              size = focused ? 25 : 20;
            }
            return (
                <Icon
                    name={iconName}
                    size={size}
                    color={'green'}
                />
            )
          }
        })}
                       tabBarOptions={styles.tabBar}
                       activeColor='#45d22d'
                       inactiveColor='#3e2465'
                       barStyle={{ backgroundColor: '#694fad'}}
        >
          <Tab.Screen name="Devices" component={devicesScreen} options={{ gestureEnabled: false, headerShown: false} } />
          <Tab.Screen name="Connection" component={connectionScreen}  />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
      activeTintColor: '#BA2DD2',
      inactiveTintColor: '#555',
      activeBackgroundColor: '#fff',
      inactiveBackgroundColor: '#999',
      showLabel: true,
      labelStyle: { fontSize: 20 },
      showIcon: true,
  }
});

export default App;
