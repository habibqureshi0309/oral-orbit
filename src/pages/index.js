import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/main.module.css"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen ${styles.initializingScreen} flex-col items-center p-24 ${inter.className}`}
    >
      <Image
        src="/assets/startLogo.svg"
        alt="Start Logo"
        className={`${styles.image} ${styles.initializingLogo}`}
        layout="fill"
        priority
      />
      <Link href="/firstWelcomeScreen">
      <Image
        src="/assets/footerLogo.png"
        alt="Footer Logo"
        className={`${styles.firstScreenfooterLogo}`}
        layout="fill"
        priority
      />
      </Link>
    </main>
  )
}
