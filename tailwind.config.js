module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./modules/**/*.{js,ts,jsx,tsx}",
      "./styles/**/*.{css, scss}",
    ],
    safelist: ["py-10", "py-20", "py-32", "py-5", "py-10", "py-[38px]"],
  },
  darkMode:"class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css, scss}",
  ],
  theme: {
    screens: {
      "sm-mobile": "200px",
      mobile: "576px",
      tablet: "768px",
      "lg-tablet": "840px",
      laptop: "1024px",
      "lg-laptop": "1192px",
      "xl-laptop": "1264px",
      desktop: "1440px",
      "xl-desktop": "1620px",
    },
    container: {
      padding: "1rem",
      center: true,
      screens: {
        mobile: "100%",
        tablet: "488px",
        laptop: "768px",
        desktop: "1192px",
        "xl-desktop": "1192px",
      },
    },
    colors: {
      black: "#000000",
      red200: "#C24C20",
      red300:"#BF360C",
      lightGrey:"#e5e7eb",
      grey: "rgba(119, 131, 143, 1)",
      white: "#ffffff",
      yellow: "#F19D38",
      yellow300: "#fde047",
      whiteChange: "#FBF7F3",
      blackChange: "rgba(31, 31, 57, 1)",
      darkGrey: "#23252F",
      soDarkGrey: "#1A1C23",
      blue:"#0A66C2",
      purple:"#581c87",
      slate100:"#ffffff",  
      purplefont:"#8A69A0",
      
    },
    fontFamily: {
      roboto: ["Roboto"],
      pacifico: ["Pacifico"],
      creteRound: ["Crete Round"],
    },
    fontSize: {
      small: ["15px"],
      "extra-small": ["13px"],
      h1: ["64px"],
      h2: ["37px"],
      h3: ["33px"],
      h4: ["25px"],
      h5: ["22px"],
      h6: ["12px"],

      "body-copy": ["16px"],
      subtitle: ["18px"],
      "title-mobile": ["16px"],
      "body-small": ["14px"],
      headline: ["15px"],
      tiny: ["11px"],
    },
    lineHeight: {
      lg: "120%",
      xl: "150%",
    },
   
    extend: {
      spacing: {
        15: "3.75rem",
        18: "4.5rem",
        19: "4.75rem",
        22: "5.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};
