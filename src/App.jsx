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

  }, [])

  return <div>App</div>
 }

 export default App;