import { IAvatar } from "../Avatar/types"

interface ITeamContentData {
    id: number
    avatar: IAvatar
    quote: string
}

interface ITeamContentProps {
    teams: ITeamContentData[]
}

export type {
    ITeamContentData, ITeamContentProps
}
