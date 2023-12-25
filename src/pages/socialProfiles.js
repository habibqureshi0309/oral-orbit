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

export default function SocialProfiles() {
    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgLight} ${styles.secondWelcomeScreenMain} flex-col ${inter.className}`}
        >
            <ProfileHeader style={{ backgroundColor: '#E4ECE9' }} completionPercentage="0% Completed" promtText="Complete your profile" title="Social Profiles" />
            <div className={styles.profilePage}>
                <Text text="Would you like to add social media profiles?" />
                <div className={`${styles.mt30} ${styles.displayFlex}`}>
                    <div style={{width: '5%', margin: 'auto'}}>
                        <Image
                            src="/assets/instagram.svg"
                            alt="Add more"
                            className={`${styles.socialIcons}`}
                            layout="fill"
                            priority
                        />
                    </div>
                    <div style={{width: '90%'}}>
                        <input type="text" className={styles.firstField} style={{ width: '80%' }} />
                    </div>
                </div>

                <div className={`${styles.mt15} ${styles.displayFlex}`}>
                    <div style={{width: '5%', margin: 'auto'}}>
                        <Image
                            src="/assets/linkedin.svg"
                            alt="Add more"
                            className={`${styles.socialIcons}`}
                            layout="fill"
                            priority
                        />
                    </div>
                    <div style={{width: '90%'}}>
                        <input type="text" className={styles.firstField} style={{ width: '80%' }} />
                    </div>
                </div>

                <div className={`${styles.mt15} ${styles.displayFlex}`}>
                    <div style={{width: '5%', margin: 'auto'}}>
                        <Image
                            src="/assets/facebook.svg"
                            alt="Add more"
                            className={`${styles.socialIcons}`}
                            layout="fill"
                            priority
                        />
                    </div>
                    <div style={{width: '90%'}}>
                        <input type="text" className={styles.firstField} style={{ width: '80%' }} />
                    </div>
                </div>

                <div className={`${styles.mt15} ${styles.displayFlex}`}>
                    <div style={{width: '5%', margin: 'auto'}}>
                        <Image
                            src="/assets/youtube.svg"
                            alt="Add more"
                            className={`${styles.socialIcons}`}
                            layout="fill"
                            priority
                        />
                    </div>
                    <div style={{width: '90%'}}>
                        <input type="text" className={styles.firstField} style={{ width: '80%' }} />
                    </div>
                </div>

                <div className={`${styles.mt15} ${styles.displayFlex}`}>
                    <div style={{width: '5%', margin: 'auto'}}>
                        <Image
                            src="/assets/tiktok.svg"
                            alt="Add more"
                            className={`${styles.socialIcons}`}
                            layout="fill"
                            priority
                        />
                    </div>
                    <div style={{width: '90%'}}>
                        <input type="text" className={styles.firstField} style={{ width: '80%' }} />
                    </div>
                </div>
            </div>
            <div className={styles.appFooter}>
                <div className={styles.mt40}>
                    <PrimaryBtn text="Save" style={{ backgroundColor: '#C3F842', color: '#000', fontWeight: 'bold' }} link="/consents" />
                </div>
            </div>
        </main>
    )
}
