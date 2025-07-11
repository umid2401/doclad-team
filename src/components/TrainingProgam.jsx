import React, { useEffect, useRef, useState } from 'react';
import '../styles/TrainingProgram.css';




const TrainingProgram = () => {
    const textRef = useRef(null);
    const programRef = useRef(null);
const formatRef = useRef(null);
const priceRef = useRef(null);
const startRef = useRef(null);
const navRef = useRef(null);
const itemRefs = useRef({});
const containerRef = useRef(null);

const [navHeight, setNavHeight] = useState(0);
const [bgLeft, setBgLeft] = useState(0);
const [bgWidth, setBgWidth] = useState(0);
const [activeSection, setActiveSection] = useState("program");

// Navbar balandligi
useEffect(() => {
  if (navRef.current) {
    setNavHeight(navRef.current.getBoundingClientRect().height);
  }
}, []);

// Scroll to va indikatorni siljitish
const scrollTo = (ref, sectionName) => {
  if (ref.current) {
    const top = ref.current.getBoundingClientRect().top + window.scrollY - navHeight - 30;
    window.scrollTo({ top, behavior: "smooth" });

    // scroll tugaganidan keyin activeSection va moveBackground
    setTimeout(() => {
      setActiveSection(sectionName);
      moveBackground(sectionName);
    }, 500); // scroll tugashi uchun vaqt (100% aniqlik uchun 400-600ms optimal)
  } else {
    console.warn("Ref ishlamayapti:", sectionName);
  }
};



// Backgroundni harakatlantirish
const moveBackground = (sectionName) => {
  const el = itemRefs.current[sectionName];
  if (el) {
    const { offsetLeft, offsetWidth } = el;
    setBgLeft(offsetLeft);
    setBgWidth(offsetWidth);
  }
};

// Boshlang'ich joy
useEffect(() => {
  moveBackground(activeSection);
}, [navHeight]);

// Scroll bilan aktiv bo‘limni aniqlash
useEffect(() => {
  const handleScroll = () => {
    const sections = [
      { ref: programRef, name: "program" },
      { ref: formatRef, name: "format" },
      { ref: priceRef, name: "price" },
      { ref: startRef, name: "start" },
    ];

    let current = activeSection;

    for (let i = 0; i < sections.length; i++) {
      const { ref, name } = sections[i];
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= navHeight + 80 && rect.bottom > navHeight + 80) {
          current = name;
          break;
        }
      }
    }

    if (current !== activeSection) {
      setActiveSection(current);
      moveBackground(current);
    }

    // scroll bo'lganini ko'rsatish uchun klass
    if (containerRef.current) {
      containerRef.current.classList.toggle("scrolled", window.scrollY > 10);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [navHeight, activeSection]);





    return (
        <div className="training-program">
            <header className="header">
                <ul ref={navRef} className="training-program__nav">
                    {/* Harakatlanuvchi fon */}
                    <div className="nav-background" style={{ left: bgLeft, width: bgWidth }} />

                    {[
                        { label: "Программа обучения", ref: programRef, name: "program" },
                        { label: "формат обучения", ref: formatRef, name: "format" },
                        { label: "стоимость обучения", ref: priceRef, name: "price" },
                        { label: "начать обучение", ref: startRef, name: "start" },
                    ].map((item) => (
                        <li
                            key={item.name}
                            ref={(el) => (itemRefs.current[item.name] = el)}
                            onClick={() => scrollTo(item.ref, item.name)}
                            className="training-program__nav-item"
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                <div ref={programRef} className="training-program__hero">
                    <div ref={textRef} className="training-program__text">
                        <h1 className="training-program__title">ПРОГРАММА <span>ОБУЧЕНИЯ</span></h1>
                        <p className="training-program__description">
                            Полная информация об <br /> основных инструментах <br /> <span>Smart Money-концепции:</span> <br /> их механика, логика работы и<br /> правильное применение в <br /> анализе
                        </p>
                    </div>
                    <div className="training-program-img">
                    </div>
                </div>
            </header>
            <main>
                <div className="training-program__course-section card">
                    <h2 className='title'>из чего <br />
                        <span> состоит</span>
                    </h2>
                    <div className="course">
                        <span>курс</span>
                    </div>
                    <div className="training-program__card-img">
                        <img className='bil' src="/images/new.png" alt="Error" />
                        <img loading='lazy' src="/images/фото.png" alt="Who is" />
                    </div>


                    <ul className="training-program__list">
                        <li>что из себя представляет <span className="highlight">концепция.</span></li>
                        <li>основной принцип <span className="highlight">Smart Money.</span></li>
                        <li>этапы работы <span className="highlight">Smart Money.</span></li>
                        <li>зачем трейдеру знать про <span className="highlight">Smart Money.</span></li>
                    </ul>
                </div>
                <div className="premium training-program__course-section ">
                    <div className="training-program__card-img">
                        <img className='bil' src="/images/new.png" alt="Error" />
                        <img loading='lazy' src="/images/фото-1.png" alt="Who is" />
                    </div>

                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight">ФРАКТАЛ.</span></li>
                        <li>ЧТО ТАКОЕ <span class="highlight">SWING-ДВИЖЕНИЕ.</span></li>
                        <li>ЧТО ТАКОЕ <span class="highlight">PREMIUM И DISCOUNT.</span></li>
                        <li>ИЗ ЧЕГО СОСТОИТ <span class="highlight premium2">PREMIUM </span> И <span class="highlight premium3">DISCOUNT.</span></li>
                        <li>ЛОГИКА РАБОТЫ <span class="highlight premium2">PREMIUM </span> И <span class="highlight premium3">DISCOUNT.</span></li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight premium2">PREMIUM </span> И <span class="highlight premium3">DISCOUNT.</span></li>
                        <li>ДОПОЛНИТЕЛЬНЫЙ МАТЕРИАЛ ПО ТЕМЕ.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight premium4">ЗАДАНИЕ.</span></li>
                    </ul>
                </div>
                <div className="market training-program__course-section card_4 ">

                    <div className="training-program__card-img">
                        <img className='bil' src="/images/new.png" alt="Error" />

                        <img src="/images/фото-2.png" alt="Who is" />
                    </div>

                    <ul className="training-program__list">

                        <li>ЧТО ТАКОЕ <span class="highlight">СТРУКТУРА РЫНКА.</span></li>
                        <li>КАКАЯ БЫВАЕТ <span class="highlight">СТРУКТУРА РЫНКА.</span></li>
                        <li>ЧЕМ ХАРАКТЕРИЗУЕТСЯ КАЖДОЕ СОСТОЯНИЕ.</li>
                        <li><span class="highlight">CHOCH</span> И ЕГО ХАРАКТЕРИСТИКА.</li>
                        <li><span class="highlight">BOS </span> И ЕГО ХАРАКТЕРИСТИКА.</li>
                        <li><span class="highlight">BOS </span> CONFIRMED И ЕГО ХАРАКТЕРИСТИКА.</li>
                        <li>ВАРИАНТЫ СЛОМА СТРУКТУРЫ.</li>
                        <li>ЧТО ТАКОЕ <span class="highlight">СУБСТРУКТУРА.</span></li>
                        <li><span class="highlight">СИНХРОНИЗАЦИЯ </span>ТАЙМФРЕЙМОВ.</li>
                        <li>ПРИМЕРЫ РАБОТЫ СО СТРУКТУРОЙ.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight">ЗАДАНИЕ.</span></li>
                    </ul>
                </div>
                <div className="this training-program__course-section card_4 ">

                    <div className="training-program__card-img">
                        <img className='bil' src="/images/new.png" alt="Error" />
                        <img src="/images/фото-3.png" alt="Who is" />
                    </div>

                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight">ЛИКВИДНОСТЬ.</span></li>
                        <li>ВИДЫ <span class="highlight ">ЛИКВИДНОСТИ.</span></li>
                        <li>ХАРАКТЕРИСТИКА КАЖДОГО ВИДА.</li>
                        <li>ЧТО ТАКОЕ <span class="highlight">INDUCEMENT.</span></li>
                        <li><span class="highlight this1 ">ЛИКВИДНОСТЬ</span> + СТРУКТУРА.</li>
                        <li>ВНЕШНЯЯ ЛИКВИДНОСТЬ - ЛОГИКА.</li>
                        <li><span class="highlight this2">ВНУТРЕННЯЯ ЛИКВИДНОСТЬ - </span>ЛОГИКА.</li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight this3">ЛИКВИДНОСТЬЮ.</span></li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight this4">ЗАДАНИЕ.</span></li>
                    </ul>
                </div>
                <div className="imbalance training-program__course-section  ">
                    <div className="training-program__card-img">
                        <img className='bil' src="/images/new.png" alt="Error" />
                        <img src="/images/фото-4.png" alt="Who is" />
                    </div>

                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight">IMBALANCE.</span></li>
                        <li>ИЗ ЧЕГО СОСТОИТ <span class="highlight">IMBALANCE.</span></li>
                        <li>ЛОГИКА РАБОТЫ <span class="highlight">IMBALANCE.</span></li>
                        <li><span class="highlight">FVG - РАЗБОР.</span></li>
                        <li><span class="highlight">IFVG - РАЗБОР.</span></li>
                        <li><span class="highlight">GAP - РАЗБОР.</span></li>
                        <li><span class="highlight">BWG+ПРОТОРГОВКА.</span></li>
                        <li>УВАЖЕНИЕ И НЕУВАЖЕНИЕ <span class="highlight">IMBALANCE.</span></li>
                        <li>ЧТО ТАКОЕ <span class="highlight">SHIFT.</span></li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight">IMBALANCE.</span></li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight">ЗАДАНИЕ.</span></li>
                    </ul>
                </div>
                <div className="power training-program__course-section ">
                    <div className="training-program__card-img">
                        <img className='bil' src="/images/new.png" alt="Error" />
                        <img src="/images/фото-5.png" alt="Who is" />
                    </div>

                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight">POI.</span></li>
                        <li><span class="highlight">REJECTION BLOCK - РАЗБОР.</span></li>
                        <li><span class="highlight">ORDER BLOCK - РАЗБОР.</span></li>
                        <li><span class="highlight">BREAKER BLOCK - РАЗБОР.</span></li>
                        <li><span class="highlight">MITIGATION BLOCK - РАЗБОР.</span></li>
                        <li>УВАЖЕНИЕ И НЕУВАЖЕНИЕ <span class="highlight blok1">БЛОКОВ.</span></li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight blok2">БЛОКАМИ.</span></li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight blok3">ЗАДАНИЕ.</span></li>
                    </ul>
                </div>

                <div className="delivry training-program__course-section card_4 ">

                    <div className="training-program__card-img">
                        <img className='bil' src="/images/new.png" alt="Error" />
                        <img src="/images/фото-9.png" alt="Who is" />
                    </div>

                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight">ДОСТАВКА ЦЕНЫ.</span></li>
                        <li>НЕПРАВИЛЬНЫЙ <span class="highlight">ПОТОК ПРИКАЗОВ.</span></li>
                        <li><span class="highlight">АГРЕССИВНАЯ</span>  ДОСТАВКА.</li>
                        <li>ПРАВИЛЬНЫЙ<span class="highlight"> ПОТОК ПРИКАЗОВ.</span></li>
                        <li>ДОСТАВКА <span class="highlight">+ POI + СТРУКТУРА + LIQ.</span></li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight">ДОСТАВКОЙ ЦЕНЫ.</span></li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight">ЗАДАНИЕ.</span></li>
                    </ul>
                </div>
                <div className="smr training-program__course-section card_4 ">

                    <div className="training-program__card-img">
                        <img className='bil' src="/images/new.png" alt="Error" />
                        <img src="/images/фото-6.png" alt="Who is" />
                    </div>

                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight">SMR.</span></li>
                        <li>КАК ОПРЕДЕЛИТЬ <span class="highlight">SMR.</span></li>
                        <li>ЧТО ТАКОЕ <span class="highlight">AMD.</span></li>
                        <li>ИДЕНТИФИКАЦИЯ <span class="highlight">AMD.</span></li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight smr1">SMR И AMD.</span></li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight smr2">ЗАДАНИЕ.</span></li>
                    </ul>
                </div>
                <div className="correlation training-program__course-section ">

                    <div className="training-program__card-img">
                        <img className='bil' src="/images/new.png" alt="Error" />
                        <img src="/images/фото-7.png" alt="Who is" />
                    </div>
                    <ul className="training-program__list">
                        <li>РАЗБОРЫ ИНДЕКСОВ.</li>
                        <li><span class="highlight">POSITIVE </span>CORRELATION.</li>
                        <li>NEGATIVE<span class="highlight"> CORRELATION.</span></li>
                        <li>КАК ПРИМЕНЯТЬ <span class="highlight">CORRELATION.</span></li>
                        <li>ВАЖНОЕ УТОЧНЕНИЕ ПО <span class="highlight">CORRELATION.</span></li>
                        <li>РЕЙТИНГ <span class="highlight">ИНСТРУМЕНТОВ </span>ДЛЯ ТОРГОВЛИ.</li>
                        <li><span class="highlight">ТОРГОВЫЕ СЕССИИ.</span></li>
                        <li><span class="highlight">KILL ZONE.</span></li>
                        <li>ЦЕНА + ВРЕМЯ ДЛЯ <span className="highlight">ТОРГОВЛИ.</span></li>
                        <li>ПРИМЕРЫ РАБОТЫ <span class="highlight">CORRELATION.</span></li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li> <span className="highlight">РАЗБОРЫ</span> НА ГРАФИКЕ.</li>
                    </ul>
                </div>
                <div className="entry training-program__course-section ">

                    <div className="training-program__card-img">
                        <img className='bil' src="/images/new.png" alt="Error" />
                        <img src="/images/фото-8.png" alt="Who is" />
                    </div>
                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight model1">МОДЕЛЬ ВХОДА.</span></li>
                        <li>ТАЙМФРЕЙМЫ ДЛЯ<span class="highlight model1"> МОДЕЛЕЙ ВХОДА.</span></li>
                        <li><span class="highlight">ПРАВИЛА </span>МОДЕЛИ ВХОДА.</li>
                        <li>МОДЕЛИ ВХОДА.</li>
                        <li><span class="highlight">СВИП МОДЕЛИ + </span>ПЕРЕЗАХОД.</li>
                        <li>ЧТО МОЖНО БРАТЬ ЗА <span class="highlight">ЦЕЛИ.</span></li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight model2">МОДЕЛЯМИ </span>И <span class="highlight">ЦЕЛЯМИ.</span> </li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight model3">ЗАДАНИЕ.</span></li>
                    </ul>
                </div>
                <div className="indicators training-program__course-section card_4 ">

                    <div className="training-program__card-img">
                        <img className='bil' src="/images/new.png" alt="Error" />
                        <img src="/images/фото-10.png" alt="Who is" />
                    </div>
                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span className="highlight">ТОРГОВЫЕ ИНДИКАТОРЫ.</span></li>
                        <li><span className="highlight">RSI</span> - РАЗБОР И НАСТРОЙКА.</li>
                        <li><span className="highlight">EMA</span> - РАЗБОР И НАСТРОЙКА.</li>
                        <li><span className="highlight">SESSIONS</span> - РАЗБОР И НАСТРОЙКА.</li>
                        <li><span className="highlight">FRACTALS</span> - РАЗБОР И НАСТРОЙКА.</li>
                        <li><span className="highlight">PIVOTS</span> - РАЗБОР И НАСТРОЙКА.</li>
                        <li>НОВОСТИ - <span className="highlight">РАЗБОР</span> И НАСТРОЙКА.</li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span className="highlight">ЗАДАНИЕ.</span></li>
                    </ul>
                </div>
                <div className="risk training-program__course-section ">
                    <div className="training-program__card-img">
                        <img className='bil' src="/images/new.png" alt="Error" />
                        <img src="/images/фото-11.png" alt="Who is" />
                    </div>
                    <ul className="training-program__list">
                        <li>Что такое  <span className="highlight">риск-менеджмент.</span> </li>
                        <li> <span className="highlight">Зачем нужен</span> риск-менеджмент.</li>
                        <li>В чем сила <span className="highlight"> риск-менеджмента.</span> </li>
                        <li>Классический риск-менеджмент.</li>
                        <li> <span className="highlight"> Проп</span>  риск-менеджмент.</li>
                        <li>Рекомендации по работе с  <span className="highlight"> пропами.</span></li>
                        <li>Психология.</li>
                        <li>Дополнительная   <span className="highlight"> информация.</span></li>
                    </ul>
                </div>
                <div className="last training-program__course-section  ">
                    <div className="training-program__card-img">
                        <img className='bil' src="/images/new.png" alt="Error" />
                        <img src="/images/фото-12.png" alt="Who is" />
                    </div>

                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span className="highlight">ТОРГОВЫЙ СЕТАП.</span></li>
                        <li><span className="highlight">НАСТРОЙКИ</span> СЕТАПОВ.</li>
                        <li>ДОПОЛНИТЕЛЬНАЯ <span className="highlight">ИНФОРМАЦИЯ.</span></li>
                        <li><span className="highlight">ПРИМЕРЫ РАБОТЫ</span> ПО СЕТАПАМ.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li><span className="highlight">ДОМАШНЕЕ </span>ЗАДАНИЕ.</li>
                    </ul>

                </div>
            </main>
            <footer className='footer' >
                <div ref={formatRef} className="container">
                    <h2 className='title'>
                        ФОРМАТ <br /> <span>ОБУЧЕНИЯ</span>
                    </h2>
                    <div className="contents">
                        <div className="content content_one">
                            <p>Вы получаете <span className="span1">доступ </span>к закрытому тг каналу с загруженным материалом. </p>
                        </div>
                        <div className="content content_two">
                            <p>
                                <span className="span2">Материалы</span> - это видеоуроки + задания + записи эфиров.
                            </p>
                            <img width={60} src="/images/1_2.png" alt="1_1" />

                        </div>
                        <div className="content content_three">
                            <p>
                                В канале <span className="span3">2 раза в неделю</span> проводятся созвоны, на которых вы получаете <span className="span3">ответы на вопросы</span> и проверку домашних заданий.
                            </p>
                            <img width={60} src="/images/1_1.png" alt="1_2" />

                        </div>
                        <div className="content content_one content_four">
                            <p><span className="span1">Доступ</span>  к каналу остается у вас навсегда. </p>
                            <img width={60} src="/images/1_3.png" alt="1_3" />
                        </div>
                    </div>

                </div>
                <div ref={priceRef} className="mini_card">
                    <h2 className="title">
                        СТОИМОСТЬ <br />
                        <span>ОБУЧЕНИЯ</span>
                    </h2>
                    <p> Стоимость в<span> $</span> в зависит от курса. <br />
                        <span> Актуальная стоимость:</span>
                    </p>
                    <div className="card_detail first_detail">
                        <span class="my_span">в рублях</span>
                        <h3>50.000 <span className="rubl">₽.</span></h3>
                    </div>
                    <div className="card_detail last_detail">
                        <span class="my_span">в долларах</span>
                        <h3>633 <span>$.</span></h3>
                    </div>
                </div>
                <div ref={startRef} className="nout_card">
                    <img src="/images/nout x.png" alt="Rasm kelmadi" />
                    <div className="card1">
                        <p>Чтобы приобрести доступ к <span> обучающим материалам,</span> <br />
                            свяжитесь с нами:</p>

                    </div>
                </div>
                <div className="card_group">
                    <a href='https://t.me/big_trade777' target='blank' className="card2">
                        <img src="/images/Mask group 1.png" alt="" />
                        <p>ПаРВИЗ</p>
                    </a>
                    <a href='https://t.me/yar_pro_trading' target='blank' className="card3">
                        <img src="/images/Mask group 2.png" alt="" />
                        <p>ярослав</p>
                    </a>

                </div>

            </footer>



        </div>
    );
};

export default TrainingProgram;
