import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '@/styles/components/dashboard/servercomponents.module.css'

const ServerComponents = (props) => {
    const router = useRouter()
    return (
        <button 
            onClick={() => {
                router.push(`/guild/${props.id}`)
            }}
            className={styles.container}
        >
            <Image src='https://styles.redditmedia.com/t5_3eu72/styles/communityIcon_mkcebxqhkfs41.png' alt={props.name} height='100' width='100'/>
            <h3>{props.name}</h3>
        </button>
    )
}

export default ServerComponents