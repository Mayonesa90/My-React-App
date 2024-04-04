import { useState } from "react"

export default function Counter() {
    
    const [count, setCount] = useState(0)

    const helper = () => {
        setCount(count + 1)
    }
    
    return (
        <div className=" container border border-solid border-orange-400 content-center">
            <p className="prose-2xl font-extrabold mt-10">{count}</p>
            <button className="m-10" onClick={helper}>Press to count</button>
        </div>
    )
}