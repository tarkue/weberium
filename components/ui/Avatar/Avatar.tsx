import Image from "next/image"

export default function Avatar({photo, profession, name}: IAvatar) {
    return (
        <div>
            <Image 
                alt={name}
                src={photo}
                height={}
            /> 
        </div>
    )
}