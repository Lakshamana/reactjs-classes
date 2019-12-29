import React from 'react'
import Ninjas from './Ninjas'

class App extends React.Component {
  state = {
    ninjas: [
      {name: 'Ryu', age: 30, belt: 'blue', id: 1},
      {name: 'Jack', age: 25, belt: 'black', id: 2},
      {name: 'Saitama', age: 22, belt: 'red', id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>hello world!</h1>
        </header>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
