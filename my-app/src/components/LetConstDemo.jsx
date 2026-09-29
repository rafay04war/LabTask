// LetConstDemo.jsx
// A basic demo component showing the difference between let and const
// - const: value CANNOT be changed after it is created
// - let:   value CAN be changed after it is created

import { useState } from 'react'

// ===== let variable OUTSIDE the component =====
// It is declared outside so it does NOT reset when the component re-renders
let counter = 0
let greeting = "Hello"

function LetConstDemo() {
  // ===== const examples (inside component) =====
  // const means the value is fixed — you CANNOT reassign it
  const collegeName = "My College"
  const pi = 3.14

  // We need useState so React knows when to update the screen
  const [screenCounter, setScreenCounter] = useState(0)
  const [screenGreeting, setScreenGreeting] = useState("Hello")

  const increase = () => {
    counter = counter + 1        // changing a 'let' variable — this is allowed
    setScreenCounter(counter)    // update the screen
  }

  const changeGreeting = () => {
    greeting = "heyyaaa"          // changing a 'let' variable — this is allowed
    setScreenGreeting(greeting)  // update the screen
  }

  const reset = () => {
    counter = 0                   // changing back — still allowed with let
    greeting = "Hello"
    setScreenCounter(0)
    setScreenGreeting("Hello")
  }

  return (
    <div className="demo-card">
      <h2 className="demo-title">let vs const Demo</h2>

      <p className="demo-text">
        <strong>const</strong> collegeName = "{collegeName}"
      </p>
      <p className="demo-text">
        <strong>const</strong> pi = {pi}
      </p>
      <p className="demo-note">(const values cannot be changed)</p>

      <p className="demo-text">
        <strong>let</strong> counter = {screenCounter}
      </p>
      <p className="demo-text">
        <strong>let</strong> greeting = "{screenGreeting}"
      </p>
      <p className="demo-note">(let values can be changed)</p>

      <div className="demo-buttons">
        <button type="button" className="demo-btn" onClick={increase}>
          Increase (let)
        </button>
        <button type="button" className="demo-btn" onClick={changeGreeting}>
          Change Greeting (let)
        </button>
        <button type="button" className="demo-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default LetConstDemo
