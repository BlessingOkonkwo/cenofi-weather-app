// &autocomplete=true&types[]=place&limit=10"

import { searchSuggestion } from "@/lib/types";
import { mapboxBaseApiSlice } from "@/redux/api/base-api";

export interface IMapboxPayload {
  place: string;
}

interface ISearchSuggestionsResult {
  type: string;
  query: string[];
  features: {
    id: string;
    type: string;
    place_type: string[];
    relevance: number;
    properties: {
      mapbox_id: string;
      wikidata: string;
    };
    text: string;
    place_name: string;
    bbox: number[];
    center: number[];
    geometry: {
      type: string;
      coordinates: number[];
    };
    context: {
      id: string;
      mapbox_id: string;
      wikidata: string;
      short_code: string;
      text: string;
    }[];
  }[];
  attribution: string;
}

const access_token =
  "pk.eyJ1IjoiYmxlc3Npbmdva29ua3dvIiwiYSI6ImNsdjQwangxdjA0MDAya213dnV3cDQwbXcifQ.tKylAmeN-TCX7LlHjHEb_w";

export const suggestionsApiSlice = mapboxBaseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSuggestions: builder.query<ISearchSuggestionsResult, IMapboxPayload>({
      query: ({ place }) => ({
        url: `${place}.json?access_token=${access_token}&autocomplete=true&types[]=place&limit=6`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSuggestionsQuery } = suggestionsApiSlice;
