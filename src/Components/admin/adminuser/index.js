import Container from '../../container'
import React, { useState, useEffect } from 'react'
import callApi from '../../../apiCaller'
function AdminUser() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        callApi(`User`,"GET",null).then(res => {
            setUsers(res.data)
        })
    }, [])
  return (
    <div>
        <Container>
        <div className='bg-white p-5 rounded'>
            <p className='text-3xl font-semibold'>Users</p>
            <table className='shadow-lg mt-3 min-w-full'>
                <thead className=''>
                    <tr>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Username</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Fullname</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Email</th>
                        <th className='bg-gray-100 border text-left px-8 py-4'>Actions</th>
                    </tr>
                </thead>
                <tbody className=''>
                {users.filter(u => u.Username !== "admin").map(item => 
                        <tr key = {item.BrandId}>
                            <td className='bg-white border px-8 py-4'>{item.Username}</td>
                            <td className='bg-white border px-8 py-4'>{item.Fullname}</td>
                            <td className='bg-white border px-8 py-4'>{item.Email}</td>
                            <td className='bg-white border px-8 py-4'>
                                <button id={item.UserId} className='bg-[#15b9d5] hover:bg-[#50c6db] px-5 py-2 rounded-md font-medium text-white'>Details</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        </Container>
    </div>
  )
}

export default AdminUser