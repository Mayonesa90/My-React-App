import IMAGES from "../assets/images/Images";


export default function Header() {
    return (
    <header className='bg-gradient-to-b from-green-300 to-transparent h-40 object-top fixed w-screen'>
        <img className="h-10 opacity-90 m-5 object"  src={IMAGES.logo} alt="" />
    </header>
    )
}
