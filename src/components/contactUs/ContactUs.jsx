import styles from "./contactUs.module.css";
import { SectionTitles } from "../sectionTitles/SectionTitles";
import { useForm } from "react-hook-form";
import needHelp from "../../assets/images/need-help.webp";
import address from "../../assets/images/address.webp";
import email from "../../assets/images/email.webp";
import DecorativeImage from "../../Utils/DecorativeImage";
import squareYellow from '../../assets/images/square-yellow.webp';
import polygonImg from '../../assets/images/Polygon.webp';
import circleRed from '../../assets/images/circle-red.webp';

function ContactUs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <div className={styles.contactUsContainer}>
            <SectionTitles title1="contact" title2="us" />
            <div className={styles.contactUsMainContent}>
                <div className={styles.contactUsInfoBlock}>
                    <div className={styles.contactUsInfoCart}>
                        <img src={needHelp} alt="need help" />
                        <span></span>
                        <div className={styles.contactUsInfoNumbers}>
                            <p>+374 123 456 66</p>
                            <p>+374 123 456 66</p>
                        </div>
                    </div>
                    <div className={styles.contactUsInfoCart}>
                        <img src={email} alt="email" />
                        <span></span>
                        <div className={styles.contactUsInfoNumbers}>
                            <p>Fitness@gmail.com</p>
                            <p>Team@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.contactUsInfoCart}>
                        <img src={address} alt="address" />
                        <span></span>
                        <div className={styles.contactUsInfoNumbers}>
                            <p>Street Lorem Ipsum</p>
                            <p>Yerevan, Armenia</p>
                        </div>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            placeholder="First Name *"
                            {...register("firstName", { required: true })}
                            className={styles.input}
                        />
                        <span className={styles.error}>
                            {errors.firstName && "Required Field"}
                        </span>

                        <input
                            type="text"
                            placeholder="Last Name *"
                            {...register("lastName", { required: true })}
                            className={styles.input}
                        />
                        <span className={styles.error}>
                            {errors.lastName && "Required Field"}
                        </span>
                        <input
                            type="email"
                            placeholder="Email *"
                            {...register("email", { required: true })}
                            className={styles.input}
                        />
                        <span className={styles.error}>
                            {errors.email && "Required Field"}
                        </span>
                        <textarea
                            placeholder="Message *"
                            rows="4"
                            {...register("message", { required: true })}
                            className={styles.textarea}
                        />
                        <span className={styles.error}>
                            {errors.message && "Required Field"}
                        </span>
                        <button type="submit" className={styles.button}>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
            <DecorativeImage src={polygonImg} alt="polygon" style={{right: '3%', top: '6%'}}/>
            <DecorativeImage src={squareYellow} alt="polygon" style={{left: '2%', top: '40%'}}/>
            <DecorativeImage src={circleRed} alt="polygon" style={{bottom: '-4%', left: '45%'}}/>
        </div>
    )
}

export default ContactUs