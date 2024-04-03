import { useState } from "react";
import Candy from "./candy";

export default function MessageFromGrandParent() {

    const [message, setMessage] = useState('Hola mi nieta!');
    const [showCandy, setCandy] = useState(false)


    function changeMessage() {
        setMessage("Claro que si :D")
        setCandy(true)
    }

    
    return (
        <div>
            <Parent message={message}/>
            <button onClick={changeMessage}>
                    Tienes dulces?
            </button>
            { showCandy ? <Candy /> : null }
        </div>
        
    )
}

function Parent({message}) {
    return (
        <Child message={message}/>
    )
}

function Child({message}) {
    return (
        <p className="p-10">{message}</p>
    )
}

