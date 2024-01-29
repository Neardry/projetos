import { useState } from 'react'
import style from './style.module.css'


function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resposta, setResposta] = useState(0)
  const [tabela, setTabela] = useState('')

  function IMC() {
    let container = peso / (altura * altura)
    let resultFormat = container.toFixed(2)
    setResposta(Number(resultFormat));
    if(resposta < 18.5) setTabela('Magreza');
    else if(resposta < 24.9) setTabela('Saudável');
    else if(resposta < 29.9) setTabela('Sobrepeso');
    else if(resposta < 34.9) setTabela('Obesidade Grau I');
    else if(resposta < 39.9) setTabela('Obesidade Grau II (severa)');
    else if(resposta >= 40) setTabela('Obesidade Grau III(morbida)');
  }


  return (
    <div className={style.container}>
      <h1>Calculadora de IMC</h1>
      <p>Bem vindo, insira no primeiro campo o seu peso e depois sua altura</p>

      <input className={style.input} onChange={(e) => setPeso(e.target.value)} type="number" placeholder='Qual seu peso?' />
      <input onChange={(e) => setAltura(e.target.value)} type="number" placeholder='Qual sua altura?' />
      <button className={style.button} onClick={IMC} type='button'>Calcular</button>
      <b>Resposta: {resposta > 0 ? resposta : ''}</b> 
      <p>Status de acordo com a tabela: {tabela}</p>

    </div>
  )
}

export default App
