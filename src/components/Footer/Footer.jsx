import React, { useState } from "react"
import "./Footer.css"

function Footer() {

    const [numero, setNumero] = useState(0)

    //--------------------Função

    function Adicionar() {

        setTimeout(() => {
            setNumero(numero + 1)
        }, 3000)
    }

    //---------------------Arrow Function    
    const Subtrair = () => {

        setTimeout(() => {
            setNumero(numero - 1)
        }, 3000)
    }

    //---------------------Função

    function Limpar() {
        setNumero(0)
    }

    //SETTIMEOUT- EXECUTA UM BLOCO DE CÓDIGO OU UMA FUNÇÃO ESPECÍFICA APÓS UM DETERMINADO TEMPO. 
    // setTimeout(()=>{
    //     alert("Usando o setTimeout")
    // },10000)


    //----------------CRONOMETRO

    //SETINTERVAL - PERMITE EXECUTAR REPETIDADEMENTE UM BLOCO DE CÓDIGO OU UMA FUNÇÃO ESPECÍFICA, EM INTERVALOS DE TEMPO.

    const [cronometro, setCronometro] = useState(0)

    function Iniciar(){
        setInterval(()=>{
            setCronometro((cronometro) => cronometro + 1) //(cronometro) ele ta armazenando o estao atual. => o cronometro + 1, ta pegando o estado atual e somando 1
        }, 1000)
    }

    return (
        <footer>
            <section className="contador">
                <h2>Contador</h2>
                <h3> {numero} </h3>
                <button onClick={Adicionar}>+</button>
                <button onClick={Subtrair}>-</button>
                <button onClick={Limpar}>LIMPAR</button>
            </section>

            <section className="cronometro">
                <h3> {cronometro} </h3>
                <button onClick={Iniciar}>INICIAR</button>
                <button>PAUSAR</button>
                <button>ZERAR</button>
            </section>


        </footer>
    )
}

export default Footer