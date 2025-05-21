import { useState } from "react";

export default function Info () {

    const Namelist = ["Erik", "Nathalie"] //array med godkjent navn
    const [userName, setUsername] = useState("");
    const [number,setNumber] = useState("")
    const showForm = !Namelist.includes(userName); // endrer denne til false for å kjule skjemat

        const handleInputChange = (event) => {
            setUsername(event.target.value); 

        };

        const handleNumber = (event) => {
            setNumber(event.target.value)
        }
       


        return (
            <>
            {userName === "Erik" ? (
                <p>Vellkommen Erik</p>
            ) : (
                null
            ) }

            {number === "95252939" ? (
                <p>Velkommen</p>
            ) : (
                null
            ) }
            
      
            <form action="/Info">

                <input type="text"
                 name="username" 
                 placeholder="Skriv inn navnet ditt, sjef" 
                 value ={userName}
                 onChange= {handleInputChange}
                 />
                 <input 
                  type="text"
                  name="Number"
                  placeholder="Skriv ditt nummer"
                  value={number}
                  onChange={handleNumber}
                  />


                <button type="submit">Submit</button>
            </form>
           

            </>
            
        )

    

}