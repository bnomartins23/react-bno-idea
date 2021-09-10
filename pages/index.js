import {useState} from 'react'
import Imc from './../Components/Imc'

function Home(){
    const [cont, setCont] = useState(1)

    function handlerAdd(){
        setCont(cont+1)
    }

    return (
        <>
            <div>
                <Imc />
            </div>
        </>
        )
}

export default Home