import { useState } from "react";

export const useInputTodo = () => {

  const [todoArray, setTodoArray] =useState([]);
  const [inputText, setInputText] = useState("");

  const deleteItem = (index) => {
    const newList = [...todoArray];
    newList.splice(index, 1);
    setTodoArray(newList);
  }

  const createItem = () => {
    setTodoArray([...todoArray, inputText]);
    setInputText("");
  }

  return {
    todoArray, 
    inputText,
    setInputText,
    deleteItem,
    createItem,
  };
}