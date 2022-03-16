import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../container";
import callApi from "../../apiCaller";
import DetailSidebar from "./detailsidebar";
const LaptopDetails = ({user}) => {
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
  let params = useParams();
  const [id] = useState(params.id);
  const [laptopData, setLaptopData] = useState({});
  const [datas, setDatas] = useState([]);
  const [specs, setSpecs] = useState([]);
  const [brand, setBrand] = useState({});
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
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
    callApi(`LaptopSpec/${id}`, "GET", null).then((res) => {
      setLaptopData(res.data);
      setBrand(res.data.brand[0]);
      setSpecs(res.data.laptopSpecs);
    });
    callApi(`Laptop`, "GET", null).then((res) => {
      setDatas(res.data);
    });
  }, []);
  const handleFavorite = (e) => {
    console.log(user)
  }
  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-9 my-10 bg-[#e3f5f8] p-10 text-center">
            <div className="bg-white my-5 p-5 rounded">
              <span className="text-3xl font-semibold">
                {laptopData.LaptopModel}
              </span>
              <p className="text-3xl font-bold">${laptopData.LaptopPrice}</p>
              <p className="text-xl mb-5">Brand : {brand.BrandName}</p>
              <img
                className="rounded-md block mx-auto"
                src={`data:image/png;base64,${laptopData.LaptopImg}`}
                alt=""
              />
              <div className="flex justify-between">
                <button className="self-start flex gap-3 border-2 pl-2 pr-5 py-1 rounded-lg hover:bg-pink-400 hover:text-white" onClick={handleFavorite}>
                  <img
                    className="w-12 h-12"
                    src="https://img.icons8.com/plasticine/100/000000/like--v2.png"
                    alt="/"
                  />
                  <p className="self-center text-xl">Favorite</p>
                </button>
                <div className="">
                  <p className="self-center text-xl font-semibold">Rating: 4.8</p>
                  <p className="mt-5 text-sm">Rate this product</p>
                  {[...Array(5)].map((star, index) => {
                    index += 1
                    return (
                      <button
                        type="button"
                        key={index}
                        className={`bg-transparent border-none outline-none cursor-pointer ${index <= (hover || rating)? "text-yellow-500" : "text-gray-300"}`}
                        onClick={() => {
                          setRating(index);
                        }}
                        onMouseEnter={() => {setHover(index)}}
                        onMouseLeave={() => {setHover(rating)}}
                      >
                        <span className="text-4xl">&#9733;</span>
                      </button>
                    );
                  })}
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
                  {specs
                    ? specs.map((item, index) => (
                        <tr key={index} className="text-left">
                          <td className="bg-[#b8b4b4] p-3 border-2 border-white">
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
            <DetailSidebar laptopDatas={datas} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LaptopDetails;
