import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className='app_container'>
        <div className='Title'><h1>Todos</h1></div>
        <Form todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;