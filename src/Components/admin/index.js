import React, { useContext, useState } from 'react'
import Container from "../container"
import { useNavigate } from "react-router-dom"
import AdminBrand from './adminbrand';
import AdminLaptop from './adminlaptop';
import AdminSideBar from './adminsidebar';
import AddBrand from './adminbrand/addbrand';
import AddLaptop from './adminlaptop/addlaptop';
import AdminUser from './adminuser';
function Admin({user}) {
    const navigate = useNavigate();
    const [option, setOption] = useState('allBrands');
    const selectOption = (optionName) => {
        setOption(optionName)
    }
    const handleClick = () => {
        setTimeout(() => navigate('/'), 1000)
    }
  return (
        <div>
            <div className="py-5 bg-[#15b9d5]">
                <Container>
                    <div className="flex justify-between items-center">
                        <div className="text-4xl text-[#e26e2c] font-bold cursor-pointer" onClick={()=>{navigate('/admin')}}> LOGO Admin</div>
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
                            {option === 'allBrands' &&  <AdminBrand/>}
                            {option === 'allLaptops' && <AdminLaptop/>}
                            {option === 'addBrand' && <AddBrand/>}
                            {option === 'addLaptop' && <AddLaptop/>}
                            {option === 'allUsers' && <AdminUser/>}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
  )
}

export default Admin