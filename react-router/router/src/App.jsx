import Counter from "./components/Counter"
import { useContext } from "react"
import {ContextCounter} from "./context/CounterContext"

function App() {
  const counter = useContext(ContextCounter)

  return (
    <>
    <h1>Context API Using Counter Example</h1>
    <h2> Count is {counter.count}</h2>

    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter />


      
    </>
  )
}

export default App
