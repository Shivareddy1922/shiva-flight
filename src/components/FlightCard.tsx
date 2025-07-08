import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FlightCard.module.css";

export type FlightCardType = {
  className?: string;
  turkish?: string;
  singaporeAirlines?: string;
  aM?: string;
  flightIcon?: string;
  h55MNonStop?: string;
  aM1?: string;
  s730?: string;

  /** Style props */
  turkishIconTransform?: CSSProperties["transform"];
  singaporeAirlinesTextAlign?: CSSProperties["textAlign"];
  singaporeAirlinesDisplay?: CSSProperties["display"];
  singaporeAirlinesWidth?: CSSProperties["width"];
  flightDurationWidth?: CSSProperties["width"];
  flightIconWidth?: CSSProperties["width"];
  flightIconRight?: CSSProperties["right"];
  flightIconLeft?: CSSProperties["left"];
};

const FlightCard: FunctionComponent<FlightCardType> = ({
  className = "",
  turkish,
  turkishIconTransform,
  singaporeAirlines,
  singaporeAirlinesTextAlign,
  singaporeAirlinesDisplay,
  singaporeAirlinesWidth,
  aM,
  flightDurationWidth,
  flightIcon,
  flightIconWidth,
  flightIconRight,
  flightIconLeft,
  h55MNonStop,
  aM1,
  s730,
}) => {
  const turkishIconStyle: CSSProperties = useMemo(() => {
    return {
      transform: turkishIconTransform,
    };
  }, [turkishIconTransform]);

  const singaporeAirlinesStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: singaporeAirlinesTextAlign,
      display: singaporeAirlinesDisplay,
      width: singaporeAirlinesWidth,
    };
  }, [
    singaporeAirlinesTextAlign,
    singaporeAirlinesDisplay,
    singaporeAirlinesWidth,
  ]);

  const flightDurationStyle: CSSProperties = useMemo(() => {
    return {
      width: flightDurationWidth,
    };
  }, [flightDurationWidth]);

  const flightIconStyle: CSSProperties = useMemo(() => {
    return {
      width: flightIconWidth,
      right: flightIconRight,
      left: flightIconLeft,
    };
  }, [flightIconWidth, flightIconRight, flightIconLeft]);

  return (
    <div className={[styles.flightCard, className].join(" ")}>
      <div className={styles.airlineSection}>
        <img
          className={styles.turkishIcon}
          alt=""
          src={turkish}
          style={turkishIconStyle}
        />
        <div
          className={styles.singaporeAirlines}
          style={singaporeAirlinesStyle}
        >
          {singaporeAirlines}
        </div>
      </div>
      <div className={styles.flightDetailsSection}>
        <div className={styles.departureDetails}>
          <div className={styles.am}>{aM}</div>
          <div className={styles.sin}>SIN</div>
        </div>
        <div className={styles.flightduration} style={flightDurationStyle}>
          <img
            className={styles.flighticon}
            alt=""
            src={flightIcon}
            style={flightIconStyle}
          />
          <div className={styles.h55mNonStop}>{h55MNonStop}</div>
        </div>
        <div className={styles.arrivalDetails}>
          <div className={styles.am}>{aM1}</div>
          <div className={styles.sin1}>LAX</div>
        </div>
      </div>
      <div className={styles.priceSection}>
        <img className={styles.priceSectionChild} alt="" src="/vector-1.svg" />
        <b className={styles.s730}>{s730}</b>
      </div>
    </div>
  );
};

export default FlightCard;
