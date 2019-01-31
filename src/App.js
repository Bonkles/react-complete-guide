import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'



class App extends Component {

state = {
    showPersons:true, 
  persons: [
    {id: 'a;lsdkfj', name: 'Ben', age: 40},
    {id: 'a;laskfdlsdkfj', name: 'Shay', age: 41},
    {id: 'a;laskdfafdlsdkfj', name: 'Mirabelle', age: 2.5}
  ]
}

togglePersons = () => {
const doesShow = this.state.showPersons; 
this.setState({showPersons: !doesShow}); 
}

nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id; 
  }); 

  const person = {
    ...this.state.persons[personIndex]
  }

  person.name = event.target.value; 
  const persons = [...this.state.persons]; 
  persons[personIndex] = person; 

  this.setState( {persons: persons})
}

deletePersonHandler = (personIndex) => {
//const persons = this.state.persons.slice(); 
const persons= [...this.state.persons]
persons.splice(personIndex, 1)
this.setState({persons: persons})
}

  render() {
    const style = {
      backgroundColor: 'white',
      borderShadow: 'lightGrey',
      font: 'inherit', 
      border: '1x solid blue', 
      padding: '8px',
      cursor: 'pointer'
    }; 

    let persons = null; 

    if (this.state.showPersons) {
      persons = (
            <div>
              {this.state.persons.map( (person, index) => {
                return <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                  />
              })}
            </div>          
      ); 
    }
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>

       <p>Wow, this is really working!</p>

       <button 
        style={style}
        onClick={this.togglePersons}>Toggle Persons</button> 

        {persons}
      </div>
    );
  }
}

export default App;
