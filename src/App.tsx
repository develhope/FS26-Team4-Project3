import Login from "./components/Login/Login1";
import Setting from "./components/Settings/SettingMainPage";
import "../src/components/Login/Login.css";
import "./index.css";
import Login1 from "./components/Login/Login1";
import Login2 from "./components/Login/Login2";
import Login3 from "./components/Login/Login3";
import CardFeed from "./components/Cards/CardFeed";
import { PostMain } from "./components/Posts/PostMain";
import MessageCenter from "./components/Messages/MessageCenter";
import { Chat } from "./components/Messages/Chat";
import SwitchProfile from "./components/Login/SwitchProfile";
import ProfileHeader from "./components/ProfilePage/ProfileHeader";
import ProfileStats from "./components/ProfilePage/ProfileStats";
import ProfileActions from "./components/ProfilePage/ProfileActions";
import { ProfileGallery } from "./components/ProfilePage/ProfileGallery";
import AccountManagement from "./components/Settings/AccountManagement";
import Notification from "./components/Settings/Notification";
import PravacyAccount from "./components/Settings/PravicyAccount";
import SettingFriends from "./components/Settings/SettingFriends";
import SettingInteractions from "./components/Settings/SettingInteractions";
import SettingLanguage from "./components/Settings/SettingLanguage";
import SettingHelp from "./components/Settings/SettingHelp";

function App() {
  return (
    <div>
      {/*
      <CardFeed />
      <PostMain />
      <FeedProfile />
      */}
      {/* <MessageCenter />
      <Chat /> */}
      {/*  <ProfileHeader />
      <ProfileStats />
      <ProfileActions />
      <ProfileGallery /> */}
      <Setting />
      {/* <AccountManagement /> */}
      {/* <Notification /> */}
      {/* <PravacyAccount /> */}
    </div>
  );
}

export default App;
