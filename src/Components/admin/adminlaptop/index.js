import React, { useState, useEffect } from 'react'
import Container from '../../container'
import callApi from '../../../apiCaller'
import AdminLaptopDetail from './adminlaptopdetails'
import Spinner from 'react-spinner-material'
function AdminLaptop({laptops, brands}) {
  const [laptopList, setLaptopList] = useState([])
  const [brandList, setBrandList] = useState([])
  const [laptopData, setLaptopData] = useState({})
  const [isSelected, setIsSelected] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setLaptopList(laptops)
    setBrandList(brands)
    setIsLoading(false)
  }, [laptops, brands])
  const handleClick = (e) => {
    setIsSelected(true)
    const laptopDetails = laptopList.find(l => l.LaptopId === e.target.id)
    setLaptopData(laptopDetails)
  }
  return (
    !isLoading?
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
                {laptopList.map(item => 
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
            {isSelected? <AdminLaptopDetail laptopData = {laptopData} brands = {brandList}/> : null}
        </Container>
    </div>
    :
    <div className="m-auto"><Spinner radius={100} color={"#15b9d5"} stroke={10} visible={true} /></div> 
  )
}

export default AdminLaptop