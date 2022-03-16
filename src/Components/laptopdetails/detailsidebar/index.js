import React from 'react'
import Container from '../../container'
import ItemCard from '../../findlaptop/itemcard'

function DetailSidebar(props) {
  return (
    <div>
        <Container>
        <div className='py-10'>
                <div className='bg-[#15b9d5] p-5'>
                    <span className="text-white text-xl font-semibold">Similar laptops</span>
                </div>
                <div className='bg-[#e3f5f8] p-5'>
                    {props.laptopDatas? props.laptopDatas.map(item => 
                            <div className='py-3'>
                                <ItemCard id={item.LaptopId} name = {item.LaptopModel} price={item.LaptopPrice} image={item.LaptopImg}/>
                            </div>
                        )
                    :null
                    }
                </div>
            </div>
        </Container>
    </div>
  )
}

export default DetailSidebar