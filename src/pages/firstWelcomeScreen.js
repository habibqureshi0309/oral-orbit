import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';

const inter = Inter({ subsets: ['latin'] })

export default function FirstWelcomeScreen() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgSecondaryColor} ${styles.firstWelcomeScreenMain} flex-col p-24 ${inter.className}`}
        >
            <div className={`${styles.welcomeScreenTitle} ${styles.firstWelcomeScreenTitle}`}>
                <span>Focused Search,
                    <p>Clear Results</p>
                </span>
            </div>
            <div className={styles.firstWelcomeScreenText}>
                <Text text="A platform fine-tuned for the oral healthcare community. Precision search, specialized tools, and opportunities tailored just for you." />
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
                    <PrimaryBtn text="Next" link="/secondWelcomeScreen" />
                </div>
            </div>
        </main>
    )
}
