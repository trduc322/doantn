import Container from "../container";
import { useContext, useEffect, useState } from "react";
import { login } from "../../apiCaller";
import { AuthContext } from "../../Context/authContext/AuthContext";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching, dispatch} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    login({username, password}, dispatch)
    setTimeout(() => navigate('/'), 1000)
  }
  return (
    <div className="mt-10">
      <Container>
        <div className="flex flex-col bg-gray-100 mx-72 py-3 rounded">
          <p className="text-center font-bold text-xl">Sign In</p>
          <form className="shadown-md rounded px-8 pt-6 pb-8 mb-4">
            <div>
              <lable htmlFor="" className="font-bold">
                Username
              </lable>
              <input
                type="text"
                className="border rounded w-full px-3 py-2 my-2"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <lable htmlFor="" className="font-bold">
                Password
              </lable>
              <input
                type="password"
                className="border rounded w-full px-3 py-2 my-2"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a href="/register" className="font-semibold text-[#15b9d5]">
              Register
            </a>
            <div className="mt-5 flex justify-between">
              <button onClick={handleLogin} disabled={isFetching} className=" rounded-md bg-[#15b9d5] text-white py-3 px-10 font-semibold hover:bg-[#59d9f0]">
                Sign In
              </button>
              <a href="/" className="font-semibold text-[#15b9d5]">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SignIn;
