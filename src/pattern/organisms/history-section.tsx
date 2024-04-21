"use client";
import { useEffect } from "react";
import HistoryItem from "../molecules/history-item";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { round } from "@/lib/utils";
import { setPlaces } from "@/redux/slices/history-slice";

const History = () => {
  const dispatch = useDispatch();
  const { places } = useSelector((state: RootState) => state.history);
  const { lat, long, place } = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    let id = `${round(lat)}/${round(long)}`;
    dispatch(setPlaces({ id, lat, long, name: place }));
  }, [lat, long, place, dispatch]);

  return (
    <>
      {places.length > 0 && (
        <div className="flex flex-col w-full relative space-y-6 bg-[rgb(56,200,230,20%)] rounded-lg py-2 px-2">
          <h2 className="text-xl font-semibold text-[hsla(216,10%,48%,1)]">
            Search History
          </h2>

          <div className="h-full w-full flex flex-col gap-3">
            {places.map((place) => (
              <HistoryItem key={place.id} place={place} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default History;
