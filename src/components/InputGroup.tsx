import { FunctionComponent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import styles from "./InputGroup.module.css";

export type InputGroupType = {
  className?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const InputGroup: FunctionComponent<InputGroupType> = ({ 
  className = "",
  label = "Departure",
  value = "",
  onChange
}) => {
  const options = label === "Departure" ? [
    "Singapore (SIN)",
    "Sydney (SYD)",
    "Siem Reap (REP)",
    "Shanghai (PVG)",
    "Sanya (SYX)",
  ] : [
    "Los Angeles (LAX)",
    "New York (JFK)",
    "London (LHR)",
    "Tokyo (NRT)",
    "Paris (CDG)",
    "Dubai (DXB)",
    "Bangkok (BKK)",
  ];

  return (
    <div className={[styles.inputGroup, className].join(" ")}>
      <Autocomplete
        className={styles.departureField}
        size="medium"
        disablePortal
        options={options}
        value={value}
        onChange={(event, newValue) => {
          if (onChange) {
            onChange(newValue || "");
          }
        }}
        renderInput={(params: any) => (
          <TextField
            {...params}
            color="primary"
            label={label}
            variant="outlined"
            placeholder=""
            helperText=""
          />
        )}
      />
    </div>
  );
};

export default InputGroup;
