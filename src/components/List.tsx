import React from "react";
import { stylesheet } from "typestyle";
import { useListContext } from "../contexts/List";

const styles = stylesheet({
  root: {
    margin: "50px 0",
  },
});

export const List: React.FC = () => {
  const { formatted } = useListContext();

  return (
    <div className={styles.root}>
      <pre style={{ marginTop: "10px" }}>{formatted}</pre>
    </div>
  );
};
