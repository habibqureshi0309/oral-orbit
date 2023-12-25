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

export default function Resume() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgLight} ${styles.secondWelcomeScreenMain} flex-col ${inter.className}`}
        >
            <ProfileHeader style={{ backgroundColor: '#CFDBFA' }} completionPercentage="0% Completed" promtText="Complete your profile" title="Upload Your Resume" />
            <div className={styles.profilePage}>
                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.fourthFieldSec}>
                        <FileUpload />
                    </div>
                </div>
            </div>
            <div className={styles.appFooter}>
                <div className={styles.mt40}>
                    <PrimaryBtn text="Save" style={{ backgroundColor: '#C3F842', color: '#000', fontWeight: 'bold' }} link="/equipments" />
                </div>
            </div>
        </main>
    )
}
