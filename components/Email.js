import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Colors from '../const/Colors';
const Email = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Send"
        color="#181818"
        onPress={() => console.log('fired')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.backGround
  }
});

export default Email;
