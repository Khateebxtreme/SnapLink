/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #D4FF3A, #DBFC4D)", 
        "custom-gradient-2": "linear-gradient(to left, #D4FF3A, #DBFC4D)",
        "custom-gradient-3" : "linear-gradient(to right, #7C9D00, #7F9F00)",
        "custom-gradient-4" : "linear-gradient(to right, #4A6B00, #4D6F00)",
        "button-gradient-hover": "linear-gradient(to right, #A3E200, #A8E500)",
        "card-gradient": "linear-gradient(to right, #38b2ac, #4299e1)",
        "delete-button-grad": "linear-gradient(45deg, #ff4c4c, #ff0000)",
        "calender-color": "linear-gradient(135deg, #ffdb58, #d0a21e)"
      },
      colors: {
        navbarColor: "#ffffff",
        btnColor: "#4B3C31",
        linkColor: "#333333",
        btnColor2: "#F0E68C",
        linkBackground : "rgba(150, 220, 60, 0.2)",
        linkColor2:"#4682B4",
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
        right: "10px 0px 10px -5px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat"],
      },
    },
  },

  variants: {
    extend: {
      backgroundImage: ["responsive"],
    },
  },

  plugins: [],
};

