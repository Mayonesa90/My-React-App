import IMAGES from "../assets/images/Images";


export default function Header() {
    return (
    <header className='bg-gradient-to-b from-green-300 to-transparent h-40 justify-self-top fixed w-full'>
        <img className="h-24 opacity-90 m-5"  src={IMAGES.logo} alt="" />
    </header>
    )
}
