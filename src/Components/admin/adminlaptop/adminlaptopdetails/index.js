import React, { useEffect, useState, useReducer } from 'react'
import callApi from '../../../../apiCaller'
import Container from '../../../container'
import {laptopSchema, specSchema} from '../../../../Validations/LaptopValidation'
function AdminLaptopDetail(props) {
    const [data, setData] = useState({})
    const [brands, setBrands] = useState([])
    const laptop = {
        LaptopId : '',
        LaptopModel : '',
        LaptopPrice: 0,
        LaptopImg: null,
        LaptopImgFile: null,
        BrandId: ''
    }
    const [lData, updateLData] = useReducer(
        (lData, updates) => ({
            ...lData,
            ...updates
        }),
        laptop
    )
    const [specs, setSpecs] = useState([])
    // const loadData = useCallback(
    //   async () => {
    //     let getBrands = {...brands}
    //     let getLaptop = {...laptop}
    //     callApi(`Brand`,"GET", null).then(res => {
    //         getBrands = res.data
    //     })
    //     setData(props.laptopData[0])
    //     getBrands = getBrands.filter(item => item.BrandId != props.laptopData[0].brand.BrandId)
    //     setBrands(getBrands)
    //     getLaptop = (({ LaptopModel, LaptopPrice }) => ({ LaptopModel, LaptopPrice }))(props.laptopData[0])
    //     setLaptop(getLaptop)
    //     setSpecs(props.laptopData[0].laptopSpecs)
    //   },
    //   [props, brands, laptop]
    // )
    // useEffect(() => {
    //   loadData()
    // }, [loadData])
    
    useEffect(() => {
        updateLData((({LaptopId, LaptopModel, LaptopPrice, BrandId, LaptopImg, LaptopImgFile}) => ({LaptopId, LaptopModel, LaptopPrice, BrandId, LaptopImg, LaptopImgFile}))(props.laptopData[0]))
    }, [props])
    useEffect(() => {
        let getBrands = {...brands}
        callApi(`Brand`,"GET", null).then(res => {
            getBrands = res.data
        })
        const interval = setInterval(()=> {
            getBrands = getBrands.filter(item => item.BrandId != props.laptopData[0].brand.BrandId)
            //getLaptop = (({ LaptopModel, LaptopPrice }) => ({ LaptopModel, LaptopPrice }))(props.laptopData[0])
            setData(props.laptopData[0])
            setBrands(getBrands)
            //setLaptop(getLaptop)
            setSpecs(props.laptopData[0].laptopSpecs)
        }, 500)
        return () => {
           
            clearInterval(interval)
        }
    }, [props])
    const laptopDataChangeHandler = (e) =>{
        const {name, value} = e.target
        updateLData({[name] : value})   
    }
    const specDataChangeHandler = (e) => {
        //console.log(e.target.id)
        const updateSpecs = [...specs]
        const arrIndex = specs.findIndex(item => item.LaptopSpecId == e.target.id)
        updateSpecs[arrIndex].LaptopSpecValue = e.target.value
        setSpecs(updateSpecs)
        console.log(updateSpecs)
    }
    const updateDataHandler = (e) => {
        e.preventDefault();
        //let isSpecValid = true
        // specs.forEach(item => {
        //     isSpecValid &= specSchema.isValid(item)
        // });
        const isLaptopValid = laptopSchema.isValid(lData);
        if(isLaptopValid){
            let formData = new FormData();
            formData.append('LaptopId', lData.LaptopId);
            formData.append('LaptopModel', lData.LaptopModel)
            formData.append('LaptopPrice', parseFloat(lData.LaptopPrice))
            formData.append('BrandId', lData.BrandId)
            formData.append('LaptopImgFile', lData.LaptopImgFile === undefined? null : lData.LaptopImgFile)
            formData.append('LaptopImg', lData.LaptopImg)
            if(window.confirm("Are you sure want to change this laptop details?")){
                Promise.all([
                    callApi(`Laptop`, "PUT", formData),
                    callApi(`LaptopSpec`, "PUT", specs)
                ])
                .then(res => {
                    if(res[0].status == 200 && res[1].status == 200){
                        alert("Updated successfully")
                    }
                    else{
                        alert("Something went wrong, please try again")
                    }
                })
                
            }
            window.setTimeout(function() {window.location.reload()}, 2000)
        }
        else{
            alert("Something went wrong, please try again")
        }
    }
    const deleteDataHandler = (e) => {
        e.preventDefault()
        if(window.confirm("Are your sure want to delete this laptop?")){
            callApi(`Laptop/${lData.LaptopId}`, "DELETE", "null").then(res => {
                if(res.status == 200) {
                    alert("Deleted successfully")
                }
                else{
                    alert("Something went wrong, please try again")
                }
            })
        }
        window.setTimeout(function() {window.location.reload()}, 1000)
    }
    const changeImg = (e) => {
        if(e.target.files && e.target.files[0]){
          let imgFile = e.target.files[0];

          const reader = new FileReader();
          reader.onload = (x) => {
            updateLData({
                ...lData,
              LaptopImgFile: imgFile,
              LaptopImg: x.target.result.replace(
                /^data:image\/[a-z]+;base64,/,
                ""
              )
            });
          };
          reader.readAsDataURL(imgFile);
        }
    }
  return (
    <div className='bg-white mt-5 p-5 rounded'>
        <span className='text-3xl'>Details</span>
        <Container>
            <form className='p-3'>
                <div className='min-w-full grid grid-cols-12'>
                    <div className='col-span-4 overflow-hidden'>
                        <span className='text-xl'>Laptop Image: </span>
                        {lData && <img className='object-scale-down h-48 w-96' src={`data:image/png;base64,${lData.LaptopImg}`} alt="/"/>}
                        <input className='' name= "LaptopImg" type="file" accept="image/*" onChange={changeImg}/> 
                    </div>
                    <div className='col-span-8 px-14'>
                        <div className=''>
                            <p className='text-xl'>Laptop Id: </p>
                            <input type="text" className="mt-3 w-2/3 px-3 py-1 border-2 disabled:bg-[#e3f5f8] selection:border-[#15b9d5] border-[#e3f5f8] rounded-md" value={data? data.LaptopId : ""} disabled="disabled" />
                        </div>
                        <div className='mt-2'>
                            <p className='text-xl'>Laptop Model: </p>
                            <input type="text" name="LaptopModel" className="mt-3 w-2/3 px-3 py-1 border-2 hover:border-[#15b9d5] border-[#e3f5f8] rounded-md" value={lData? lData.LaptopModel : ""} onChange = {laptopDataChangeHandler}/>
                        </div>
                        <div className='mt-2'>
                            <p className='text-xl'>Laptop Brand: </p>
                            <select name="BrandId" className="mt-3 w-2/3 px-3 py-1 border-2 hover:border-[#15b9d5] border-[#e3f5f8] rounded-md" onChange = {laptopDataChangeHandler}>
                                <option value={lData? lData.BrandId : ''}>{data.brand? data.brand[0].BrandName : ''}</option>
                                {brands && brands.map(item => 
                                    <option key={item.BrandId} value={item.BrandId}>{item.BrandName}</option>
                                    )}
                            </select>
                        </div>
                        <div className='mt-2'>
                            <p className='text-xl'>Laptop Price: </p>
                            <input type="text" name="LaptopPrice" className="mt-3 w-2/3 px-3 py-1 border-2 hover:border-[#15b9d5] border-[#e3f5f8] rounded-md" value={lData? lData.LaptopPrice : ""} onChange = {laptopDataChangeHandler}/>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <span className='text-xl'>Specifications: </span>
                    <div className='grid grid-cols-2'>
                        {data.laptopSpecs && data.laptopSpecs.map(item => 
                        <div key = {item.LaptopSpecId} className=''>
                            <p className='text-xl'>{item.LaptopSpecName}: </p>
                            <input id={item.LaptopSpecId} type="text" className="mt-3 w-2/3 px-3 py-1 border-2 border-[#e3f5f8] rounded-md" value={data? item.LaptopSpecValue : ""} onChange = {specDataChangeHandler}/>
                        </div>
                        )}   
                    </div>     
                </div>
                <div className='flex gap-3 mt-5'>
                    <button type='submit' className='bg-[#15b9d5] hover:bg-[#50c6db] px-5 py-2 rounded-md font-medium text-white' onClick={updateDataHandler}>Update</button>
                    <button type='submit' className='bg-[#da1b1b] hover:bg-[#ce4e4e] px-5 py-2 rounded-md font-medium text-white' onClick={deleteDataHandler}>Delete</button>
                </div>
            </form>
        </Container>
    </div>
  )
}

export default AdminLaptopDetail