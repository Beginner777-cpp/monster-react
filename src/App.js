import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ monsters: user }))
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter(e => e.name.toLowerCase().includes(searchField));
    return (
      <div className="App">
        <h1>Robot Monsters</h1>
        <SearchBox
          placeholder="Search robot" changeHandler={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
