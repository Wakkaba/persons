import React, { Component } from 'react';
import './App.css';
import People from './People/People';
import { Button } from 'reactstrap';


class App extends Component {
  state = {
    persons: [
      {
        id : "Jon",
        name: "Jon Snow",
        image: 'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
        butt: 'Хоба'
      },
      {
        id : "Ya",
        name: "Ygritte",
        image: 'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/ygritte-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
        butt: 'Убить'
      },
      {
        id : "Tyrion",
        name: "Tyrion",
        image: 'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/tyrion-lannister-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
        butt: 'Уничтожить'
      },
      {
        id : "Ram",
        name: "Ramsay",
        image: 'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/ramsay-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
        butt: 'Скушать'
      }
    ]
  }

  Baton = () => {
    console.log("Ne nazhimat!");
  }

  render() {
    const not_persons = this.state.persons.map( (person) => {
      return (<div key={person.name}>
        <People name={person.name} image={person.image} /> 
        <Button color="info" onClick={this.Baton}>{person.butt}</Button>
        </div>)
    } );
    

    return (
      <div className="App">
        <h1> Davai po novoi misha vse hernya </h1>
        <p>This govno is not working!</p>

        {not_persons}

      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'teper?'));
  }
}

export default App;
