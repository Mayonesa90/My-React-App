import {useState} from 'react'
import IMAGES from "../assets/images/Images";

export default function Header() {

    const [color, setColor] = useState({
        color: 'from-green-300',
    });

    const [btn, setBtn] = useState({
        src: `${IMAGES['btn-off']}`,
        on: true
    })

    const helper = () => {
        if (color.color == 'from-green-300' && btn.on == true) {
            setColor({
                color: 'from-purple-300'
            })
            setBtn({
                src: `${IMAGES['btn-on']}`,
                on: false
            })
        } else {
            setColor({
                color: 'from-green-300'
            })
            setBtn({
                src: `${IMAGES['btn-off']}`,
                on: true
            })
        }
        
    }


    return (
    <header className={` flex flex-row justify-between content-top items-start bg-gradient-to-b ${color.color} to-transparent h-40 top-0 fixed w-full`}>

        <img src={btn.src} className='w-8 m-5' onClick={helper}></img>
        <img className="h-24 m-5 self-start "  src={IMAGES.logo} alt="" />
    </header>
    )
}




