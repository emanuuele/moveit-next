import { ChallengesContext } from '@/contexts/ChallengeContext';
import { useContext } from 'react';
import styles from '../pages/styles/components/CompletedChallenge.module.css'
export function CompletedChallenges(){
    const{challengesCompleted}=useContext(ChallengesContext)
    return(
        <div className={styles.completedChallengeContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}