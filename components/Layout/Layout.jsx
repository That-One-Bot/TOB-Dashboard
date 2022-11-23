import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/components/Layout.module.css'
import { useContext, useState } from 'react';
import { NavBarContext } from '@/util/context/navbarpos';
import { useRouter } from 'next/router'
import mockGuilds from '@/util/mockGuilds'

import {RiApps2Line,RiRobotLine} from 'react-icons/ri'
import {FiSettings} from 'react-icons/fi'
import {TbMedal2} from 'react-icons/tb'



export default function Layout(props) {
    const {navbarPos, setNavbarPos}= useContext(NavBarContext);
    const router = useRouter()
    if (navbarPos) {
        return (
            <div className={styles.container__main}>
                <nav>
                    <Link className={styles.logo} href='/'>
                        <span id={styles.logo__text1}>TOB</span>
                        <span id={styles.logo__text2}>That One Bot</span>
                    </Link>
                </nav>
                <main>{props.children}</main>
                <footer>
                    <ul className={styles.footer_info}>
                        <li>
                            <Link href="/privacy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/terms">Terms of use</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </footer>
            </div>
        )
    } else {
        const serverId = router.asPath.split('/')[2]
        const guild = mockGuilds.find(guild => guild.guildId === serverId) ? mockGuilds.find(guild => guild.guildId === serverId) : setNavbarPos(true)
        
        const options1 = [
            {
                name: 'dashboard',
                icon: <RiApps2Line className={styles.icon}/>,
                link: `/guild/${serverId}`
            },
            {
                name: 'settings',
                icon: <FiSettings className={styles.icon}/>,
                link: `/guild/${serverId}/settings`
            }, 
            {
                name: 'custom bot',
                icon: <RiRobotLine className={styles.icon}/>,
                link: `/guild/${serverId}/custombot`
            },
            {
                name: 'leaderboard',
                icon: <TbMedal2 className={styles.icon}/>,
                link: `/guild/${serverId}/leaderboard`
            }
        ]

        return (
            <div className={styles.container__second}>
                <nav>
                    <div className={styles.logo__container}>
                        <Link className={styles.logo} href='/'>
                            <span id={styles.logo__text1}>TOB</span>
                            <span id={styles.logo__text2}>That One Bot</span>
                        </Link>
                        <h2>Configuration</h2>
                    </div>
                    <button className={styles.guildsName__container} onClick={() => {
                                setNavbarPos(true)
                                router.push(`/dashboard/`)
                            }}>
                        <div className={styles.guildsName}>
                            <Image src="https://styles.redditmedia.com/t5_3eu72/styles/communityIcon_mkcebxqhkfs41.png" alt={"server image"} height='20' width="20"/> <h3>{guild.guildName}</h3>
                        </div>
                    </button>
                    <div className={styles.options_container}>
                        <div className={styles.options_container_second}>
                            <ul className={styles.options1}>
                                {options1.map(option => (
                                    
                                    <li key={option.name}>
                                        <Link href={option.link}>
                                            {option.icon} <h3 className={styles.text}>{option.name}</h3>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={styles.top_bar}>
                    <input type="text" placeholder='Search...'/>
                </div>
                <main>{props.children}</main>
            </div>
        )
    }
}