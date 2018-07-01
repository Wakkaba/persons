import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

{/*function tick() {
    const element = (
        <div>
            <h1> Mdeee </h1>
            <h2>Time is {new Date().toLocaleTimeString()} </h2>
            </div>
    );
    ReactDOM.render (
        element, document.getElementById('root')
    );
}
setInterval(tick,1000);
*/}
//function Hello(props) {
//    return <h1> Hello, {props.name}</h1>;  {/* Props - це атрибут (активний елемент)наприклад OnClick*/
//} 


//const govno = <Hello name="Alex" />; //name - атрибут, govno - елемент
//ReactDOM.render(
//   govno,
//    document.getElementById('root')
//)
 // це все це функціональний компонент


 