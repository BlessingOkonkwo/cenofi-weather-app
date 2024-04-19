import HistoryItem from "../molecules/history-item";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { IPlace } from "@/redux/slices/history-slice";

const History = () => {
  const { places } = useSelector((state: RootState) => state.history);
  const { id } = useSelector((state: RootState) => state.weather);
  const [history, setHistory] = useState(places);

  useEffect(() => {
    setHistory(places.filter((place) => place.id !== id));
  }, [id, places]);

  return (
    <>
      {history.length > 0 && (
        <div className="flex flex-col w-full lg:w-[20rem] relative space-y-6 bg-[rgb(56,200,230,20%)] rounded-lg py-2 px-2">
          <h2 className="text-xl font-semibold text-[hsla(216,10%,48%,1)]">Search History</h2>

          <div className="h-full w-full flex flex-col gap-3">
            {places
              .filter((place) => place.id !== id)
              .map((place) => (
                <HistoryItem key={place.id} place={place} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default History;
