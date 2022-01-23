import { useState } from 'react/cjs/react.development';
import './App.css';
import CakeDecoration from './components/CakeDecoration';
import CakeSize from './components/CakeSize'

function App() {
  const [size, setsize] = useState(6);
  const [list, setList] = useState([0, 0, 0, 0]);//reusable
  function toggleSize(num){
    setsize(num);
    setSizeOfItem(num);
    setList([0, 0, 0, 0]);
  }
  const [sizeOfItem, setSizeOfItem] = useState(size);
  const toggleSizeOfItem = (num, index, temp) => {
    setSizeOfItem(sizeOfItem-num);
    console.log(sizeOfItem, num, list);
    let z = list;
    z[index] = temp;
    setList(z);
  }
  return (
    <div style={{display: "flex", alignItems: 'center', flexDirection: "column"}}>
      <CakeSize toggleSize={toggleSize} />
      <div style={{borderBottom: "3px solid orange", width: "100vw"}}></div>
      <CakeDecoration size={size} sizeOfItem={sizeOfItem} toggleSizeOfItem={toggleSizeOfItem} list={list}/>
    </div>
  );
}

export default App;
