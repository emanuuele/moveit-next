import './styles/global.css'
import type { AppProps } from 'next/app'
import { ChallengesProvider } from '../contexts/ChallengeContext'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (

    <ChallengesProvider>
      <Component{...pageProps} />
    </ChallengesProvider>
  )
}