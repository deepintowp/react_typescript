import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscer from './components/Oscer';

function App() {
  const personName = {
    firstName:"Bruce",
    lastName:"Wane"
  }
  const nameList = [
    {
      firstName:"Bruce",
      lastName:"Wane"
    },
    {
      firstName:"Alfread",
      lastName:"Pennyworth"
    },
    {
      firstName:"Heath",
      lastName:"Ledger"
    }
    
    
  ]
  return (
    <div className="App">
      <Greet name="Subhasish" messageCount={2556}  isLoggedIn={true}/>
      <Person name={personName} />
      <PersonList nameList={nameList} />
      <Status status='error' />
      <Oscer>
        <Heading>Oscer goes to leo caprio</Heading>
      </Oscer>
    </div>
  );
}

export default App;
