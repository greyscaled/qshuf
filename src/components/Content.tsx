import React from "react";
import { stylesheet } from "typestyle";
import { usePageContext } from "../contexts/Page";
import { About } from "../pages/About";
import { List } from "../pages/List";

const styles = stylesheet({
  root: {
    margin: "50px 0",
  },
});

/**
 * Applies a margin offset to body content between fixed header/footer
 * @remark There is a HUGE routing hack in this component - ie using a context
 * to route content versus a straight Router. The reason for doing so is that
 * this site belongs to a subpath vapurrmaid.github.io. Routing outside of "/"
 * leads to a 404 if the page is bookmarked or refreshed etc.
 */
export const Content: React.FC = () => {
  const { page } = usePageContext();

  let content = <List />;
  if (page === "about") {
    content = <About />;
  }

  return <div className={styles.root}>{content}</div>;
};
