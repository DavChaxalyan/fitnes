import { SectionTitles } from "../sectionTitles/SectionTitles";
import styles from "./ourTrainers.module.css"
import { OurTrainersCart } from "./OurTrainersCart";
import trainer1 from "../../assets/images/trainer1.webp";
import trainer2 from "../../assets/images/trainer2.webp";
import trainer3 from "../../assets/images/trainer3.webp";
import trainer4 from "../../assets/images/trainer4.webp";
import facebook from "../../assets/images/facebook.webp";
import twitter from "../../assets/images/twiter.webp";
import instagram from "../../assets/images/instagram.webp";
import linkedin from "../../assets/images/linkedin.webp";
import DecorativeImage from "../../Utils/DecorativeImage";
import polygonImg from '../../assets/images/Polygon.webp';
import circleRed from '../../assets/images/circle-red.webp';
import circleFrame from '../../assets/images/circle-frame-yellow.webp';

const trainersData = [
    {
      trainerImg: trainer1,
      trainerName: "Michelle piters",
      trainerRole: "Weightlifting",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      socialIcons: [
        { id: 1, src: facebook, title: "Facebook" },
        { id: 2, src: twitter, title: "Twitter" },
        { id: 3, src: instagram, title: "Instagram" },
        { id: 4, src: linkedin, title: "linkedin" },
      ],
    },
    {
      trainerImg: trainer2,
      trainerName: "SAMANTA piters",
      trainerRole: "Weightlifting",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      socialIcons: [
        { id: 1, src: facebook, title: "Facebook" },
        { id: 2, src: twitter, title: "Twitter" },
        { id: 3, src: instagram, title: "Instagram" },
        { id: 4, src: linkedin, title: "linkedin" },
      ],
    },
    {
      trainerImg: trainer3,
      trainerName: "SAMANTA piters",
      trainerRole: "Weightlifting",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      socialIcons: [
        { id: 1, src: facebook, title: "Facebook" },
        { id: 2, src: twitter, title: "Twitter" },
        { id: 3, src: instagram, title: "Instagram" },
        { id: 4, src: linkedin, title: "linkedin" },
      ],
    },
    {
    trainerImg: trainer4,
    trainerName: "Michelle piters",
    trainerRole: "Weightlifting",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    socialIcons: [
        { id: 1, src: facebook, title: "Facebook" },
        { id: 2, src: twitter, title: "Twitter" },
        { id: 3, src: instagram, title: "Instagram" },
        { id: 4, src: linkedin, title: "linkedin" },
    ],
    }
  ];
  

export function OurTrainers() {
    return (
        <div className={styles.ourTrainersContainer}>
            <SectionTitles title1="our" title2="trainers" />
            <div className={styles.ourTrainersCartContainer}>
            {trainersData.map((trainer, index) => (
                <OurTrainersCart
                    key={index}
                    trainerImg={trainer.trainerImg}
                    trainerName={trainer.trainerName}
                    trainerRole={trainer.trainerRole}
                    bio={trainer.bio}
                    socialIcons={trainer.socialIcons}
                />
            ))}  
            </div>
            <DecorativeImage src={polygonImg} alt="polygon" style={{left: '20%', top: '5%'}}/>
            <DecorativeImage src={circleFrame} alt="polygon" style={{right: '1%', top: '12%'}}/>
            <DecorativeImage src={circleRed} alt="polygon" style={{left: '1%', top: '40%'}}/>
        </div>
    )
}