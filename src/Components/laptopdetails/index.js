import { useEffect, useMemo, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import Container from "../container";
import callApi from "../../apiCaller";
import DetailSidebar from "./detailsidebar";
import Spinner from 'react-spinner-material';
const LaptopDetails = ({user, laptops}) => {
  // const test = [
  //   {
  //     id: 1,
  //     name: "A",
  //   },
  //   {
  //     id: 2,
  //     name: "B",
  //   },
  // ];
  // const testValue = [
  //   {
  //     id: 1,
  //     value: "this is A",
  //   },
  //   {
  //     id: 2,
  //     value: "this is B",
  //   },
  // ];
  // let testData = [];
  // for(let i = 0; i<test.length; i++){
  //     if(test[i].id === testValue[i].id){
  //         testData = test.map(item => (
  //             item.id === testValue[i].id ? {...item, value: testValue[i].value} : null
  //         ))
  //     }
  // }
  // console.log(testData)
  const navigate = useNavigate()
  let params = useParams();
  const [id, setId] = useState(params.id);
  const [laptopData, setLaptopData] = useState({});
  const [datas, setDatas] = useState([]);
  //const [specs, setSpecs] = useState([]);
  //const [brand, setBrand] = useState({});
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [loadLaptopData, setLoadLaptopData] = useState(true)
  const [ratingLoading, setRatingLoading] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Promise.all([
    //   callApi(`Laptop/${id}`, "GET", null),
    //   callApi(`Spec`, "GET", null),
    //   callApi(`LaptopSpec/${id}`, "GET", null),
    // ])
    //   .then(function (res) {
    //     return Promise.all(
    //       res.map(function (re) {
    //         return re;
    //       })
    //     );
    //   })
    //   .then(function (data) {
    //       for (let i = 0; i < data[1].data.length; i++) {
    //         if (data[1].data[i].SpecId === data[2].data[i].SpecId) {
    //           data[1].data = data[1].data.map((item) =>
    //             item.SpecId === data[2].data[i].SpecId
    //               ? { ...item, LaptopSpecValue : (data[2].data[i].LaptopSpecValue) }
    //               : item
    //           );
    //         }
    //       }
    //       //console.log(data[1].data);
    //       setLaptopData(data[0].data)
    //       setSpecs(data[1].data)
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // Promise.all([
    //   callApi(`Laptop/${id}`, "GET", null),
    //   callApi(`LaptopSpec/${id}`, "GET", null),
    // ])
    //   .then(function (res) {
    //     return Promise.all(
    //       res.map(function (re) {
    //         return re;
    //       })
    //     );
    //   })
    //   .then(function (data) {
    //       //console.log(data[1].data);
    //       setLaptopData(data[0].data)
    //       setSpecs(data[1].data)
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // callApi(`LaptopSpec/${id}`, "GET", null).then((res) => {
    //   setLaptopData(res.data);
    //   setBrand(res.data.brand[0]);
    //   setSpecs(res.data.laptopSpecs);
    // });
    // callApi(`Laptop`, "GET", null).then((res) => {
    //   setDatas(res.data);
    // });
    setDatas(laptops) 
  }, [laptops]);
  useEffect(()=>{
    setId(params.id)
  },[params.id])
  useEffect(()=>{
    callApi(`LaptopSpec/${id}`, "GET", null).then(res => {
      setLaptopData(res.data)
      setLoadLaptopData(false)
    }) 
  },[id])
  useEffect(()=>{
    if(user && user !== null){
      let body = {
        UserId: user.UserId,
        LaptopId: id
      }
      callApi(`Rating/ratingdetails`, "POST", body).then(res => {
        if(res.status === 200){
          setRating(res.data ? parseInt(res.data.RatingNumber) : 0)
          setHover(res.data ? parseInt(res.data.RatingNumber) : 0)
          setRatingLoading(false)
        }
      })
    }
    else{
      setRatingLoading(false)
    }
  },[id])
  const ratingHandler = (index) => {
    if(!user || user === null) {
      if(window.confirm("Please login to rate a product")){
        navigate('/signin')
      }
    }
    else{
      const ratingData = {
        LaptopId : id,
        UserId: user.UserId,
        RatingNumber: parseInt(index)
      }
      Promise.all([
        callApi(`LaptopSpec/${id}`, "GET", null),
        callApi(`Rating`, "POST", ratingData)
      ]).then(res => {
        setLaptopData(res[0].data)
        setRating(res[1].data.RatingNumber)
        setInterval(()=>{window.location.reload()}, 500)
      })
    }
  }
  const handleFavorite = (e) => {
    if(!user || user === null) {
      if(window.confirm("Please login to add a product to wishlist")){
        navigate('/signin')
      }
    }
    else{
      const f = {
        UserId : user.UserId,
        LaptopId : id
      }
      callApi(`Favorite`, "POST", f).then(res => {
        if(res.status === 200){
          
        }
      })
    }
  }
  return (
    !loadLaptopData?
    <div className="">
      <Container>
      <div className="grid grid-cols-12">
          <div className="col-span-9 my-10 bg-[#e3f5f8] p-10 text-center">
            <div className="bg-white my-5 p-5 rounded">
              <span className="text-3xl font-semibold">
                {laptopData.LaptopModel}
              </span>
              <p className="text-3xl font-bold">${laptopData.LaptopPrice}</p>
              <p className="text-xl mb-5">Brand : {laptopData.brand[0].BrandName}</p>
              <img
                className="rounded-md block mx-auto my-5 w-96 h-96 object-scale-down"
                src={`data:image/png;base64,${laptopData.LaptopImg}`}
                alt=""
              />
              <div className="flex justify-between">
                <button className="self-end flex gap-3 border-2 pl-2 pr-5 py-1 rounded-lg hover:bg-pink-400 hover:text-white" onClick={handleFavorite}>
                  <img
                    className="w-12 h-12"
                    src="https://img.icons8.com/plasticine/100/000000/like--v2.png"
                    alt="/"
                  />
                  <p className="self-center text-xl">Favorite</p>
                </button>
                <p className="self-center text-xl font-semibold">Rating: {laptopData.Rating && laptopData.Rating>0 ? laptopData.Rating : "This product is not yet rated"}</p>
                <div className="">
                  <p className="mt-5 text-sm">Rate this product</p>
                  <div className="flex">
                  {ratingLoading ?
                  <div className="m-auto my-3"><Spinner radius={30} color={"#15b9d5"} stroke={5} visible={true} /></div>
                  :
                  <div className="mr-3">
                  {[...Array(5)].map((star, index) => {
                    index += 1
                    return (
                      <button
                        type="button"
                        key={index}
                        className={`bg-transparent border-none outline-none cursor-pointer ${index <= (hover || rating)? "text-yellow-500" : "text-gray-300"}`}
                        onClick={()=>ratingHandler(index)}
                        onMouseEnter={() => {setHover(index)}}
                        onMouseLeave={() => {setHover(rating)}}
                      >
                        <span className="text-4xl">&#9733;</span>
                      </button>
                    );
                  })}
                  </div> 
                  }
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="bg-white my-5 p-5 rounded text-left">
              <span className="text-2xl">Technical Specifications</span>
              <table className="min-w-full my-3">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {laptopData.laptopSpecs
                    ? laptopData.laptopSpecs.map((item, index) => (
                        <tr key={index} className="text-left">
                          <td className="bg-[#b8b4b4] p-3 border-2 border-white w-60">
                            {item.LaptopSpecName}
                          </td>
                          <td className="bg-[#e7e3e3] p-3 border-2 border-white">
                            {item.LaptopSpecValue}
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div> 
          <div className="col-span-3">
            <DetailSidebar laptopDatas={datas.filter(l => l.LaptopId !== id).slice(0,4)} />
          </div>
        </div>
      </Container>
    </div>
    :
    <div className="m-auto"><Spinner radius={100} color={"#15b9d5"} stroke={10} visible={true} /></div>
  );
};

export default LaptopDetails;
