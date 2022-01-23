import React from 'react';
import DecorationItem from './DecorationItem';

const CakeDecoration = (props) => {
  const items = ['Flower', 'Star', 'Diamond', 'Heart']; //Reusable 
  
  return <div style={{ width: "371.85px" }}>
    <div style={{ display: "flex", alignItems: 'center', lineHeight: '1em' }}>
      <h2 style={{ display: "flex" }}>Cake Decoration :</h2>
    </div>
    <div style={{ display: "flex", alignItems: 'center', marginLeft: '0.2em' }}>
      <h1 style={{ margin: "0px" }}>{props.size}</h1>
    </div>
    <div>
      {items.map((item, index) => {
        return <DecorationItem key={toString(index)} name={item} sizeOfItem={props.sizeOfItem} toggleSizeOfItem={props.toggleSizeOfItem} index={index} list={props.list}/>
      })}
    </div>
    <div style={{display: "flex", color: "#6c757d", width: "100%", flexDirection: "row-reverse"}}>
      {props.sizeOfItem} remaining
    </div>
  </div>;
};

export default CakeDecoration
