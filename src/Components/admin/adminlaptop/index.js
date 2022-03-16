import React, { useState, useEffect } from 'react'
import Container from '../../container'
import callApi from '../../../apiCaller'
import AdminLaptopDetail from './adminlaptopdetails'
function AdminLaptop() {
  const [laptops, setLaptops] = useState([])
  const [laptopData, setLaptopData] = useState({})
  const [isSelected, setIsSelected] = useState(false)
  useEffect(() => {
    callApi(`LaptopSpec`,"GET",null).then(res => {
        setLaptops(res.data)
    })
  }, [])
  const handleClick = (e) => {
    setIsSelected(true)
    setLaptopData(laptops.filter(l => l.LaptopId === e.target.id))
  }
  return (
    <div className='mt-3'>
        <Container>
            <div className='bg-white p-5 rounded'>
            <p className='text-3xl font-semibold'>Laptops</p>
            <table className='shadow-lg mt-3'>
                <thead className=''>
                    <tr>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Laptop Id</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Laptop Model</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Laptop Price</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Actions</th>
                    </tr>
                </thead>
                <tbody className=''>
                {laptops.map(item => 
                        <tr key = {item.LaptopId}>
                            <td className='bg-white border px-8 py-4'>{item.LaptopId}</td>
                            <td className='bg-white border px-8 py-4'>{item.LaptopModel}</td>
                            <td className='bg-white border px-8 py-4'>${item.LaptopPrice}</td>
                            <td className='bg-white border px-8 py-4'>
                                <button id={item.LaptopId} className='bg-[#15b9d5] hover:bg-[#50c6db] px-5 py-2 rounded-md font-medium text-white' onClick={handleClick}>Details</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
            {isSelected? <AdminLaptopDetail laptopData = {laptopData}/> : null}
        </Container>
    </div>
  )
}

export default AdminLaptop