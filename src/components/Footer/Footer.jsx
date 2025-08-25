import styles from "./Footer.module.css";
import facebook from "../../assets/images/facebook.webp";
import twitter from "../../assets/images/twiter.webp";
import instagram from "../../assets/images/instagram.webp";
import linkedin from "../../assets/images/linkedin.webp";

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.mainContentFooter}>
                <div className={styles.logo}>
                    <span className={styles.logoFit}>Fit</span>
                    <span className={styles.logoPulse}>Pulse</span>
                </div>
                <div className={styles.mainContentFooterItems}>
                <div className={styles.column}>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className={styles.socialIcons}>
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={instagram} alt="Instagram" />
          <img src={linkedin} alt="LinkedIn" />
        </div>
      </div>

      <div className={styles.column}>
        <h4 className={styles.title}>Company</h4>
        <ul className={styles.list}>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contacts</li>
        </ul>
      </div>

      <div className={styles.column}>
        <h4 className={styles.title}>Contacts</h4>
        <p><strong>Phone:</strong> +374 123 456 66</p>
        <p><strong>Email:</strong> Fitness@gmail.com</p>
        <p><strong>Location:</strong> Street Lorem Ipsum</p>
      </div>

      <div className={styles.column}>
        <h4 className={styles.title}>Location</h4>
        <p><strong>Street:</strong> Lorem Ipsum</p>
        <p><strong>Country:</strong> Yerevan, Armenia</p>
      </div>
                </div>
            </div>
            <div className={styles.bottomContentFooter}>
                <p>© Copyrights 2025. All Rights Reserved.</p>
            </div>
        </div>
    )
}