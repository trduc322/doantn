import { Outlet } from "react-router"
import Header from "../header"
import Footer from "../footer"
const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout
