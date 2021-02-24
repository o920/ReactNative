import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// $ yarn add underscore -> package.json에 underscore가 추가된 것 확인 가능
import _ from 'underscore';
const numbers = [];
_.times(45, n => numbers.push(n+1));

/*
function(n) {  
  numbers.push(n+1);
}
(n) => {
  numbers.push(n+1);
}
*/ 

export default function App() {
  /*
  let result = _.shuffle(numbers);
  result.length = 6;  // 앞에서부터 여섯개만 잘라서
  */
  //import useState
  const shuffled = _.shuffle(numbers);
  shuffled.length = 6;
  const [ result, setResult ] = useState( shuffled );

  //const onPressHandler = () => alert ('reset');
  const onPressHandler = () => {
    const shuffled = _.shuffle(numbers);
    shuffled.length = 6;
    setResult(shuffled);
  };

  //state : 이미 저장된 state로 보여주고 update되지 않음 
  //-> count++만 해서 화면의 count가 올라가지는 않음, 실제 count값은 증가함
  //화면의 갱신이 필요한 부분은 모두 useState형태로 관리를 해서 update해줘야 함
  //let count = 0;

  //[state명, 업데이트 함수] = useState(초기값);
  //읽기 전용 값과, 그 값을 변경하는 함수가 쌍으로 구성이 됨
  const [count, setCount] = useState(0); 
  const [OnOff, setOnOff] = useState(false);
  return (
    <View style={styles.container}>
      <Text>{result.join(', ')}</Text>
      <Button title = "reset" onPress={ onPressHandler }/>
      <Text>{ count }</Text>
      <Button title = "increase" onPress = {() => setCount(count + 1)}/>
      <Text>{OnOff ? "On" : "Off"}</Text>
      <Button title = "Toggle" onPress={() => setOnOff(!OnOff)}/>
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
