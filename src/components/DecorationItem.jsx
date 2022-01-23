import React from 'react';

const DecorationItem = (props) => {
    let y = parseInt(props.list[props.index]);
    const changeFun = () => {
        y = parseInt(document.getElementById(props.name).value);
        props.toggleSizeOfItem(y-parseInt(props.list[props.index]), props.index, y);
    }
    let sizeArray = Array.from(Array(props.sizeOfItem + y + 1).keys());
    return <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", margin: "2em 0px"}}>
        <div style={{fontSize: "1.1em"}}>
            {props.name}
        </div>
        <div>
            <select name={props.name} id={props.name} onChange={() => changeFun()} disabled={props.sizeOfItem<=0 && y===0?true:false} style={{fontSize: "1.1em", width: '4em'}}>
                {sizeArray.map((size) => {
                    return <option value={size} id={toString(size)} selected={y===size?true:false}>{size}</option>
                })
                }
            </select>
        </div>
    </div>;
};

export default DecorationItem;
