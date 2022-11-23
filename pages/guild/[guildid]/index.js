import { useContext, useEffect } from 'react';
import { NavBarContext } from '@/util/context/navbarpos';
import mockGuilds from '@/util/mockGuilds.json'
import { useRouter } from 'next/router';
import style from '@/styles/guild/Index.module.css'
import ModuleCategory from '@/components/guild/ModuleCategory';

export default function Guild() {
    const {setNavbarPos} = useContext(NavBarContext);
    const modules = [
        {
            title : "welcome",
            description: "Configure the welcome message for new members",
            enabled : true,
        },
        {
            title : "custom commands",
            description: "Add custom commands to your server",
            enabled : false,
        },
        {
            title : "moderation",
            description: "Setup moderation for your server",
            enabled : true,
        },
    ]
    useEffect(() => {
        setNavbarPos(false)
    }, []);
    return (
        <div className={style.container}>
            <h1>
                Modules
            </h1>
            <ModuleCategory category="Server Management" modules={modules}/>
        </div>
    )
}
export async function getStaticProps({params}) {
    return {
        props: {
            guild: mockGuilds.find(guild => guild.guildId = params)
        }
    }
}

export async function getStaticPaths() {
    const paths = mockGuilds.map((guild) => ({
        params: { guildid: guild.guildId },
    }))
    return { paths, fallback: false }
}
