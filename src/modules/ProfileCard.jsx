import IMAGES from "../assets/images/Images"

export default function ProfileCard() {
    
    const profileImage = () => {
        return (
        <img src="" alt="" >
        </img>
        )
    }
    
    return( 
        <div className="container border-r-4 flex flex-col">
            { profileImage }
            <ProfileTitle />
            <ProfileName />
            <ProfileButton />
        </div>
    )
}