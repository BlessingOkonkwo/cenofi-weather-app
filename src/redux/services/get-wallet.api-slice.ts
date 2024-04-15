import { baseApiSlice } from "@/redux/api/base-api";

export interface IWallet {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

export const walletApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWallet: builder.query<IWallet, void>({
      query: () => ({
        url: `wallet`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetWalletQuery } = walletApiSlice;
