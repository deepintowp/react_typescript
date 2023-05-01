import React, { useReducer } from 'react'
const iniState = {counter:0}
type stateType = {
    counter:number
}
type actionType = {
    type: "INCREMENT" | "DECREMENT",
    payload: number
}
function reducer(state:stateType, action:actionType){
    switch (action.type) {
        case "INCREMENT":
            return {...state, counter:state.counter + action.payload}
            break;
        case "DECREMENT":
            return {...state, counter:state.counter - action.payload}
            break;
        
        default:
            return state
            break;
    }
}
const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, iniState)
  return (
    <div>
        count:{state.counter}
        <button onClick={()=>dispatch({type:"INCREMENT", payload:10})} >
            Increment by 10
        </button>
        <button onClick={()=>dispatch({type:"INCREMENT", payload:10})} >
            Decrement by 10
        </button>
    </div>
  )
}

export default UseReducerHook