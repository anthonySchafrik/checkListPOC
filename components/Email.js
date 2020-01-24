import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, ScrollView } from 'react-native';
import email from 'react-native-email';
import { connect } from 'react-redux';

import Colors from '../const/Colors';
import { getDate } from '../Utils';

const Email = ({ notes }) => {
  const [emailBody, setEmailBody] = useState('');

  const handleEmail = () => {
    const to = ['anthonyschafrik@gmail.com'];

    let body = '';

    if (notes.length > 0) {
      notes.forEach(x => {
        const { text, note } = x;

        body = body.concat(`${text} => ${note} `);
      });
    }

    email(to, {
      subject: 'Daily Check List',
      body: `Today is ${getDate()}
      
       ${emailBody}

       ${body}
      `
    }).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.inputContainer}>
        <TextInput
          style={styles.styledInput}
          onChangeText={text => setEmailBody(text)}
          value={emailBody}
          multiline={true}
          placeholder="Additional Notes"
          placeholderTextColor="black"
        />
      </ScrollView>

      <Button
        title="Send"
        color={Colors.primary}
        onPress={() => handleEmail()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backGround,
    paddingBottom: 15
  },
  inputContainer: {
    width: '80%',
    marginVertical: 15,
    borderBottomWidth: 1,
    borderColor: Colors.primary
  },
  styledInput: {
    paddingLeft: 5
  }
});

const mapStateToProps = state => {
  const { notes } = state.notesObject;
  return { notes };
};

export default connect(mapStateToProps, {})(Email);
