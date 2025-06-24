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
      { src: "/images/евро.png", className: "euro" },
      { src: "/images/доллар 2.png", className: "dollar" },
      { src: "/images/доллар 4.png", className: "dollar_1" },
      { src: "/images/фунт.png", className: "funt" },
      { src: "/images/шв.png", className: "shv" },
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
  const [index, setIndex] = useState(0);               // Joriy slide
  const [direction, setDirection] = useState(0);       // -1: chapga, 1: o'ngga
  const isAnimating = useRef(false);                   // Animatsiya holati
  const intervalRef = useRef(null);                    // Autoplay interval
  const timeoutRef = useRef(null);                     // Autoplay delay

  // 🔁 Autoplayni boshlash
  const startAutoplay = () => {
  clearInterval(intervalRef.current);
  intervalRef.current = setInterval(() => {
    if (!isAnimating.current) {
      setIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % slides.length;
        setDirection(1);
        isAnimating.current = true;
        setTimeout(() => {
          isAnimating.current = false;
        }, 1000);
        return newIndex;
      });
    }
  }, 2500);
};


  // ⏸ Autoplayni vaqtincha to‘xtatish
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

  // ✅ Slide almashtiruvchi asosiy funksiya
  const triggerSlide = (newIndex, dir) => {
    if (isAnimating.current || newIndex === index) return;

    const total = slides.length;
    const wrappedIndex = (newIndex + total) % total;

    setDirection(dir);
    setIndex(wrappedIndex);
    isAnimating.current = true;

    setTimeout(() => {
      isAnimating.current = false;
    }, 1000);
  };

  // 🖐️ Drag tugaganda bajariladigan ish
  const handleDragEnd = (e, info) => {
    if (isAnimating.current) return;
    if (info.offset.x < -50) {
      triggerSlide(index + 1, 1);    // O‘ngga
      pauseAutoplay();
    } else if (info.offset.x > 50) {
      triggerSlide(index - 1, -1);   // Chapga
      pauseAutoplay();
    }
  };

  // 🔘 Dot bosilganda
  const handleDotClick = (targetIndex) => {
    if (targetIndex === index || isAnimating.current) return;

    const dir = targetIndex > index ? 1 : -1;
    triggerSlide(targetIndex, dir);
    pauseAutoplay();
  };

  // 🔄 Hozirgi slayd
  const slide = slides[index];
  const Description = slide.descriptionComponent;

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
          key={`hero-${slide.id}`}
          className="hero"
          style={{ position: "absolute", top: 0, left: "0%", width: "100%", height: "100%", zIndex: 1 }}
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={slide.hero} alt="Hero" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div key={`currencies-${slide.id}`} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          {slide.currencies.map((item, i) => (
            <motion.img
              layout
              key={`currency-${slide.id}-${i}-${item.className}`}
              src={item.src}
              className={item.className}
              initial={{ x: direction > 0 ? 200 : -200, rotate: 60, opacity: 0 }}
              animate={{ x: 0, rotate: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -200 : 200, rotate: -60, opacity: 0 }}
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
              transition={{ duration: 0.8 }}
            >
              Money
            </motion.span>
          </h2>

          <div className="box">
            <img
              key={`blik-${slide.id}`}
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
            key={`desc-${slide.id}`}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
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
