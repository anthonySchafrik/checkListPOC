import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import Colors from './const/Colors';
import checkList from './CheckList';

import ListItem from './components/ListItem';
import Email from './components/Email';

export default function App() {
  const buildChickList = () =>
    checkList.map((text, i) => <ListItem text={text} key={i} />);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>{buildChickList()}</View>
        <Email />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.backGround },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  }
});
