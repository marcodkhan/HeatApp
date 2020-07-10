import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, Alert, BackHandler } from 'react-native';
import { Divider, List, Card } from '@ui-kitten/components';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('알림', '종료하시겠습니까?', [
        {
          text: '아니요',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: '예',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const renderItem = ({ item, index }) => (
    <Card style={styles.item} onPress={() => navigation.navigate(item.route)}>
      <Text style={styles.itemTitle} category="s2">
        {item.title}
      </Text>
    </Card>
  );

  return (
    <>
      <List
        style={styles.container}
        data={MenuData}
        numColumns={2}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    </>
  );
};

export const MenuData = [
  {
    title: '입하장 입고',
    route: 'ArrivalStored',
  },
  {
    title: '입하장 출고',
    route: 'ArrivalReleased',
  },
  {
    title: '출하장 입고',
    route: 'ShippingStored',
  },
  {
    title: '출하장 출고',
    route: 'ShippingReleased',
  },
  {
    title: '작업일보 쇼트',
    route: 'ArrivalReleased',
  },
  {
    title: '작업일보 자분탐상',
    route: 'ArrivalReleased',
  },
  {
    title: '출고',
    route: 'Released',
  },
  {
    title: '출고현황',
    route: 'ReleasedStatus',
  },
  {
    title: '설비일상점검',
    route: 'ArrivalReleased',
  },
  {
    title: '설비일상점검현황',
    route: 'ArrivalReleased',
  },
];

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    aspectRatio: 1.0,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
  },
  itemImage: {
    alignSelf: 'center',
    width: 64,
    height: 64,
  },
  itemTitle: {
    alignSelf: 'center',
    marginTop: 8,
  },
});

export default HomeScreen;
