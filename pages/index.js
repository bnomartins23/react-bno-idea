import {useState} from 'react'
<<<<<<< HEAD
import Imc from './../components/Imc'
=======
import Imc from './../Components/Imc'
>>>>>>> teste

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
            <div>
                <Imc />
            </div>
        </>
>>>>>>> b02c010d7f84fa2ea29ce824c9b3b640029a8a6c
        )
}

export default Home