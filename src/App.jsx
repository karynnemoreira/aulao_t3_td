import React from "react" //importando a biblioteca do react
import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"

function App(){
  return(
    <>
        {/* <h2>App.jsx é o arquivo principal que renderiza/mostra as coisas na tela. Tudo que eu quiser que mostre na tela/navegador, PRECISA PASSAR PELO APP.JSX</h2> */}
        <Header />
        <Main />
    </>
  )
}

export default App