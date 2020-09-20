import { cssRule } from "typestyle";
import { COLORS } from "./palette";

cssRule("body", {
  backgroundColor: COLORS.aubergineMid,
  color: COLORS.bbgrey,
  fontFamily: "DOS, Monaco, Menlo, Consolas, Courier New, monospace",
  fontSize: "18px",
  lineHeight: "20px",
});

cssRule("html, body", {
  margin: 0,
  minHeight: "500px",
  minWidth: "320px",
});
