import { IPlace } from "@/redux/slices/history-slice";

interface ISessionProps {
  key: string | undefined;
  value?: string | any;
}

/**
 *
 * Sets Item in local storage
 */
const setItem = ({ key, value }: ISessionProps) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key!, JSON.stringify(value!));
  }
};

/**
 *
 * Retrieve Item from Local storage
 */
// eslint-disable-next-line consistent-return
const getItem = ({ key }: ISessionProps) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key!);
  }
};

/**
 * Removes a particular key value from store
 */
const removeItem = ({ key }: ISessionProps) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key!);
  }
};

/**
 * Clears all Local storage Keys and values
 */
const clearStore = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};

const LocalStore = {
  setItem,
  getItem,
  removeItem,
  clearStore,
};

/**
 * Function that gets search history from local storage
 */
export const getHistoryDetails = () => {
  const key = `place-storage`;
  const value = LocalStore.getItem({ key });
  if (typeof value === "string") {
    return JSON.parse(value) as IPlace[];
  }
  //   return JSON.parse(LocalStore.getItem({ key })) as IPlace[];
};

/**
 * Function that sets search history to local storage
 */
export const setHistoryDetails = (places: IPlace[]) => {
  const key = `place-storage`;
  return LocalStore.setItem({ key, value: places });
};

export default LocalStore;
