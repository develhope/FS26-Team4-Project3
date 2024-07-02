import "../src/components/Login/Login.css";
import Feed from "./components/Cards/Feed";
import Login1 from "./components/Login/Login1";
import Login2 from "./components/Login/Login2";
import Login3 from "./components/Login/Login3";
import LoginA from "./components/Login/LoginA";
import SwitchProfile from "./components/Login/SwitchProfile";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import SettingsMainPage from "./components/Settings/SettingsMainPage";
import Splash from "./components/Splash";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login1" element={<Login1 />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/login3" element={<Login3 />} />
          <Route path="/switchpet" element={<SwitchProfile />} />
          <Route path="/registerpet" element={<LoginA />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsMainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
