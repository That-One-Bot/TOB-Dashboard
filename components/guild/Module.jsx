import style from '@/styles/components/guild/Module.module.css'

export default function Module(props) {
    return (
        <div className={style.container}>
            <div className={style.header_container}>
                <label className={style.switch}>
                    <input type="checkbox" checked={props.enabled}/>
                    <span className={style.slider}/>
                </label>
            </div>
            <div className={style.text_container}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}