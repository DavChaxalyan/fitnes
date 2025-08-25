import ContactUs from "../components/contactUs/ContactUs"
import { Footer } from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { OurPrograms } from "../components/ourPrograms/ourPrograms"
import { OurTrainers } from "../components/ourTrainers/OurTrainers"
import PushYourselfBanner from "../components/pushYourselfBanner/pushYourselfBanner"
import { WelcomeFitpulse } from "../components/welcomeFitpulse/WelcomeFitpulse"
import styles from "./Landing.module.css"

function Landing() {
    return (
        <div>
            <Header />
            <div className={styles.mainContent}>
                <PushYourselfBanner />
                <WelcomeFitpulse />
                <OurPrograms />
                <OurTrainers />
                <ContactUs />
            </div>
            <Footer />
        </div>
    )
}

export default Landing