import './App.css';

import { useState } from 'react';
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [todos, setTodo] = useState();

  return (
    <div className="App">
      <h1>todos</h1>
      <Form setTodo={setTodo}/>
      <List todos={todos}/>
    </div>
  );
}

export default App;
