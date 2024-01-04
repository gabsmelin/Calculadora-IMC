'use client'
import { useState } from 'react';
import './globals.css'

export default function Home() {

  const [valor, setValor] = useState({
    nome: "",
    peso: "",
    altura: ""
  });

  const handleChange = (e) => {
    setValor((prevValor) => ({
      ...prevValor,
      [e.target.name]: e.target.value
    }));
  };

  

  const calcularImc = () => {
    if(valor.nome !== '' && valor.altura !== "" && valor.peso !== '') {
      const calculo = valor.peso / (valor.altura * valor.altura);
      return calculo.toFixed(1);
    }else{
      return "0";
    }
  }


  function estadoPessoa() {
    if (calcularImc() < 18.5) {
      return "Abaixo do peso"
    } else if(calcularImc() > 18.5 && calcularImc() <= 24.9) {
      return "Peso normal"
    } else if(calcularImc() > 24.9 && calcularImc() <= 29.9) {
      return "Sobrepeso"
    } else if(calcularImc() > 29.9) {
      return "Acima do peso"
    } else {
      return "Preencha todos os campos!";
    }
  }
  const estado = estadoPessoa();

  return (
    <div className='container'>
      <h1>Calculadora de IMC</h1>
      <div className="formulario">
        <form action="">
          <div className='input'>
            <label htmlFor="nome">Nome:</label> 
            <input type="text" id="nome" name="nome" placeholder="João" value={valor.nome} onChange={handleChange}/>
          </div>

          <div className='input'>
            <label htmlFor="peso">Peso:</label>
            <input type="number" id="peso" name="peso" placeholder="68.5" value={valor.peso} onChange={handleChange}/>
          </div>

          <div className='input'>
            <label htmlFor="altura">Altura:</label>
            <input type="number" id="altura" name="altura" placeholder='1.70' value={valor.altura} onChange={handleChange}/>
          </div>

  
        </form>
      </div>
      <div className="resposta">
        <p id='resultado'>{valor.nome} seu imc é igual a {calcularImc()}, você se encontrar no estado de {estado}</p>
      </div>
    </div>
  )
}
