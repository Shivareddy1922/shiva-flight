import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.fickleflightBio}>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
        <div className={styles.fickleFlightIs}>
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <img className={styles.socialIcons} alt="" src="/social-icons.svg" />
      </div>
      <div className={styles.seperator} />
      <div className={styles.footerLinks}>
        <div className={styles.company}>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.company1}>Company</div>
          <div className={styles.news}>News</div>
          <div className={styles.careers}>Careers</div>
          <div className={styles.howWeWork}>How we work</div>
        </div>
        <div className={styles.company}>
          <div className={styles.account}>Account</div>
          <div className={styles.support1}>Support</div>
          <div className={styles.supportCenter}>Support Center</div>
          <div className={styles.faq}>FAQ</div>
          <div className={styles.accessibility}>Accessibility</div>
        </div>
        <div className={styles.more}>
          <div className={styles.covidAdvisory}>Covid Advisory</div>
          <div className={styles.more1}>More</div>
          <div className={styles.airlineFees}>Airline Fees</div>
          <div className={styles.tips}>Tips</div>
          <div className={styles.howWeWork}>Quarantine Rules</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
