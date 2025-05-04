import { useState } from "react"

export default function Math  ()  {
  const [count, setCount] = useState(0)
    
    const HandlePlussButton = () => {
        setCount(count + 1)
      }
    
      const HandlePMinusButton = () => {
        setCount(count - 1)
      }
    
      const HandlenullstillButton = () => {
        setCount( 0)
      }


      return(
        <>
        <button onClick={HandlePlussButton}> + </button>
        <button onClick={HandlePMinusButton}> - </button>
        <button onClick={HandlenullstillButton}> Nullstill </button>


        <p> {count } </p>

        </>
      )
}