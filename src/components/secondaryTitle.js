import styles from "@/styles/main.module.css"

export default function SecondaryTitle(props) {
  return (
    <div className={styles.secondaryTitle} style={props?.style}>
      {props?.text}
    </div>
  )
}
