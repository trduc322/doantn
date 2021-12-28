import Container from "../container"
import ItemCard from "./itemcard"
import callApi from "../../apiCaller";
import { useState, useEffect } from "react";
var laptopList = []
var specList = []
var laptopspecList = []
// callApi(`Laptop`,"GET",null).then(res => {
//     laptopList = res.data
//     console.log(laptopList)
//     console.log(res.data)
// })
// var laptop = [
//     {
//         id: 1,
//         name: "DELL Inspiron 6969",
//         img: "images/dell_inspiron.jpg",
//         price: "20.000.000 VND",
//         desc: "i9-12900K 16GB 512GB SSD"
//     },
//     {
//         id: 2,
//         name: "DELL Precision 6969",
//         img: "images/dell_inspiron.jpg",
//         price: "20.000.000 VND",
//         desc: "i9-12900K 16GB 512GB SSD"
//     },
//     {
//         id: 3,
//         name: "HP Envy 6969",
//         img: "images/dell_inspiron.jpg",
//         price: "20.000.000 VND",
//         desc: "i9-12900K 16GB 512GB SSD"
//     },
// ];
const FindLaptop = () => { 
    const [state, setState] = useState({
        laptopList : []
    });
    useEffect(() => {
        callApi(`Laptop`,"GET",null).then(res => {
            setState({
                laptopList : res.data
            })
        })
    })
    return (
        <div>
            <Container>   
                <div className="flex">
                    {laptopList.map(item => <ItemCard name = {item.LaptopModel} price={item.LaptopPrice}/>)}
                </div>
            </Container>
        </div>
    )
    
}

export default FindLaptop
