import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import MainLayout from '../Components/layout/MainLayout';
import Home from '../Components/home';
import FindLaptop from '../Components/findlaptop';
import LaptopDetails from '../Components/laptopdetails';
import SignIn from '../Components/signin';
import CompareLaptop from '../Components/comparelaptop';
import Category from '../Components/category';
import Register from '../Components/register';
import Admin from '../Components/admin';
import Brands from '../Components/brands';
import BrandDetails from '../Components/branddetails';
import AccountDetails from '../Components/accountdetails';
const Approuter = ({user, laptops, brands}) => {
    return (
        <Router>
            <Routes>
                {user && !user.UserRole ? null : <Route path="/admin" element={<Admin user = {user} laptops={laptops} brands={brands}/>}></Route>}
                <Route path="/*" element={<MainLayout user={user}/>}>
                    <Route index element={<Home/>}/>
                    <Route path="findlaptop" element={<FindLaptop laptops = {laptops}/>}/>
                    <Route path="laptopdetails/:id" element={<LaptopDetails user={user} laptops={laptops}/>}/>
                    <Route path="signin" element={<SignIn/>}/>
                    <Route path="comparelaptop" element={<CompareLaptop laptops = {laptops}/>}/>
                    <Route path="categories" element={<Category/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="brands" element={<Brands brands={brands}/>}/>
                    <Route path="branddetails/:id" element={<BrandDetails/>}/>
                    <Route path="accountdetails" element={user? <AccountDetails user={user}/> : <SignIn/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default Approuter


