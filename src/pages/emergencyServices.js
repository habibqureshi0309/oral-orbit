import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';
import SecondaryTitle from '@/components/secondaryTitle';
import ProfileHeader from '@/components/profileHeader';

const inter = Inter({ subsets: ['latin'] })

export default function EmergencyServices() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgLight} ${styles.secondWelcomeScreenMain} flex-col ${inter.className}`}
        >
            <ProfileHeader style={{ backgroundColor: '#C5E0E5' }} completionPercentage="0% Completed" promtText="Complete your profile" title="Emergency Services" />
            <div className={styles.profilePage}>
                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.firstFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Do you offer emergency services availability</label>
                        <input type="text" className={styles.firstField} style={{ width: '90.5%' }} />
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.fourthFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Description (Optional)</label>
                        <textarea className={styles.fourthField} style={{ width: '90.5%', height: '150px' }}></textarea>
                    </div>
                </div>
            </div>
            <div className={styles.appFooter}>
                <div className={styles.mt40}>
                    <PrimaryBtn text="Save" style={{ backgroundColor: '#C3F842', color: '#000', fontWeight: 'bold' }} link="/languageSpokenAtPractice" />
                </div>
            </div>
        </main>
    )
}
