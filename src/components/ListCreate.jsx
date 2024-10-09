import { useInputTodo } from "../hooks/useInputTodo";
import TodoItems from "./TodoItems";


export default function ListCreate() {
  const { inputText, setInputText, createItem, todoArray, deleteItem } = useInputTodo();
  
  // Enter로 todo item 입력 
  const handleKeyDown = (e) => {
    if(e.key === "Enter") {
      createItem();
    }
  }

  return(
    <div>
      <input 
        type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={createItem}> 
        Add
      </button>
      <TodoItems todoArray={todoArray} deleteItem={deleteItem}/>
    </div>
  );
}