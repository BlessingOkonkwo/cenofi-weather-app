import { FC } from "react";
import { MapPin } from "lucide-react";
import { useGetCurrentWeatherQuery } from "@/redux/services/get-weather.api-slice";
import WeatherIcon from "../atoms/weather-icon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setLocation } from "@/redux/slices/weather-slice";

interface ItemProps {
  place: { lat: number; long: number; name: string };
}

const HistoryItem: FC<ItemProps> = ({ place }) => {
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess, isError } = useGetCurrentWeatherQuery({
    lat: place.lat,
    long: place.long,
  });

  console.log(place.name)

  const { tempUnit } = useSelector((state: RootState) => state.globalState);

  return (
    <section
      className="flex-1 w-full flex items-center transition-all cursor-pointer hover:bg-slate-100 hover:scale-105"
      onClick={() => {
        dispatch(setLocation({ lat: place.lat, long: place.long }));
      }}
    >
      <div className="w-fit h-fit p-2 bg-white bg-opacity-80 grid place-content-center rounded-2xl">
        <WeatherIcon code={data?.weather[0].id!} />
      </div>
      <div className="p-5 font-normal flex flex-col justify-center">
        <h3 className="text-lg font-bold flex gap-2 items-center text-[rgb(74,111,161)]">
          <MapPin size={20} color="#2277f0" />
          {place.name}
        </h3>
        <p className="text-[rgb(74,111,161)] font-medium">
          {data?.weather[0].main} |{" "}
          {data && (
            <>
              {Math.round(data.main.temp)}
              <span className="text-xs">°{tempUnit}</span>
            </>
          )}
        </p>
      </div>
    </section>
  );
};

export default HistoryItem;
