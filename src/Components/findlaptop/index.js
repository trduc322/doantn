import Container from "../container"
import ItemCard from "./itemcard"
import callApi from "../../apiCaller";
import { useState, useEffect, useContext } from "react";
import SideBar from "./sidebar";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-spinner-material';
const FindLaptop = ({laptops}) => {
    const [laptopList, setLaptopList] = useState([])
    const [suggestion, setSuggestion] = useState([])
    const [text, setText] = useState('')
    const [sortAscending, setSortAscending] = useState(true)
    
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        setLaptopList(laptops)
        setIsLoading(false)
    }, [laptops])
    const handleChange = (e) => {
        let matches = []
        if(e.target.value.length>0){
            matches = laptopList.filter(l => {
                const regex = new RegExp(`${e.target.value}`, "gi")
                return l.LaptopModel.match(regex)
            })
        }
        setText(e.target.value)
        setSuggestion(matches)
    }
    const handleSort = (e) => {
        let sortData = [...laptopList].sort((a,b) => a[e.target.value] > b[e.target.value] && sortAscending ? 1 : -1)
        setLaptopList(sortData)
    }
    const handleOrder = (e) => {
        
    }
    //console.log(laptopList)
    return (
        !isLoading?
        <div>
            <Container>
                <div className="grid grid-cols-12">
                    <div className="col-span-3">
                        <SideBar/> 
                    </div>
                    <div className="col-span-9 my-10 bg-[#e3f5f8] p-5 relative z-0">
                        <div className=" flex my-5 items-start ">
                            <div className="bg-white w-2/3 rounded-md absolute z-10 shadow-md"> 
                                <div className="flex ">
                                    <input className="focus:outline-none w-full px-5 py-2 border-none rounded" placeholder="Search for a laptop ..." onChange={handleChange} value={text}/>
                                    <img className="pr-2 py-1 self-center w-8 h-8" src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt=""/>
                                </div> 
                                {suggestion && suggestion.map((item, index) => 
                                <p className="px-5 py-2 hover:text-[#15b9d5] hover:cursor-pointer" key={index} onClick={() => {navigate(`/laptopdetails/${item.LaptopId}`)}}>{item.LaptopModel}</p>
                                )}
                            </div>
                            <div className="w-full text-right">
                                <select className="pl-4 pr-10 py-2 ml-5 rounded" onChange={handleSort}>
                                    <option value= "" selected disabled hidden>Sort by</option>
                                    <option value="LaptopPrice">Price</option>
                                    <option value="LaptopModel">Model</option>
                                </select>
                                    <select className="pl-4 pr-10 py-2 ml-3 rounded " onChange={handleOrder}>
                                    <option value="lowest">Lowest</option>
                                    <option value="highest">Highest</option>
                                </select>
                            </div> 
                        </div>
                        <div className="grid grid-cols-4 gap-4 ">
                        {laptopList && laptopList.map(item => <ItemCard id={item.LaptopId} name = {item.LaptopModel} price={item.LaptopPrice} image= {item.LaptopImg}/>)}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        :
        <div className="m-auto"><Spinner radius={100} color={"#15b9d5"} stroke={10} visible={true} /></div> 
    )
    
}

export default FindLaptop
