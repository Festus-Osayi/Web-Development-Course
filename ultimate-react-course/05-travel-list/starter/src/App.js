import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },

];

export default function App() {

  return (
    <div className="add">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}


function Logo() {
  return (
    <h1>✈️ Far Away 💼</h1>
  )
}

function Form() {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)
  function handleSubmit(e) {
    e.preventDefault()
    const newItems = { description, quantity, packed: false, id: Date.now() }
    console.log(newItems)
    setDescription('')
    setQuantity(1)

  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need</h3>
      <select value={quantity}
        onChange={(e) => setQuantity(+e.target.value)} >

        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="add items" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {
          initialItems.length > 0 && initialItems.map((items) => <Items items={items} key={items.id} />)
        }
      </ul>
    </div>
  )
}

function Items({ items }) {

  return (

    <li style={items.packed ? { textDecoration: 'line-through' } : {}}><span>{items.description}</span>
      <span>{items.quantity}</span>
      <button>❌</button>
    </li>





  )
}

function Stats() {
  return <footer className="stats">
    <em>You have x item on your list, and you have already packed (X%)</em>
  </footer>
}
