import { baseApiSlice } from "@/redux/api/base-api";

export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
}

export const usersApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => ({
        url: `user`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserQuery } = usersApiSlice;
