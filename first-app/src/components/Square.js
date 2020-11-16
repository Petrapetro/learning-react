import React from 'react';

function Square(props) {
      return (
        <button className="square" 
        style={{width: "30px", height: "30px", border: "solid 1px black", margin: "0px"}}  
        onClick={props.onClick}
        >
          {props.value}
        </button>
      );
  }

  export default Square;