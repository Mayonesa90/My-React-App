
import {useState} from 'react';
import IMAGES from '../assets/images/Images';

export default function ProfileCard(namn, titel) {

    const [user, setUser] = useState({
        name: 'Nicodemus Naveltuta',
        age: '47',
        title: 'Vice Ninja',
        email: 'nicokick@theoffice.net'
    });

    function changeName(){
        setUser({
            name: 'Aya Huasca',
            title: 'Mx'
        })
    }

    return (
        <div className=' container content-center'>
            <section className='border border-solid border-orange-400 flex flex-wrap gap-5 mx-2 backdrop-blur-md  py-5 px-2 rounded-2xl'>
                <img className='h-24 rounded-full' src={IMAGES.profilepic} alt="" />
                <p className=" prose font-fromage text-l  font-extrabold text-green-500 text-left text-wrap">{user.title}. {user.name}</p>
                <button onClick={changeName} className=' flex-shrink-0 '>Change name and title</button>
            </section>
        </div>
    )



    // const User = () => {
    //     const [user, setUser] = useState({
    //         name: 'Nicodemus Naveltuta',
    //         age: '47',
    //         title: 'vice ninja',
    //         email: 'nicokick@theoffice.net'
    //     });
    
    
    // return (
    //     <div className=' container border border-solid border-orange-400 content-center'>
    //         <p className=" prose  text-green-500">{user.title}. {user.name}</p>
    //     </div>
    // )
    // }

}


// const user = {
//     name: 'Nicodemus Naveltuta',
//     age: '47',
//     title: 'vice ninja',
//     email: 'nicokick@theoffice.net'
// }