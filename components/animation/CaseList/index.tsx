import { useEffect, useRef } from "react";
import { ICaseListProps } from "./types";
import CaseCard from "@/components/ui/CaseCard";

export default function CaseList({cases, className}: ICaseListProps) {
  const caseListRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (caseListRef.current) {
        const children: HTMLDivElement[] = Array.prototype
        .slice.call(caseListRef.current.children);

        children.map((el: HTMLDivElement, i: number) => {
            if (i % 2)
                el.setAttribute("data-aos", "fade-up")
            else el.setAttribute("data-aos", "fade-down")
        });
    }
}, [caseListRef])

  return (
    <div className={className} ref={caseListRef} data-aos="fade-up">
      {cases.map((caseCard) => <CaseCard 
        name={caseCard.name}
        text={caseCard.text}
        link={caseCard.link}
        key={caseCard.id}
      />)}
    </div>
  )
}