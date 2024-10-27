import { useContext } from "react"
import { ContextCounter } from "../context/CounterContext"

const Counter = () => {
    const counter = useContext(ContextCounter)
    // console.log(counter)
  return (
    <div >
    <button type='button' onClick={()=>counter.setCount(counter.count + 1)}>Increment</button>
    <button type='button' onClick={()=>counter.setCount(counter.count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter