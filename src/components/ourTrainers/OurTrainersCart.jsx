import styles from "./ourTrainers.module.css"

export function OurTrainersCart({trainerImg, trainerName, trainerRole, bio, socialIcons}) {
    return (
        <div className={styles.ourTrainersCart}>
            <div className={styles.imgBlock}>
                <img src={trainerImg} alt={trainerName} />
            </div>
            <div className={styles.infoBlock}>
                <h2>{trainerName}</h2>
                <span>{trainerRole}</span>
                <p>{bio}</p>
                <div className={styles.iconsBlock}>
                    {socialIcons.map((item) => (
                        <img key={item.id} src={item.src} alt={item.title}/>
                    ))}
                </div>
            </div>
        </div>
    )
}