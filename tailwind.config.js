const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },

    debugScreens: {
      position: ["bottom", "left"],
      style: {
        backgroundColor: "#C0FFEE",
        color: "black",
      },
    },
    extend: {
      colors: {
        // primary: "#0F969C",
        // secondary: "#6DA5C0",
        mainColor: "#0F969C",
        secondColor: "#6DA5C0",
        highlightColor: "#294D61",
      },
      aspectRatio: {
        "21/9": "21 / 9",
      },
      backgroundImage: {
        homeParalax:
          'url("https://img.freepik.com/free-vector/doctor-home-concept-illustration_114360-7060.jpg?w=1380&t=st=1687794282~exp=1687794882~hmac=78b90e26cd53ec4fded12728aef71429e584e05b350a06660c8fd969e2b85cbd")',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
