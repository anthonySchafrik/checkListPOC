import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import ListItem from './components/ListItem';

const checkList = [
  'but also the leap into electronic',
  'but also the leap into electronic',
  'but also the leap into electronic',
  'but also the leap into electronic',
  'but also the leap into electronic',
  'but also the leap into electronic',
  'but also the leap into electronic',
  'but also the leap into electronic',
  'but also the leap into electronic',
  'but also the leap into electronic',
  'but also the leap into electronic',
  'but also the leap into electronic',
  'but also the leap into electronic'
];

export default function App() {
  const buildChickList = () =>
    checkList.map((text, i) => <ListItem text={text} key={i} />);

  return (
    <ScrollView>
      <View style={styles.container}>{buildChickList()}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#848484',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  }
});
