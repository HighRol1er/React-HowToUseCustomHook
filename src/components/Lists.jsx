import { useInputTodo } from "../hooks/useInputTodo";

export default function Lists() {
  const {list, deleteItem} = useInputTodo();
  return(
    <div>
      <ol> {/* ol : ordered list */}
      {list.map((item, index) => {
        return <li key={index}>{item}
          <button onClick={() => {
            deleteItem(index);
          }}>Delete
          </button>
        </li> /* key값이란게 정확히 뭘까 */
        })} 
      </ol>
    </div>
  );
}
