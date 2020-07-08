import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import {
  Layout,
  Input,
  Text,
  Datepicker,
  Button,
  NativeDateService,
  Divider,
  List,
  ListItem,
  Icon,
  Card,
} from '@ui-kitten/components';

const data = new Array(8).fill({
  title: 'Item',
  description: 'akf',
  date: '2020-10',
});

const SearchIcon = (props) => <Icon {...props} name="search" pack="material" />;

const useDatePickerState = (initialDate = new Date()) => {
  const [date, setDate] = React.useState(initialDate);
  return { date, onSelect: setDate };
};

const formatDateService = new NativeDateService('ko', { format: 'YYYY.MM.DD' });

const ReleasedStatusScreen = () => {
  const releasedOutDtState = useDatePickerState();
  const [corpNm, setCorpNm] = React.useState(null);
  const [prodNm, setProdNm] = React.useState(null);
  const [prodNo, setProdNo] = React.useState(null);

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1} ${item.date}_${index + 1}`}
    />
  );

  return (
    <>
      <Layout style={styles.container} level="2">
        <Text style={styles.text} status="basic">
          출고일
        </Text>
        <Datepicker
          style={styles.picker}
          status="basic"
          placeholder="출고일"
          dateService={formatDateService}
          {...releasedOutDtState}
        />
      </Layout>
      <Layout style={styles.container} level="2">
        <Text style={styles.text} status="basic">
          거래처
        </Text>
        <Input
          style={styles.input}
          value={corpNm}
          status="basic"
          onChangeText={setCorpNm}
          placeholder="거래처 입력"
        />
      </Layout>
      <Layout style={styles.container} level="2">
        <Text style={styles.text} status="basic">
          품   명
        </Text>
        <Input
          style={styles.input}
          value={prodNm}
          status="basic"
          onChangeText={setProdNm}
          placeholder="품명 입력"
        />
      </Layout>
      <Layout style={styles.container} level="2">
        <Text style={styles.text} status="basic">
          품   번
        </Text>
        <Input
          style={styles.input}
          value={prodNo}
          status="basic"
          onChangeText={setProdNo}
          placeholder="품번 입력"
        />
      </Layout>
      <Divider />
      <Layout style={styles.container} level="2">
        <Button
          style={styles.button}
          appearance="outline"
          status="info"
          accessoryLeft={SearchIcon}>
          검   색
        </Button>
      </Layout>
      <Divider />
      <Divider />
      <Card style={styles.card}>
        <List data={data} renderItem={renderItem} />
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  picker: {
    flex: 1,
    margin: 2,
  },
  text: {
    margin: 4,
    width: 40,
  },
  input: {
    flex: 1,
    margin: 2,
  },
  button: {
    flex: 1,
    margin: 2,
  },
  card: {
    flex: 1,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 4,
    padding: 4,
    backgroundColor: '#3366FF',
  },
});

export default ReleasedStatusScreen;
