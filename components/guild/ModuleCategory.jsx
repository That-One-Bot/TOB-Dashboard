import Module from './Module'
import style from '@/styles/components/guild/ModuleCategory.module.css'
export default function ModuleCategory(props) {
    return (
        <section className={style.container}>
            <div className={style.header}>
                <h1>{props.category}</h1>
            </div>
            <div className={style.module_container}>
                {props.modules.map(module => (
                    <Module key={module.title} title={module.title} description={module.description} enabled={module.enabled}/>
                ))}
            </div>
        </section>
    )
}