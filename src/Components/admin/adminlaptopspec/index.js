import React, { useState, useEffect } from 'react'
import callApi from '../../../apiCaller'
import Container from '../../container'

function LaptopSpec() {
    const[laptopspecs, setLaptopspecs] = useState([])
    useEffect(() => {
      callApi(`LaptopSpec`, "GET", null).then(res => {
          setLaptopspecs(res.data)
      })
    }, [])
    
  return (
    <div className='mt-3'>
        <Container>
            <p className='text-3xl font-semibold'>LaptopSpecs</p>
            <table className='shadow-lg mt-3'>
                <thead className=''>
                    <tr>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Laptop Id</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Laptop Model</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Laptop Price</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Screen</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Screen size</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>CPU</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>GPU</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>RAM</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Storage</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>OS</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Weight</th>
                    </tr>
                </thead>
                <tbody className=''>
                {laptopspecs.map(item => 
                        <tr key = {item.LaptopId}>
                            <td className='border px-8 py-4'>{item.LaptopId}</td>
                            <td className='border px-8 py-4'>{item.LaptopModel}</td>
                            <td className='border px-8 py-4'>{item.LaptopPrice}</td>
                            {item.laptopSpecs.map(specs => 
                                <td className='border px-8 py-4'>{specs.LaptopSpecValue}</td>
                                )}
                        </tr>
                    )}
                </tbody>
            </table>
        </Container>
    </div>
  )
}

export default LaptopSpec