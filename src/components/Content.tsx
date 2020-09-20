import React from "react";
import { stylesheet } from "typestyle";

const styles = stylesheet({
  root: {
    margin: "50px 0",
  },
});

/**
 * Applies a margin offset to body content between fixed header/footer
 */
export const Content: React.FC = ({ children }) => <div className={styles.root}>{children}</div>;
