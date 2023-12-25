import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';
import SecondaryTitle from '@/components/secondaryTitle';
import ProfileHeader from '@/components/profileHeader';
import AddMore from '@/components/addmore';

const inter = Inter({ subsets: ['latin'] })

export default function LanguageSpokenAtPractice() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgLight} ${styles.secondWelcomeScreenMain} flex-col ${inter.className}`}
        >
            <ProfileHeader style={{ backgroundColor: '#F0EFEB' }} completionPercentage="0% Completed" promtText="Complete your profile" title="Language Spoken at practice" />
            <div className={styles.profilePage}>
                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.fourthFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Language</label>
                        <input type="text" className={`${styles.mt10} ${styles.fourthField}`} style={{ width: '90.5%' }} />
                    </div>
                </div>

                <div className={`${styles.mt30} ${styles.displayFlex}`}>
                    <div className={`${styles.firstFieldSec}`}>
                        <AddMore/>
                    </div>
                </div>
            </div>
            <div className={styles.appFooter}>
                <div className={styles.mt40}>
                    <PrimaryBtn text="Save" style={{ backgroundColor: '#C3F842', color: '#000', fontWeight: 'bold' }} link="/resume" />
                </div>
            </div>
        </main>
    )
}
