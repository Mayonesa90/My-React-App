

export default function MessageFromGrandParent() {


    let message = "Hej barnbarnet!";

    
    return (
        <div>
            <Parent message={message}/>
            <button onClick={() => {
                message="Must give candy to child...",
                console.log(message)
                }}>
                    Give candy
            </button>
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

