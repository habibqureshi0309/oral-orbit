import styles from "@/styles/main.module.css"
import Image from "next/image"
import Link from "next/link"

export default function AddMore(props) {
    return (
        <div className={`${styles.displayFlex}`}>
            <Image
                src="/assets/plus.svg"
                alt="Add more"
                className={`${styles.addMoreIcon}`}
                layout="fill"
                priority
            />
            <label className={`${styles.ml20} ${styles.displayBlock}`} style={{ fontSize: '14px' }}>Add more</label>
        </div>
    )
}
