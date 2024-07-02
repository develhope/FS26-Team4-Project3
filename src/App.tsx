import "../src/components/Login/Login.css";
import Feed from "./components/Cards/Feed";
import Login1 from "./components/Login/Login1";
import Login2 from "./components/Login/Login2";
import Login3 from "./components/Login/Login3";
import LoginA from "./components/Login/LoginA";
import SwitchProfile from "./components/Login/SwitchProfile";
import { Chat } from "./components/Messages/Chat";
import MessageCenter from "./components/Messages/MessageCenter";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import AccountManagement from "./components/Settings/AccountManagement";
import Notification from "./components/Settings/Notification";
import PrivacyAccount from "./components/Settings/PrivacyAccount";
import SettingFriends from "./components/Settings/SettingFriends";
import SettingHelp from "./components/Settings/SettingHelp";
import SettingInteractions from "./components/Settings/SettingInteractions";
import SettingLanguage from "./components/Settings/SettingLanguage";
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
          <Route path="/messagecenter" element={<MessageCenter />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/settings" element={<SettingsMainPage />} />
          <Route path="/settings/accountmanagement" element={<AccountManagement />} />
          <Route path="/settings/notification" element={<Notification />} />
          <Route path="/settings/privacyaccount" element={<PrivacyAccount />} />
          <Route path="/settings/friends" element={<SettingFriends />} />
          <Route path="/settings/help" element={<SettingHelp />} />
          <Route path="/settings/interactions" element={<SettingInteractions />} />
          <Route path="/settings/language" element={<SettingLanguage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
