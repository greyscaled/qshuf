import React from "react";
import { stylesheet } from "typestyle";
import { COLORS } from "../styles/palette";

const styles = stylesheet({
  root: {
    border: `1px solid ${COLORS.bbgrey}`,
    display: "inline-block",
    maxWidth: "500px",
    padding: "12px",
  },
  indent: {
    marginLeft: "20px",
  },
  code: {
    backgroundColor: COLORS.greyCool,
    fontFamily: "monospace",
    padding: "1px",
  },
});

interface AboutText {
  title: string;
  content: string[];
}

const ABOUT_TEXT: AboutText[] = [
  {
    title: "Name",
    content: ["QShuf - generate random permutations"],
  },
  {
    title: "Synopsis",
    content: ["q - A comma separated list", "fmt - json or text (default)"],
  },
  {
    title: "Description",
    content: [
      "Have you been bogged down by manually entering data into terminal programs?",
      "Spend less time in your terminal without leaving its look and feel.",
      "Bookmark your queries today with the power of QShuf!",
    ],
  },
  {
    title: "Author",
    content: ["Grey Barkans (@vapurrmaid)"],
  },
  {
    title: "Reporting Bugs",
    content: ["QShuf is 100% bug free 60% of the time"],
  },
];

export const About: React.FC = () => (
  <div className={styles.root}>
    {ABOUT_TEXT.map(({ content, title }) => (
      <div key={title}>
        <strong>{title}</strong>

        {content.map((value, idx) => (
          <p className={styles.indent} key={idx}>
            {value}
          </p>
        ))}
      </div>
    ))}
  </div>
);
