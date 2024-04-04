import IMAGES from "../assets/images/Images"

export default function Candy() {
    return (
        <div className=" flex gap-5 mt-8 place-content-center flex-wrap">
            <img className="h-11" src={IMAGES.candy} alt="" />
            <img className="h-11" src={IMAGES.candy} alt="" />
            <img className="h-11" src={IMAGES.candy} alt="" />
            <img className="h-11" src={IMAGES.candy} alt="" />
        </div>
    )
}