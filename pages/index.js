import {useState} from 'react'

function Home(){
    const [cont, setCont] = useState(1)

    function handlerAdd(){
        setCont(cont+1)
    }

    return (
        <>
            <h1>Novo Contador's na branch teste</h1>
            <div>{cont}</div>
            <button onClick={(e)=>handlerAdd()}>Adicionar</button>
        </>
        )
}

export default Home