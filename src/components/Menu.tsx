import React, { useCallback, useRef } from "react";
import { stylesheet } from "typestyle";
import { useListContext } from "../contexts/List";
import { useWindowEventListener } from "../hooks/event";

const styles = stylesheet({
  root: {
    backgroundColor: "#bbbbbb",
    color: "black",
    display: "flex",
    flexDirection: "row",
    padding: "5px",
  },
  btn: {
    backgroundColor: "inherit",
    border: "none",
    color: "black",
    fontFamily: "inherit",
    fontSize: "inherit",
    marginLeft: "10px",
    $nest: {
      "&:active, &:focus, &:hover": {
        backgroundColor: "black",
        color: "#bbbbbb",
      },
    },
  },
});

export const Menu: React.FC = () => {
  const { format, setFormat, shuffleItems } = useListContext();
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  const handleReformat = useCallback(() => {
    if (format === "json") {
      setFormat("text");
    } else {
      setFormat("json");
    }
  }, [format, setFormat]);

  const handleSlash = useCallback((ev: KeyboardEvent) => {
    if (ev.key === "/" && !ev.altKey && !ev.ctrlKey && firstBtnRef.current) {
      if (document.activeElement === firstBtnRef.current) {
        firstBtnRef.current.blur();
      } else {
        firstBtnRef.current.focus();
      }
    }
  }, []);

  useWindowEventListener("keydown", handleSlash);

  return (
    <div className={styles.root}>
      <span>QShuf</span>
      <button className={styles.btn} onClick={shuffleItems} ref={firstBtnRef}>
        Shuffle
      </button>
      <button className={styles.btn} onClick={handleReformat}>
        {`Format: ${format === "json" ? "text" : "json"}`}
      </button>
    </div>
  );
};
