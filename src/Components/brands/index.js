import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import callApi from '../../apiCaller'
import Container from '../container'
import Spinner from 'react-spinner-material';
function Brands({brands}) {
    const navigate = useNavigate()
    const [allBrands, setAllBrands] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      setAllBrands(brands)
      setIsLoading(false)
    }, [brands])
  return (
    !isLoading?
    <div>
      <Container>
        <div className="my-10 bg-[#e3f5f8] p-10">
          <p className="text-3xl mb-5 font-semibold">Laptop Brands</p>
          <div className="grid grid-cols-3 gap-9">
            {allBrands.map((item) => (
              <div
                key={item.BrandId}
                className="text-center p-5 bg-white rounded-md hover:border-4"
                onClick={() => {
                  navigate(`/branddetails/${item.BrandId}`)
                }}
              >
                <img
                  className="m-auto block h-48 w-48"
                  src={`data:image/png;base64,${item.BrandImg}`}
                  alt="/"
                />
                <p className="mt-5 text-xl font-semibold">{item.BrandName}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
    :
    <div className="m-auto"><Spinner radius={100} color={"#15b9d5"} stroke={10} visible={true} /></div> 
  );
}

export default Brands