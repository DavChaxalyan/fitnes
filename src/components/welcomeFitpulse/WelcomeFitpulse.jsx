import { SectionTitles } from "../sectionTitles/SectionTitles";
import styles from "./welcomeFitpulse.module.css";
import img1 from "../../assets/images/fitpulse1.webp";
import img2 from "../../assets/images/fitpulse2.webp";
import DecorativeImage from "../../Utils/DecorativeImage";
import polygonImg from '../../assets/images/Polygon.webp';
import circleRed from '../../assets/images/circle-red.webp';
import polygonYellow from '../../assets/images/polygon-yellow.webp';

export function WelcomeFitpulse() {
    return (
        <div className={styles.ourFitpulseContainer}>
            <SectionTitles title1="welcome to" title2="fitpulse" />
            <div className={styles.ourFitpulseContent}>
                <div className={styles.ourFitpulseImgsBlock}>
                    <div className={styles.ourFitpulseImg1}>
                        <img src={img1} alt="fitpulse" />
                    </div>
                    <div className={styles.ourFitpulseImg2}>
                        <img src={img2} alt="fitpulse" />
                    </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <DecorativeImage src={polygonYellow} alt="polygon" style={{left: '1%', top: '30%'}}/>
            <DecorativeImage src={circleRed} alt="polygon" style={{left: '40%', top: '30%'}}/>
            <DecorativeImage src={polygonImg} alt="polygon" style={{right: '5%', top: '15%'}}/>
            <DecorativeImage src={circleRed} alt="polygon" style={{bottom: '-8%', left: '50%'}}/>
        </div>
    )
}