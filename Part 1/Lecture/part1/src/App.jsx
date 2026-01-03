import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>
  //this is a really silly use of components


const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )


const App = () => {
  const [ counter, setCounter ] = useState(0)
  //state stays in the closest common parent component

  /**setTimeout(
    () => setCounter(counter + 1),
    1000
  ) */

  /** "In React, it’s conventional to use onSomething names 
   * for props which take functions which handle events and 
   * handleSomething for the actual function definitions 
   * which handle those events."
   * **/

  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)
  const reset = () => setCounter(0)

  return (
    <div>
      <Display counter = {counter} />
      <Button
        onClick={increment}
        text='plus'
      />
      <Button
        onClick={decrement}
        text='minus'
      />
      <Button
        onClick={reset}
        text='zero'
      />
    </div>
  )
  // if () => isn't used, setCounter will execute right away 
  // instead of waiting for a click
  // setting onClick to a var containing a referance to a 
  // function is best practice
}


export default App