import "../src/components/Login/Login.css";
import CardFeed from "./components/Cards/CardFeed";
import Login1 from "./components/Login/Login1";
import Login2 from "./components/Login/Login2";
import Login3 from "./components/Login/Login3";
import LoginA from "./components/Login/LoginA";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import SettingsMainPage from "./components/Settings/SettingsMainPage";
import Splash from "./components/Splash";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login1" element={<Login1 />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/login3" element={<Login3 />} />
        <Route path="/LoginA" element={<LoginA />} />
        <Route path="/cardfeed" element={<CardFeed />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/settingsmainpage" element={<SettingsMainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
