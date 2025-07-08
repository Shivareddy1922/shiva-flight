import { FunctionComponent } from "react";
import FlightCard from "./FlightCard";
import styles from "./FlightCards.module.css";

export type FlightCardsType = {
  className?: string;
  filters?: {
    bookOnFickleflight?: boolean;
    officialAirlines?: boolean;
    noOvernightFlights?: boolean;
    noLongStopovers?: boolean;
    singaporeAirlines?: boolean;
    qatarAirways?: boolean;
    oneStop?: boolean;
    twoStops?: boolean;
  };
};

const FlightCards: FunctionComponent<FlightCardsType> = ({
  className = "",
  filters = {},
}) => {
  // Sample flight data
  const allFlights = [
    {
      id: 1,
      airline: "Turkish Airlines",
      logo: "/turkish.svg",
      departure: "11:35 PM",
      arrival: "4:45 PM",
      duration: "33H 10M, 1-stop",
      price: "S$ 723",
      stops: 1,
      isOvernight: true,
    },
    {
      id: 2,
      airline: "Singapore Airlines",
      logo: "/sia.svg",
      departure: "8:45 PM",
      arrival: "7:55 PM",
      duration: "15H 10M, 2-stops",
      price: "S$ 900",
      stops: 2,
      isOvernight: false,
    },
    {
      id: 3,
      airline: "Japan Airlines",
      logo: "/japan.svg",
      departure: "8:20 PM",
      arrival: "9:50 PM",
      duration: "17H 30M, 1-stop",
      price: "S$ 859",
      stops: 1,
      isOvernight: false,
    },
    {
      id: 4,
      airline: "ANA",
      logo: "/ana.svg",
      departure: "6:35 PM",
      arrival: "9:50 PM",
      duration: "19H 15M, 1-stop",
      price: "S$ 936",
      stops: 1,
      isOvernight: false,
    },
    {
      id: 5,
      airline: "American Airlines",
      logo: "/americanairlines.svg",
      departure: "8:20 PM",
      arrival: "9:50 AM",
      duration: "17H 30M, 1-stop",
      price: "S$ 939",
      stops: 1,
      isOvernight: true,
    },
    {
      id: 6,
      airline: "Turkish Airlines",
      logo: "/turkish.svg",
      departure: "11:35 PM",
      arrival: "4:45 PM",
      duration: "33H 10M, 2-stops",
      price: "S$ 673",
      stops: 2,
      isOvernight: true,
    },
    {
      id: 7,
      airline: "Japan Airlines",
      logo: "/japan1.svg",
      departure: "10:25 PM",
      arrival: "9:10 AM",
      duration: "26H 45M, 1-stop",
      price: "S$ 859",
      stops: 1,
      isOvernight: true,
    },
    {
      id: 8,
      airline: "American Airlines",
      logo: "/americanairlines1.svg",
      departure: "10:25 PM",
      arrival: "9:10 AM",
      duration: "26H 45M, 1-stop",
      price: "S$ 859",
      stops: 1,
      isOvernight: true,
    },
  ];

  // Filter flights based on selected filters
  const filteredFlights = allFlights.filter(flight => {
    // Filter by overnight flights
    if (filters.noOvernightFlights && flight.isOvernight) {
      return false;
    }
    
    // Filter by airline
    if (filters.singaporeAirlines && !flight.airline.includes("Singapore")) {
      return false;
    }
    
    // Filter by stops
    if (filters.oneStop && flight.stops !== 1) {
      return false;
    }
    
    if (filters.twoStops && flight.stops !== 2) {
      return false;
    }
    
    return true;
  });

  return (
    <div className={[styles.flightCards, className].join(" ")}>
      {filteredFlights.length > 0 ? (
        filteredFlights.map((flight, index) => (
          <FlightCard
            key={flight.id}
            turkish={flight.logo}
            turkishIconTransform={flight.airline.includes("Japan") || flight.airline.includes("ANA") ? "scale(0.8)" : "unset"}
            singaporeAirlines={flight.airline}
            singaporeAirlinesTextAlign={flight.airline.includes("Singapore") || flight.airline.includes("American") ? "center" : "left"}
            singaporeAirlinesDisplay={flight.airline.includes("Singapore") ? "inline-block" : "unset"}
            singaporeAirlinesWidth={flight.airline.includes("Singapore") ? "140px" : "unset"}
            aM={flight.departure}
            flightDurationWidth={flight.stops === 2 ? "129px" : "121px"}
            flightIcon={index === 0 ? "/flighticon.svg" : "/flighticon1.svg"}
            flightIconWidth={flight.stops === 2 ? "83.02%" : "88.51%"}
            flightIconRight={flight.stops === 2 ? "8.27%" : "5.51%"}
            flightIconLeft={flight.stops === 2 ? "8.71%" : "5.98%"}
            h55MNonStop={flight.duration}
            aM1={flight.arrival}
            s730={flight.price}
          />
        ))
      ) : (
        <div className={styles.noResults}>
          <p>No flights found matching your criteria. Try adjusting your filters.</p>
        </div>
      )}
      <button className={styles.primaryButton}>
        <div className={styles.primaryButtonChild} />
        <div className={styles.searchFlights}>
          {filteredFlights.length > 0 ? "Show more results" : "Clear filters"}
        </div>
      </button>
    </div>
  );
};

export default FlightCards;
