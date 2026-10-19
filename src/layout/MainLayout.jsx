// layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import NewFooter from "../components/footer/NewFooter";
import Navigation from "../components/navigation/Navigation";
import ScrollToTop from "../context/ScrollToTop";
import BottomMobileNav from "../components/navigation/BottomMobileNav";
// import ChatboxWidget from "../components/chatbox/ChatboxWidget";

const MainLayout = () => {
  return (
    <div>
   

      <ScrollToTop />
      <Navigation />
      <Outlet />
      <BottomMobileNav />
      <NewFooter />

      {/* Socket.IO usage test করার জন্য সাময়িকভাবে বন্ধ */}
      {/* <ChatboxWidget /> */}
    </div>
  );
};

export default MainLayout;