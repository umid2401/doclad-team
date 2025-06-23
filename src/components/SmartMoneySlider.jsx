import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/SmartSlider.css";

// Slide matnlari
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

// Slaydlar
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
  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating.current) {
        isAnimating.current = true;
        setIndex((prev) => (prev + 1) % slides.length);
        setTimeout(() => (isAnimating.current = false), 1200);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const updateIndex = (newIndex) => {
    if (isAnimating.current || newIndex === index) return;
    isAnimating.current = true;
    setIndex(newIndex);
    setTimeout(() => (isAnimating.current = false), 1200);
  };

  const handleDragEnd = (e, info) => {
    if (isAnimating.current) return;
    if (info.offset.x < -50) {
      updateIndex((index + 1) % slides.length);
    } else if (info.offset.x > 50) {
      updateIndex((index - 1 + slides.length) % slides.length);
    }
  };

  const slide = slides[index];
  const Description = slide.descriptionComponent;

  return (
    <motion.div
      className={`smartslider ${slide.bgClass}`}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      style={{ overflow: "hidden", touchAction: "pan-y" }}
    >
      {/* Hero Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`hero-${index}`}
          className="hero"
          initial={{ y: "-55%", opacity: 1 }}
          animate={{ x: "-50%", opacity: 1 }}
          exit={{ x: "-140%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img src={slide.hero} alt="Hero" />
        </motion.div>
      </AnimatePresence>

      {/* Currency Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`currencies-group-${index}`}

        >
          {slide.currencies.map((item, i) => (
            <motion.img
              key={`currency-${index}-${i}-${item.className}`} 
              src={item.src}
              className={item.className}
              initial={{ x: 200, rotate: 60, opacity: 0 }}
              animate={{ x: 0, rotate: 0, opacity: 1 }}
              exit={{ x: -200, rotate: -60, opacity: 0 }}
              transition={{ duration: 1 }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Static Content */}
      <div className="smart">
        <div className="dots">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              style={{ background: i === index ? slides[i].color : undefined }}
              onClick={() => updateIndex(i)}
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
            <motion.img
              key={`blik-${slide.id}`}
              src="/images/блик 2.png"
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

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${slide.id}`}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
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
