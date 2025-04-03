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
  };

  const completeTodo = (index) => {
    const updatedTodoList = [...data];
    updatedTodoList[index].complete = !updatedList[index].complete;
    setDate(updatedList);
    localStorage.setItem("todo-data", JSON.stringify(updatedList))
  }

  return (
    <div>
      <input value={input} type="text" onChange={(e) => { setInput(e.target.value); }} />
      <button onClick={() => { addNewTodo; }} > Add new todo </button>

      <hr />

      <div>
        {data.length > 0 ? (
          <div>
            <ol>
              {data.map((todo, index) => (
                <div key={index} style={{ display: "flex" }}>
                  <p>{todo.text}</p>
                  <button>Delete</button>
                  <button onClick={() => completeTodo(index)} key={index}>{todo.complete ? "OK" : "CANCEL"}</button>
                </div>
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