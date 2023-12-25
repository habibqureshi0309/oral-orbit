import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';
import SecondaryTitle from '@/components/secondaryTitle';
import ProfileHeader from '@/components/profileHeader';

const inter = Inter({ subsets: ['latin'] })

export default function OpeningHours() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgLight} ${styles.secondWelcomeScreenMain} flex-col ${inter.className}`}
        >
            <ProfileHeader style={{ backgroundColor: '#E9E4E9' }} profileTitleMargin="mt10" completionPercentage="0% Completed" promtText="Complete your profile" title="Operating Hours" />
            <div className={styles.profilePage}>
                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.w40}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px', fontWeight: 'bold' }}>Day</label>
                    </div>
                    <div className={`${styles.displayFlex} ${styles.w60}`}>
                        <div className={`${styles.textCenter} ${styles.fourthFieldSec}`} style={{width: '40%'}}>
                            <label className={styles.displayBlock} style={{ fontSize: '14px', fontWeight: 'bold' }}>From</label>
                        </div>
                        <div className={`${styles.textCenter} ${styles.fourthFieldSec}`} style={{width: '60%'}}>
                            <label className={styles.displayBlock} style={{ fontSize: '14px', fontWeight: 'bold' }}>To</label>
                        </div>
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.w40}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Monday</label>
                    </div>
                    <div className={`${styles.displayFlex} ${styles.w60}`}>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.w40}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Tuesday</label>
                    </div>
                    <div className={`${styles.displayFlex} ${styles.w60}`}>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.w40}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Wednesday</label>
                    </div>
                    <div className={`${styles.displayFlex} ${styles.w60}`}>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.w40}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Thursday</label>
                    </div>
                    <div className={`${styles.displayFlex} ${styles.w60}`}>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.w40}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Friday</label>
                    </div>
                    <div className={`${styles.displayFlex} ${styles.w60}`}>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.w40}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Saturday</label>
                    </div>
                    <div className={`${styles.displayFlex} ${styles.w60}`}>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.w40}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Sunday</label>
                    </div>
                    <div className={`${styles.displayFlex} ${styles.w60}`}>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                        <div className={styles.secondFieldSec}>
                            <input type="text" className={styles.secondField} style={{ width: '80%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.appFooter}>
                <div className={styles.mt40}>
                    <PrimaryBtn text="Save" style={{ backgroundColor: '#C3F842', color: '#000', fontWeight: 'bold' }} link="/emergencyServices" />
                </div>
            </div>
        </main>
    )
}
