import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '~/Screens/HomeScreen';
import ArrivalStoredScreen from '~/Screens/ArrivalStoredScreen';
import ArrivalReleasedScreen from '~/Screens/ArrivalReleasedScreen';
import ShippingStoredScreen from '~/Screens/ShippingStoredScreen';
import ShippingReleasedScreen from '~/Screens/ShippingReleasedScreen';
import StoredScreen from '~/Screens/StoredScreen';
import ReleasedScreen from '~/Screens/ReleasedScreen';
import ReleasedStatusScreen from '~/Screens/ReleasedStatusScreen';

const Stack = createStackNavigator();

const headerStyle = {
  title: 'Heat App',
  headerStyle: { backgroundColor: 'skyblue' },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold' },
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={headerStyle}
          initialParams={{ itemId: 42 }}
        />
        <Stack.Screen
          name="ArrivalStored"
          component={ArrivalStoredScreen}
          options={{ title: '입하장 입고' }}
        />
        <Stack.Screen
          name="ArrivalReleased"
          component={ArrivalReleasedScreen}
          options={{ title: '입하장 출고' }}
        />
        <Stack.Screen
          name="ShippingStored"
          component={ShippingStoredScreen}
          options={{ title: '출하장 입고' }}
        />
        <Stack.Screen
          name="ShippingReleased"
          component={ShippingReleasedScreen}
          options={{ title: '출하장 출고' }}
        />
        <Stack.Screen
          name="Stored"
          component={StoredScreen}
          options={{ title: '입고' }}
        />
        <Stack.Screen
          name="Released"
          component={ReleasedScreen}
          options={{ title: '출고' }}
        />
        <Stack.Screen
          name="ReleasedStatus"
          component={ReleasedStatusScreen}
          options={{ title: '출고현황' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
