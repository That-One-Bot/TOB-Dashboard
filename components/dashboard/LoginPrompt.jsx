import Link from 'next/link'
import { FaDiscord } from 'react-icons/fa'
import {FaRegQuestionCircle} from 'react-icons/fa'
import styles from '@/styles/components/dashboard/loginprompt.module.css'
const LoginPrompt = () => {
    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            <div className={styles.link_container}>
                <Link href="#">
                        <FaDiscord/> Login with Discord
                </Link>
                <Link href="#">
                        <FaRegQuestionCircle/> Support Server
                </Link>
            </div>
        </div>
    )
}
export default LoginPrompt