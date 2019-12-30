import React from 'react'

const Ninjas = ({ninjas, deleteNinja}) => {
  const ninjaList = ninjas.map(ninja => {
    const {name, age, belt, id} = ninja
    return (
      <div className="ninja" key={id}>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Belt: {belt}</div>
        <br />
        <button onClick={() => deleteNinja(id)}>Delete</button>
      </div>
    )
  })
  return (
    <div className="ninja-list">
      {ninjaList}
    </div>
  )
}

export default Ninjas
