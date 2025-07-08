import { FunctionComponent } from "react";
import FlightCard from "./FlightCard";
import styles from "./FlightCards.module.css";

export type FlightCardsType = {
  className?: string;
};

const FlightCards: FunctionComponent<FlightCardsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.flightCards, className].join(" ")}>
      <FlightCard
        turkish="/turkish.svg"
        singaporeAirlines="Turkish Airlines"
        aM="11:35 PM"
        flightIcon="/flighticon.svg"
        h55MNonStop="33H 10M, 1-stop"
        aM1="4:45 PM"
        s730="S$ 723"
      />
      <FlightCard
        turkish="/sia.svg"
        turkishIconTransform="unset"
        singaporeAirlines="Singapore Airlines"
        singaporeAirlinesTextAlign="center"
        singaporeAirlinesDisplay="inline-block"
        singaporeAirlinesWidth="140px"
        aM="8:45 PM"
        flightDurationWidth="129px"
        flightIcon="/flighticon1.svg"
        flightIconWidth="83.02%"
        flightIconRight="8.27%"
        flightIconLeft="8.71%"
        h55MNonStop="15H 10M, 2-stops"
        aM1="7:55 PM"
        s730="S$ 900"
      />
      <FlightCard
        turkish="/japan.svg"
        turkishIconTransform="scale(0.8)"
        singaporeAirlines="Japan Airlines"
        singaporeAirlinesTextAlign="left"
        singaporeAirlinesDisplay="unset"
        singaporeAirlinesWidth="unset"
        aM="8:20 PM"
        flightDurationWidth="121px"
        flightIcon="/flighticon1.svg"
        flightIconWidth="88.51%"
        flightIconRight="6.34%"
        flightIconLeft="5.15%"
        h55MNonStop="17H 30M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 859"
      />
      <FlightCard
        turkish="/ana.svg"
        turkishIconTransform="scale(0.8)"
        singaporeAirlines="ANA"
        singaporeAirlinesTextAlign="left"
        singaporeAirlinesDisplay="unset"
        singaporeAirlinesWidth="unset"
        aM="6:35 PM"
        flightDurationWidth="121px"
        flightIcon="/flighticon1.svg"
        flightIconWidth="88.51%"
        flightIconRight="5.51%"
        flightIconLeft="5.98%"
        h55MNonStop="19H 15M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 936"
      />
      <FlightCard
        turkish="/americanairlines.svg"
        turkishIconTransform="unset"
        singaporeAirlines="American Airlines"
        singaporeAirlinesTextAlign="center"
        singaporeAirlinesDisplay="unset"
        singaporeAirlinesWidth="unset"
        aM="8:20 PM"
        flightDurationWidth="121px"
        flightIcon="/flighticon1.svg"
        flightIconWidth="88.51%"
        flightIconRight="5.51%"
        flightIconLeft="5.98%"
        h55MNonStop="17H 30M, 1-stop"
        aM1="9:50 AM"
        s730="S$ 939"
      />
      <FlightCard
        turkish="/turkish.svg"
        turkishIconTransform="unset"
        singaporeAirlines="Turkish Airlines"
        singaporeAirlinesTextAlign="left"
        singaporeAirlinesDisplay="unset"
        singaporeAirlinesWidth="unset"
        aM="11:35 PM"
        flightDurationWidth="129px"
        flightIcon="/flighticon1.svg"
        flightIconWidth="83.02%"
        flightIconRight="8.27%"
        flightIconLeft="8.71%"
        h55MNonStop="33H 10M, 2-stops"
        aM1="4:45 PM"
        s730="S$ 673"
      />
      <FlightCard
        turkish="/japan1.svg"
        turkishIconTransform="scale(0.8)"
        singaporeAirlines="Japan Airlines"
        singaporeAirlinesTextAlign="left"
        singaporeAirlinesDisplay="unset"
        singaporeAirlinesWidth="unset"
        aM="10:25 PM"
        flightDurationWidth="121px"
        flightIcon="/flighticon1.svg"
        flightIconWidth="88.51%"
        flightIconRight="5.51%"
        flightIconLeft="5.98%"
        h55MNonStop="26H 45M, 1-stop"
        aM1="9:10 AM"
        s730="S$ 859"
      />
      <FlightCard
        turkish="/americanairlines1.svg"
        turkishIconTransform="unset"
        singaporeAirlines="American Airlines"
        singaporeAirlinesTextAlign="center"
        singaporeAirlinesDisplay="unset"
        singaporeAirlinesWidth="unset"
        aM="10:25 PM"
        flightDurationWidth="121px"
        flightIcon="/flighticon1.svg"
        flightIconWidth="88.51%"
        flightIconRight="5.51%"
        flightIconLeft="5.98%"
        h55MNonStop="26H 45M, 1-stop"
        aM1="9:10 AM"
        s730="S$ 859"
      />
      <button className={styles.primaryButton}>
        <div className={styles.primaryButtonChild} />
        <div className={styles.searchFlights}>Show more results</div>
      </button>
    </div>
  );
};

export default FlightCards;
