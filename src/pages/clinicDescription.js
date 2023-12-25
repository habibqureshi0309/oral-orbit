import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';
import SecondaryTitle from '@/components/secondaryTitle';
import ProfileHeader from '@/components/profileHeader';

const inter = Inter({ subsets: ['latin'] })

export default function Address() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgLight} ${styles.secondWelcomeScreenMain} flex-col ${inter.className}`}
        >
            <ProfileHeader style={{ backgroundColor: '#F9E3E4' }} completionPercentage="0% Completed" promtText="Complete your profile" title="Clinic Description" />
            <div className={styles.profilePage}>
                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.fourthFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>About Clinic</label>
                        <textarea className={styles.fourthField} style={{ width: '95%', height: '200px' }} /><textarea />
                    </div>
                </div>
            </div>
            <div className={styles.appFooter}>
                <PrimaryBtn text="Save" style={{ backgroundColor: '#C3F842', color: '#000', fontWeight: 'bold' }} link="/aboutOperations" />
            </div>
        </main>
    )
}
