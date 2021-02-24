import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// $ yarn add underscore -> package.json에 underscore가 추가된 것 확인 가능
import _ from 'underscore';
const numbers = [1,2,3,4,5,6,7,8,9,10];

export default function App() {
  let result = _.shuffle(numbers);
  result.length = 6;  // 앞에서부터 여섯개만 잘라서
  return (
    <View style={styles.container}>
      <Text>{result.join(', ')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
