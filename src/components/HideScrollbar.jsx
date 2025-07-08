import { GlobalStyles } from "@mui/material";

export default function HideScrollbar() {
  return (
    <GlobalStyles
      styles={{
        body: {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        "body::-webkit-scrollbar": { display: "none" },
        "html::-webkit-scrollbar": { display: "none" },
        "*": { boxSizing: "border-box" },
      }}
    />
  );
}
