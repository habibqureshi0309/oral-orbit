import styles from "@/styles/main.module.css"
import Link from "next/link"

export default function SecondaryBtn(props) {
    return (
        <button type="button" onClick={() => props?.action()} style={props?.style} className={styles.primaryBtn}>
            {props?.text}
        </button>
    )
}
