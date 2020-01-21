import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, ScrollView } from 'react-native';
import email from 'react-native-email';

import Colors from '../const/Colors';
import { getDate } from '../Utils';

const Email = () => {
  const [emailBody, setEmailBody] = useState('');

  const handleEmail = () => {
    const to = ['anthonyschafrik@gmail.com'];

    email(to, {
      subject: 'Email test',
      body: `Today is ${getDate()}
       ${emailBody}
      `
    }).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.input}>
        <TextInput
          onChangeText={text => setEmailBody(text)}
          value={emailBody}
          multiline={true}
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
  input: {
    width: '80%',
    marginVertical: 15,
    borderWidth: 1,
    borderColor: Colors.primary
    // height: 70
  }
});

export default Email;
