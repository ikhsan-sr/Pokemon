import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";
import { GlobalStyle } from "../../../styles/Global.style";

export default function Layout({children}) {
  return (
    <GlobalStyle>
      <Navbar />
        {children}
      {/* <Footer /> */}
    </GlobalStyle>
  )
}
