import React, { useEffect, useRef, useState } from 'react';
import '../styles/TrainingProgram.css';


 

const TrainingProgram = () => {
    const programRef = useRef(null);
    const formatRef = useRef(null);
    const priceRef = useRef(null);
    const startRef = useRef(null);
    const navRef = useRef(null);
    const textRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);
    useEffect(() => {
        if (navRef.current) {
            const height = navRef.current.getBoundingClientRect().height;
            setNavHeight(height);
        }
    }, []);

    const scrollTo = (ref) => {
        if (ref.current) {
            const offsetTop = ref.current.offsetTop;
            window.scrollTo({
                top: offsetTop - navHeight - 30,
                behavior: 'smooth',
            });
        }
    };
    const containerRef = useRef(null);
useEffect(() => {
    const handleScroll = () => {
      if (!programRef.current) return;
      const isScrolled = window.scrollY > 10;
      containerRef.current.classList.toggle("scrolled", isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



    return (
        <div className="training-program">
            <header className="header">
                <ul ref={navRef} className="training-program__nav">
                    <li onClick={() => scrollTo(programRef)} className="training-program__nav-item">Программа обучения</li>
                    <li onClick={() => scrollTo(formatRef)} className="training-program__nav-item">формат обучения</li>
                    <li onClick={() => scrollTo(priceRef)} className="training-program__nav-item">стоимоть обучения</li>
                    <li onClick={() => scrollTo(startRef)} className="training-program__nav-item">начать обучениe</li>
                </ul>
                <div ref={programRef}  className="training-program__hero">
                    <div ref={textRef} className="training-program__text">
                        <h1 className="training-program__title">ПРОГРАММА <span>ОБУЧЕНИЯ</span></h1>
                        <p className="training-program__description">
                            Полная информация об основных инструментах <span>Smart Money-концепции:</span> их механика, логика работы и правильное применение в анализе
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
                        <img loading='lazy' src="/images/WHO IS 2.png" alt="Who is" />
                    </div>
                    <div className="bottom_img">
                        <img loading='lazy' src="/images/Rectangle 105.png" alt="Rectangle" />

                    </div>

                    <ul className="training-program__list">
                        <li>что из себя представляет <span className="highlight">концепция</span>.</li>
                        <li>основной принцип <span className="highlight">Smart Money</span>.</li>
                        <li>этапы работы <span className="highlight">Smart Money</span>.</li>
                        <li>зачем трейдеру знать про <span className="highlight">Smart Money</span>.</li>
                    </ul>
                </div>
                <div className="premium training-program__course-section ">
                    <div className="training-program__card-img">
                        <img loading='lazy' src="/images/Premium 1.png" alt="Who is" />
                    </div>
                    <div className="bottom_img">
                        <img loading='lazy' src="/images/Rectangle 105.png" alt="Rectangle" />

                    </div>
                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight">ФРАКТАЛ</span>.</li>
                        <li>ЧТО ТАКОЕ <span class="highlight">SWING-ДВИЖЕНИЕ</span>.</li>
                        <li>ЧТО ТАКОЕ <span class="highlight">PREMIUM И DISCOUNT</span>.</li>
                        <li>ИЗ ЧЕГО СОСТОИТ <span class="highlight">PREMIUM И DISCOUNT</span>.</li>
                        <li>ЛОГИКА РАБОТЫ <span class="highlight">PREMIUM И DISCOUNT</span>.</li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight">PREMIUM И DISCOUNT</span>.</li>
                        <li>ДОПОЛНИТЕЛЬНЫЙ МАТЕРИАЛ ПО ТЕМЕ.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight">ЗАДАНИЕ</span>.</li>
                    </ul>
                </div>
                <div className="market training-program__course-section ">
                    <div className="training-program__card-img">

                        <img src="/images/MARKET (2) 1.png" alt="Who is" />
                    </div>
                    <div className="bottom_img">
                        <img loading='lazy' src="/images/Rectangle 105.png" alt="Rectangle" />

                    </div>
                    <ul className="training-program__list">

                        <li>ЧТО ТАКОЕ <span class="highlight">СТРУКТУРА РЫНКА</span>.</li>
                        <li>КАКАЯ БЫВАЕТ <span class="highlight">СТРУКТУРА РЫНКА</span>.</li>
                        <li>ЧЕМ ХАРАКТЕРИЗУЕТСЯ КАЖДОЕ СОСТОЯНИЕ.</li>
                        <li><span class="highlight">CHOCE И ЕГО ХАРАКТЕРИСТИКА</span>.</li>
                        <li><span class="highlight">BOS И ЕГО ХАРАКТЕРИСТИКА</span>.</li>
                        <li><span class="highlight">BOS CONFIRMED И ЕГО ХАРАКТЕРИСТИКА</span>.</li>
                        <li>ВАРИАНТЫ СЛОМА СТРУКТУРЫ.</li>
                        <li>ЧТО ТАКОЕ <span class="highlight">СУБСТРУКТУРА</span>.</li>
                        <li><span class="highlight">СИНХРОНИЗАЦИЯ ТАЙМФРЕЙМОВ</span>.</li>
                        <li>ПРИМЕРЫ РАБОТЫ СО СТРУКТУРОЙ.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight">ЗАДАНИЕ</span>.</li>
                    </ul>
                </div>
                <div className="this training-program__course-section ">
                    <div className="training-program__card-img">
                        <img src="/images/This is 1.png" alt="Who is" />
                    </div>
                    <div className="bottom_img">
                        <img loading='lazy' src="/images/Rectangle 105.png" alt="Rectangle" />
                    </div>
                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight">ЛИКВИДНОСТЬ</span>.</li>
                        <li>ВИДЫ <span class="highlight">ЛИКВИДНОСТИ</span>.</li>
                        <li>ХАРАКТЕРИСТИКА КАЖДОГО ВИДА.</li>
                        <li>ЧТО ТАКОЕ <span class="highlight">INDUCEMENT</span>.</li>
                        <li><span class="highlight">ЛИКВИДНОСТЬ + СТРУКТУРА</span>.</li>
                        <li>ВНЕШНЯЯ ЛИКВИДНОСТЬ - ЛОГИКА.</li>
                        <li><span class="highlight">ВНУТРЕННЯЯ ЛИКВИДНОСТЬ - ЛОГИКА</span>.</li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight">ЛИКВИДНОСТЬЮ</span>.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight">ЗАДАНИЕ</span>.</li>
                    </ul>
                </div>
                <div className="imbalance training-program__course-section ">
                    <div className="training-program__card-img">
                        <img src="/images/This is (1) 1.png" alt="Who is" />
                    </div>
                    <div className="bottom_img">
                        <img loading='lazy' src="/images/Rectangle 105.png" alt="Rectangle" />

                    </div>
                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight">IMBALANCE</span>.</li>
                        <li>ИЗ ЧЕГО СОСТОИТ <span class="highlight">IMBALANCE</span>.</li>
                        <li>ЛОГИКА РАБОТЫ <span class="highlight">IMBALANCE</span>.</li>
                        <li><span class="highlight">FVG - РАЗБОР</span>.</li>
                        <li><span class="highlight">IFVG - РАЗБОР</span>.</li>
                        <li><span class="highlight">GAP - РАЗБОР</span>.</li>
                        <li><span class="highlight">BWG+ПРОТОРГОВКА</span>.</li>
                        <li>УВАЖЕНИЕ И НЕУВАЖЕНИЕ <span class="highlight">IMBALANCE</span>.</li>
                        <li>ЧТО ТАКОЕ <span class="highlight">SHIFT</span>.</li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight">IMBALANCE</span>.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight">ЗАДАНИЕ</span>.</li>
                    </ul>
                </div>
                <div className="power training-program__course-section ">
                    <div className="training-program__card-img">
                        <img src="/images/Power Blocks_ 1.png" alt="Who is" />
                    </div>
                    <div className="bottom_img">
                        <img loading='lazy' src="/images/Rectangle 105.png" alt="Rectangle" />

                    </div>
                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight">POI</span>.</li>
                        <li><span class="highlight">REJECTION BLOCK - РАЗБОР</span>.</li>
                        <li><span class="highlight">ORDER BLOCK - РАЗБОР</span>.</li>
                        <li><span class="highlight">BREAKER BLOCK - РАЗБОР</span>.</li>
                        <li><span class="highlight">MITIGATION BLOCK - РАЗБОР</span>.</li>
                        <li>УВАЖЕНИЕ И НЕУВАЖЕНИЕ <span class="highlight">БЛОКОВ</span>.</li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight">БЛОКАМИ</span>.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight">ЗАДАНИЕ</span>.</li>
                    </ul>
                </div>

                <div className="delivry training-program__course-section ">
                    <div className="training-program__card-img">
                        <img src="/images/delivery options prices 1.png" alt="Who is" />
                    </div>
                    <div className="bottom_img">
                        <img loading='lazy' src="/images/Rectangle 105.png" alt="Rectangle" />

                    </div>
                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight">ДОСТАВКА ЦЕНЫ</span>.</li>
                        <li><span class="highlight">НЕПРАВИЛЬНЫЙ ПОТОК ПРИКАЗОВ</span>.</li>
                        <li><span class="highlight">АГРЕССИВНАЯ ДОСТАВКА</span>.</li>
                        <li><span class="highlight">ПРАВИЛЬНЫЙ ПОТОК ПРИКАЗОВ</span>.</li>
                        <li><span class="highlight">ДОСТАВКА + POI + СТРУКТУРА + LIQ</span>.</li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight">ДОСТАВКОЙ ЦЕНЫ</span>.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight">ЗАДАНИЕ</span>.</li>
                    </ul>
                </div>
                <div className="smr training-program__course-section ">
                    <div className="training-program__card-img">
                        <img src="/images/SMR & AMD 1.png" alt="Who is" />
                    </div>
                    <div className="bottom_img">
                        <img loading='lazy' src="/images/Rectangle 105.png" alt="Rectangle" />

                    </div>
                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight">SMR</span>.</li>
                        <li>КАК ОПРЕДЕЛИТЬ <span class="highlight">SMR</span>.</li>
                        <li>ЧТО ТАКОЕ <span class="highlight">AMD</span>.</li>
                        <li>ИДЕНТИФИКАЦИЯ <span class="highlight">AMD</span>.</li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight">SMR И AMD</span>.</li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight">ЗАДАНИЕ</span>.</li>
                    </ul>
                </div>
                <div className="correlation training-program__course-section ">
                    <div className="training-program__card-img">
                        <img src="/images/Power Blocks_ (1) 1.png" alt="Who is" />
                    </div>
                    <div className="bottom_img">
                        <img loading='lazy' src="/images/Rectangle 105.png" alt="Rectangle" />

                    </div>
                    <ul className="training-program__list">
                        <li>РАЗБОРЫ ИНДЕКСОВ.</li>
                        <li><span class="highlight">POSITIVE CORRELATION</span>.</li>
                        <li><span class="highlight">NEGATIVE CORRELATION</span>.</li>
                        <li>КАК ПРИМЕНЯТЬ <span class="highlight">CORRELATION</span>.</li>
                        <li>ВАЖНОЕ УТОЧНЕНИЕ ПО <span class="highlight">CORRELATION</span>.</li>
                        <li><span class="highlight">РЕЙТИНГ ИНСТРУМЕНТОВ ДЛЯ ТОРГОВЛИ</span>.</li>
                        <li><span class="highlight">ТОРГОВЫЕ СЕССИИ</span>.</li>
                        <li><span class="highlight">KILL ZONE</span>.</li>
                        <li>ЦЕНА + ВРЕМЯ ДЛЯ ТОРГОВЛИ.</li>
                        <li>ПРИМЕРЫ РАБОТЫ <span class="highlight">CORRELATION</span>.</li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                    </ul>
                </div>
                <div className="entry training-program__course-section ">
                    <div className="training-program__card-img">
                        <img src="/images/entry models & targets 1.png" alt="Who is" />
                    </div>
                    <div className="bottom_img">
                        <img loading='lazy' src="/images/Rectangle 105.png" alt="Rectangle" />

                    </div>
                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span class="highlight">МОДЕЛЬ ВХОДА</span>.</li>
                        <li><span class="highlight">ТАЙМФРЕЙМЫ ДЛЯ МОДЕЛЕЙ ВХОДА</span>.</li>
                        <li><span class="highlight">ПРАВИЛА МОДЕЛИ ВХОДА</span>.</li>
                        <li><span class="highlight">МОДЕЛИ ВХОДА</span>.</li>
                        <li><span class="highlight">СВИП МОДЕЛИ + ПЕРЕЗАХОД</span>.</li>
                        <li>ЧТО МОЖНО БРАТЬ ЗА <span class="highlight">ЦЕЛИ</span>.</li>
                        <li>ПРИМЕРЫ РАБОТЫ С <span class="highlight">МОДЕЛЯМИ И ЦЕЛЯМИ</span>.</li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span class="highlight">ЗАДАНИЕ</span>.</li>
                    </ul>
                </div>
                <div className="indicators training-program__course-section ">
                    <div className="training-program__card-img">
                        <img src="/images/indicators (1) 2.png" alt="Who is" />
                    </div>
                    <div className="bottom_img">
                        <img loading='lazy' src="/images/Rectangle 105.png" alt="Rectangle" />

                    </div>
                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span className="highlight">ТОРГОВЫЕ ИНДИКАТОРЫ</span>.</li>
                        <li><span className="highlight">RSI</span> - РАЗБОР И НАСТРОЙКА.</li>
                        <li><span className="highlight">EMA</span> - РАЗБОР И НАСТРОЙКА.</li>
                        <li><span className="highlight">SESSIONS</span> - РАЗБОР И НАСТРОЙКА.</li>
                        <li><span className="highlight">FRACTALS</span> - РАЗБОР И НАСТРОЙКА.</li>
                        <li><span className="highlight">PIVOTS</span> - РАЗБОР И НАСТРОЙКА.</li>
                        <li>НОВОСТИ - <span className="highlight">РАЗБОР</span> И НАСТРОЙКА.</li>
                        <li>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ.</li>
                        <li>РАЗБОРЫ НА ГРАФИКЕ.</li>
                        <li>ДОМАШНЕЕ <span className="highlight">ЗАДАНИЕ</span>.</li>
                    </ul>
                </div>
                <div className="risk training-program__course-section ">
                    <div className="training-program__card-img">
                        <img src="/images/MARKET (3) 1.png" alt="Who is" />
                    </div>
                    <div className="bottom_img">
                        <img loading='lazy' src="/images/Rectangle 105.png" alt="Rectangle" />

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
                        <img src="/images/bonus (1) 1.png" alt="Who is" />
                    </div>
                    <div className="bottom_img">
                        <img loading='lazy' src="/images/Rectangle 105.png" alt="Rectangle" />

                    </div>
                    <ul className="training-program__list">
                        <li>ЧТО ТАКОЕ <span className="highlight">ТОРГОВЫЙ СЕТАП</span>.</li>
                        <li><span className="highlight">НАСТРОЙКИ</span> СЕТАПОВ.</li>
                        <li><span className="highlight">ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</span>.</li>
                        <li><span className="highlight">ПРИМЕРЫ РАБОТЫ</span> ПО СЕТАПАМ.</li>
                        <li><span className="highlight">РАЗБОРЫ</span> НА ГРАФИКЕ.</li>
                        <li><span className="highlight">ДОМАШНЕЕ ЗАДАНИЕ</span>.</li>
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
                    <p> Стоимость в<span> $</span> в зависит от курса.
                        <span> Актуальная стоимость:</span>
                    </p>
                    <div className="card_detail first_detail">
                        <span>в рублях</span>
                        <h3>50.000 ₽.</h3>
                    </div>
                    <div className="card_detail last_detail">
                        <span>в долларах</span>
                        <h3>633 $.</h3>
                    </div>
                </div>
                <div ref={startRef} className="nout_card">
                    <img src="/images/ноут 1.png" alt="Rasm kelmadi" />
                </div>
                <div className="card_group">
                    <div className="card1">
                        <p>Чтобы приобрести доступ к <span> обучающим материалам,</span>
                            свяжитесь с нами:</p>
                    </div>
                    <div className="card2">
                        <img src="/images/Mask group 1.png" alt="" />
                        <p>ПаРВИЗ</p>
                    </div>
                    <div className="card3">
                        <img src="/images/Mask group 2.png" alt="" />
                        <p>ярослав</p>
                    </div>

                </div>

            </footer>



        </div>
    );
};

export default TrainingProgram;
