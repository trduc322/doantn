import { Outlet } from "react-router"
import Header from "../header"
import Footer from "../footer"
const MainLayout = ({user}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header user={user}/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout
