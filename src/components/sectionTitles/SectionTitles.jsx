import styles from "./sectionTitles.module.css"

export function SectionTitles({title1, title2}) {
    return (
        <div className={styles.titleContainer}>
            <div className={styles.titleBlock}>
                <span className={styles.title1}>{title1}</span>
                <span className={styles.title2}>{title2}</span>
            </div>
            <span className={styles.titleUnderline}></span>
        </div>
    )
}