import { useState } from "react";

export const useInputTodo = () => {
  /*useInputTodo의 state를 매번 호출 할때마다 
    여기 있는 useState들은 초기화가 된다. <-- 난 이 부분이 잘 이해가 되지 않는다. (페이지가 렌더링될때마다 초기화가 된다는 뜻인가? )
    초기화를 안할 수 있는 방법은 전역 상태관리 redux, recoil등을 이용하면 된다. 

    이 페이지에서 전역 상태관리 모듈을 이용하고, db에서 데이터를 받아온다 해도 여기서 작성한다. 
    이렇게 개발 했을 때 장점은 TodoList.jsx의 가독성이 올라간다.
  */ 
  const [list, setList] =useState([]);
  const [inputText, setInputText] = useState("");

  const deleteItem = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  const createItem = () => {
    setList([...list, inputText]);
    setInputText("");
  }

  return {
    list, 
    inputText,
    setInputText,
    deleteItem,
    createItem,
  };
}