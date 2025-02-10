import React, { useState } from 'react'
import './Header.css'
import BoasVindas from './BoasVindas'

function Header() {
    const [usuario, setUsuario] = useState("")
    const [mensagem, setMensagem] = useState("🐈‍⬛")

    function fazerLogin(){
        var nome = prompt("Digite seu nome de usuário: ")
        setUsuario(nome)
    }

    return (

        <div className="container-header">
            <div className="logo-conteiner">
                <p>LoGo</p>
            </div>
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
            {/* {usuario && <BoasVindas nome={usuario} mensagem={mensagem} />} */}
            {usuario ? <BoasVindas nome={usuario} mensagem={mensagem} /> : <button onClick={fazerLogin}>Login</button> }
            
        </div>

    )
}

export default Header
