import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';
import SecondaryTitle from '@/components/secondaryTitle';
import ProfileHeader from '@/components/profileHeader';
import AddMore from '@/components/addmore';
import FileUpload from '@/components/fileUpload';

const inter = Inter({ subsets: ['latin'] })

export default function Consents() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgLight} ${styles.secondWelcomeScreenMain} flex-col ${inter.className}`}
        >
            <ProfileHeader style={{ backgroundColor: '#F0EFEB' }} completionPercentage="0% Completed" promtText="Complete your profile" title="Consents" />
            <div className={styles.profilePage}>
                <div className={styles.mt40}>
                    <label className={styles.displayFlex}>
                        <input type="checkbox" style={{width: '20px', height: '20px'}}/>
                        <div className={styles.ml20}>
                            <Text text="Emails" style={{ fontSize: '16px' }} />
                        </div>
                    </label>
                </div>

                <div className={styles.mt20}>
                    <label className={styles.displayFlex}>
                        <input type="checkbox" style={{width: '20px', height: '20px'}}/>
                        <div className={styles.ml20}>
                            <Text text="SMS/Text Messages" style={{ fontSize: '16px' }} />
                        </div>
                    </label>
                </div>

                <div className={styles.mt20}>
                    <label className={styles.displayFlex}>
                        <input type="checkbox" style={{width: '20px', height: '20px'}}/>
                        <div className={styles.ml20}>
                            <Text text="Phone Calls" style={{ fontSize: '16px' }} />
                        </div>
                    </label>
                </div>

                <div className={styles.mt20}>
                    <label className={styles.displayFlex}>
                        <input type="checkbox" style={{width: '20px', height: '20px'}}/>
                        <div className={styles.ml20}>
                            <Text text="Push Notifications" style={{ fontSize: '16px' }} />
                        </div>
                    </label>
                </div>
            </div>
            <div className={styles.appFooter}>
                <div className={styles.mt40}>
                    <PrimaryBtn text="Save" style={{ backgroundColor: '#C3F842', color: '#000', fontWeight: 'bold' }} link="/dashboardWelcomeScreen" />
                </div>
            </div>
        </main>
    )
}
