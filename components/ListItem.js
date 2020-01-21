import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

ListItem = ({ text }) => {
  const [isCheck, handleIsCheck] = useState(false);

  const setIsCheck = () => handleIsCheck(!isCheck);

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={setIsCheck}>
        <View
          style={{
            ...styles.checkBox,
            backgroundColor: isCheck ? 'black' : null
          }}
        />
      </TouchableNativeFeedback>

      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  checkBox: {
    borderColor: 'black',
    borderWidth: 1,
    height: 35,
    width: 35
  },
  text: {
    fontSize: 20
  }
});

export default ListItem;
