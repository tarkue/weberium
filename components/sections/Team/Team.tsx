import OnScrollTitle from "@/components/animation/OnScrollTitle/OnScrollTitle";
import WhiteWrapper from "@/components/ui/WhiteWrapper";

import s from "./Team.module.sass"
import Image from "next/image";
import { useEffect, useState } from "react";
import TeamContent from "@/components/ui/TeamContent/TeamContent";

const teams: ITeamContentData[] = [
    {
        id: 1,
        avatar: {
            photo: "https://sun9-66.userapi.com/impg/1KkEbdG5FZtEzq4MfTdb6IIJF1pSArp2PSGGTg/-qXkOT3SpTY.jpg?size=1617x2160&quality=95&sign=00f60aada3d4dac1dc301fa24dd19393&type=album",
            profession: "CEO",
            name: "Евгений Смирнов",
        },
        
        quote: "Мы ценим чужое время и понимаем, как работает рынок. Мы не придумали ничего нового, лишь переосмыслили текущее"
    }
]

export default function Team() {

    useEffect(() => {
        
    })
    return (
        <WhiteWrapper>
            <OnScrollTitle className={s.Title}>
                <span>наша</span>
                <span>команда</span>
            </OnScrollTitle>
            <TeamContent teams={teams}/>
        </WhiteWrapper>
    )
}