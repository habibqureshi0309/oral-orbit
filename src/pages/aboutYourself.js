import React, { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Text from "@/components/text";
import PrimaryBtn from '@/components/primaryBtn';
import SecondaryTitle from '@/components/secondaryTitle';
import ProfileHeader from '@/components/profileHeader';
import SecondaryBtn from '@/components/secondaryBtn';

const inter = Inter({ subsets: ['latin'] })

export default function AboutYourself() {

    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [designation, setDesignation] = useState('');
    const [workingSince, setWorkingSince] = useState('');
    const [err, setErr] = useState({});

    const validateInfo = () => {
        let flag = true
        if (!title) {
            flag = false
            setErr({
                title: 'title',
                message: 'Title is empty'
            })
        } else if (!firstName) {
            flag = false
            setErr({
                title: 'firstName',
                message: 'First name is empty'
            })
        } else if (!middleName) {
            flag = false
            setErr({
                title: 'middleName',
                message: 'Middle name is empty'
            })
        } else if (!lastName) {
            flag = false
            setErr({
                title: 'lastName',
                message: 'Last name is empty'
            })
        } else if (!designation) {
            flag = false
            setErr({
                title: 'designation',
                message: 'Designation is empty'
            })
        } else if (!workingSince) {
            flag = false
            setErr({
                title: 'workingSince',
                message: 'Working since is empty'
            })
        }
        return flag
    }

    const updateUser = async () => {
        try {
            const validate = validateInfo()
            if (validate) {
                await axios.post('http://localhost:8080/api/users/updateUser', {
                    title,
                    firstName,
                    middleName,
                    lastName,
                    designation,
                    workingSince
                })
                router.push('/aboutBusiness');
            }
        } catch (err) {
            onError(err);
        }
    }

    return (
        <main
            className={`min-h-screen ${styles.initializingScreen} ${styles.bgLight} ${styles.secondWelcomeScreenMain} flex-col ${inter.className}`}
        >
            <ProfileHeader style={{ backgroundColor: '#F4D3E0' }} completionPercentage="0% Completed" promtText="Complete your profile" title="Tell us about yourself." />
            <div className={styles.profilePage}>
                <div>
                    <Image
                        src="/assets/profilePic.png"
                        alt="Profile Picture"
                        className={`${styles.profilePicture}`}
                        layout="fill"
                        priority
                    />
                </div>
                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.firstFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Title</label>
                        <input type="text" onChange={e => setTitle(e.target.value)} className={styles.firstField} style={{ width: '95%' }} />
                        <div className={{display: `${err?.title === 'title' ? 'block' : 'none'}`}}>
                            <Text text="Please fill out the Title field" style={{fontSize: '12px', color: 'red'}}/>
                        </div>
                    </div>
                    <div className={styles.thirdFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>First Name</label>
                        <input type="text" onChange={e => setFirstName(e.target.value)} className={styles.thirdField} style={{ width: '96%' }} />
                        <div className={{display: `${err?.title === 'firstName' ? 'block' : 'none'}`}}>
                            <Text text="Please fill out the First name field" style={{fontSize: '12px', color: 'red'}}/>
                        </div>
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Middle Name</label>
                        <input type="text" onChange={e => setMiddleName(e.target.value)} className={styles.secondField} style={{ width: '95%' }} />
                        <div className={{display: `${err?.title === 'middleName' ? 'block' : 'none'}`}}>
                            <Text text="Please fill out the Middle name field" style={{fontSize: '12px', color: 'red'}}/>
                        </div>
                    </div>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Last Name</label>
                        <input type="text" onChange={e => setLastName(e.target.value)} className={styles.secondField} style={{ width: '95%' }} />
                        <div className={{display: `${err?.title === 'lastName' ? 'block' : 'none'}`}}>
                            <Text text="Please fill out the Last name field" style={{fontSize: '12px', color: 'red'}}/>
                        </div>
                    </div>
                </div>

                <div className={`${styles.mt10} ${styles.displayFlex}`}>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Designation</label>
                        <input type="text" onChange={e => setDesignation(e.target.value)} className={styles.secondField} style={{ width: '95%' }} />
                        <div className={{display: `${err?.title === 'designation' ? 'block' : 'none'}`}}>
                            <Text text="Please fill out the Designation field" style={{fontSize: '12px', color: 'red'}}/>
                        </div>
                    </div>
                    <div className={styles.secondFieldSec}>
                        <label className={styles.displayBlock} style={{ fontSize: '14px' }}>Working Since</label>
                        <input type="text" onChange={e => setWorkingSince(e.target.value)} className={styles.secondField} style={{ width: '95%' }} />
                        <div className={{display: `${err?.title === 'workingSince' ? 'block' : 'none'}`}}>
                            <Text text="Please fill out the Working since field" style={{fontSize: '12px', color: 'red'}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.appFooter}>

                <div className={styles.mt40}>
                    <SecondaryBtn text="Save" style={{ backgroundColor: '#C3F842', color: '#000', fontWeight: 'bold' }} action={() => updateUser()} />
                </div>
            </div>
        </main>
    )
}
