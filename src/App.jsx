import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import TrainLayout from "./layouts/TrainLayout"
import { useEffect } from "react";
import { init, isTMA, viewport } from "@telegram-apps/sdk";
const useTelegram = () => {
  useEffect(() => {
    const initTg = async () => {
      if (await isTMA()) {
        await init(); // Telegram appni ishga tushuramiz

        if (viewport.mount.isAvailable()) {
          await viewport.mount();
          viewport.expand(); // Faqat viewport'ni kengaytiramiz
        }

        console.log("Telegram Mini App ichida ishlayapti");
      } else {
        console.log("Not inside Telegram Mini App.");
      }
    };

    initTg();
  }, []);
};
function App() {
  useTelegram()

  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}/>
      <Route path="/courses" element={<TrainLayout/>}/>
    </Routes>
  )
}

export default App
