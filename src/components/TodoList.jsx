
// import { useInputTodo } from "../hooks/useInputTodo";
import ListCreate from "./ListCreate";
import Lists from "./Lists";

export default function TodoList() {
  /*아래코드는 이제 커스텀 훅을 쓰기 전 단순히 컴포넌트로만 뺐을 때 */

  // const [list, setList] =useState([]);
  // const [inputText, setInputText] = useState("");

  
  // return(
  //   <div>
  //     <h1>TodoList</h1>
  //     <ol> {/* ol : ordered list */}
  //       {list.map((item, index) => {
  //         return <li key={index}>{item}
  //           <button onClick={() => {
  //             const newList = [...list];
  //             newList.splice(index, 1);
  //             setList(newList);
  //           }}>Delete</button>
  //         </li> /* key값이란게 정확히 뭘까 */
  //       })} 
  //     </ol> 
  //     <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>

  //     <button onClick={() => {
  //       setList([...list, inputText]);
  //       setInputText("");
  //     }}>
  //       Add</button>
  //   </div>
  // );
  
  /* 여기 코드부터는 이제 커스텀 훅 이용 : 훅으로 이용할 수 있는게
    아래 deleteItem , createItem
  */
  // const { inputText, setInputText, createItem} = useInputTodo()
  
  /* 함수 deleteItem, createItem은 커스텀 훅으로 뺐기에 주석처리했음 */

  // const deleteItem = (index) => {
  //   const newList = [...list];
  //   newList.splice(index, 1);
  //   setList(newList);
  // }

  // const createItem = () => {
  //   setList([...list, inputText]);
  //   setInputText("");
  // }


  // 아래와 같이 작성한 코드를 Presentational Component라고 한다.
  // 로직 코드는 전혀 없고, 기능을 담고있는 컴포넌트들만 가지고 있다.

  // 추가 : 범용으로 사용하는 컴포넌트는 Props를 여러개 가지는게 당연 
  // 특정 목적성을 위해서 제작된 컴포넌트에서는 굳이 props를 쓰기보다는 맞춤 훅 안에서 해결 
  return(
  <div>
    <h1>TodoList</h1>
    <Lists/>
    <ListCreate/>
  </div>
  );
}
