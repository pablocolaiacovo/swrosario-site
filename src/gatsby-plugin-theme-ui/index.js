export default {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Montserrat", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#FFF",
    primary: "#0db14b",
    muted: "#3DED97",
    nav: "#fff",
    slate: "#2A3842",
  },
  space: ["0rem", "0.25rem", "0.5rem", "1rem", "1.5rem", "3rem"],
  fontSizes: [
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "2rem",
    "2.5rem",
    "3.5rem",
    "4.5rem",
    "5.5rem",
    "6rem",
  ],
  fontWeights: {
    body: 300,
    heading: 500,
    bold: 700,
    light: 300,
    normal: 300,
    display: 300,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "primary",
        color: "background",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
  },
  images: {
    avatar: {
      width: "100%",
      borderRadius: "50%",
    },
  },
}
