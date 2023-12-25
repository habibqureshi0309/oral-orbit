import styles from "@/styles/main.module.css"
import Link from "next/link"
import SecondaryTitle from "./secondaryTitle"
import Text from "./text"

export default function ProfileHeader(props) {
    return (
        <div className={`${styles.aboutHeader}`} style={props?.style}>
            <div className={`${styles.textRight}`}>
                <Text text={props?.completionPercentage} style={{ fontSize: '15px', color: '#374957' }} />
            </div>
            <div className={props?.profileTitleMargin || styles.mt30}>
                <Text text={props?.promtText} style={{ fontSize: '15px', color: '#374957' }} />
                <SecondaryTitle text={props?.title} style={{ lineHeight: '20px', color: '#374957' }} />
            </div>
        </div>
    )
}
