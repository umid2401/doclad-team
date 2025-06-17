import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import TrainLayout from "./layouts/TrainLayout"

// import "App.css"
function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}/>
      <Route path="/courses" element={<TrainLayout/>}/>
    </Routes>
  )
}

export default App
