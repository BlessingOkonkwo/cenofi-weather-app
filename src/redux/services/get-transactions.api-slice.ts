import { baseApiSlice } from "@/redux/api/base-api";

export interface ITransactions {
  amount: number;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name: string; // rich dad poor dad
  };
  payment_reference: string;
  status: string; //successful
  type: string; //deposit
  date: string;
}


export const transactionsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<ITransactions[], void>({
      query: () => ({
        url: `transactions`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionsApiSlice;
