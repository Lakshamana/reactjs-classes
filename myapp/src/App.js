import React from 'react'
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends React.Component {
  state = {
    ninjas: [
      {name: 'Ryu', age: 30, belt: 'blue', id: 1},
      {name: 'Jack', age: 25, belt: 'black', id: 2},
      {name: 'Saitama', age: 22, belt: 'red', id: 3}
    ]
  }

  addNinja = ninja => {
    ninja.id = Math.random()
    const ninjas = [...this.state.ninjas, ninja]
    this.setState({ninjas}) 
  }

  deleteNinja = id => {
    const ninjas = [...this.state.ninjas]
    const ninja = ninjas.find(n => n.id === id)
    ninja && ninjas.splice(ninjas.indexOf(ninja), 1)
    this.setState({ninjas})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>hello world!</h1>
        </header>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
