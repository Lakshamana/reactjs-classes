import React from 'react'

const Ninjas = ({ninjas}) => {
  const ninjaList = ninjas.map(ninja => {
    const {name, age, belt, id} = ninja
    return age >= 25 && (
      <div className="ninja" key={id}>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Belt: {belt}</div>
        <br />
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