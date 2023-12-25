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
            <ProfileHeader style={{ backgroundColor: '#E0E8FB' }} completionPercentage="0% Completed" promtText="Complete your profile" title="Address Information" />
            <div className={styles.profilePage}>
                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.fourthFieldSec}>
                        <label className={styles.displayBlock} style={{fontSize: '14px'}}>Title</label>
                        <input type="text" className={styles.fourthField} style={{width: '95%'}}/>
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{fontSize: '14px'}}>City</label>
                        <input type="text" className={styles.secondField} style={{width: '90.2%'}} />
                    </div>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{fontSize: '14px'}}>Postal Code</label>
                        <input type="text" className={styles.secondField} style={{width: '90.2%'}} />
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.firstFieldSec}>
                        <label className={styles.displayBlock} style={{fontSize: '14px'}}>Province</label>
                        <input type="text" className={styles.firstField} style={{width: '95%'}}/>
                    </div>
                    <div className={styles.thirdFieldSec}>
                        <label className={styles.displayBlock} style={{fontSize: '14px'}}>Country</label>
                        <input type="text" className={styles.thirdField} style={{width: '93%'}}/>
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.fourthFieldSec}>
                        <label className={styles.displayBlock} style={{fontSize: '14px'}}>Contact Number</label>
                        <input type="text" className={styles.fourthField} style={{width: '95%'}}/>
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.fourthFieldSec}>
                        <label className={styles.displayBlock} style={{fontSize: '14px'}}>Work Email Address</label>
                        <input type="text" className={styles.fourthField} style={{width: '95%'}}/>
                    </div>
                </div>

            </div>
            <div className={styles.appFooter}>

                <div className={styles.mt40}>
                    <PrimaryBtn text="Save" style={{ backgroundColor: '#C3F842', color: '#000', fontWeight: 'bold' }} link="/clinicDescription" />
                </div>
            </div>
        </main>
    )
}
