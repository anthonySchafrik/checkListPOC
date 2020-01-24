import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNote } from '../actions/notes';
import Colors from '../const/Colors';

ListItem = ({ text, addNote, notes, key }) => {
  const [isCheck, handleIsCheck] = useState(false);
  const [note, handleNote] = useState('');

  const setIsCheck = () => handleIsCheck(!isCheck);

  const setNote = text => handleNote(text);

  const SetNoteAction = () => () => {
    if (note !== '') {
      addNote({ text, note });
    }
    return;
  };

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

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter notes"
          placeholderTextColor="black"
          value={note}
          onChangeText={text => setNote(text)}
          multiline={true}
          onEndEditing={SetNoteAction()}
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
  textInputContainer: {
    width: '100%'
  },
  textInput: {
    borderColor: Colors.primary,
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingLeft: 5
  }
});

const mapStateToProps = state => {
  const { notes } = state.notesObject;
  return { notes };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ addNote }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(ListItem);
