import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';

const inter = Inter({ subsets: ['latin'] })

export default function SettingDashboard() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgDbWelcomeScreenOne} ${styles.secondWelcomeScreenMain} flex-col p-24 ${inter.className}`}
        >
            <div className={`${styles.welcomeScreenTitle} ${styles.textCenter} ${styles.firstWelcomeScreenTitle}`}>
                <span style={{color: '#000'}}>Did you know?</span>
            </div>
            <div className={`${styles.textCenter} ${styles.mt20} ${styles.marginAuto} ${styles.firstWelcomeScreenText}`}>
                <Text style={{color: '#000'}} text="You can always modify your profile from settings in the app" />
            </div>
            <div className={styles.appFooter}>
                <Image
                    src="/assets/lightLogo.svg"
                    alt="Footer Logo"
                    className={`${styles.footerLogo}`}
                    layout="fill"
                    priority
                />
                <div className={styles.mt40}>
                    <PrimaryBtn text="Next" style={{ backgroundColor: '#C3F842', color: '#000' }} link="/finalisingDashboard" />
                </div>
            </div>
        </main>
    )
}
