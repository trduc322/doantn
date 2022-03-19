import { useEffect, useState } from "react";
import Select from "react-select";
import callApi from "../../apiCaller";
import Container from "../container";
import ItemCard from "../findlaptop/itemcard";
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
const CompareLaptop = ({ laptops }) => {
  const [laptopList, setLaptopList] = useState([]);
  const [laptop1, setLaptop1] = useState(null);
  const [laptop2, setLaptop2] = useState(null);
  const [suggestion1, setSuggestion1] = useState([]);
  const [suggestion2, setSuggestion2] = useState([]);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [compareSpecs, setCompareSpecs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setLaptopList(laptops);
  }, [laptops]);
  const handleChange1 = (e) => {
    let matches = [];
    if (e.target.value.length > 0) {
      matches = laptopList.filter((l) => {
        const regex = new RegExp(`${e.target.value}`, "gi");
        return l.LaptopModel.match(regex);
      });
    }
    setText1(e.target.value);
    setSuggestion1(matches);
  };
  const handleChange2 = (e) => {
    let matches = [];
    if (e.target.value.length > 0) {
      matches = laptopList.filter((l) => {
        const regex = new RegExp(`${e.target.value}`, "gi");
        return l.LaptopModel.match(regex);
      });
    }
    setText2(e.target.value);
    setSuggestion2(matches);
  };
  const compareHandler = (e) => {
    e.preventDefault()
    let test = laptop1.laptopSpecs
    let testValue = laptop2.laptopSpecs
    console.log(test[3].LaptopSpecName === testValue[3].LaptopSpecName)
    let testData = [];
    for(let i = 0; i < test.length; i++){
      if(test[i].LaptopSpecName === testValue[i].LaptopSpecName){
          testData = test.map(item => (
             {LaptopSpecName: item.LaptopSpecName, LaptopSpecValue1 : item.LaptopSpecValue, LaptopSpecValue2: testValue.find(t => t.LaptopSpecName === item.LaptopSpecName).LaptopSpecValue}
          ))
      }
    }
    //console.log(testData)
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
    //            {name: item.name, value: testValue.find(t => t.id === item.id).value}
    //         ))
    //     }
    // }
    // console.log(testData)
    setCompareSpecs(testData)
    setIsLoading(false)
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
            find out how up to three products fare against each other, but more
            importantly, in terms of what YOU need, not in terms of technical
            jargon! Just hit the drop down menus on each column to find the
            machines you’re looking for and hey presto, not only will you be
            able to compare the laptops in terms of what they are made of but in
            terms of what that’ll mean for you! You can then shop with
            confidence that your precious pennies are being spent on what’s
            right for you!
          </p>
          <div className="grid grid-cols-3 mt-3 gap-10">
            <div className="col-span-1">
              <p className="text-2xl mb-2">Add A Laptop To Compare</p>
              <div className="">
                <div className="items-start relative">
                  <div className="bg-white rounded-md shadow-md border absolute">
                    <div className="grid grid-cols-12">
                      <input
                        className="focus:outline-none px-5 py-2 col-span-10"
                        placeholder="Search for a laptop to compare"
                        onChange={handleChange1}
                        value={text1}
                      />
                      <img
                        className="pr-2 py-1 self-center w-8 h-8 col-end-13 col-span-1"
                        src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
                        alt=""
                      />
                    </div>
                    {suggestion1 &&
                      suggestion1.map((item, index) => (
                        <p
                          className="px-5 py-2 hover:text-[#15b9d5] hover:cursor-pointer"
                          key={index}
                          onClick={() => {
                            setLaptop1(item);
                            setText1("");
                            setSuggestion1([]);
                          }}
                        >
                          {item.LaptopModel}
                        </p>
                      ))}
                  </div>
                </div>
                
              </div>
              {laptop1 && laptop1.LaptopId ? (
                  <div className="mt-16">
                    <ItemCard
                      id={laptop1.LaptopId}
                      name={laptop1.LaptopModel}
                      price={laptop1.LaptopPrice}
                      image={laptop1.LaptopImg}
                    />
                  </div>
              ) : null}
            </div>
            <div className="col-span-1">
              <p className="text-2xl mb-2">Add A Laptop To Compare</p>
              <div className="">
                <div className="items-start relative">
                  <div className="bg-white rounded-md shadow-md border absolute">
                    <div className="grid grid-cols-12">
                      <input
                        className="focus:outline-none px-5 py-2 col-span-10"
                        placeholder="Search for a laptop to compare"
                        onChange={handleChange2}
                        value={text2}
                      />
                      <img
                        className="pr-2 py-1 self-center w-8 h-8 col-end-13 col-span-1"
                        src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
                        alt=""
                      />
                    </div>
                    {suggestion2 &&
                      suggestion2.map((item, index) => (
                        <p
                          className="px-5 py-2 hover:text-[#15b9d5] hover:cursor-pointer"
                          key={index}
                          onClick={() => {
                            setLaptop2(item);
                            setText2("");
                            setSuggestion2([]);
                          }}
                        >
                          {item.LaptopModel}
                        </p>
                      ))}
                  </div>
                </div>
                
              </div>
              {laptop2 && laptop2.LaptopId ? (
                  <div className="mt-16">
                    <ItemCard
                      id={laptop2.LaptopId}
                      name={laptop2.LaptopModel}
                      price={laptop2.LaptopPrice}
                      image={laptop2.LaptopImg}
                    />
                  </div>
              ) : null}
            </div>
          </div>
          {laptop1 && laptop2 && (
            <button className="text-xl my-10 bg-[#15b9d5] py-2 px-5 rounded-md text-white" onClick={compareHandler}>
              Compare
            </button>
          )}
          {compareSpecs && !isLoading?
          <div className="bg-white py-5 rounded text-left">
              <span className="text-2xl">Technical Specifications</span>
              <table className="min-w-full my-3">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {compareSpecs.map((item, index) => (
                        <tr key={index} className="text-left">
                          <td className="bg-[#e7e3e3] p-3 border-2 border-white">
                            {item.LaptopSpecValue1}
                          </td>
                          <td className="bg-[#e7e3e3] p-3 border-2 border-white">
                            {item.LaptopSpecValue2}
                          </td>
                          <td className="bg-[#b8b4b4] p-3 border-2 border-white w-72 font-semibold">
                            {item.LaptopSpecName}
                          </td>
                        </tr>
                      ))
                  }
                </tbody>
              </table>
            </div>
            :
            null
            }
        </div>
      </Container>
    </div>
  );
};
export default CompareLaptop;
