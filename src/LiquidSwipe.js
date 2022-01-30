import React, { useState } from "react";
import Slider from "./Slider";
import Slide from "./Slide";

const slides = [
    {
        color: "rgba(243, 140, 0 , 1)",
        title: "The Batman",
        description:
            "It's not who I am underneath, but what I do that defines me",
        picture: require("./assets/1.png"),
    },
    {
        color: "rgba(61, 18, 0 , 1)",
        title: "Legends of the Dark Knight",
        description:
            "He's the hero Gotham deserves, but not the one it needs right now.",
        picture: require("./assets/5.png"),
    },
    {
        color: "black",
        title: "Batman: Shadow of the Bat",
        description:
            "This city just showed you that it's full of people ready to believe in good.",
        picture: require("./assets/4.png"),
    },
    {
        color: "grey",
        title: "The Batman Chronicles",
        description:
            "If I have to have a past, then I prefer it to be multiple choice.",
        picture: require("./assets/2.png"),
    },
    {
        color: "rgba(106, 167, 209 , 1)",
        title: "Batman: Gotham Knight",
        description:
            "The night is darkest just before the dawn. And I promise you, the dawn is coming.",
        picture: require("./assets/3.png"),
    },
];

export const assets = slides.map(({ picture }) => picture);

const LiquidSwipe = () => {
    const [index, setIndex] = useState(0);
    const prev = slides[index - 1];
    const next = slides[index + 1];
    return (
        <Slider
            key={index}
            index={index}
            setIndex={setIndex}
            prev={prev && <Slide slide={prev} />}
            next={next && <Slide slide={next} />}
        >
            <Slide slide={slides[index]} />
        </Slider>
    );
};

export default LiquidSwipe;