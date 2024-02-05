import React, { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');
  const [alerta, setAlerta] = useState('');

  const validarNumero = () => {
    const num = parseInt(numero, 10);

    if (isNaN(num) || num <= 0) {
      alert('Ingrese un número que sea positivo');
      setResultado('');
      document.getElementById('numero').focus();
    } else if (num < 100 || num > 200) {
      alert(
        'El número ingresado no se encuentra dentro del rango especificado'
      );
      setResultado('');
      document.getElementById('numero').focus();
    } else {
      setAlerta('');
      setResultado(`El número ${num} ${num % 3 === 0 ? 'es' : 'no es'} múltiplo de 3.`);
    }
  };

  return (
    <div className="App">
      <div className="cont">
        <h1>Validador de Números</h1>
        <p>
          A continuación, el siguiente programa tiene como finalidad pedir un
          número que se encuentre en un rango de 100 a 200 para verificar si el
          número es o no múltiplo de 3.
        </p>
        <label className="tit">Ingrese el número:</label>
        <input type="number" id="numero" name="numero" value={numero} onChange={e => setNumero(e.target.value)}/>
        <button onClick={validarNumero}>
          <b>Validar</b>
        </button>
        {alerta && <div>{alerta}</div>}
        <table className='tabla'>
          <tbody>
            <tr>
              <td>{resultado}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
