import { Link } from "react-router-dom";
import "../styles/SmartSlider.css"

const SmartMoneySlider = () => {
  return (
    <div className="smartslider">
        <img src="/images/евро.png" className="euro" alt="Euro" />
        <img src="/images/доллар 2.png" className="dollar" alt="" />
        <img src="/images/доллар 4.png" className="dollar_1" alt="" />
        <img src="/images/фунт.png" className="funt" alt="" />
        <img src="/images/шв.png" className="shv" alt="" />
        <img src="/images/бизон 2 1.png" alt="" className="hero" />
        <div className="smart">
            <h2>Smart <br /> <span>Money</span></h2>
            <p> <span>Научись </span> смотреть на график и видеть ситуации для <span>заработка,</span> а не шум и манипуляции!</p>
            <Link to="/course" className="link">узнать больше</Link>
        </div>

    </div>
  );
};

export default SmartMoneySlider;
