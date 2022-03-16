import React, { useState } from 'react'
import callApi from '../../../../apiCaller'
import Container from '../../../container'

function AddBrand() {
    const [input, setInput] = useState('')
    const [isValid, setIsValid] = useState(true)
    const [imageFile, setImageFile] = useState({
        imgSrc: '/images/default_laptop.jpg',
        imgFile: null
    })
    const [brandImg, setBrandImg] = useState(null)
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('BrandName', input)
        formData.append('BrandImgFile', brandImg)
        console.log(formData)
        // let brand = {
        //     BrandName : input,
        //     BrandImg : brandImg
        // }
        // console.log(brand)
        if(!input){
            setIsValid(false)
        }
        if(input !== ''){
            if(window.confirm("Add this new brand?")){
                callApi(`Brand`, "POST", formData).then(res=>{
                    if(res && res.status == 200){
                        alert('Brand added successfully')
                    }
                    else{
                        alert('Something wrong happened, please try again')
                    }
                })
                window.location.reload()
            }
            
        }
    }
    const showPreview = async (e) => {
        if(e.target.files && e.target.files[0]){
            let imgFile = e.target.files[0]

            const reader = new FileReader()
            reader.onload = (x) => {
                setImageFile({
                   imgFile : imageFile,
                   imgSrc : x.target.result
                })
            }
            reader.readAsDataURL(imgFile)
            //const base64 = await convertBase64(imgFile)
            //const base8 = new Uint8Array(base64)
            //const binaryStr = String.fromCharCode.apply(null, base8)
            setBrandImg(imgFile)
            //console.log(brImg)
        }
    }
    // const convertBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader()
    //         fileReader.readAsArrayBuffer(file)
    //         fileReader.onload = () => {
    //             resolve(fileReader.result)
    //         }
    //         fileReader.onerror= (error) => {
    //             reject(error)
    //         }
    //     })
    // }
  return (
    <div className='bg-white mt-5 p-5 rounded'>
        <span className='text-3xl'>Add Brand</span>
        <Container>
            <form className='p-3' onSubmit={handleSubmit}>
                <div className='min-w-full grid grid-cols-12'>
                    <div className='col-span-12'>
                        <p className='text-xl'>Brand Image: </p>
                        <img className='h-48 w-48' src={imageFile.imgSrc} alt=""/>
                        <input name= "BrandImg" type="file" accept="image/*" onChange={showPreview}/> 
                    </div>
                    <div className='col-span-12 self-end'>
                        <div className='mt-2'>
                            <p className='text-xl'>Brand Name: </p>
                            <input name = "BrandName" type="text" className="mt-3 w-2/3 px-3 py-1 border-2 hover:border-[#15b9d5] border-[#e3f5f8] rounded-md" onChange={handleChange}/>
                        </div>
                        {!isValid && <small className='my-2 text-sm text-red-500'>Brand Name is required</small>}              
                    </div>
                </div>
                
                <div className='flex gap-3 mt-5'>
                    <button type='submit' className='bg-[#15b9d5] hover:bg-[#50c6db] px-5 py-2 rounded-md font-medium text-white'>Add</button>
                </div>
            </form>
        </Container>
    </div>
  )
}

export default AddBrand