/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-neutral-white": "#fff",
        "rasin-black": "#1d191b",
        "link-secondary": "#af9bb6",
        magnolia: "#f8f0fb",
        "border-primary": "#000",
        "color-neutral-neutral-lighter": "#dfd7e2",
        "link-primary": "#8075ff",
        "aeternazen-electric-indigo": "#5d00ff",
        blueviolet: "#8526ff",
        mediumslateblue: "#665ce6",
        "pale-emerald": "#3ddc97",
        "text-success": "#0ae365",
        limegreen: "#00c94d",
        mediumseagreen: "#0aa863",
        gray: "rgba(0, 0, 0, 0)",
        "background-color-secondary": "#110f12",
        "text-secondary": "#7a6d7f",
      },
      spacing: {},
      fontFamily: {
        "text-small-link": "Ubuntu",
        "text-regular-semi-bold": "Exo",
        "heading-desktop-h2": "Roboto",
        "heading-h4": "'Crimson Text'",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xs: "12px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      lg: "18px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      xl: "20px",
      "21xl": "40px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
