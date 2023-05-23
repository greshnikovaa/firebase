import './App.css';
import Add from "./components/Add"
import List from "./components/List"
import {useState} from 'react'

function App() {
  const [list, setList] = useState()

  return (
    <div className='container'>
      <List list={list} setList={setList} />
      <Add setList={setList}/>
    </div>
  );
}

export default App;
