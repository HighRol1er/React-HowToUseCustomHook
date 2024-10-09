
// import { useInputTodo } from "../hooks/useInputTodo";
import ListCreate from "./ListCreate";

export default function TodoList() {

  /* 아래와 같이 작성한 코드를 Presentational Component라고 한다.
    로직 코드는 전혀 없고, 기능을 담고있는 컴포넌트들만 가지고 있다.

    추가 : 범용으로 사용하는 컴포넌트는 Props를 여러개 가지는게 당연 
    특정 목적성을 위해서 제작된 컴포넌트에서는 굳이 props를 쓰기보다는 맞춤 훅 안에서 해결 
  */
  return(
  <div>
    <h1>TodoList</h1>
    <ListCreate/>
  </div>
  );
}
