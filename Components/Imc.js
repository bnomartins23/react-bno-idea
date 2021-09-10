import React, {useState, useEffect} from 'react'
import styles from './../estilos/card.module.css'

export default () => {

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [resultado, setResultado] = useState(0)
    const [observacao, setObservacao] = useState('')

    const handlerAdd = (e, altura, peso) => {
        e.preventDefault();
        setResultado(peso/(altura*altura))
    }

    const gerarObservacao = () => {

        const obs = resultado >= 16 && resultado <= 16.9 ? 'Muito abaixo do peso' :
                    resultado >= 17 && resultado <= 18.4 ? 'Abaixo do peso' :
                    resultado >= 18.5 && resultado <= 24.9 ? 'Peso Normal' :
                    resultado >= 25 && resultado <= 29.9 ? 'Acima do peso' :
                    resultado >= 30 && resultado <= 34.9 ? 'Obesidade Grau I' :
                    resultado >= 35 && resultado <= 40 ? 'Obesidade Grau II' :
                    resultado > 40 ? 'Obesidade Grau III' : '';

        setObservacao(obs)

    }

    useEffect(() => {
        gerarObservacao()
    }, [resultado])

    return (
        <div className={styles.Card}>
            <h1>Calculadora IMC</h1>
            <input type="number" placeholder="Altura" onBlur={(e) => setAltura(e.target.value)}/>
            <input type="number" placeholder="Peso" onBlur={(e) => setPeso(e.target.value)}/>
            <button onClick={(e) => handlerAdd(e, altura, peso)}>Calcular IMC</button>
            <p>Resultado {resultado.toFixed(2)}</p>
            <p>Obs.: {observacao}</p>
        </div>
    )
}