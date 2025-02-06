import React, { useState } from 'react'
import './DemoUm.css'

function DemoUm() {
    let miaunometro = 9
    const [estado, setEstado] = useState(0)

    function incrementarEstado() {
        setEstado(estado + 1)
    }

    function incrementaMiaunometro() {
        miaunometro++
        console.log(miaunometro)
    }

    function alertarUsuario() {
        alert("miaumiau")
    }
    return (
        <div className="container-DemoUm">
            {/* <h2>DemoUm</h2> */}
            <button onClick={alertarUsuario}>clique em mim</button>
            <button onClick={() => { alert("Executei uma arrow function") }}>Exemplo de arrow function, miau</button>

            <div>
                Miaunometro: {miaunometro}
                <button onClick={incrementaMiaunometro}>+</button>
            </div>
            <div>
                estado: {estado}
                <button onClick={incrementarEstado}>+</button>
            </div>

        </div>
    )
}

export default DemoUm
