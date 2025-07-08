import { FunctionComponent, useState, useCallback } from "react";
import { TextField, Icon, Checkbox, FormControlLabel } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import InputGroup from "./InputGroup";
import FlightCards from "./FlightCards";
import NewsletterFormSection from "./NewsletterFormSection";
import Footer from "./Footer";
import styles from "./ResultsPage.module.css";

export type ResultsPageType = {
  className?: string;
};

const ResultsPage: FunctionComponent<ResultsPageType> = ({
  className = "",
}) => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={[styles.resultsPage, className].join(" ")}>
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
                <div
                  className={styles.explore}
                  onClick={onFickleflightLogoClick}
                >
                  Explore
                </div>
                <button className={styles.search}>Search</button>
                <div className={styles.explore} onClick={onHotelsTextClick}>
                  Hotels
                </div>
                <button className={styles.offers}>Offers</button>
              </div>
              <div className={styles.accountSection}>
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
                  <InputGroup />
                  <InputGroup />
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
                  <button className={styles.searchFlightsButton}>
                    <div className={styles.button}>Search flights</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchResults}>
          <div className={styles.searchFilters}>
            <div className={styles.resultsSummary}>
              <div className={styles.results}>10 out of 177 Results</div>
              <img
                className={styles.resultsSummaryChild}
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className={styles.bookingOptions}>
              <b className={styles.results1}>Booking Options</b>
              <FormControlLabel
                className={styles.component1formcheckbox}
                label="Book on Fickleflight"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckbox1}
                label="Official Airline Websites"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className={styles.flightExperience}>
              <b className={styles.results2}>Flight Experience</b>
              <FormControlLabel
                className={styles.component1formcheckbox}
                label="No overnight flights"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckbox1}
                label="No long stop-overs"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <div className={styles.airlines}>
              <b className={styles.results3}>Airlines</b>
              <FormControlLabel
                className={styles.component1formcheckbox}
                label="Singapore Airlines"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckbox1}
                label="Qatar Airways"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <div className={styles.stops}>
              <b className={styles.results4}>Stops</b>
              <FormControlLabel
                className={styles.component1formcheckbox}
                label="1 Stop"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckbox1}
                label="2 Stops"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <img className={styles.seperatorIcon} alt="" src="/seperator.svg" />
          </div>
          <FlightCards />
        </div>
        <div className={styles.footerSection}>
          <div className={styles.footerSection}>
            <NewsletterFormSection />
            <Footer />
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ResultsPage;
