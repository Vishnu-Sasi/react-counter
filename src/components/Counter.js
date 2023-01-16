import React,{useState} from "react";
import "./Counter.css"

export default function Counter(){
    const [count,setCount] = useState(0)
    const [countError,setCountError] = useState("")
    const [showClear,setShowClear] = useState(false)

    function increment(){
        if(count >= 10){
            setShowClear(true)
        }
        setCount(prevState => prevState + 1)
        setCountError("")
       
    }

    function decrement(){
        if(count <= 10){
            setShowClear(false)
        }
        if(count > 0){
            setCount(prevState => prevState - 1)
        } else {
            setCountError("Error: Cannot be less than 0")
        }
        
    }

    function clear(){
        setCount(0)
        setShowClear(false)
    }

    return (
        <div>
            <header className="App-header">
                <h1> Counter app using React useState</h1>
                <p className="para">Current count is: <b>{count}</b></p>
                <p className="error">{countError}</p>
                <div className="btn-div">
                    <button className="btn" onClick={decrement}>Decrement</button>
                    <button className="btn" onClick={increment} >Increment</button>
                    {
                        showClear?<button className="btn btn1" onClick={clear}>Clear</button>:null
                    }
                </div>
            </header>
        </div>
    )
}