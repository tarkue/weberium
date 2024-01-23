import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import { useRef } from "react";
import s from "./Circles.module.sass"

export default function Circles() {
    const imageRef = useRef<HTMLImageElement>(null)

    useLenis(({ scroll }) => {
        if (imageRef.current && scroll < window.innerHeight)
            imageRef.current.style.transform = `translateX(calc(-30% + (-${scroll*0.5}px))`;
    })
    return (
        <div>
            <Image 
                src={"/circles.svg"}
                width={2200}
                height={185}
                alt=""
                className={s.Image}
                ref={imageRef}
                priority={true}
            />
        </div>
    )
}