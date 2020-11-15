import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }

    render() {
      return (
        <button className="square" style={{width: "30px", height: "30px", border: "solid 1px black", margin: "0px"}}  
        onClick={() => this.setState({value: 'X'})}
        >
          {this.state.value}
        </button>
      );
    }
  }

  export default Square;