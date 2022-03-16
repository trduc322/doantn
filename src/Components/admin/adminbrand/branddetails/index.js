import React, { useState, useEffect } from 'react'
import callApi from '../../../../apiCaller'
import Container from '../../../container'

function BrandDetail(props) {
  const [data, setData] = useState({})
  const [isValid, setIsValid] = useState(true)
    useEffect(() => {
    setData(props.brand[0])
  }, [props])
  const handleUpdate = (e) => {
      e.preventDefault()
    if(!data.BrandName){
        setIsValid(false)
    }
    else{
        let formData = new FormData()
        formData.append('BrandId', data.BrandId)
        formData.append('BrandName', data.BrandName)
        formData.append('BrandImgFile', data.BrandImgFile)
        formData.append('BrandImg', data.BrandImg)
        if(window.confirm("Are you sure to change this Brand details?"))
        {
            callApi(`Brand`, "PUT", formData).then(res => {
                if(res.status == 200){
                    alert('Updated successfully')
                }
                else{
                    alert('Something went wrong')
                }
            })
            
        }
        window.location.reload()
    }
  }
  const handleDelete = (e) => {
    e.preventDefault()
    if(window.confirm("Are you sure to delete this brand?")){
        callApi(`Brand/${data.BrandId}`, "DELETE", null).then(res => {
            if(res.status == 200){
                alert("Deleted Successfully")
            }
            else{
                alert("Something went wrong")
            }
        })
    }
    window.location.reload()
  }
  const handleChange = (e) => {
    let brand = {...data}
    brand.BrandName = e.target.value
    setData(brand)
  }
  const changeImg = (e) => {
        if(e.target.files && e.target.files[0]){
            let imgFile = e.target.files[0]

            const reader = new FileReader()
            reader.onload = (x) => {
                setData({...data, BrandImgFile: imgFile, BrandImg: x.target.result.replace(/^data:image\/[a-z]+;base64,/, "")})
            }
            reader.readAsDataURL(imgFile)
        
    }
  }
  return (
    <div className='bg-white mt-5 p-5 rounded'>
        <span className='text-3xl'>Details</span>
        <Container>
            <form className='p-3'>
                <div className='min-w-full grid grid-cols-12'>
                    <div className='col-span-4'>
                        <span className='text-xl'>Brand Image: </span>
                        <img className='h-24 w-24' src={`data:image/png;base64,${data && data.BrandImg}`} alt=""/>
                        <input name= "BrandImg" type="file" accept="image/*" onChange={changeImg}/> 
                    </div>
                    <div className='col-span-8 self-end'>
                        <div className=''>
                            <p className='text-xl'>Brand Id: </p>
                            <input type="text" className="mt-3 w-2/3 px-3 py-1 border-2 disabled:bg-[#e3f5f8] selection:border-[#15b9d5] border-[#e3f5f8] rounded-md" value={data? data.BrandId : ""} disabled="true" />
                        </div>
                        <div className='mt-2'>
                            <p className='text-xl'>Brand Name: </p>
                            <input type="text" className="mt-3 w-2/3 px-3 py-1 border-2 hover:border-[#15b9d5] border-[#e3f5f8] rounded-md" value={data? data.BrandName : ""} onChange = {handleChange}/>
                        </div>
                        {!isValid && <small className='my-2 text-sm text-red-500'>Brand Name is required</small>}
                    </div>
                </div>
                
                <div className='flex gap-3 mt-5'>
                    <button type='submit' className='bg-[#15b9d5] hover:bg-[#50c6db] px-5 py-2 rounded-md font-medium text-white' onClick={handleUpdate}>Update</button>
                    <button type='submit' className='bg-[#da1b1b] hover:bg-[#ce4e4e] px-5 py-2 rounded-md font-medium text-white' onClick={handleDelete}>Delete</button>
                </div>
            </form>
        </Container>
    </div>
  )
}

export default BrandDetail