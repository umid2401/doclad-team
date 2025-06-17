import { useNavigate } from "react-router-dom";
import TrainingProgram from "../components/TrainingProgam";

const TrainLayout = () => {
  const navigate = useNavigate();

  return (
    <>
    <TrainingProgram/>
    </>
  );
};

export default TrainLayout;