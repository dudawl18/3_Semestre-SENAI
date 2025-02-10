
function BoasVindas({nome, mensagem}) {

  return (

    <div className="container-boasvindas">
      <p>Olá, humana(o) {nome}! {mensagem}</p>      
      {/* <button onClick={() => console.log(nome, mensagem)}>log</button> */}
    </div>
  )
}

export default BoasVindas
