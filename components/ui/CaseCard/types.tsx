interface ICaseCardProps {
    name: string, 
    text: string,
    link: string
} 
interface ICaseCard extends ICaseCardProps {
    id: number
}
export type { ICaseCardProps, ICaseCard }