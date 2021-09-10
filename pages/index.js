import {useState} from 'react'
import Imc from './../components/Imc'

function Home(){
    const [cont, setCont] = useState(1)

    function handlerAdd(){
        setCont(cont+1)
    }

    return (
<<<<<<< HEAD
        <div>
            <Imc />
        </div>
=======
        <>
            <h1>Novo Contador's na branch teste</h1>
            <div>{cont}</div>
            <button onClick={(e)=>handlerAdd()}>Adicionar</button>
        </>
>>>>>>> b02c010d7f84fa2ea29ce824c9b3b640029a8a6c
        )
}

export default Home