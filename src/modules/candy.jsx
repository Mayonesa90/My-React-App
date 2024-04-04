import IMAGES from "../assets/images/Images"

export default function Candy() {
    return (
        <div className=" flex gap-5 mt-8 mb-8 place-content-center relative">
            <div className="flex flex-wrap gap-5 justify-around content-end">
            <img className="h-5 rotate-12" src={IMAGES.candy} alt="" />
            <img className="h-5 rotate-45 " src={IMAGES.candy} alt="" />
            <img className="h-5 rotate-12 " src={IMAGES.candy} alt="" />
            <img className="h-5 -rotate-12 " src={IMAGES.candy} alt="" />
            </div>
            
        </div>
    )
}