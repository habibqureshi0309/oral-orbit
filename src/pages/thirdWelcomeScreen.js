import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';

const inter = Inter({ subsets: ['latin'] })

export default function ThirdWelcomeScreen() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgThirdScreen} ${styles.secondWelcomeScreenMain} flex-col p-24 ${inter.className}`}
        >
            <div className={`${styles.welcomeScreenTitle} ${styles.firstWelcomeScreenTitle}`}>
                <span>Dental
                    <p>careers</p>
                    Start Here.
                </span>
            </div>
            <div className={styles.firstWelcomeScreenText}>
                <Text text="We're the gateway to a world where your passion meets the perfect position. Embark on a journey to elevate your oral profession, right here with us." />
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
                <PrimaryBtn text="Next" link="/fourthWelcomeScreen" />
                </div>
            </div>
        </main>
    )
}
