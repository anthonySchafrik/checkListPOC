import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TextInput
} from 'react-native';

import Colors from '../const/Colors';

ListItem = ({ text }) => {
  const [isCheck, handleIsCheck] = useState(false);
  const [note, handleNote] = useState('');

  const setIsCheck = () => handleIsCheck(!isCheck);

  const setNote = text => handleNote(text);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableNativeFeedback onPress={setIsCheck}>
          <View
            style={{
              ...styles.checkBox,
              backgroundColor: isCheck ? Colors.primary : null
            }}
          />
        </TouchableNativeFeedback>

        <Text>{text}</Text>
      </View>

      <View style={{ width: '100%' }}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter notes"
          value={note}
          onChangeText={text => setNote(text)}
          multiline={true}
          onEndEditing={() => console.log('worked?')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '80%',
    alignItems: 'center'
  },
  checkBox: {
    borderColor: Colors.primary,
    borderWidth: 1,
    height: 35,
    width: 35
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderColor: Colors.primary,
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingLeft: 5
  }
});

export default ListItem;
