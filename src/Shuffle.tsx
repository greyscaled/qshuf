import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const shuffle = (array: string[]): string[] => {
  let currentIdx: number = array.length;
  let value: string;
  let randIdx: number;

  while (currentIdx !== 0) {
    randIdx = Math.floor(Math.random() * currentIdx);

    currentIdx -= 1;
    value = array[currentIdx];

    array[currentIdx] = array[randIdx];
    array[randIdx] = value;
  }

  return array;
};

export const Shuffle: React.FC = () => {
  const history = useHistory();
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const query = new URLSearchParams(history.location.search).get("q");

    if (query) {
      setItems(shuffle(query.split(",")));
    } else {
      setItems([]);
    }
  }, [history]);

  return (
    <div>
      <button onClick={() => setItems(shuffle([...items]))}>Reshuffle</button>
      <pre style={{ marginTop: "10px" }}>{items.join("\n")}</pre>
    </div>
  );
};
