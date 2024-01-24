import ExcellenceCard from "@/components/ui/ExcellenceCard"
import s from "./Excellence.module.sass"
import { IExcellenceCard } from "@/components/ui/ExcellenceCard/types"

const excellenceList: IExcellenceCard[] = [
    {
        id: 1,
        tagText: "рабочий процесс",
        title: "Совместная работа",
        content: {
            text: "50К"
        },
    },
    {
        id: 2,
        tagText: "выгодно",
        title: "подписчиков в соц.сетях",
        content: {
            text: "10К",
            colorText: "var(--green)"
        },
    },
    {
        id: 3,
        tagText: "выгода",
        title: "Совместная работа",
        content: {
            text: "5К"
        },
    },
    {
        id: 4,
        tagText: "выгода",
        title: "подписчиков в соц.сетях",
        content: {
            text: "2К"
        },
    },
]

export default function Excellence() {
    return (
        <section className="containerSection">
            <div className={s.Content}>
                {excellenceList.map(
                    (excellence) => <ExcellenceCard 
                        key={excellence.id}
                        tagText={excellence.tagText}
                        title={excellence.title}
                        content={excellence.content}
                />)}
            </div>
        </section>
    )
}