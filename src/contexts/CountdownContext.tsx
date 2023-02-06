import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengeContext";

interface CountdownContextData {
    minutes: number
    seconds: number
    hasfinished: boolean
    isactive: boolean
    startCountdoun: ()=> void
    resetCountdown: ()=> void
}

interface CountdownProviderProps {
    children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext)
    let countdownTimeout: NodeJS.Timeout
    const [time, setTime] = useState(0.1 * 60)
    const [isactive, setIsactive] = useState(false)
    const [hasfinished, setHasFinished] = useState(false)
    const minutes = Math.floor(time / 60)
    const seconds = time % 60


    function startCountdoun() {
        setIsactive(true)
    }
    function resetCountdown(){
        setIsactive(false)
        clearTimeout(countdownTimeout)
        setTime(0.1 * 60)
    }
    useEffect(() => {
        if (isactive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isactive && time == 0) {
            setHasFinished(false)
            setIsactive(false)
            startNewChallenge()
        }
    },
        [isactive, time])
    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasfinished,
            isactive,
            startCountdoun,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}