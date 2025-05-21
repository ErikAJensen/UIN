import { useState } from "react"

export default function Colorlist () {
    const [color, setColor] = useState("")

    const ListColor = ["Blue", "Red" , "Green" , "Yellow", "Black"]  // liste med farger som skal brukes i button med map funskjon 

    const handleIfTest = () =>  {
        if (color === "") {
            return <h2>Ingen farge valgt</h2>
        } else {

            return <h2 style={{color : color }}>Du har valgt {color} </h2>  //endrer farge basert på hvilken button du trykker på i arrayen 
        }
    }

    const handleColor = (farge) => {
        setColor(farge)
    }

        const handleColorList = () =>{
            return ListColor.map((farge, index) =>  (
                <button onClick={() => handleColor(farge)} key={index}> {farge} </button>  //mapper ut fargene i array lista
            ) )
        }
return (
    <>
   {handleColorList()}
   {handleIfTest()}
    </>
)

}