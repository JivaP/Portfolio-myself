// import { s } from "node_modules/framer-motion/dist/types.d-Cjd591yU";

// Glitter Background
export const glitterBackground = {
    background:
        "linear-gradient(135deg, #451A74, #9809f7, #8900f9ff, #9809f7, #000000ff)",
    backgroundSize: "400% 400%",
    animation: "glitterBackground 6s ease infinite",
    "@keyframes glitterBackground": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
    },

};
import { keyframes } from "@emotion/react"; // or styled-components

// Define the shimmering animation
const glitterBackgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const glitterBackgroundHeader = {
  background: "linear-gradient(135deg, #451A74, #9809f7, #000000)",
  backgroundSize: "400% 400%",
  animation: `${glitterBackgroundAnimation} 6s ease infinite`,
};

export const glitterBackground2 = {
    position: "relative",
    background: "linear-gradient(135deg, #451A74, #9809f7, #8900f9ff, #9809f7, #000000ff)",
    backgroundSize: "100% 100%",
    animation: "glitterBackground 6s ease infinite",
    overflow: "hidden",
    "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100px", // height of the wave
        background: "#000000", // wave color (or match gradient end)
        // clipPath: "ellipse(70% 100% at 50% 100%)", // creates a wavelike curve
    },
    "@keyframes glitterBackground": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
    },
};

// Glitter Text
export const glitterText = {
    background:
        "linear-gradient(45deg, #b328b3ff, #000000ff)",
    // backgroundSize: "400% 400%",
    // animation: "glitterText 6s ease infinite",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    // "@keyframes glitterText": {
    //     "0%": { backgroundPosition: "0% 50%" },
    //     "50%": { backgroundPosition: "100% 50%" },
    //     "100%": { backgroundPosition: "0% 50%" },
    // },

};
export const glitterText2 = {
    background:
        "linear-gradient(135deg, #ffffffff, #636263ff, #bc14ffff, #6e5e5eff, #979595ff)",
    backgroundSize: "400% 400%",
    animation: "glitterText 6s ease infinite",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    "@keyframes glitterText": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
    },

};