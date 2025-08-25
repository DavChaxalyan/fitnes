import DecorativeImage from '../../Utils/DecorativeImage';
import styles from './PushYourselfBanner.module.css';
import polygonImg from '../../assets/images/Polygon.webp';
import circleYellow from '../../assets/images/circle-yellow.webp';
import circleRed from '../../assets/images/circle-red.webp';
import squareYellow from '../../assets/images/square-yellow.webp';
import circleFrame from '../../assets/images/circle-frame-yellow.webp';

export default function PushYourselfBanner() {

  return (
    <section className={styles.section}>
      <div className={styles.yourselfTitleBlock}>
        <span className={styles.push}>Push</span>
        <span className={styles.yourself}>Yourself</span>
      </div>
      <div className={styles.yourselfSubTitleBlock}>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</span>
      </div>
      <DecorativeImage src={polygonImg} alt="polygon" style={{top: '30%', left: '8%'}}/>
      <DecorativeImage src={polygonImg} alt="polygon" style={{top: '7%', right: '15%', transform: 'rotate(80deg)'}}/>
      <DecorativeImage src={circleYellow} alt="polygon" style={{top: '15%', left: '20%'}}/>
      <DecorativeImage src={circleRed} alt="polygon" style={{top: '60%', left: '10%'}}/>
      <DecorativeImage src={circleRed} alt="polygon" style={{top: '40%', right: '12%'}}/>
      <DecorativeImage src={circleRed} alt="polygon" style={{bottom: '5%', left: '50%'}}/>
      <DecorativeImage src={squareYellow} alt="polygon" style={{bottom: '9%', left: '10%'}}/>
      <DecorativeImage src={polygonImg} alt="polygon" style={{bottom: '14%', right: '18%', transform: 'rotate(80deg)'}}/>
      <DecorativeImage src={circleFrame} alt="polygon" style={{bottom: '35%', right: '8%'}}/>
    </section>
  );
}
