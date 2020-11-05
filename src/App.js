import './App.css';
import Add from './components/Add'
import List from './components/ListItem'
import Filter from './components/Filter'
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState("all")
  return (
    <div className="App">
      <h1>To Do App</h1>
      <header className="App-header">
        <div className='header'>
          <Add />
          <Filter setFilter={setFilter} />
        </div>
        <List filter={filter} />
      </header>
    </div>
  );
}

export default App;
