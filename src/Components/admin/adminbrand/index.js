import React, { useState, useEffect } from 'react'
import callApi from '../../../apiCaller'
import Container from '../../container'
import BrandDetail from './branddetails';

function AdminBrand() {
    const [brands, setBrands] = useState([])
    const [openDetail, setOpenDetail] = useState(false);
    //const [id, setId] = useState('');
    const [brandData, setBrandData] = useState({})
    useEffect(() => {
        callApi(`Brand`,"GET",null).then(res => {
            setBrands(res.data)
        })
    }, [])
    const handleClick = (e) => {
        let id = e.target.id
        callApi(`Brand/${id}`, "GET", null).then(res =>{
            setBrandData(res.data)
        })
        setOpenDetail(true)
    }
    
  return (
    <div className=''>
        <Container>
            <div className='bg-white p-5 rounded'>
            <p className='text-3xl font-semibold'>Brands</p>
            <table className='shadow-lg mt-3 min-w-full'>
                <thead className=''>
                    <tr>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Brand Id</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Brand Name</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Brand Image</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Actions</th>
                    </tr>
                </thead>
                <tbody className=''>
                {brands.map(item => 
                        <tr key = {item.BrandId}>
                            <td className='bg-white border px-8 py-4'>{item.BrandId}</td>
                            <td className='bg-white border px-8 py-4'>{item.BrandName}</td>
                            <td className='bg-white border px-8 py-4'><img className='h-20 w-20' src={`data:image/png;base64,${item.BrandImg}`} alt=""/></td>
                            <td className='bg-white border px-8 py-4'>
                                <button id={item.BrandId} className='bg-[#15b9d5] hover:bg-[#50c6db] px-5 py-2 rounded-md font-medium text-white' onClick={handleClick}>Details</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
            {openDetail? <BrandDetail brand = {brandData}/> : null}
        </Container>
    </div>
  )
}

export default AdminBrand