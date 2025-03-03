import { themeColor } from "../../lib/Utils";
import Footer from "../Footer";
import MyNavbar from "../Navbar";

export const Warper = ({ children, isDark }) => (
  <div className={themeColor(isDark)}>
    <MyNavbar isDark={isDark} />
    {children}
    <Footer isDark={isDark} />
  </div>
);