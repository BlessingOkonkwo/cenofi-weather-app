import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { celciusToFahrenheit, TempUnit } from "@/lib/helpers/unitConversion";

interface ITemperatureProps {
  value: number;
}

const Temperature: React.FC<ITemperatureProps> = ({ value }) => {
  const degreeType = useSelector(
    (state: RootState) => state.globalState.tempUnit
  );

  if (degreeType === "F") {
    return <>{celciusToFahrenheit(value)}</>;
  }
  return <>{value}</>;
};

export default Temperature;
