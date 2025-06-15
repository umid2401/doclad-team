import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrainingProgram from './components/TrainingProgam'
const slides = [
  {
    id: 1,
    title: 'SMART MONEY',
    description: 'Можно смотреть на график и видеть ситуацию среди профиков, а не шум от миноритариев.',
    button: 'УЗНАТЬ БОЛЬШЕ',
    theme: 'green',
    image: './assets/images/медведь 2.png',
  },
  {
    id: 2,
    title: 'SMART MONEY',
    description: 'Это не очередной курс по трейдингу, а понимание логики поведения крупных игроков.',
    button: 'УЗНАТЬ БОЛЬШЕ',
    theme: 'red',
    image: './assets/images/бизон 2 1.png',
  },
  {
    id: 3,
    title: 'SMART MONEY',
    description: 'Это не волшебная обучалка, а выжимка реального опыта и знаний о рынке.',
    button: 'УЗНАТЬ БОЛЬШЕ',
    theme: 'green',
    image: './assets/images/бизон 2 1.png',
  },
];

function App() {
const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };
  return (
    <>
      <TrainingProgram/>
     <div className="slider">
      {/* <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className={`slider__card slider__card--${slides[index].theme}`}
        >
          <img src={slides[index].image} alt="slide-img" className="slider__image" />
          <h1 className="slider__title">{slides[index].title}</h1>
          <p className="slider__desc">{slides[index].description}</p>
          <button className="slider__btn" onClick={nextSlide}>{slides[index].button}</button>
        </motion.div>
      </AnimatePresence> */}
      
    </div>
    </>
  )
}

export default App
