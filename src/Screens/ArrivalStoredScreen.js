import React, { useState } from 'react';
import {
  Provider as PaperProvider,
  TextInput,
  Button,
  IconButton,
  Colors,
  Dialog,
  Portal,
  List,
  Text,
} from 'react-native-paper';
import { Layout } from '@ui-kitten/components';
import { StyleSheet, ScrollView } from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const chargeUserItems = [
  {
    userCd: '1',
    userNm: '김해맨',
  },
  {
    userCd: '2',
    userNm: '차태식',
  },
  {
    userCd: '3',
    userNm: '차무혁',
  },
  {
    userCd: '4',
    userNm: '차무무',
  },
  {
    userCd: '5',
    userNm: '오태식',
  },
];

const ArrivalStoredScreen = () => {
  const [depotCd, setSepotCd] = useState('');
  const [prodBarCd, setProdBarCd] = useState('');
  const [depotCdEdit, setDepotCdEdit] = useState(false);
  const [prodBarCdEdit, setProdBarCdEdit] = useState(false);
  const editDepotCd = () => setDepotCdEdit(true);
  const editProdBarCd = () => setProdBarCdEdit(true);

  const [chargeUserCd, setChargeUserCd] = useState('');
  const [chargeUserNm, setChargeUserNm] = useState('');
  const [corpNm, setCorpNm] = useState('');
  const [prodNm, setProdNm] = useState('');
  const [prodNo, setProdNo] = useState('');
  const [prodAmt, setProdAmt] = useState(0);
  const [showChargeUser, setShowChargeUser] = useState(false);
  const showChargeUserDialog = () => setShowChargeUser(true);
  const hideChargeUserDialog = () => setShowChargeUser(false);

  const pressChargeUser = (value) => {
    setChargeUserCd(value.userCd);
    setChargeUserNm(value.userNm);
    hideChargeUserDialog();
  };

  const pressSearch = () => {
    console.log('===============');
    console.log(chargeUserCd);
    console.log(chargeUserNm);
    console.log(corpNm);
    console.log(prodNm);
    console.log(prodNo);
    console.log(prodAmt);
    console.log('===============');
  };

  return (
    <PaperProvider settings={{ icon: (props) => <AwesomeIcon {...props} /> }}>
      <ScrollView>
        <Layout style={styles.container} level="2">
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="창고코드"
            value={depotCd}
            editable={depotCdEdit}
            onChangeText={setSepotCd}
          />
          <IconButton
            icon="keyboard-o"
            color={Colors.purple500}
            size={25}
            onPress={editDepotCd}
          />
        </Layout>
        <Layout style={styles.container} level="2">
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="제품식별표"
            placeholder="직접입력"
            value={prodBarCd}
            editable={prodBarCdEdit}
          />
          <IconButton
            icon="keyboard-o"
            color={Colors.purple500}
            size={25}
            onPress={editProdBarCd}
          />
        </Layout>
        <Layout style={styles.container} level="2">
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="담당자"
            editable={false}
            value={chargeUserNm}
          />
          <IconButton
            icon="search"
            color={Colors.purple500}
            size={25}
            onPress={showChargeUserDialog}
          />
        </Layout>
        <Layout style={styles.container} level="2">
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="거래처"
            editable={false}
            value={corpNm}
          />
        </Layout>
        <Layout style={styles.container} level="2">
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="품명"
            editable={false}
            value={prodNm}
          />
        </Layout>
        <Layout style={styles.container} level="2">
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="품번"
            editable={false}
            value={prodNo}
          />
        </Layout>
        <Layout style={styles.container} level="2">
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="수량"
            editable={false}
            {...prodAmt}
          />
        </Layout>
        <Layout style={styles.container} level="2">
          <Button
            style={styles.button}
            icon="save"
            mode="contained"
            onPress={pressSearch}>
            저장
          </Button>
        </Layout>
      </ScrollView>
      <Portal>
        <Dialog
          style={{ height: '60%' }}
          visible={showChargeUser}
          onDismiss={hideChargeUserDialog}>
          <Dialog.Title>담당자 리스트</Dialog.Title>
          <Dialog.ScrollArea>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
              {chargeUserItems.length > 0 ? (
                chargeUserItems.map((chargeUserItem, index) => {
                  return (
                    <List.Item
                      title={chargeUserItem.userNm}
                      left={(props) => <List.Icon {...props} icon="user" />}
                      onPress={() => pressChargeUser(chargeUserItem)}
                      key={index}
                    />
                  );
                })
              ) : (
                <Text>검색된 데이터가 없습니다.</Text>
              )}
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button onPress={hideChargeUserDialog}>닫기</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
    marginLeft: 10,
    marginRight: 10,
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
    marginLeft: 10,
    marginRight: 10,
  },
});

export default ArrivalStoredScreen;
