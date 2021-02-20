import React from 'react';
import {useSelector, useDispatch} from 'react-redux'



function App() {
  const [inputFrutas, setInputFrutas] = React.useState("")
  const [inputTitulo, setInputTitulo] = React.useState("")

  const frutas = useSelector((state) => state.frutasReducer.frutas)

  const titulo = useSelector((state) => state.tituloReducer.titulo)
  console.log(titulo)

  const dispatch = useDispatch()

  function adicionarFruta(event){
    event.preventDefault()

    const objFruta = {
      nome: inputFrutas
    }

    dispatch({type: "ADICIONAR", value: objFruta})
  }

  function alterarTitulo(event){
    setInputTitulo(event.target.value)
    dispatch({type: "ALTERAR", value: event.target.value})
  }

  return (
    <div className="row m-2">
      
      <h1 className="primary display-4">{titulo}</h1>
      
      <form>
      <div className="input-group mb-3">
        <label className="input-group-text">Título:</label>
        <input placeholder="Digite o título" className="form-control" value={inputTitulo} onChange={alterarTitulo}/>
      </div>
      </form>
      
      
      <form onSubmit={adicionarFruta}>
      <div className="input-group mb-3">
        <input placeholder="Criar lista de frutas" className="form-control" value={inputFrutas} onChange={(event) => setInputFrutas(event.target.value)}/>
        <button className="input-group-text">Enviar</button>
        </div>
      </form>
      {frutas.map( (fruta, index) => {
        return(
          <li key={index}>{fruta.nome}</li>
        )
      })}
    </div>
  );
}

export default App;
