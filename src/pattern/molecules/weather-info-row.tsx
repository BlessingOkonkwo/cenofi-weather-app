import React from "react";

interface IProps {
  icon: any;
  value: any;
  label: string;
  suffix: string;
}

const WeatherInfoRow = ({ icon, value, label, suffix }: IProps) => {
  return (
    <div className="flex items-center">
      <div className="w-[60px]">{icon}</div>
      <div className="w-[120px] font-medium text-[rgb(74,111,161)]">{label}</div>
      <span className="text-[rgb(58,134,202)] font-semibold text-base">
        {value}
        {suffix}
      </span>
    </div>
  );
};

export default WeatherInfoRow;
