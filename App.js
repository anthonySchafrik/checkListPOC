import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Colors from './const/Colors';
import checkList from './CheckList';

import ListItem from './components/ListItem';
import Email from './components/Email';

export default function App() {
  const buildChickList = () =>
    checkList.map((text, i) => <ListItem text={text} key={i} />);

  return (
    <ScrollView>
      <View style={styles.container}>{buildChickList()}</View>
      <Email />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGround,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  }
});
