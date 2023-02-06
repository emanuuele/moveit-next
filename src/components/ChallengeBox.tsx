import { ChallengesContext } from '@/contexts/ChallengeContext'
import { CountdownContext } from '@/contexts/CountdownContext'
import { useContext } from 'react'
import styles from '../pages/styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext)
    const { resetCountdown} = useContext(CountdownContext)
    function handleChallengeS(){
        completedChallenge()
        resetCountdown()
    }
    function handleChallengeF(){
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.challengeBoxContainer}>

            {activeChallenge ? (
                <div className={styles.challengeIsActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        {<img src={`/icons/${activeChallenge.type}.svg`} alt="imagem de olho ou corpo" />}
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button type='button' className={styles.challengeFButton} onClick={handleChallengeF}>Falhei</button>
                        <button type='button' className={styles.challengeSButton} onClick={handleChallengeS}>Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>
                        Finalize um ciclo para receber um desafio
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}

        </div>
    )
}