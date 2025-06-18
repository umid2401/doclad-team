import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/SmartSlider.css";

const slides = [
  {
    id: 1,
    hero: "/images/бизон 1 1.png",
    color: "#21CD5A",
    buttonColor: "#21CD5A",
    font: "#000",
    currencies: [
      { src: "/images/евро.png", className: "euro" },
      { src: "/images/доллар 2.png", className: "dollar" },
      { src: "/images/доллар 4.png", className: "dollar_1" },
      { src: "/images/фунт.png", className: "funt" },
      { src: "/images/шв.png", className: "shv" },
    ],
  },
  {
    id: 2,
    hero: "/images/медведь 2.png",
    color: "#DE2C05",
    buttonColor: "#DE2C05",
    font: "#fff",
    currencies: [
      { src: "/images/доллар ред 1.png", className: "dollar" },
      { src: "/images/доллар ред 2.png", className: "dollar_1" },
      { src: "/images/евро ред 1.png", className: "euro" },
      { src: "/images/фунт ред 1.png", className: "funt" },
      { src: "/images/шв ред 1.png", className: "shv" },
    ],
  },
  {
    id: 3,
    hero: "/images/бизон 2 1.png",
    color: "#21CD5A",
    buttonColor: "#21CD5A",
    font: "#fff",
     currencies: [
      { src: "/images/евро.png", className: "euro" },
      { src: "/images/доллар 2.png", className: "dollar" },
      { src: "/images/доллар 4.png", className: "dollar_1" },
      { src: "/images/фунт.png", className: "funt" },
      { src: "/images/шв.png", className: "shv" },
    ],
  },
];

const SmartMoneySlider = () => {
  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);

  const handleDragEnd = (e, info) => {
    if (isAnimating.current) return;

    if (info.offset.x < -50) {
      updateIndex((index + 1) % slides.length);
    }
  };

  const updateIndex = (newIndex) => {
    if (isAnimating.current || newIndex === index) return;
    isAnimating.current = true;
    setIndex(newIndex);
    setTimeout(() => (isAnimating.current = false), 700);
  };

  const slide = slides[index];
  const enterX = 300;
  const exitX = -300;
  const enterRotate = 90;
  const exitRotate = -90;

  return (
    <motion.div
      className="smartslider"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      style={{ overflow: "hidden", touchAction: "pan-y" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.hero + index}
          className="hero"
          initial={{ x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ x: "-50%", opacity: 1 }}
          exit={{ x: exitX, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={slide.hero} alt="Hero" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {slide.currencies.map((item) => (
          <motion.img
            key={`${item.src}-${index}`}
            src={item.src}
            className={item.className}
            initial={{ x: enterX, rotate: enterRotate, opacity: 0 }}
            animate={{ x: 0, rotate: 0, opacity: 1 }}
            exit={{ x: exitX, rotate: exitRotate, opacity: 0 }}
            transition={{ duration: 0.7 }}
          />
        ))}
      </AnimatePresence>

      <div className="smart">
        <div className="dots">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => {
                if (i > index) updateIndex(i);
              }}
            ></div>
          ))}
        </div>

        <h2>
          Smart <br />
          <motion.span
            key={slide.color}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, color: slide.color }}
            transition={{ duration: 0.6 }}
          >
            Money
          </motion.span>
        </h2>

        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ x: enterX, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: exitX, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>Научись </span> смотреть на график и видеть ситуации для {" "}
            <span>заработка,</span> а не шум и манипуляции!
          </motion.p>
        </AnimatePresence>

        <Link
          to="/courses"
          className="link"
          style={{ backgroundColor: slide.buttonColor, color: slide.font }}
        >
          узнать больше
        </Link>
      </div>
    </motion.div>
  );
};

export default SmartMoneySlider;
