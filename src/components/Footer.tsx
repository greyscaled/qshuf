import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  link: {
    color: COLORS.pinkBright,
    textDecoration: "none",
  },
});

interface UILink {
  to: string;
  text: string;
}

export const Footer: React.FC = () => {
  const location = useLocation();
  const { listItems } = useListContext();

  const link: UILink = {
    to: location.pathname === "/about" ? "/" : "/about",
    text: location.pathname === "/about" ? "Back" : "About",
  };

  return (
    <div className={styles.root}>
      <Link className={styles.link} to={link.to}>
        {link.text}
      </Link>
      <span style={{ marginLeft: "10px" }}>{`Count: ${listItems.length}`}</span>
    </div>
  );
};
