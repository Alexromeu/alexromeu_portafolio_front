import Header from "./Header"
import { Outlet } from "react-router-dom"
import MobileMenu from "./responsive_components/responsive_menu_header"

export default function Layout() {

    return (<>
     <MobileMenu />
     <main>
        <Outlet/>
     </main>
    </>)
}