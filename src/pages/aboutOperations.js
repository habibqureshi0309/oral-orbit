import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';
import SecondaryTitle from '@/components/secondaryTitle';
import ProfileHeader from '@/components/profileHeader';

const inter = Inter({ subsets: ['latin'] })

export default function AboutOperations() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgLight} ${styles.secondWelcomeScreenMain} flex-col ${inter.className}`}
        >
            <ProfileHeader style={{ backgroundColor: '#FDF1E7' }} completionPercentage="0% Completed" promtText="Complete your profile" title="About Operations." />
            <div className={styles.profilePage}>
                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Number of Dentists</label>
                        <input type="text" className={styles.secondField} style={{ width: '90.5%' }} />
                    </div>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Number of Hygienists</label>
                        <input type="text" className={styles.secondField} style={{ width: '90.5%' }} />
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Number of Dental Assistants</label>
                        <input type="text" className={styles.secondField} style={{ width: '90.5%' }} />
                    </div>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Number of Administrative/Support Staff</label>
                        <input type="text" className={styles.secondField} style={{ width: '90.5%' }} />
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Clinic Size</label>
                        <input type="text" className={styles.secondField} style={{ width: '90.5%' }} />
                    </div>
                </div>
            </div>
            <div className={styles.appFooter}>
                <div className={styles.mt40}>
                    <PrimaryBtn text="Save" style={{ backgroundColor: '#C3F842', color: '#000', fontWeight: 'bold' }} link="/aboutOperationsTwo" />
                </div>
            </div>
        </main>
    )
}
