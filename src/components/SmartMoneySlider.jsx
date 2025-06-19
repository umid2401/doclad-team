import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/SmartSlider.css";
const SlideText1 = () => (
  <>
    {/* Это не разовое обучение, а <span>пожизненное  сопровождение </span>  и  <span>готовые сетапы</span>  для торговли на каждый день! */}
    <span>Научись </span>
    смотреть на график и видеть ситуации для
    <span> заработка,</span> а не шум и манипуляции!
  </>
);

const SlideText2 = () => (
  <>
    Это не очередной курс по трейдингу, а логичная <span className="s">пошаговая инструкция</span> — для торговли вместе с крупными игроками, а не <span className="s">против</span> них!
  </>
);

const SlideText3 = () => (
  <>
    <span>Научись</span> смотреть на график и видеть ситуации для <span>заработка,</span> а не шум и манипуляции!
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
      { src: "/images/доллар ред 1.png", className: "dol_1" },
      { src: "/images/доллар ред 1.png", className: "dol" },
      { src: "/images/евро ред 1.png", className: "euro" },
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
  const isAnimating = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex((index + 1) % slides.length);
    }, 4000); // 3 sekundda bir o'zgaradi
    return () => clearInterval(interval);
  }, [index]);

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
  const Description = slide.descriptionComponent;

  const enterX = 300;
  const exitX = -300;
  const enterRotate = 90;
  const exitRotate = -90;

  return (
    <motion.div
      className={`smartslider ${slide.bgClass}`} drag="x"
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
          transition={{ duration: 1 }}
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
            transition={{ duration: 1 }}
          />
        ))}
      </AnimatePresence>

      <div className="smart">
        <div className="dots" >
          {slides.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              style={{ background: i === index ? slides[i].color : undefined }}
              onClick={() => {
                if (i > index) updateIndex(i);
              }}
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
              key={slide.plus + index}
              alt="Qanisan"
              src="/images/+.png"
              className="blik"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, ease: "linear" }} style={{ transformOrigin: "center" }}
            />
            <img src={slide.plus} className="plus" alt="plus" />
          </div>
        </div>


        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ x: enterX, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: exitX, opacity: 0 }}
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
          узнать больше
        </Link>
      </div>
    </motion.div>
  );
};

export default SmartMoneySlider;
