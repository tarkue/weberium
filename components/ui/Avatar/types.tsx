import { MouseEventHandler } from "react"

interface IAvatar {
    photo: string
    profession: string
    name: string,
    unknown?: boolean
}

interface IAvatarProps  {
    data: IAvatar
    onClick: MouseEventHandler<HTMLDivElement>
    active?: boolean
}

export type {
    IAvatarProps, IAvatar
}