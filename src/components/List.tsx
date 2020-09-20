import React from "react";
import { useListContext } from "../contexts/List";

export const List: React.FC = () => {
  const { formatted } = useListContext();

  return (
    <div>
      <pre style={{ marginTop: "10px" }}>{formatted}</pre>
    </div>
  );
};
