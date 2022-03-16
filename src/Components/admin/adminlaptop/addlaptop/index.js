import React, { useEffect, useState } from 'react'
import callApi from '../../../../apiCaller'
import Container from '../../../container'
import * as yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'
function AddLaptop() {
    const [specs, setSpecs] = useState([])
    const [brands, setBrands] = useState([])
    const [laptopImage, setLaptopImage] = useState(null);
    const [data, setData] = useState({
        LaptopModel: '',
        BrandId: '',
        LaptopPrice: 0,
    })
    const [imageFile, setImageFile] = useState({
        imgSrc: '/images/default_laptop.jpg',
        imgFile: null
    })
    const [laptopSpecs, setLaptopSpecs] = useState([])
    const [formValid, setFormValid] = useState(true)
    //const renderError = (message) => <p className='text-red-400'>{message}</p>
    // const validationSchema = yup.object().shape({
    //     LaptopModel: yup.string().required(),
    //     BrandId: yup.string().required("Please select a Brand"),
    //     LaptopPrice: yup.number().required(),
    //     laptopSpecs: yup.array().of(
    //         yup.object().shape({
    //             LaptopSpecValue: yup.string()
    //         })
    //     ).required()
    // })
    useEffect(()=>{
        Promise.all([
            callApi(`Spec`, "GET", null),
            callApi(`Brand`, "GET", null)
        ]).then(res => {
            setSpecs(res[0].data)
            setBrands(res[1].data)
        })
    },[])
    const specsInputHandler = (e, index) => {
        const old = laptopSpecs[index]
        const update = {...old,
            LaptopSpecName: e.target.name,
            LaptopSpecValue : e.target.value}
        const clone = [...laptopSpecs]
        clone[index] = update
        setLaptopSpecs(clone)
    }
    const laptopInputHandler = (e, index) => {
        
        let input = {...data}
        const {name, value} = e.target
        input[name] = value
        setData(input)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let isValid = true
        if(!data.LaptopModel || !data.BrandId || !data.LaptopPrice || isNaN(data.LaptopPrice)){
            isValid = false
            setFormValid(false)
        }
        if(laptopSpecs.length !== 8)
        {
            isValid = false
            setFormValid(false)
        }
        if(laptopSpecs.length === 8)
        {
            laptopSpecs.forEach(item => {
                if(item === undefined){
                    isValid = false
                    setFormValid(false)
                }
            });
        }
        if(isValid){
            setFormValid(true)
            let formData = new FormData()
            formData.append('LaptopModel', data.LaptopModel)
            formData.append('LaptopPrice', parseFloat(data.LaptopPrice))
            formData.append('BrandId', data.BrandId)
            formData.append('LaptopImgFile', laptopImage)
            formData.append('specString', JSON.stringify(laptopSpecs))
            console.log(JSON.stringify(laptopSpecs))
            if(window.confirm("Are you sure want to add this laptop?")){
                callApi(`Laptop`,"POST",formData).then(res => {
                    if(res.status == 200){
                        alert("Added successfully")
                    }
                    else{
                        alert("Something went wrong, please try again")
                    }
                })
            }
            window.location.reload()
        }
    }
    const changeImg = (e) => {
        if(e.target.files && e.target.files[0]){
            let imgFile = e.target.files[0]

            const reader = new FileReader()
            reader.onload = (x) => {
                setImageFile({
                    ...imageFile,
                   imgFile : imageFile,
                   imgSrc : x.target.result
                })
                setLaptopImage(imgFile)
            }
            reader.readAsDataURL(imgFile)
        }
    }
  return (
    <div className='bg-white mt-5 p-5 rounded'>
        <span className='text-3xl'>Add Latop</span>
        <Container>
            <form className='p-3' onSubmit={handleSubmit}>
                <div className='min-w-full grid grid-cols-12'>
                    <div className='col-span-4'>
                        <span className='text-xl'>Laptop Image: </span>
                        <img className='object-scale-down h-48 w-96' src={imageFile.imgSrc} alt=""/>
                        <input name= "LaptopImg" type="file" accept="image/*" onChange={changeImg}/> 
                    </div>
                    <div className='col-span-8 self-end'>
                        <div className='mt-2'>
                            <p className='text-xl'>Laptop Model: </p>
                            <input type="text" name="LaptopModel" className="mt-3 w-2/3 px-3 py-1 border-2 hover:border-[#15b9d5] border-[#e3f5f8] rounded-md" onChange={laptopInputHandler}/>
                        </div>
                        <div className='mt-2'>
                            <p className='text-xl'>Laptop Brand: </p>
                            <select name="BrandId" className="mt-3 w-2/3 px-3 py-1 border-2 hover:border-[#15b9d5] border-[#e3f5f8] rounded-md" onChange={laptopInputHandler}>
                                <option value= "" selected disabled hidden>Select a Brand</option>
                                {brands && brands.map(item => 
                                <option value={item.BrandId}>{item.BrandName}</option>
                                )}
                            </select>
                        </div>
                        <div className='mt-2'>
                            <p className='text-xl'>Laptop Price: </p>
                            <input type="text" name="LaptopPrice" className="mt-3 w-2/3 px-3 py-1 border-2 hover:border-[#15b9d5] border-[#e3f5f8] rounded-md" onChange={laptopInputHandler}/>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <span className='text-xl'>Specifications: </span>
                    <div className='grid grid-cols-2'>
                        {specs && specs.map((item,index) => 
                            <div className=''>
                            <p className='text-xl'>{item.SpecName}: </p>
                            <input type="text" name={item.SpecName} className="mt-3 w-2/3 px-3 py-1 border-2 border-[#e3f5f8] rounded-md" onChange={(e) => specsInputHandler(e, index)}/>
                        </div>
                        )}   
                    </div>     
                </div>
                {!formValid && <small className='my-2 text-sm text-red-500'>Please enter all information</small>}
                <div className='flex gap-3 mt-5'>
                    <button type='submit' className='bg-[#15b9d5] hover:bg-[#50c6db] px-5 py-2 rounded-md font-medium text-white'>Add</button>
                </div>
            </form>
        </Container>
    </div>
  )
}

export default AddLaptop