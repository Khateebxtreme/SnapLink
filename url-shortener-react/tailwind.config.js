/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "overall-theme-gradient-hover": "linear-gradient(to right, #475569, #64748b, #3b82f6)",
        "overall-theme-gradient" : "linear-gradient(to right, #64748b, #94a3b8, #60a5fa)",
        "overall-theme-darker-gradient" : "linear-gradient(to right, #a68a6d, #b99b74, #ccb08a)",
        "overall-theme-darker-gradient-hover": "linear-gradient(to right, #8c735b, #a18163, #b39474)",
        "analytics-button-gradient": "linear-gradient(to right, #3b82f6, #0ea5e9)",
        "delete-button-grad": "linear-gradient(to right, #dc2626, #ef4444)",
        "calender-color": "linear-gradient(to right, #1e293b, #475569)",
        "copy-button-color": "linear-gradient(to right, #8b5cf6, #a78bfa)",
        "short-list-background": "linear-gradient(to right, #e2e8f0, #f0f9ff)"
      },
      colors: {
        navbarColor: "#ffffff",
        btnColor: "#4B3C31",
        linkColor: "#333333",
        btnColor2: "#F0E68C",
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

