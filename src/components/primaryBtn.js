import styles from "@/styles/main.module.css"
import Link from "next/link"

export default function PrimaryBtn(props) {
  return (
    <Link href={props?.link}>
      <button type="button" style={props?.style} className={styles.primaryBtn}>
        {props?.text}
      </button>
    </Link>
  )
}
