import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

/** Visual formats for display */
type ListFormat = "json" | "text";

interface ListContext {
  /** The current format for visual display */
  readonly format: ListFormat;
  /** The list as a formatted string for display. The current format is used. */
  readonly formatted: string;
  /** A list of strings */
  readonly listItems: string[];

  setFormat(format: ListFormat): void;
  setListItems(listItems: string[]): void;
  shuffleItems(): void;
}

/**
 * A Knuth shuffle
 * @remark A new array is returned for convenience with React state
 */
const shuffle = (array: string[]): string[] => {
  const newArray = [...array];
  let currentIdx: number = array.length;
  let value: string;
  let randIdx: number;

  while (currentIdx !== 0) {
    randIdx = Math.floor(Math.random() * currentIdx);

    currentIdx -= 1;
    value = newArray[currentIdx];

    newArray[currentIdx] = newArray[randIdx];
    newArray[randIdx] = value;
  }

  return newArray;
};

/** @remark Do not export - created for convenience of useListContext */
const initialListContext = createContext<ListContext | undefined>(undefined);

/** React hook for accessing the value of ListContextProvider */
export const useListContext = (): NonNullable<ListContext> => {
  const displayName = initialListContext.displayName || initialListContext.Provider.name;

  const val = useContext(initialListContext);
  if (!val) {
    throw new Error(`Context Provider not found: ${displayName}`);
  }

  return val as NonNullable<ListContext>;
};

/** A React Context Provider for ListContext */
export const ListContextProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [format, setFormat] = useState<ListFormat>("text");
  const [listItems, _setListItems] = useState<string[]>([]);

  const formatted: string[] | string = useMemo(() => {
    if (format === "text") return listItems.join("\n");
    return JSON.stringify(listItems, undefined, 2);
  }, [format, listItems]);

  /** @remark wraps _setListItems with a shuffle */
  const setListItems = useCallback((listItems: string[]) => {
    _setListItems(shuffle(listItems));
  }, []);

  const shuffleItems = useCallback(() => {
    setListItems(shuffle(listItems));
  }, [listItems, setListItems]);

  // Parses q and fmt from query params
  useEffect(() => {
    const params = new URLSearchParams(history.location.search);
    const query = params.get("q");
    const fmt = params.get("fmt");

    if (query) {
      setListItems(query.split(","));
    }

    if (fmt === "json") {
      setFormat("json");
    }
  }, [history, setListItems]);

  return (
    <initialListContext.Provider
      value={{
        format,
        formatted,
        listItems,
        setFormat,
        setListItems,
        shuffleItems,
      }}
    >
      {children}
    </initialListContext.Provider>
  );
};
