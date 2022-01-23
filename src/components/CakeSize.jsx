import React from 'react';

const CakeSize = (props) => {
    function cakeSize(num) {
        props.toggleSize(num);
    }
  return <div style={{display: "flex", alignItems: "center"}}>
      <h2 style={{display: "flex", }}>Cake Size : </h2>
      <ul style={{listStyleType: "none", display: "flex", justifyContent: 'left'}}>
          <li><button type="bitton" style={{padding: "5px 12px"}} onClick={() => cakeSize(6)}>6</button></li>
          <li><button type="bitton" style={{padding: "5px 12px"}} onClick={() => cakeSize(9)}>8</button></li>
          <li><button type="bitton" style={{padding: "5px 12px"}} onClick={() => cakeSize(13)}>9</button></li>
          <li><button type="bitton" style={{padding: "5px 12px"}} onClick={() => cakeSize(16)}>10</button></li>
          <li><button type="bitton" style={{padding: "5px 12px"}} onClick={() => cakeSize(35)}>18x32</button></li>
      </ul>
  </div>;
};

export default CakeSize;


