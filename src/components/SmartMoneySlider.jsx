import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/SmartSlider.css";

const slides = [
  {
    id: 1,
    hero: "/images/бизон 1 1.png",
    color: "#21CD5A",
    buttonColor: "rgba(33, 205, 90, 1)",
  },
  {
    id: 2,
    hero: "/images/медведь 2.png",
    color: "#F44336",
    buttonColor: "#F44336",
  },
  {
    id: 3,
    hero: "/images/бизон 2 1.png",
    color: "#21CD5A",
    buttonColor: "rgba(33, 205, 90, 1)",
  },
];

const SmartMoneySlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("left");
  const isChanging = useRef(false);

  const handleDragEnd = (e, info) => {
    if (isChanging.current) return;

    if (info.offset.x < -50) {
      setDirection("left");
      isChanging.current = true;
      setIndex((prev) => (prev + 1) % slides.length);
    } else if (info.offset.x > 50) {
      setDirection("right");
      isChanging.current = true;
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
    setTimeout(() => (isChanging.current = false), 600);
  };

  const slide = slides[index];

  const enterX = direction === "left" ? 300 : -300;
  const exitX = direction === "left" ? -300 : 300;
  const enterRotate = direction === "left" ? 90 : -90;
  const exitRotate = direction === "left" ? -90 : 90;

  const currencyImages = [
    { src: "евро.png", className: "euro" },
    { src: "доллар 2.png", className: "dollar" },
    { src: "доллар 4.png", className: "dollar_1" },
    { src: "фунт.png", className: "funt" },
    { src: "шв.png", className: "shv" },
  ];

  return (
    <motion.div
      className="smartslider"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      dragMomentum={false}
      onDragStart={(e) => e.preventDefault()}
      onDragEnd={handleDragEnd}
      style={{ overflow: "hidden", touchAction: "pan-y" }}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.hero + direction + index}
          className="hero"
          initial={{ x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ x: "-50%", opacity: 1 }}
          exit={{ x: exitX, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={slide.hero} alt="Hero" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait" custom={direction}>
        {currencyImages.map((item) => (
          <motion.img
            key={`${item.src}-${index}-${direction}`}
            src={`/images/${item.src}`}
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
            <div key={i} className={`dot ${i === index ? "active" : ""}`}></div>
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

        <AnimatePresence mode="wait" custom={direction}>
          <motion.p
            key={index + direction}
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
          style={{ backgroundColor: slide.buttonColor}}
        >
          узнать больше
        </Link>
      </div>
    </motion.div>
  );
};

export default SmartMoneySlider;
