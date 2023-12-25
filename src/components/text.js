import styles from "@/styles/main.module.css"

export default function Text(props) {
  return (
    <p className={styles.text} style={props?.style}>
      {props?.text}
    </p>
  )
}
