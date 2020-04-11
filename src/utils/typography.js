import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Montserrat-ExtraBold",
    "-apple-system",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
  bodyFontFamily: ["Montserrat", "-apple-system", "serif"],
  bodyWeight: 300,
  backgroundColor: "#d5363c",
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["700", "400", "300", "100"],
    },
  ],
})

export default typography
