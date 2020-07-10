import React, { useState } from 'react';
import {
  Provider as PaperProvider,
  TextInput,
  Button,
  IconButton,
  Colors,
  DataTable,
  Divider,
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Layout } from '@ui-kitten/components';
import { StyleSheet, Platform, ScrollView } from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

const useInputState = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  return { value, onChangeText: setValue };
};

const releasedItems = [
  {
    corpNm: '현대열처리',
    prodNm: '사이드',
    amount: 30,
    weight: 100,
  },
  {
    corpNm: '현대열처리',
    prodNm: '사이드',
    amount: 30,
    weight: 100,
  },
  {
    corpNm: '현대열처리',
    prodNm: '사이드',
    amount: 30,
    weight: 100,
  },
  {
    corpNm: '현대열처리',
    prodNm: '사이드',
    amount: 30,
    weight: 100,
  },
  {
    corpNm: '현대열처리',
    prodNm: '사이드',
    amount: 30,
    weight: 100,
  },
];

const ReleasedStatusScreen = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [rodt, setRodt] = useState(moment().format('YYYY-MM-DD'));
  const corpNmInputState = useInputState();
  const prodNmInputState = useInputState();
  const prodNoInputState = useInputState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setRodt(moment(currentDate).format('YYYY-MM-DD'));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const searchOnPress = () => {
    console.log(rodt);
    console.log(corpNmInputState.value);
    console.log(prodNmInputState.value);
    console.log(prodNoInputState.value);
  };

  return (
    <PaperProvider settings={{ icon: (props) => <AwesomeIcon {...props} /> }}>
      <ScrollView>
        <Layout style={styles.container} level="2">
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="출고일"
            value={rodt}
            disabled={true}
          />
          <IconButton
            icon="calendar"
            color={Colors.purple500}
            size={25}
            onPress={showDatepicker}
          />
        </Layout>
        <Layout style={styles.container} level="2">
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="거래처"
            {...corpNmInputState}
          />
        </Layout>
        <Layout style={styles.container} level="2">
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="품명"
            {...prodNmInputState}
          />
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="품번"
            {...prodNoInputState}
          />
        </Layout>
        <Layout style={styles.container} level="2">
          <Button
            style={styles.button}
            icon="search"
            mode="contained"
            onPress={searchOnPress}>
            검색
          </Button>
        </Layout>
        <Divider />
        <Divider />
        <Layout style={styles.container} level="2">
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>거래처</DataTable.Title>
              <DataTable.Title>품명</DataTable.Title>
              <DataTable.Title numeric>수량</DataTable.Title>
              <DataTable.Title numeric>중량</DataTable.Title>
            </DataTable.Header>
            <ScrollView>
              {releasedItems.length > 0 ? (
                releasedItems.map((value, index) => {
                  return (
                    <DataTable.Row key={index}>
                      <DataTable.Cell>{value.corpNm}</DataTable.Cell>
                      <DataTable.Cell>{value.prodNm}</DataTable.Cell>
                      <DataTable.Cell numeric>{value.amount}</DataTable.Cell>
                      <DataTable.Cell numeric>{value.weight}</DataTable.Cell>
                    </DataTable.Row>
                  );
                })
              ) : (
                <DataTable.Row>
                  <DataTable.Cell>검색된 데이터가 없습니다.</DataTable.Cell>
                </DataTable.Row>
              )}
              <Layout style={styles.container} level="2">
                <Button
                  style={styles.button}
                  mode="contained"
                  icon="chevron-left"
                  onPress={() => console.log('left')}
                />
                <Button
                  style={styles.button}
                  mode="contained"
                  icon="chevron-right"
                  onPress={() => console.log('right')}
                />
              </Layout>
            </ScrollView>
          </DataTable>
        </Layout>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginTop: 2,
    marginLeft: 2,
    marginRight: 2,
  },
  textInput: {
    flex: 1,
    marginTop: 2,
    marginLeft: 2,
    marginRight: 2,
    height: 45,
  },
  datepicker: {
    flex: 1,
    marginTop: 2,
    marginLeft: 2,
    marginRight: 2,
  },
  button: {
    flex: 1,
    marginTop: 5,
    marginLeft: 3,
    marginRight: 3,
  },
});

export default ReleasedStatusScreen;
