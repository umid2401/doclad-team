import { useEffect, useState } from "react";
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

  // Avtomatik o'tish har 4 sekundda
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDragEnd = (e, info) => {
    if (info.offset.x < -50) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (info.offset.x > 50) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };
    const slide = slides[index];


  return (
    <motion.div
      className="smartslider"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.hero}
          className="hero"
          initial={{ x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ x: "-50%", opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={slide.hero} alt="Hero" />
        </motion.div>

      </AnimatePresence>

      {/* Currency icons — rotation animatsiya */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`euro-${index}`}
          src="/images/евро.png"
          className="euro"
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 45, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.img
          key={`dollar-${index}`}
          src="/images/доллар 2.png"
          className="dollar"
          initial={{ rotate: 20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -20, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.img
          key={`dollar1-${index}`}
          src="/images/доллар 4.png"
          className="dollar_1"
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 15, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.img
          key={`funt-${index}`}
          src="/images/фунт.png"
          className="funt"
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.img
          key={`shv-${index}`}
          src="/images/шв.png"
          className="shv"
          initial={{ rotate: 30, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -30, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>

      {/* Text & buttons */}
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
        <p>
          <span>Научись </span> смотреть на график и видеть ситуации для{" "}
          <span>заработка,</span> а не шум и манипуляции!
        </p>
        <Link
          to="/courses"
          className="link"
          style={{ backgroundColor: slide.buttonColor }}
        >
          узнать больше
        </Link>
      </div>
    </motion.div>
  );
};

export default SmartMoneySlider;
