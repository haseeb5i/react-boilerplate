const defaultTokens = {
  fonts: {
    primary: "'Poppins', sans-serif;",
    secondary: "'Inter', sans-serif;",
  },
  fontSizes: {
    1: "13px",
    2: "15px",
    3: "17px",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  breakpoints: {
    xs: "375px",
    sm: "375px",
    md: "1280px",
    lg: "1400px",
    xl: "1920px",
  },
  radii: {
    xs: "7px",
    sm: "9px",
    md: "12px",
    base: "15px",
    lg: "25px",
    xl: "18px",
    squared: "33%",
    rounded: "50%",
    pill: "9999px",
  },
};

const defaultColors = {
  // generic colors
  white: "#ffffff",
  black: "#000000",

  text: "#101010",
  primaryGradient: "linear-gradient(93.13deg, #004AF9 0%, #DB00FF 100%)",
  secondary: "#3B3C4E",
  // brand colors
};

const defaultMedia = {
  xs: `(min-width: ${defaultTokens.breakpoints.xs})`,
  sm: `(min-width: ${defaultTokens.breakpoints.sm})`,
  md: `(min-width: ${defaultTokens.breakpoints.md})`,
  lg: `(min-width: ${defaultTokens.breakpoints.lg})`,
  xl: `(min-width: ${defaultTokens.breakpoints.xl})`,
  motion: "(prefers-reduced-motion: reduce)",
  dark: "(prefers-color-scheme: dark)",
  light: "(prefers-color-scheme: light)",
};

const defaultUtils = {};

const commonTheme = {
  theme: {
    ...defaultTokens,
    colors: defaultColors,
    shadows: {},
  },
  media: defaultMedia,
  utils: defaultUtils,
};

export default commonTheme;
