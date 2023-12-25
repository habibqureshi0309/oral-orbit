import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';
import SecondaryTitle from '@/components/secondaryTitle';

const inter = Inter({ subsets: ['latin'] })

export default function SignUpPage() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgFourthScreen} ${styles.secondWelcomeScreenMain} flex-col p-24 ${inter.className}`}
        >

            <div className={styles.signupFooter}>
                <div className={styles.textCenter}>
                    <Image
                        src="/assets/lightLogo.svg"
                        alt="Footer Logo"
                        className={`${styles.image} ${styles.signupLogo} ${styles.marginAuto}`}
                        layout="fill"
                        priority
                    />
                    <div className={`${styles.mt20} ${styles.mb20}`}>
                        <SecondaryTitle style={{ color: '#FFFFFF' }} text="Create New Account" />
                    </div>

                    <div className={`${styles.displayFlex} ${styles.justifyContentCenter} ${styles.accounts}`}>
                        <div>
                            <Image
                                src="/assets/jobSeeker.svg"
                                alt="Job Seeker Logo"
                                className={`${styles.image} ${styles.signupLogo} ${styles.marginAuto}`}
                                layout="fill"
                                priority
                            />
                            <Text text="Job Seeker" style={{ color: '#FFFFFF', fontWeight: 'bold' }} />
                        </div>
                        <div className={styles.ml20}>
                            <Image
                                src="/assets/practice.svg"
                                alt="Job Seeker Logo"
                                className={`${styles.image} ${styles.signupLogo} ${styles.marginAuto}`}
                                layout="fill"
                                priority
                            />
                            <Text text="Job Seeker" style={{ color: '#FFFFFF', fontWeight: 'bold' }} />
                        </div>
                    </div>
                </div>
                <div className={`${styles.mt20} ${styles.textCenter}`}>
                    <PrimaryBtn text="Next" style={{ backgroundColor: '#7C68AE', marginTop: '20px' }} link="/signUpTyping" />
                </div>
            </div>
        </main>
    )
}