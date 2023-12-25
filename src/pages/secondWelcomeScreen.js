import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';

const inter = Inter({ subsets: ['latin'] })

export default function SecondWelcomeScreen() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgPrimaryColor} ${styles.secondWelcomeScreenMain} flex-col p-24 ${inter.className}`}
        >
            <div className={`${styles.welcomeScreenTitle} ${styles.secondWelcomeScreenTitle}`}>
                <span>Hire with
                    <p>confidence</p>
                </span>
            </div>
            <div className={styles.firstWelcomeScreenText}>
                <Text text="We prioritize genuine insights for informed career decisions. Our ratings stem from authentic feedback, not just numbers." />
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
                <PrimaryBtn text="Next" link="/thirdWelcomeScreen" />
                </div>
            </div>
        </main>
    )
}
