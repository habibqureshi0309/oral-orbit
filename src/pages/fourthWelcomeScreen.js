import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';

const inter = Inter({ subsets: ['latin'] })

export default function FourthWelcomeScreen() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgFourthScreen} ${styles.secondWelcomeScreenMain} flex-col p-24 ${inter.className}`}
        >
            <div className={`${styles.welcomeScreenTitle} ${styles.firstWelcomeScreenTitle}`}>
                <span>Post
                    <p>Dental Jobs</p>
                    Effortlessly.
                </span>
            </div>
            <div className={styles.firstWelcomeScreenText}>
                <Text text="Posting dental jobs is seamless. Tailored for the oral healthcare realm, we connect you to top talent in just a few clicks. Efficiency meets excellence." />
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
                <PrimaryBtn text="Let's get started" style={{backgroundColor:'#C3F842'}} link="/signUpPage" />
                </div>
            </div>
        </main>
    )
}
