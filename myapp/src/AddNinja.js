import React, {Component} from 'react'

class AddNinja extends Component {
  state = {
    name: '',
    age: undefined,
    belt: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault()
    this.props.addNinja(this.state)
    this.setState({
      name: '',
      age: undefined,
      belt: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={this.handleChange}/>
          <br/>
          <label htmlFor="age">Age</label>
          <input type="text" id="age" onChange={this.handleChange}/>
          <br/>
          <label htmlFor="belt">Belt</label>
          <input type="text" id="belt" onChange={this.handleChange}/>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default AddNinja
