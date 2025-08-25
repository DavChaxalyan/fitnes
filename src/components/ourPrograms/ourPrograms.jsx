import { SectionTitles } from "../sectionTitles/SectionTitles";
import styles from "./OurPrograms.module.css";
import { OurProgramsCart } from "./OurProgramsCart";
import img1 from "../../assets/images/group-workouts.webp"
import img2 from "../../assets/images/free-workout.webp"
import img3 from "../../assets/images/personal-trainer.webp"
import DecorativeImage from "../../Utils/DecorativeImage";
import squareYellow from '../../assets/images/square-yellow.webp';
import polygonImg from '../../assets/images/Polygon.webp';
import circleRed from '../../assets/images/circle-red.webp';

let ourCartData = [
    {id: 1, cartImg: img1, title: 'GROUP WORKOUTS', subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
    {id: 2, cartImg: img2, title: 'PERSONAL TRAINER', subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
    {id: 3, cartImg: img3, title: 'FREE WORKOUT', subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'}
]

export function OurPrograms() {
    return (
        <div className={styles.ourProgramsContainer}>
            <SectionTitles title1="our" title2="programs" />
            <div className={styles.ourProgramsCartContainer}>
                {ourCartData.map((item) => (
                    <OurProgramsCart
                        key={item.id}
                        img={item.cartImg}
                        title={item.title}
                        subtitle={item.subtitle}
                    />
                ))}
            </div>
            <DecorativeImage src={polygonImg} alt="polygon" style={{left: '3%', top: '15%'}}/>
            <DecorativeImage src={squareYellow} alt="polygon" style={{right: '3%', top: '10%'}}/>
            <DecorativeImage src={circleRed} alt="polygon" style={{left: '37%', top: '50%'}}/>
        </div>
    )
}