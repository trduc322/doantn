import React from 'react'
import Container from '../../container'

function AdminSideBar(props) {
  return (
    <div>
        <Container>
        <div className='py-10'>
                <div className='bg-[#15b9d5] p-5'>
                    <span className="text-white text-xl font-semibold">Manage</span>
                </div>
                <div className='bg-[#e3f5f8] p-5'>
                    <span className='font-semibold'>Brands</span>
                    <ul className='bg-[#d6e5e7] mt-3 p-3 rounded-lg text-md font-light'>
                        <li><span className='ml-2 hover: cursor-pointer hover:font-semibold' onClick={() => props.selectOption('allBrands')}>Show all Brands</span></li>
                        <li><span className='ml-2 hover: cursor-pointer hover:font-semibold' onClick={() => props.selectOption('addBrand')}>Add a new Brand</span></li>
                    </ul>
                </div>
                <div className='bg-[#e3f5f8] p-5'>
                    <span className='font-semibold'>Laptop</span>
                    <ul className='bg-[#d6e5e7] mt-3 p-3 rounded-lg text-md font-light'>
                        <li><span className='ml-2 hover: cursor-pointer hover:font-semibold' onClick={() => props.selectOption('allLaptops')}>Show all Laptops</span></li>
                        <li><span className='ml-2 hover: cursor-pointer hover:font-semibold' onClick={() => props.selectOption('addLaptop')}>Add a new Laptop</span></li>
                    </ul>
                </div>
                <div className='bg-[#e3f5f8] p-5'>
                    <span className='font-semibold'>User</span>
                    <ul className='bg-[#d6e5e7] mt-3 p-3 rounded-lg text-md font-light'>
                        <li><span className='ml-2 hover: cursor-pointer hover:font-semibold' onClick={() => props.selectOption('allUsers')}>Show all Users</span></li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default AdminSideBar