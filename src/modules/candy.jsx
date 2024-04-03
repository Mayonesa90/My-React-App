import IMAGES from "../assets/images/Images"

export default function Candy() {
    return (
        <div className="w-full h-36 flex justify-center">
            <img className="h-11" src={IMAGES.candy} alt="" />
            <img className="h-11" src={IMAGES.candy} alt="" />
            <img className="h-11" src={IMAGES.candy} alt="" />
            <img className="h-11" src={IMAGES.candy} alt="" />
        </div>
    )
}