import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '~/Screens/HomeScreen';
import StoredScreen from '~/Screens/StoredScreen';
import ReleasedScreen from '~/Screens/ReleasedScreen';

const Stack = createStackNavigator();

const headerStyle = {
  title: '메인',
  headerStyle: { backgroundColor: '#f4511e' },
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
          name="Stored"
          component={StoredScreen}
          options={{ title: '입고' }}
        />
        <Stack.Screen
          name="Released"
          component={ReleasedScreen}
          options={{ title: '출고' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
