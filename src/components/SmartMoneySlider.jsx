import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/SmartSlider.css";

const SlideText1 = () => (
  <>
    <span>Научись </span>
    смотреть на график и видеть ситуации для
    <span> заработка,</span> а не шум и манипуляции!
  </>
);
const SlideText2 = () => (
  <>
    Это не очередной курс по трейдингу, а логичная <span className="red">пошаговая инструкция</span> — для торговли вместе с крупными игроками, а не <span className="red">против</span> них!
  </>
);
const SlideText3 = () => (
  <>
    Это не разовое обучение, а <span>пожизненное сопровождение</span> и <span>готовые сетапы</span> для торговли на каждый день!
  </>
);

const slides = [
  {
    id: 1,
    hero: "/images/бизон 1 1.png",
    color: "#21CD5A",
    buttonColor: "#21CD5A",
    font: "#000",
    bgClass: "bg_1",
    descriptionComponent: SlideText1,
    currencies: [
      { src: "/images/евро.png", className: "euro" },
      { src: "/images/доллар 2.png", className: "dollar" },
      { src: "/images/доллар 4.png", className: "dollar_1" },
      { src: "/images/фунт.png", className: "funt" },
      { src: "/images/шв.png", className: "shv" },
    ],
    plus: "/images/+(1).png",
  },
  {
    id: 2,
    hero: "/images/медведь 2.png",
    color: "#DE2C05",
    buttonColor: "#DE2C05",
    font: "#fff",
    bgClass: "bg_2",
    descriptionComponent: SlideText2,
    currencies: [
      { src: "/images/евро ред 1.png", className: "euro" },
      { src: "/images/доллар ред 1.png", className: "dol" },
      { src: "/images/доллар ред 1.png", className: "dol_1" },
      { src: "/images/фунт ред 1.png", className: "funt" },
      { src: "/images/шв ред 1.png", className: "shv" },
    ],
    plus: "/images/+.png",
  },
  {
    id: 3,
    hero: "/images/бизон 2 1.png",
    color: "#21CD5A",
    buttonColor: "#21CD5A",
    font: "#000",
    bgClass: "bg_1",
    descriptionComponent: SlideText3,
    currencies: [
      { src: "/images/евро.png", className: "euro" },
      { src: "/images/доллар 2.png", className: "dollar" },
      { src: "/images/доллар 4.png", className: "dollar_1" },
      { src: "/images/фунт.png", className: "funt" },
      { src: "/images/шв.png", className: "shv" },
    ],
    plus: "/images/+(1).png",
  },
];

const SmartMoneySlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null); // null => no initial animation
  const isAnimating = useRef(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const startAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isAnimating.current) {
        setIndex(prev => {
          const next = (prev + 1) % slides.length;
          setDirection(1);
          isAnimating.current = true;
          setTimeout(() => (isAnimating.current = false), 1000);
          return next;
        });
      }
    }, 6000);
  };

  const pauseAutoplay = () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(startAutoplay, 5000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const getDirection = (current, target, total) => {
    const diff = target - current;
    if (Math.abs(diff) === total - 1) return diff > 0 ? -1 : 1;
    return diff > 0 ? 1 : -1;
  };

  const triggerSlide = (newIndexRaw) => {
    const total = slides.length;
    const newIndex = (newIndexRaw + total) % total;
    if (isAnimating.current || newIndex === index) return;

    const dir = getDirection(index, newIndex, total);
    setDirection(dir);
    setIndex(newIndex);
    isAnimating.current = true;
    setTimeout(() => (isAnimating.current = false), 1000);
  };

  const handleDotClick = (targetIndex) => {
    if (targetIndex === index || isAnimating.current) return;
    triggerSlide(targetIndex);
    pauseAutoplay();
  };

  const handleDragEnd = (e, info) => {
    if (isAnimating.current) return;
    if (info.offset.x < -50) {
      triggerSlide(index + 1);
    } else if (info.offset.x > 50) {
      triggerSlide(index - 1);
    }
    pauseAutoplay();
  };

  const slide = slides[index];
  const Description = slide.descriptionComponent;

  if (!hasMounted) return null;

  return (
    <motion.div
      className={`smartslider ${slide.bgClass}`}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      style={{ overflow: "hidden", touchAction: "pan-y", position: "relative" }}
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={`hero-${index}`}
          className="hero"
          style={{ position: "absolute", top: "-30px", left: "0%", width: "100%", height: "100%", zIndex: 1 }}
          initial={direction !== null ? { x: direction > 0 ? "100%" : "-100%", opacity: 0 } : false}
          animate={{ x: 0, opacity: 1 }}
          exit={direction !== null ? { x: direction > 0 ? "-100%" : "100%", opacity: 1 } : false}
          transition={{ duration: 1 }}
        >
          <img src={slide.hero} alt="Hero" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div key={`currencies-${index}`} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          {slide.currencies.map((item, i) => (
            <motion.img
              layout
              key={`currency-${index}-${i}`}
              src={item.src}
              className={item.className}
              initial={direction !== null ? { x: direction > 0 ? 200 : -200, rotate: 60, opacity: 0 } : false}
              animate={{ x: 0, rotate: 0, opacity: 1 }}
              exit={direction !== null ? { x: direction > 0 ? -200 : 200, rotate: -60, opacity: 0 } : false}
              transition={{ duration: 1 }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="smart">
        <div className="dots">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              style={{ background: i === index ? slides[i].color : undefined }}
              onClick={() => handleDotClick(i)}
            ></div>
          ))}
        </div>

        <div className="item">
          <h2>
            Smart <br />
            <motion.span
              key={slide.color}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, color: slide.color }}
              transition={{ duration: 1 }}
            >
              Money
            </motion.span>
          </h2>

          <div className="box">
            <motion.img
              key={`blik-${index}`}
              src="/images/new.png"
              className="blik"
              alt="blik"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
            <img src={slide.plus} className="plus" alt="plus" />
          </div>
        </div>

        <AnimatePresence custom={direction} mode="wait">
          <motion.p
            key={`desc-${index}`}
            initial={direction !== null ? { x: direction > 0 ? "100%" : "-100%", opacity: 0 } : false}
            animate={{ x: 0, opacity: 1 }}
            exit={direction !== null ? { x: direction > 0 ? "-100%" : "100%", opacity: 0 } : false}
            transition={{ duration: 1 }}
          >
            <Description />
          </motion.p>
        </AnimatePresence>

        <Link
          to="/courses"
          className="link"
          style={{ backgroundColor: slide.buttonColor, color: slide.font }}
        >
          <img className="bil" src="/images/new.png" alt="Bil" />
          <span> узнать больше</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default SmartMoneySlider;
