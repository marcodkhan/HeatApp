import React from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Divider, List, ListItem, Card } from '@ui-kitten/components';

const HomeScreen = ({ navigation }) => {
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
      {/* <View style={{ height: 20 }} />
      <View style={styles.container}>
        <View style={styles.item}>
          <Icon type="font-awesome-5" name="truck" />
          <TouchableOpacity
            onPress={() => navigation.navigate('ArrivalStored')}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>입하장 입고</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Icon type="font-awesome-5" name="shipping-fast" />
          <TouchableOpacity
            onPress={() => navigation.navigate('ArrivalReleased')}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>입하장 출고</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <Icon type="font-awesome-5" name="truck" />
          <TouchableOpacity
            onPress={() => navigation.navigate('ShippingStored')}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>출하장 입고</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Icon type="font-awesome-5" name="shipping-fast" />
          <TouchableOpacity
            onPress={() => navigation.navigate('ShippingReleased')}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>출하장 출고</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>작업일보 쇼트</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>작업일보 자분탐상</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <Icon type="font-awesome-5" name="shopping-cart" />
          <TouchableOpacity
            onPress={() => navigation.navigate('Released')}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>출고</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Icon type="font-awesome-5" name="compass" />
          <TouchableOpacity
            onPress={() => navigation.navigate('ReleasedStatus')}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>출고현황</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>설비일상점검</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>설비일상점검현황</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 20 }} /> */}
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

// const styles = StyleSheet.create({
//   container: {
//     maxHeight: 200,
//   },
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   item: {
//     flex: 1,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     marginTop: 10,
//     paddingTop: 15,
//     paddingBottom: 15,
//     marginLeft: 15,
//     marginRight: 15,
//     borderWidth: 2,
//     borderColor: 'gray',
//   },
// });

export default HomeScreen;
