import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import MainLayout from '../Components/layout/MainLayout';
import Home from '../Components/home';
const Approuter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                </Route>    
            </Routes>
        </Router>
    )
}

export default Approuter


