import React, { useState } from 'react';
import Image from 'next/image'
import axios from 'axios';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';
import SecondaryTitle from '@/components/secondaryTitle';
import SecondaryBtn from '@/components/secondaryBtn';
// import API from '@/libs/axios';
import { onError } from '@/libs/errorLib';

const inter = Inter({ subsets: ['latin'] })

export default function SignUpTyping() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            await axios.post('http://localhost:8080/api/users/registerUser', {
                username,
                email,
                password
            })
            router.push('/fifthWelcomeScreen');
        } catch (err) {
            onError(err);
        }
    }

    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgFourthScreen} ${styles.secondWelcomeScreenMain} flex-col p-24 ${inter.className}`}
        >

            <div className={styles.signupFooter}>
                <div className={styles.textCenter}>
                    <div className={`${styles.mt20} ${styles.mb20}`}>
                        <SecondaryTitle style={{ color: '#FFFFFF' }} text="Create New Account" />
                    </div>

                    <div className={styles.form}>
                        <div className={styles.formField}>
                            <Image
                                src="/assets/envelop.svg"
                                alt="Email field Logo"
                                className={`${styles.inputIcon}`}
                                layout="fill"
                                priority
                            />
                            <input type='text' onChange={e => setUsername(e.target.value)} className={styles.inputField} placeholder='Username' />
                        </div>
                        <div className={`${styles.mt20} ${styles.formField}`}>
                            <Image
                                src="/assets/envelop.svg"
                                alt="Email field Logo"
                                className={`${styles.inputIcon}`}
                                layout="fill"
                                priority
                            />
                            <input type='text' onChange={e => setEmail(e.target.value)} className={styles.inputField} placeholder='Email address' />
                        </div>
                        <div className={`${styles.mt20} ${styles.formField}`}>
                            <Image
                                src="/assets/lock.svg"
                                alt="Email field Logo"
                                className={`${styles.inputIcon}`}
                                layout="fill"
                                priority
                            />
                            <input type='password' onChange={e => setPassword(e.target.value)} className={styles.inputField} placeholder='Password' />
                        </div>
                    </div>
                </div>
                <div className={`${styles.mt20} ${styles.textCenter}`}>
                    <SecondaryBtn text="SignUp" style={{ backgroundColor: '#7C68AE', marginTop: '20px' }} action={() => register()} />
                </div>
            </div>
        </main>
    )
}