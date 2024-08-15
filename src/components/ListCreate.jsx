import { useInputTodo } from "../hooks/useInputTodo";

export default function ListCreate() {
  const { inputText, setInputText, createItem } = useInputTodo();
  return(
    <div>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>

      <button onClick={createItem}> 
        Add {/** 왜 어떤건 onClick에 화살표함수로 써야하고 어떤건 그냥 함수 이름만 갖다가 붙히면 되는거지?  */}
      </button>
    </div>
  );
}