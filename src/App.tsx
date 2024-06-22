import Login from "./components/Login/Login1";
import Setting from "./components/Settings/SettingMainPage";
import "../src/components/Login/Login.css";
import "./index.css";
import Login2 from "./components/Login/Login2";
import Login3 from "./components/Login/Login3";
import CardFeed from "./components/Cards/CardFeed";
import { PostMain } from "./components/Posts/PostMain";
import { FeedProfile } from "./components/ProfilePage/FeedProfile";
import MessageCenter from "./components/Messages/MessageCenter";

function App() {
  return (
    <div>
      <CardFeed />
      <PostMain />
      <FeedProfile />
    </div>
  );
}

export default App;
