import React from "react"
import Massagem1 from "./ImagensMain/massagem.jpg"
import Massagem2 from "./ImagensMain/massagem2.jpg"
import Pes from "./ImagensMain/pes.jpg"
import "./Main.css"

function Main(){
    return(
       <main>
        <img src={Massagem1} alt="" />
        <img src={Massagem2} alt="" />
        <img src={Pes} alt="" />
       </main>
    )
}

export default Main