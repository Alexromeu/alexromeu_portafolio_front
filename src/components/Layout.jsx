import Header from "./Header"
import { Outlet } from "react-router-dom"
import MobileMenu from "./responsive_components/responsive_menu_header"
import Footer from "./home/footer/Footer"
import Footer_divider from "./home/footer/footer_divider"

export default function Layout() {
    return (<>
     <MobileMenu />
     <main>
        <Outlet/>
        <Footer_divider/>
        <Footer /> 
     </main>
     
    </>)
}