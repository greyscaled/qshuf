import React from "react";
import { stylesheet } from "typestyle";
import { useListContext } from "../contexts/List";
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
});

export const Footer: React.FC = () => {
  const { listItems } = useListContext();

  return (
    <div className={styles.root}>
      <span>{`Count: ${listItems.length}`}</span>
    </div>
  );
};
