import { useState } from "react";

export default function Info () {

    const Namelist = ["Erik", "Nathalie"] //array med godkjent navn
    const [userName, setUsername] = useState("");
    const showForm = !Namelist.includes(userName); // endrer denne til false for å kjule skjemat

        const handleInputChange = (event) => {
            setUsername(event.target.value); 
        };


        if (userName === "Erik") {
            console.log("Vellkommen")
        } else {
            console.log("Taper")
        }

        return (
            <>
            <h2>Navn</h2>

            {userName === "Erik" ? (
                <p>Vellkommen Erik</p>
            ) : (
                <p>Taper</p>
            ) }
            
          {showForm && (
            <form action="/submit">
                <input type="text"
                 name="username" 
                 placeholder="Skriv inn navnet ditt, sjef" 
                 value ={userName}
                 onChange= {handleInputChange}
                 />
                <button type="submit">Submit</button>
            </form>
            )}

            </>
            
        )

    

}