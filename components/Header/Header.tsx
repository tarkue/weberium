
import Image from "next/image";
import s from "./Header.module.sass"
import Burger from "../ui/Burger/Burger";
import { useLenis } from "@studio-freight/react-lenis";
import { useRef } from "react";

export default function Header() {
  const headerRef = useRef<HTMLHeadingElement>(null)

  useLenis(({ scroll }) => {
      if (scroll > 72) 
        headerRef.current?.classList.add(s.Scroll);
      else 
        headerRef.current?.classList.remove(s.Scroll);

  })

  return (
    <header className={s.Header} ref={headerRef}>
      <div>
        <Image 
            width={116}
            height={22}
            src={"/weberium.svg"}
            alt="Вебериум"
            priority={true}
        />
        <Burger />
      </div>
    </header>
  )
}