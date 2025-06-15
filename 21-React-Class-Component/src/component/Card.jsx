import React, { Component } from "react";

// class Card extends Component {
//   render() {
//     return (
//         <>
//         <h3>
//             Hello, I am from Class Component
//         </h3>
//         <p>Name: {this.props.name}</p>
//         <p>Data: {this.props.data}</p>
//         </>
//     );
//   }
// }


//destructuring 
class Card extends Component {
  render() {
    const {name, data} =this.props;
    return (
        <>
        <h3>
            Hello, I am from Class Component
        </h3>
        <p>Name: {name}</p>
        <p>Data: {data}</p>
        </>
    );
  }
}

export default Card;
