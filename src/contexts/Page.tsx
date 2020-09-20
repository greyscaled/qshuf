import React, { createContext, useContext, useState } from "react";

/** Routeable 'Page' content */
type Page = "about" | "list";

interface PageContext {
  /** The currently active content */
  readonly page: "about" | "list";

  setPage(page: Page): void;
}

/** @remark Do not export - created for convenience of usePageContext */
const initialPageContext = createContext<PageContext | undefined>(undefined);

/** React hook for accessing the value of PageContext */
export const usePageContext = (): NonNullable<PageContext> => {
  const displayName = initialPageContext.displayName || initialPageContext.Provider.name;

  const val = useContext(initialPageContext);
  if (!val) {
    throw new Error(`Context Provider not found: ${displayName}`);
  }

  return val as NonNullable<PageContext>;
};

export const PageContextProvider: React.FC = ({ children }) => {
  const [page, setPage] = useState<Page>("list");

  return (
    <initialPageContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </initialPageContext.Provider>
  );
};
