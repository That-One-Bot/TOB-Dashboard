import Link from 'next/link'
import { useState, useEffect, useContext } from 'react';
import { NavBarContext } from '@/util/context/navbarpos';
import {FaDiscord} from 'react-icons/fa'
import style from '@/styles/Dashboard.module.css'
import LoginPrompt from '@/components/dashboard/LoginPrompt'
import ServerComponents from '@/components/dashboard/ServerComponents'
import mockGuilds from '@/util/mockGuilds.json'
export default function Dashboard() {
    const {setNavbarPos} = useContext(NavBarContext);
    useEffect(() => {
        setNavbarPos(true)
    }, []);
    const [user, setUser] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [servers, setServers] = useState([]);
    useEffect(() => {
        setLoading(true)
        if (user) {
            setServers(mockGuilds);
        }
        setLoading(false);
    }, [user])
    console.log(servers)
    return (
        <div className={style.container}>
            {
                !user ? <LoginPrompt/> 
                : <div className={style.server_container}>
                    <h1>Dashboard</h1>
                    <div className={style.servers}>
                        {
                            loading ? 
                                <p>Loading...</p>
                            : error ? <p>Error loading Servers</p> 
                            : servers.map((server) => (
                                <ServerComponents key={server.guildId} name={server.guildName} id={server.guildId}/>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    )
}