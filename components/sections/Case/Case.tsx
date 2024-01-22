import WhiteWrapper from "@/components/ui/WhiteWrapper/WhiteWrapper";
import s from "./Case.module.sass"
import Button from "@/components/ui/Button/Button";
import { buttonTheme } from "@/components/ui/Button/types";

export default function Case() {
    return (
        <WhiteWrapper>
            <h2 className={s.Title}>
                Взгляни на наши кейсы
            </h2>
            <div>
                
            </div>
            <div className={s.ButtonWrapper}>
                <Button
                    onClick={() => {}}
                    theme={buttonTheme.black}
                    text="смотреть все"
                />
            </div>
        </WhiteWrapper>
    )
}