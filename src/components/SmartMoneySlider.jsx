import { Link } from "react-router-dom";
import "../styles/SmartSlider.css"

const SmartMoneySlider = () => {
  return (
    <div className="smartslider">
        <img src="/public/images/евро.png" className="euro" alt="Euro" />
        <img src="/public/images/доллар 2.png" className="dollar" alt="" />
        <img src="/public/images/доллар 4.png" className="dollar_1" alt="" />
        <img src="/public/images/фунт.png" className="funt" alt="" />
        <img src="/public/images/шв.png" className="shv" alt="" />
        <img src="/public/images/бизон 2 1.png" alt="" className="hero" />
        <div className="smart">
            <h2>Smart <br /> <span>Money</span></h2>
            <p> <span>Научись </span> смотреть на график и видеть ситуации для <span>заработка,</span> а не шум и манипуляции!</p>
            <Link to="/course" className="link">узнать больше</Link>
        </div>

    </div>
  );
};

export default SmartMoneySlider;
