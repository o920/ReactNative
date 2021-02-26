import React from 'react';
import styled from 'styled-components';
import { Button, Text } from 'react-native'

const TodoItem = styled.View`
  flex-direction : row;
  width : 350;
  justify-content : space-between;
  alignItems : center;
`

// 구조 분해 할당, Destructure Assignment : 이미 item이라고 되어 있는 것들을 props.item이라고 수정하지 않아도 됨
// const Item = (props) => { console.log(props.item.id) } 
// props로 받은 것 중 그 안의 item 값만 가져오는 것
const Item = ( {item, remove} ) => {
    console.log(item.id); // 생성 시 보낸 id가 찍힘
    console.log(item.content);
  
    return (
      <TodoItem key={ item.id }>
        <Text>{ item.content }</Text>
        <Button color={'#f00'} title="delete" onPress={ () => remove( item.id ) }/>
      </TodoItem>
    );
  }


  export default Item;
  // 사용하는 쪽에서 import Item from '../components/Items' 해서 사용