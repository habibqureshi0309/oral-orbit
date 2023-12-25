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

export default function Equipments() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgLight} ${styles.secondWelcomeScreenMain} flex-col ${inter.className}`}
        >
            <ProfileHeader style={{ backgroundColor: '#E4ECE9' }} completionPercentage="0% Completed" promtText="Complete your profile" title="Equipment" />
            <div className={styles.profilePage}>
                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.thirdFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Technology and Equipment Available</label>
                        <input type="text" className={styles.thirdField} style={{ width: '95%' }} />
                    </div>

                    <div className={`${styles.marginAuto} ${styles.firstFieldSec}`}>
                        <AddMore/>
                    </div>
                </div>
            </div>
            <div className={styles.appFooter}>
                <div className={styles.mt40}>
                    <PrimaryBtn text="Save" style={{ backgroundColor: '#C3F842', color: '#000', fontWeight: 'bold' }} link="/records" />
                </div>
            </div>
        </main>
    )
}
