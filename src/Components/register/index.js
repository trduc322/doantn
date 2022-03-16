//import React, { useState } from 'react'
import Container from "../container"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import callApi from '../../apiCaller'
import { useNavigate } from 'react-router-dom'
function Register() {
    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const formSchema = Yup.object().shape({
        username: Yup.string()
        .required('Username is required')
        .min(3, 'Username should be at least 3 characters'),
        email: Yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password length should be at least 6 characters'),
        passwordConfirm: Yup.string()
          .required('Confirm Password is required')
          .oneOf([Yup.ref('password')], 'Passwords must and should match'),
      })
    const validationOpt = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(validationOpt)
    const { errors } = formState
    function onFormSubmit(data) {
        let user = {
            Username : data.username,
            Email : data.email,
            Password : data.password,
            IsEmailConfirm : false,
            UserRole : false
        }
        callApi(`User`, "POST", user).then(res => {
            if(res && res.status == 200){
                alert("Account created successfully")
                setTimeout(navigate('/signin'), 1000)
            }
            else
            {
                alert("Username has already been taken")
            }
        })
        return false
    }
  return (
    <div className="mt-10">
            <Container>
                <div className = "flex flex-col bg-gray-100 mx-72 py-3 rounded">
                    <p className="text-center font-bold text-xl">Register</p>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="shadown-md rounded px-8 pt-6 pb-8 mb-4">
                        <div>
                            <lable htmlFor = "" className ="font-bold">Username</lable>
                            <input {...register('username')} name="username" type = "text" className={`border rounded w-full px-3 py-2 my-2 ${errors.username? "border-red-600" : ""}`} placeholder="Username"/>
                            <div className="text-red-600">
                            {errors.username?.message}
                            </div>
                        </div>
                        <div>
                            <lable htmlFor = "" className ="font-bold">Email</lable>
                            <input {...register('email')} name="email" type = "email" className={`border rounded w-full px-3 py-2 my-2 ${errors.email? "border-red-600" : ""}`} placeholder="Email"/>
                            <div className="text-red-600">
                            {errors.email?.message}
                            </div>
                        </div>
                        <div>
                            <lable htmlFor = "" className ="font-bold">Password</lable>
                            <input {...register('password')} name="password" type = "password" className={`border rounded w-full px-3 py-2 my-2 ${errors.password? "border-red-600" : ""}`} placeholder="Password"/>
                            <div className="text-red-600">
                            {errors.password?.message}
                            </div>
                        </div>
                        <div>
                            <lable htmlFor = "" className ="font-bold">Confirm Password</lable>
                            <input {...register('passwordConfirm')} name="passwordConfirm" type = "password" className={`border rounded w-full px-3 py-2 my-2 ${errors.passwordConfirm? "border-red-600" : ""}`} placeholder="Confirm Password"/>
                            <div className="text-red-600">
                            {errors.passwordConfirm?.message}
                            </div>
                        </div>
                        <div className="mt-5 flex justify-between">
                            <button type="submit" className=" rounded-md bg-[#15b9d5] text-white py-3 px-10 font-semibold hover:bg-[#59d9f0]">Register</button>
                            <a href="/signin" className="font-semibold text-[#15b9d5]">Already have an account? Sign In</a>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
  )
}

export default Register