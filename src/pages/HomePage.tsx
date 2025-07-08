import { FunctionComponent, useState, useCallback } from "react";
import { TextField, Icon, Checkbox, FormControlLabel } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import InputGroup from "../components/InputGroup";
import NewsletterFormSection from "../components/NewsletterFormSection";
import Footer from "../components/Footer";
import styles from "./HomePage.module.css";

export type HomePageType = {
  className?: string;
};

const HomePage: FunctionComponent<HomePageType> = ({ className = "" }) => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] = useState(null);
  const [departure, setDeparture] = useState("Singapore - Changi (SIN)");
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchClick = useCallback(() => {
    navigate("/results");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onSearchFlights = useCallback(() => {
    // Navigate to results with search parameters
    const searchParams = new URLSearchParams({
      departure: departure,
      destination: destination,
      date: dateFieldDateTimePickerValue ? dateFieldDateTimePickerValue.toISOString() : ""
    });
    navigate(`/results?${searchParams.toString()}`);
  }, [navigate, departure, destination, dateFieldDateTimePickerValue]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={[styles.homePage, className].join(" ")}>
        <header className={styles.topHeader}>
          <div className={styles.topContainer}>
            <button
              className={styles.fickleflightLogo}
              onClick={onFickleflightLogoClick}
            >
              <img className={styles.symbolsIcon} alt="" src="/symbols.svg" />
            </button>
            <div className={styles.navigationRight}>
              <div className={styles.navigationMenu}>
                <div className={styles.explore}>Explore</div>
                <button className={styles.search} onClick={onSearchClick}>Search</button>
                <div className={styles.explore}>Hotels</div>
                <button className={styles.offers}>Offers</button>
              </div>
              <div className={styles.accountSection}>
                <button className={styles.loginButton} onClick={onLoginClick}>
                  Login
                </button>
                <img
                  className={styles.hamburgerMenuIcon}
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/notification1.svg"
                />
                <img
                  className={styles.unsplashd1upkifd04aIcon}
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.searchFormSection}>
          <div className={styles.searchContainer}>
            <div className={styles.bannerGradient} />
            <img
              className={styles.bannerBackgroundIcon}
              alt=""
              src="/banner-background@2x.png"
            />
            <div className={styles.searchSection}>
              <div className={styles.title}>
                <div className={styles.whereAreYou}>Where are you off too?</div>
              </div>
              <div className={styles.searchForm}>
                <div className={styles.inputsRow}>
                  <InputGroup 
                    label="Departure"
                    value={departure}
                    onChange={setDeparture}
                  />
                  <InputGroup 
                    label="Destination"
                    value={destination}
                    onChange={setDestination}
                  />
                  <div className={styles.inputGroup}>
                    <div className={styles.dateField}>
                      <DatePicker
                        label="Date"
                        value={dateFieldDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setDateFieldDateTimePickerValue(newValue);
                        }}
                        sx={{
                          "& .MuiPickersInputBase-sectionsContainer": {
                            width: "unset",
                          },
                        }}
                        slotProps={{
                          textField: {
                            variant: "outlined",
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                            color: "primary",
                            placeholder: "Date",
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <button className={styles.searchFlightsButton} onClick={onSearchFlights}>
                    <div className={styles.button}>Search flights</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <NewsletterFormSection />
          <Footer />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default HomePage;