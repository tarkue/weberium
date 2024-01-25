import { useEffect, useRef, useState } from "react";
import { ITitleWrapperProps } from "./types";


export default function TitleWrapper(
  { children, setTextLength, trigger, globalTrigger }: ITitleWrapperProps
) {    
  const titleContainerRef = useRef<HTMLDivElement>(null)
  const [textElements, setTextElements] = useState<HTMLSpanElement[]>()

  useEffect(() => {
      if (textElements && (trigger === undefined || trigger == true)) {    
        textElements.map((el, i) => {
            setTimeout(() => el.style.transform = "translateY(0)", 33*i)
        })
      }
  }, [textElements, trigger])

  useEffect(() => {
    if (
      titleContainerRef.current && 
      titleContainerRef.current.children.length > 0
    ) {
      const textWrapper = Array.prototype
        .slice
        .call(titleContainerRef.current.children[0].children);
    
      let shuffled: HTMLSpanElement[] = [];
      textWrapper.map((el) => {
        if (el.textContent) {
          el.innerHTML = el.textContent?.replace(
            /\S/g, "<span class='titleLetter'>$&</span>"
          );
        }

        let children = Array.from<HTMLSpanElement>(el.children)
        shuffled.push(...children)
      })

      if (setTextLength) 
        setTextLength(shuffled.length)
      setTextElements(shuffled)
      titleContainerRef.current.style.visibility = "visible"
    }
  }, [setTextLength, globalTrigger])

  return (
      <div 
        ref={titleContainerRef} 
        style={{visibility: "hidden"}}>
        { children }
      </div>
  )
}