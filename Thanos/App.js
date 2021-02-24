import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // 페이지 하나 당 export 하나
  // 분기 시 반복되는 것을 최대한 줄이는 것이 좋음, Dom 내의 분기 및 삼항식 이용
  const result = Math.random();

  // 삼항식 분기
  return (
    <View style={styles.container}>
      {result < 0.5 ? (<Text>You were spared by Thanos.</Text>) : (<Text>You were slain by Thanos, for the good of the Universe.</Text>)}
      <StatusBar style="auto" />
    </View>
  );

  // 웹에서 쿠키를 지우는 것처럼 앱에서도 로컬 데이터 베이스를 다루면 됨
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
