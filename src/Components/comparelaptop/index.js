import { useEffect, useState } from "react";
import Select from "react-select";
import callApi from "../../apiCaller";
import Container from "../container"
import ItemCard from "../findlaptop/itemcard";
const CompareLaptop = () => { 
    const [laptops, setLaptops] = useState([])
    const [laptop1, setLaptop1] = useState([])
    const [laptop2, setLaptop2] = useState([])
    useEffect(() => {
      callApi(`LaptopSpec`, "GET", null).then(res => {
        setLaptops(res.data)
      })
    }, [])
    const searchLaptop1 = (value) => {
      setLaptop1(value)
    }
    const searchLaptop2 = (value) => {
      setLaptop2(value)
    }
    return (
      <div>
        <Container>
          <div className="px-5">
            <p className="text-4xl py-5">Compare Laptops</p>
            <p className="text-md">
              Nobody wants to choose from a choice of one! But how do you know
              which processor and RAM combinations works best for what you need?
              How do you know which of the hundreds of options out there give me
              the right weight and screen size for your travel habits?
            </p>
            <p className="py-5 text-md">
              Welcome to the laptop comparison world of LOGO! Not only can you
              find out how up to three products fare against each other, but
              more importantly, in terms of what YOU need, not in terms of
              technical jargon! Just hit the drop down menus on each column to
              find the machines you’re looking for and hey presto, not only will
              you be able to compare the laptops in terms of what they are made
              of but in terms of what that’ll mean for you! You can then shop
              with confidence that your precious pennies are being spent on
              what’s right for you!
            </p>
            <div className="flex mt-3 gap-10">
              <div className="">
                <p className="text-2xl mb-5">Add A Laptop To Compare</p>
                <Select
                  options={laptops}
                  getOptionLabel={(option) => option.LaptopModel}
                  getOptionValue={(option) => option.LaptopModel}
                  onChange={(value) => searchLaptop1(value)}
                  placeholder="Search for laptop to compare"
                />
                {laptop1 && laptop1.LaptopId ? <ItemCard id={laptop1.LaptopId} name = {laptop1.LaptopModel} price={laptop1.LaptopPrice} image= {laptop1.LaptopImg}/> : null}      
              </div>
              <div className="">
                <p className="text-2xl mb-5">Add A Laptop To Compare</p>
                <Select
                  options={laptops}
                  getOptionLabel={(option) => option.LaptopModel}
                  getOptionValue={(option) => option}
                  onChange={(value) => searchLaptop2(value)}
                  placeholder="Search for laptop to compare"
                />
                {laptop2 && laptop2.LaptopId ? <ItemCard id={laptop2.LaptopId} name = {laptop2.LaptopModel} price={laptop2.LaptopPrice} image= {laptop2.LaptopImg}/> : null}
              </div>
            </div>
            <button className="text-xl mt-5 bg-[#15b9d5] py-2 px-5 rounded-md text-white">Compare</button>
          </div>
        </Container>
      </div>
    );
    
}
export default CompareLaptop
