import styles from "@/styles/main.module.css"

export default function Title(props) {
  return (
    <div className={styles.title}>
      {props?.text}
    </div>
  )
}
