interface ITeamContentData {
    id: number
    avatar: IAvatar
    quote: string
}

interface ITeamContentProps {
    teams: ITeamContentData[]
}
