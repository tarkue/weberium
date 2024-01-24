import Image from "next/image";
import { useEffect, useState } from "react";

import s from "./TeamContent.module.sass"
import Avatar from "../Avatar";
import unknownData from "../Avatar/unknownData";
import { IAvatar } from "../Avatar/types";
import { ITeamContentProps } from "./types";

export default function TeamContent({teams}: ITeamContentProps) {
    const [activeMember, setActiveMember] = useState<number>(0)
    const [avatars, setAvatars] = useState<IAvatar[]>([unknownData])

    useEffect(() => {
        let newAvatars: IAvatar[] = []

        for (let i = 0; i < teams.length; i++)
            newAvatars.push(teams[i].avatar)
        for (let i = 0; i < (3 - teams.length); i++) 
            newAvatars.push(unknownData)
        
        setAvatars(newAvatars)
    }, [teams])

    const handleClick = (member: IAvatar, i: number) => 
        !member.unknown ? () => setActiveMember(i) : () => {}

    return (
        <div className={`containerSection ${s.TeamContent}`}>
            <div className={s.TeamContentAvatarList} data-aos="fade-right">
                {avatars.map((member, i) => <Avatar 
                    data={member}
                    key={i}
                    active={i == activeMember}
                    onClick={handleClick(member, i)}
                />)}
            </div>
            <div className={s.QuoteWrapper} data-aos="fade-left">
                <Image 
                    alt={"quotes"}
                    src={"/quotes.svg"}
                    width={33}
                    height={26}
                />
                <p>
                    { teams[activeMember].quote }
                </p>
            </div>
        </div>
    )
}