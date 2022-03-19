import React, { useEffect, useState } from 'react'
import Container from "../container"
import { useNavigate } from "react-router-dom"
import AdminBrand from './adminbrand';
import AdminLaptop from './adminlaptop';
import AdminSideBar from './adminsidebar';
import AddBrand from './adminbrand/addbrand';
import AddLaptop from './adminlaptop/addlaptop';
import Spinner from 'react-spinner-material';
import AdminUser from './adminuser';
function Admin({user, brands, laptops}) {
    const [isLoading, setIsLoading] = useState(true)
    const [brandList, setBrandList] = useState([])
    const [laptopList, setLaptopList] = useState([])
    useEffect(()=> {
        setBrandList(brands)
        setLaptopList(laptops)
        setIsLoading(false)
    }, [brands, laptops])
    const navigate = useNavigate();
    const [option, setOption] = useState('allBrands');
    const selectOption = (optionName) => {
        setOption(optionName)
    }
    const handleClick = () => {
        setTimeout(() => navigate('/'), 1000)
    }
  return (
      !isLoading?
        <div>
            <div className="py-5 bg-[#15b9d5]">
                <Container>
                    <div className="flex justify-between items-center">
                        <div className="text-4xl text-white font-bold cursor-pointer" onClick={()=>{navigate('/admin')}}> LOGO Admin</div>
                        <div>
                            <p className='text-white text-xl font-semibold'>{user.Username}</p>
                            <button onClick={handleClick} className='text-white hover:text-gray-300'>Return to homepage</button>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='py-5'>
                <Container>
                    <div className="grid grid-cols-12">
                        <div className='col-span-3'>
                            <AdminSideBar selectOption = {selectOption}/>
                        </div>
                        <div className='col-span-9 my-10 bg-[#e3f5f8] p-5'>
                            {option === 'allBrands' &&  <AdminBrand brands = {brandList}/>}
                            {option === 'allLaptops' && <AdminLaptop brands = {brandList} laptops={laptopList}/>}
                            {option === 'addBrand' && <AddBrand/>}
                            {option === 'addLaptop' && <AddLaptop brands = {brandList}/>}
                            {option === 'allUsers' && <AdminUser/>}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
        :
        <div className="m-auto"><Spinner radius={100} color={"#15b9d5"} stroke={10} visible={true} /></div> 
  )
}

export default Admin