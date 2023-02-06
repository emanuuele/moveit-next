import { CountdownContext } from '@/contexts/CountdownContext'
import { useState, useEffect, useContext } from 'react'
import styles from '../pages/styles/components/Countdown.module.css'

//-------------------------------------------------------------------------
export function Countdown() {

    const {minutes,
        seconds, 
        hasfinished, 
        isactive, 
        startCountdoun, 
        resetCountdown} = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return (<>

        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        {hasfinished ? (
            <button disabled
                className={styles.countdownButton}>
                Ciclo encerrado
            </button>
        ) : (
            <>
                {isactive ? (
                    <button 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown} >
                        Abandonar ciclo
                    </button>
                ) : (
                    <button type='button' className={styles.countdownButton} onClick={startCountdoun}>
                        Iniciar um ciclo
                    </button>
                )

                }
            </>

        )
            }
        
        
        </>
    )
}