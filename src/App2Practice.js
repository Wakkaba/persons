// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import MessageComponent from './message-component/message-component.js'
// import Color from './color/color';

// {/*class Hello extends React.Component{
//   render(){
//     return <h1> Hello werdo</h1>;
//   }
// }
// export default Hello;
// */}


// class App extends Component {
//   getName(lastname) {
//     return "Artur " + lastname;
//   }
//   constructor() {
//     super();
//     this.state = {
//       counter: 0
//     }
//     this.name = "Alex";
//   }

//   add = () => {
//     this.setState({
//       counter: this.state.counter + 15
//     })
//   }

//   remove = () => {
//     this.setState({
//       counter: this.state.counter - 10
//     })
//   }

//   render() {
//     let myStyle = {
//       color: "green",
//       fontSize: 30
//     }
//     let i=5; {/*/ comment if 6 = False boolen*/}
//     return (
     
//       <div className="App">
//         <MessageComponent name="Petux" description="Privet" vis="inline" />

//         <Color color="red" text="poshel" oncluck={() => this.add()} />

//         <p>{this.state.counter}</p>
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 style = {myStyle} className="App-title" onClick={() => this.remove()}>Vse progromisti petuchi "(c)" 
//           {this.getName("Zar")} Hello {i==5? 'True' : 'False' } </h1>

//         </header>


//       </div>
//     );
//   }
// }

// export default App;
