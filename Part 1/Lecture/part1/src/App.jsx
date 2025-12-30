const App = () => {
  const now = new Date()
  const a = "Peter"
  const b = 20
  console.log(now, a+b)

  return (
    <>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Hello name="George" age="32"/>
      <Hello name="Daisy"/>
      <Hello name={a} age={b}/>
    </>
  )
}

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

export default App