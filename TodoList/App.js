
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import _ from 'underscore';

//string은 replace 할 때 원래 값을 변경하지 않음
//  const str = "string here" ;
//  const replaceStr = str.replace(" ", "%20");

// textinput도 계속 바뀌는 것이기 때문에 useState 이용
export default function App() {
  const [content, setContent] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    const item = {
      id : new Date().getTime().toString(),     // 현재 시간 time stamp
      content : content,
    }
    /*
    var newState = [];
    newState.concat(list);
    setList(newState);
    */ 
    // 원래 있던 걸 넣는 것이 아니라, 원래 있던 것은 유지하고 새로운 상태를 만들어서 넣기만 하면 됨. 위와 같음
    setList([...list,item]);                  // 전개 연산자 Spread Operation 
                                              // setList에는 항상 새로운 배열을 생성해서 입력, "불변성Immutable"
                                              // 원래 있던 state가 직접적으로 변경되는 것이 아님
                                              // state에 쓸 때는 원본도 유지되고 사본을 만들어서 넣는 형태로 계속 진행이 되어야 함
  }
  
  const remove = id => {
    // https://underscorejs.org/#reject
    setList( _.reject( list, item => item.id === id ) );
  }

  console.log(this);
  console.log('list', list);

  return (
    <SafeAreaView style={styles.container}>
      
      <View style = {[styles.row, {marginBottom : 12}]}>                
        <TextInput value = {content} 
                  onChangeText = {text => setContent(text)}
                  style = {styles.inputStyle}/>
        <Button title="add" onPress={ () => addItem() }/>
      </View>
      
      <ScrollView>
      {list.map(item =>(                                      // 배열에는 map을 많이 사용, array의 method 중 하나 
        //<Text key = {item.id}>{item.content}</Text>         // 배열 안의 갯수만큼 text node를 생성하는 것, key는 목록 설정 시 강제사항
        <View key={ item.id } style={[styles.row, styles.todoItem]}>
          <Text>{ item.content }</Text>
          <Button color={'#f00'} title="delete" onPress={ () => remove( item.id ) }/>
        </View>
      ))}
      </ScrollView>

      {/* 애초에 원본 데이터에 고유 id를 갖고 있는 것이 가장 좋음
      넘어 올 때 원래 인덱스를 받기도 해서 그걸 이용해도 됨
      {list.map(item, index) => {
        <Text key = {index.toString()}>{item.content}</Text>
      }}
      */}



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //fontSize : 20,              // Text 관련된 내용은 적용 안됨(폰트 크기, 색상), Text 영역에서 설정해야 함
  },
  row : {
    flexDirection : 'row'
  },
  todoItem : {
    width : 340,
    justifyContent : 'space-between',      // flex-start가 default, flex-end는 오른쪽 정렬 느낌 ( Direction이 어떻게 되냐에 따라 다르긴 함 )
    alignItems : 'center'
  },
  inputStyle : {
    width : 300,
    borderColor : "#000",
    borderBottomWidth : 1,
  }
});
