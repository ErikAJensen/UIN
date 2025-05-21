import { useState } from "react";

export default function Math () {
  //setter verdig 
  const [count, setCount] = useState(0);

  const NumberList = [10, 15, 26, 50] //Array liste med tall 


  const HandleNumberList = () => {
  return NumberList.map((tall, index) => (   //mapper ut Number list med bruk av map 
    <button key={index} onClick={() => setCount(tall)}>  
      sett til {tall}

    </button>
  ))
  }
  

  //Funksjon for pluss 1 når mant rykker på button
  const HandleCount = () => {
    setCount(count + 1)
  }

    //funksjon for minus knappen
  const handleMinus = () => {
    setCount(count - 1)
  }

  const MoreThenNumber = () => {
    if (count > 5 ) {   //trenger på if testing så vis tallet er mer en 5 så kommer det tekst 
        return "Tøft med høye tall du"
    } else if (count < 0) {   //Setter regel med bruk av else if som sier at vis tallet er under 0 så kommer en return med tekst
      return "Dette var lavt sjef"
      
    }
  }



  //IF test som sjekker om tallet er oddetall eller partall, viser forskjellige navn basert på resutlatet 
    const HandleIfTest = () => {
      if (count % 2 === 0 ) {
        return <h2 style={{color : "red"}}> Partall: Even </h2>  //Endrer til farge rød 
      } else {
        return   <h2 style={{color : "blue"}}> Pddetall: Oda</h2>  //Endrer til fagren blå
      }

    }

      //restter når man trykker på knappen så tallet blir 0 igjen uansett hvilket tall det er
  const HandleReset = () => {
    setCount(0)
  }
  return (
    <>
    <button onClick={HandleCount}> + </button>
    <button onClick={handleMinus}> - </button>
    <button onClick={HandleReset}> Reset </button>

    
    {HandleNumberList( )}
   


    <h3> {MoreThenNumber()} </h3>
    <h2>  {HandleIfTest()}  {count} </h2>
    </>
  )
}