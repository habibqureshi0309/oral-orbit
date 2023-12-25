import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';

const inter = Inter({ subsets: ['latin'] })

export default function FifthWelcomeScreen() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgFifthScreen} ${styles.secondWelcomeScreenMain} flex-col p-24 ${inter.className}`}
        >
            <div className={`${styles.welcomeScreenTitle} ${styles.textCenter} ${styles.firstWelcomeScreenTitle}`}>
                <span>We're delighted 
                    <p>you've joined us</p></span>
            </div>
            <div className={`${styles.textCenter} ${styles.mt20} ${styles.marginAuto} ${styles.firstWelcomeScreenText}`}>
                <Text style={{color: '#FFFFFF'}} text="Now, let's make your experience even more amazing by completing your profile setup. It's a quick and easy step that will help us personalize our services just for you." />
            </div>
            <div className={styles.appFooter}>
                {/* <Image
                    src="/assets/lightLogo.svg"
                    alt="Footer Logo"
                    className={`${styles.footerLogo}`}
                    layout="fill"
                    priority
                /> */}
                <div className={styles.mt40}>
                    <PrimaryBtn text="Next" style={{ backgroundColor: '#C3F842' }} link="/aboutYourself" />
                </div>
            </div>
        </main>
    )
}
