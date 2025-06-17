import { useNavigate } from "react-router-dom";
import SmartMoneySlider from "../components/SmartMoneySlider";

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <SmartMoneySlider/>
  );
};

export default MainLayout;