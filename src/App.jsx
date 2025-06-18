import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import TrainLayout from "./layouts/TrainLayout"
import { useEffect } from "react";
import { init, isTMA, viewport } from "@telegram-apps/sdk";
const useTelegram = () => {
  useEffect(() => {
    console.log(viewport.requestFullscreen.isAvailable())
    const initTg = async () => {
      if (await isTMA()) {
        await init(); // Telegram appni ishga tushiramiz

        if (viewport.mount.isAvailable()) {
          await viewport.mount();
          viewport.expand(); // Avval viewport'ni kengaytiramiz
        }

        if (viewport.requestFullscreen.isAvailable()) {
          await viewport.requestFullscreen(); // Keyin fullscreen rejimni yoqamiz
          console.log("Fullscreen mode enabled!");
        } else {
          console.log("Fullscreen not supported!");
        }
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
