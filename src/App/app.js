import { useEffect, useState } from "react"

const Ap = () =>{
    const [number, setNumber] = useState({
        f:0,s:100
    })
    const pressedOne = () =>{
        setNumber({
            ...number,f: number.f+10
        })
    }
    const pressedThree = () =>{
        setNumber(number + 3)
    }
    const pressedFive = () =>{
        setNumber(number + 5)
    }
    const pressedTen= () =>{
        setNumber(number + 10)
    }
    useEffect(()=>{
        console.log(number);
    })
    return(
        <div>
            <p>Count : {number.f}</p>
            <button onClick={pressedOne}>+1</button>
            <button onClick={pressedThree}>+3</button>
            <button onClick={pressedFive}>+5</button>
            <button onClick={pressedTen}>+10</button>
        </div>  
    )
}

export default Ap