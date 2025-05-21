import { useState } from "react"

export default function Workout () {

    const [list, setList] = useState("")

    const WorkOutList = ["Benkpress", "Knebøy", "Løpe"]

    
    const ifTest = () => {
        if (list === "") {
            return  <h2>du har ikke valgt noe </h2>
        } else  {
            return <h2>du har  valgt  {list}</h2>
        }
    }


    const handleListWorkout = (trening) => {
        setList(trening)
    }

    const Train = () => {
        return WorkOutList.map((trening, index) => ( //mapper ut trening listen
           <button onClick={() => handleListWorkout(trening)} key={index}> {trening} </button>  
           
            //lager knapper for vær workout 
        ))
    }

return(
    <>
    {Train()} 
    {ifTest()}
    
   
    
    </>
)
}