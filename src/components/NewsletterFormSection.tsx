import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./NewsletterFormSection.module.css";

export type NewsletterFormSectionType = {
  className?: string;
};

const NewsletterFormSection: FunctionComponent<NewsletterFormSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.newsletterFormSection, className].join(" ")}>
      <img
        className={styles.newsletterSectionBackground}
        alt=""
        src="/newsletter-section-background@2x.png"
      />
      <div className={styles.subscribeForm}>
        <div className={styles.formHeader}>
          <b className={styles.formTitleSubtext}>subscribe to our newsletter</b>
          <b className={styles.formTitle}>Get weekly updates</b>
        </div>
        <div className={styles.form}>
          <div className={styles.formText}>
            <div className={styles.fillInYour}>
              Fill in your details to join the party!
            </div>
          </div>
          <div className={styles.formFields}>
            <div className={styles.formText}>
              <TextField
                className={styles.input}
                color="primary"
                label="Your name"
                size="medium"
                variant="outlined"
                type="text"
                sx={{ "& .MuiInputBase-root": { height: "56px" } }}
              />
            </div>
            <div className={styles.formText}>
              <TextField
                className={styles.input}
                color="primary"
                label="Email address"
                size="medium"
                variant="outlined"
                type="text"
                sx={{ "& .MuiInputBase-root": { height: "56px" } }}
              />
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.unstyledbutton}>
              <div className={styles.button1}>submit</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterFormSection;
