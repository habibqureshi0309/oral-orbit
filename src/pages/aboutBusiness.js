import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';
import SecondaryTitle from '@/components/secondaryTitle';
import ProfileHeader from '@/components/profileHeader';

const inter = Inter({ subsets: ['latin'] })

export default function AboutBusiness() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgLight} ${styles.secondWelcomeScreenMain} flex-col ${inter.className}`}
        >
            <ProfileHeader style={{ backgroundColor: '#FDF1E7' }} completionPercentage="0% Completed" promtText="Complete your profile" title="About your business." />
            <div className={styles.profilePage}>
                <div>
                    <Image
                        src="/assets/profilePic.png"
                        alt="Profile Picture"
                        className={`${styles.profilePicture}`}
                        layout="fill"
                        priority
                    />
                </div>
                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.fourthFieldSec}>
                        <label className={styles.displayBlock} style={{fontSize: '14px'}}>Clinic Name</label>
                        <input type="text" className={styles.fourthField} style={{width: '95%'}}/>
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{fontSize: '14px'}}>Type</label>
                        <input type="text" className={styles.secondField} style={{width: '90.5%'}} />
                    </div>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{fontSize: '14px'}}>Years In Operations</label>
                        <input type="text" className={styles.secondField} style={{width: '90.5%'}} />
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{fontSize: '14px'}}>License No.</label>
                        <input type="text" className={styles.secondField} style={{width: '90.5%'}}/>
                    </div>
                </div>
            </div>
            <div className={styles.appFooter}>
                <div className={styles.mt40}>
                    <PrimaryBtn text="Save" style={{ backgroundColor: '#C3F842', color: '#000', fontWeight: 'bold' }} link="/address" />
                </div>
            </div>
        </main>
    )
}
