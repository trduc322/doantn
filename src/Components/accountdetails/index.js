import React, { useState, useEffect } from 'react'
import Spinner from 'react-spinner-material'
import callApi from '../../apiCaller'
import Container from '../container'

function AccountDetails({user}) {
  const [userData, setUserData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isNotEdit, setIsNotEdit] = useState(true)
  useEffect(() => {
    setUserData(user)
    setIsLoading(false)
  }, [user])
  const cancelClick = (e) => {
    e.preventDefault()
    setIsNotEdit(true)
    setUserData(user)
  }
  const [profilePicture, setProfilePicture] = useState({
    imgSrc: '/images/default_user.png',
    imgFile: null
  })
  const handleInput = (e) => {
    const newData = {...userData}
    newData[e.target.name] = e.target.value
    setUserData(newData)
    console.log(newData)
  }
  const showPreview = (e) => {
    if(e.target.files && e.target.files[0]){
        let imageFile = e.target.files[0]

        const reader = new FileReader()
        reader.onload = (x) => {
            setProfilePicture({
               imgFile : imageFile,
               imgSrc : x.target.result
            })
        }
        reader.readAsDataURL(imageFile)
    }
  }
  const saveClick = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('UserId', userData.UserId)
    formData.append('Username', userData.Username)
    formData.append('Fullname', userData.Fullname)
    formData.append('Email', userData.Email)
    formData.append('ProfilePictureFile', profilePicture.imgFile)
    if(window.confirm("Are you sure to update profile?")){
      callApi(`User`, "PUT", formData).then(res => {
        if(res.status === 200){
          if(!alert("Profile updated")){
            window.location.reload()
          }
        }
      })
    }
  }
  return (
    !isLoading ?
    <div>
        <Container>
          <div className="grid grid-cols-12 my-10">
            <div className="col-span-4 text-center">
              {userData && !userData.ProfilePicture? <img className='h-60 w-60 object-scale-down m-auto' src={profilePicture.imgSrc} alt=""/> : <img className='h-60 w-60 object-scale-down m-auto' src={`data:image/png;base64,${userData && userData.ProfilePicture}`} alt=""/>}
              {!isNotEdit && <input name= "ProfilePicture" type="file" accept="image/*" onChange={showPreview}/>}
              <p className='text-4xl font-semibold'>{userData.Username}</p>
              <button className="text-xl my-10 bg-[#15b9d5] py-2 px-5 rounded-md text-white" onClick={() => {setIsNotEdit(false)}}>Edit Profile</button>
            </div >
            <div className="col-end-12 col-span-6">
              <form>
                <div>
                  <p className='text-2xl font-semibold'>Username:</p>
                  <input className="mt-3 w-2/3 px-3 py-1 border-2 disabled:bg-[#e3f5f8] selection:border-[#15b9d5] border-[#e3f5f8] rounded-md" value={userData.Username} disabled={true}/>
                </div>
                <div className='my-5'>
                  <p className='text-2xl font-semibold'>Full name:</p>
                  <input name="Fullname" className="mt-3 w-2/3 px-3 py-1 border-2 disabled:bg-[#e3f5f8] selection:border-[#15b9d5] border-[#e3f5f8] rounded-md" onChange={handleInput} value={userData.Fullname} disabled={isNotEdit}/>
                </div>
                <div>
                  <p className='text-2xl font-semibold'>Email:</p>
                  <input name="Email" className="mt-3 w-2/3 px-3 py-1 border-2 disabled:bg-[#e3f5f8] selection:border-[#15b9d5] border-[#e3f5f8] rounded-md" onChange={handleInput} value={userData.Email} disabled={isNotEdit}/>
                </div>
                {!isNotEdit &&
                <div className='grid grid-cols-8 gap-10'>
                  <button className="col-span-2 text-xl my-10 bg-[#15b9d5] py-2 px-5 rounded-md text-white" onClick={saveClick}>Save</button>
                  <button className="col-span-2 text-xl my-10 bg-[#15b9d5] py-2 px-5 rounded-md text-white" onClick={cancelClick}>Cancel</button>
                </div>
                }
              </form>
            </div>
          </div>
        </Container>
    </div> :
    <div className="m-auto"><Spinner radius={100} color={"#15b9d5"} stroke={10} visible={true} /></div>
  )
}

export default AccountDetails