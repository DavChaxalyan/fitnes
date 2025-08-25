import styles from "./OurPrograms.module.css"

export function OurProgramsCart({img, title, subtitle}) {
    return (
        <div className={styles.ourProgramsCart}>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}