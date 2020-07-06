import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('Stored')}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>입고</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Released')}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>출고</Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;
