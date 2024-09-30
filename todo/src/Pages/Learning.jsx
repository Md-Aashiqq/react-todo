import { useEffect, useRef, useState } from "react"

const ExapmleUseState = () => { 


    const [count, setCount] = useState(1)
    const [input, setInput] = useState("ashick")

    const onClickHandler = () => {
        setCount(count + 1)
    }

    const onChangeHandler = (event) => {
        setInput(event.target.value)
    }

  return (
   <>
     <div> Count :==== {count} == {input}</div>
     <button onClick={onClickHandler}>Click</button>
     <input type="text" value={input} onChange={onChangeHandler}></input>
   </>
  )
} 


const ExapmleUseeffect = () => {

    const [data, setData] = useState([])
    
    useEffect(() => {
        
       fetachTodo()

    },[data])


    async function fetachTodo() {
        const todoRequest = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await todoRequest.json()
        console.log(data)
        setData(data)
        return data
    }



    return <>
        <button onClick={() => setData(data + 1)}>Click</button>
    </>


}


const ExampleuseRef = () => { 

    const inputRef = useRef(null)

    return <>
        <input ref={inputRef} type="text"></input>
    </>

}



function Learning() {
return <>
    <ExampleuseRef />
</>

}

export default Learning