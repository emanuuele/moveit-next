import { ChallengesContext } from '@/contexts/ChallengeContext'
import { useContext } from 'react'
import styles from '../pages/styles/components/Profile.module.css'
export function Profile() {
    const { level } = useContext(ChallengesContext)
    return (
        <div>

            <div className={styles.profileContainer}>
            <img src="Capturar.jpg" alt="Emanuele Maria" />

                <div>
                <strong>Emanuele Maria</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 
                    {" "}
                    { level}</p>
                </div>
            </div>
        </div>
    )
}