export default function TodoItems({ todoArray, deleteItem }) {
  
  return(
    <div>
      <ol>
        {todoArray.map((item, index) => {
          return (
          <li key={index}>{item}
            <button onClick={() => {
              deleteItem(index);
              }}>Delete
            </button>
          </li>
        )})} 
      </ol>
    </div>
  );
}
