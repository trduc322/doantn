import React, { useState, useEffect } from 'react'
import callApi from '../../../apiCaller'
import Container from '../../container'
import BrandDetail from './branddetails';
import Spinner from 'react-spinner-material';

function AdminBrand({brands}) {
    const [brandList, setBrandList] = useState([])
    const [openDetail, setOpenDetail] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    //const [id, setId] = useState('');
    const [brandData, setBrandData] = useState({})
    useEffect(() => {
        setBrandList(brands)
        setIsLoading(false)
    }, [brands])
    const handleClick = (e) => {
        const brandDetails = brandList.find(b => b.BrandId == e.target.id)
        console.log(brandDetails)
        setBrandData(brandDetails)
        setOpenDetail(true)
    }
    
  return (
    !isLoading?
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
                {brandList.map(item => 
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
            {!isLoading && openDetail? <BrandDetail brand = {brandData}/> : null}
        </Container>
    </div>
    :
    <div className="m-auto"><Spinner radius={100} color={"#15b9d5"} stroke={10} visible={true} /></div> 
  )
}

export default AdminBrand