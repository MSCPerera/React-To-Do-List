import React, {useState, useEffect} from "react";

 function App() {

  const [data, setDate] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {

    const savedTodoData = localStorage.getItem("todo-data")

    if (savedTodoData) {
      setDate(JSON.parse(savedTodoData))
    } else {
      localStorage.setItem("todo-data", JSON.stringify([]))
    }

  }, []);

  const addNewTodo = () => {
    const newTodo = {text: input, complete: false}
    const updatedTodoList = [...data, newTodo]
    setDate(updatedTodoList);
    localStorage.setItem("todo-data", JSON.stringify(updatedTodoList))
    setInput("");
  }

  return (
    <div>
      <input 
        value={input} 
        type="text" 
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
       onClick={() => {
        addNewTodo;
        }}
      >
        Add new todo
      </button>

      <hr />

      <div>
        {data.length > 0 ? (
          <div>
            <ol>
              {data.map((todo, index) => (
                <p>{todo.text}</p>
              ))}
            </ol>
          </div>
        ) : (
          <p>Add a new todo</p>
        )}
      </div>
    </div>
  );
 }

 export default App;