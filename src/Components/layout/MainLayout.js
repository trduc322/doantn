import { Outlet } from "react-router"
import Header from "../header"
import Footer from "../footer"
import { useEffect, useState } from "react"
import Spinner from "react-spinner-material"
//import { ProductsProvider } from "../../Context/productsContext/ProductsContext"
const MainLayout = ({user}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userData, setUserData] = useState({})
    useEffect(() => {
        setUserData(user)
        setIsLoading(false)
    }, [user])
    return (
        !isLoading?
        <div className="flex flex-col min-h-screen">
            <Header user={userData}/>
                <Outlet/>
            <Footer/>
        </div>
        :
        <div className="m-auto"><Spinner radius={100} color={"#15b9d5"} stroke={10} visible={true}/></div>
    )
}

export default MainLayout
