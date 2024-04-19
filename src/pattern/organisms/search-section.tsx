import React, { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import SearchInput from "../molecules/search-input";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useGetSuggestionsQuery } from "@/redux/services/get-suggestions.api-slice";
import { searchSuggestion } from "@/lib/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setLocation, setPlace } from "@/redux/slices/weather-slice";
import { ComboboxDropdownMenu } from "../molecules/combobox-dropdown";

const SearchSection = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { lat, long, place } = useSelector((state: RootState) => state.weather);
  const dispatch = useDispatch();

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const {
    data: suggestionsData,
    isLoading,
    isSuccess,
    isError,
  } = useGetSuggestionsQuery({ place: searchValue });

  const [searchSuggestions, setSearchSuggestions] = useState<
    searchSuggestion[] | undefined
  >([]);

  console.log("searchsuggestions: ", searchSuggestions);
  console.log("lat: ", lat);
  console.log("lon: ", long);

  const handleInputChange = (e: any) => {
    setSearchValue(e.target.value);
    setOpen(true);
  };

  useEffect(() => {
    const searchSuggestions = suggestionsData?.features?.map((lugar: any) => ({
      id: lugar.id,
      fullname: lugar.place_name,
      long: lugar.center[0],
      lat: lugar.center[1],
    })) as searchSuggestion[];
    setSearchSuggestions(searchSuggestions);

    if (searchSuggestions && searchSuggestions.length > 0) {
      setOpen(true);
    }
  }, [suggestionsData]);

  const handleOption = (place: searchSuggestion) => {
    dispatch(setLocation({ lat: place.lat, long: place.long }));
    dispatch(setPlace(place.fullname));
    setSearchValue(place.fullname);
  };

  return (
    <div className="w-full space-y-6">
      <div className="w-full flex items-center justify-between">
        <p className="text-4xl font-bold text-[rgb(47,93,138)]">
          Know Your Weather
        </p>
        <div className="rounded-lg w-fit shadow flex items-center gap-2 p-3 font-semibold text-primary">
          <span>
            <MapPin />
          </span>
          {place}
        </div>
      </div>

      <div className="relative" ref={containerRef}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <SearchInput
            name="location"
            onChange={handleInputChange}
            value={searchValue}
            defaultValue={searchValue}
          />
        </form>

        {/* <div className="absolute top-[200px]">
          <ComboboxDropdownMenu
            handleOption={handleOption}
            open={open}
            setOpen={setOpen}
            suggestions={searchSuggestions ? searchSuggestions : []}
          />
        </div> */}

        {open && searchSuggestions && searchSuggestions.length > 0 && (
          <ul className="absolute z-30 top-14 space-y-2 shadow border border-border rounded-lg bg-white p-2 w-[400px] text-sm text-slate-400">
            {searchSuggestions?.map((value, idx) => (
              <li
                key={idx}
                onClick={() => handleOption(value)}
                className="cursor-pointer hover:bg-slate-100 rounded-lg p-1"
              >
                {value.fullname}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchSection;
