import Header from "./Header"
import { Outlet } from "react-router-dom"
import MobileMenu from "./responsive_components/responsive_menu_header"
import Footer from "./home/footer/Footer"

export default function Layout() {
    return (<>
     <MobileMenu />
     <main>
        <Outlet/>
        <Footer /> 
     </main>
     
    </>)
}