import { ReactNode } from "react"
import ExcellenceCard from "."

interface ExcellenceCardType {
    icons?: any[],
    text?: string,
    colorText?: string
}

interface IExcellenceCardProps {
    tagText: string,
    title: string,
    content: ExcellenceCardType
}

interface IExcellenceCard extends IExcellenceCardProps {
    id: number
}

export type { IExcellenceCardProps, IExcellenceCard }