import Login from "./components/Login/Login1";
import SettingsMainPage from "./components/Settings/SettingsMainPage";
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
import FooterNavbar from "./components/Navbars/FooterNavbar";
import ProfileHeaderNavbar from "./components/Navbars/ProfileHeaderNavbar";
import FeedHeaderNavbar from "./components/Navbars/FeedHeaderNavbar";
import MessagesHeaderNavbar from "./components/Navbars/MessagesHeaderNavbar";
import ChatHeaderNavbar from "./components/Navbars/ChatHeaderNavbar";
import SettingsFooterNavbar from "./components/Navbars/SettingsFooterNavbar";
import SettingsHeaderNavbar from "./components/Navbars/SettingsHeaderNavbar";


function App() {
  return (
    <div>
      {/*
      <FeedHeaderNavbar />
      <CardFeed />
      <PostMain />
      <FooterNavbar />*/}
      {/*<MessagesHeaderNavbar />*/}
      {/*<ChatHeaderNavbar />
      <MessageCenter />
      <Chat />
      <FooterNavbar />*/}
      {/*<ProfileHeaderNavbar />
      <ProfileHeader />
      <ProfileStats />
      <ProfileActions />
      <ProfileGallery />
      <FooterNavbar />*/}
      <SettingsHeaderNavbar />
      <SettingsMainPage />
      <SettingsFooterNavbar />
    </div>
  );
}

export default App;
