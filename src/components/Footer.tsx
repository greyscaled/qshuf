import React from "react";
import { stylesheet } from "typestyle";
import { useListContext } from "../contexts/List";
import { usePageContext } from "../contexts/Page";
import { COLORS } from "../styles/palette";

const styles = stylesheet({
  root: {
    backgroundColor: COLORS.aubergineDark,
    bottom: 0,
    color: COLORS.greyWarm,
    display: "flex",
    flexDirection: "row",
    left: 0,
    padding: "5px",
    position: "fixed",
    right: 0,
  },
  link: {
    backgroundColor: "inherit",
    border: "none",
    color: COLORS.pinkBright,
    fontFamily: "inherit",
    fontSize: "inherit",
    padding: 0,
    textDecoration: "none",
  },
});

export const Footer: React.FC = () => {
  const { page, setPage } = usePageContext();
  const { listItems } = useListContext();

  return (
    <div className={styles.root}>
      <button className={styles.link} onClick={() => setPage(page === "about" ? "list" : "about")}>
        {page === "about" ? "Back" : "About"}
      </button>
      <span style={{ marginLeft: "10px" }}>{`Count: ${listItems.length}`}</span>
    </div>
  );
};
