import React from 'react'
import Container from '../../container'

function BrandSideBar() {
  return (
    <div>
        <Container>
        <div className='py-10'>
                <div className='bg-[#15b9d5] p-5'>
                    <span className="text-white text-xl font-semibold">Filter by your needs</span>
                </div>
                <div className='bg-[#e3f5f8] p-5'>
                    <span className='font-semibold'>Use</span>
                    <ul className='bg-[#d6e5e7] mt-3 p-3 rounded-lg text-md font-light'>
                        <li><input type="checkbox" /><span className='ml-2'>Browsing</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Documents</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Casual Gaming</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Hardcore Gaming</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Watching Movies</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Amateur Photo Editing</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Pro Graphic Design</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>3D Design (CAD)</span></li>
                    </ul>
                </div>
                <div className='bg-[#e3f5f8] p-5'>
                    <span className='font-semibold'>Where it will be used</span>
                    <ul className='bg-[#d6e5e7] mt-3 p-3 rounded-lg text-md font-light'>
                        <li><input type="checkbox" /><span className='ml-2'>Short Journeys</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Long Journeys</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Around the Office</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Around the House</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>At my Desk</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Public Places</span></li>
                    </ul>
                </div>
                <div className='bg-[#e3f5f8] p-5'>
                    <span className='font-semibold'>How often it will be carried</span>
                    <ul className='bg-[#d6e5e7] mt-3 p-3 rounded-lg text-md font-light'>
                        <li><input type="checkbox" /><span className='ml-2'>All the Time</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Occasionally</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Hardly Ever</span></li>
                    </ul>
                </div>
                <div className='bg-[#e3f5f8] p-5'>
                    <span className='font-semibold'>Screen Size</span>
                    <ul className='bg-[#d6e5e7] mt-3 p-3 rounded-lg text-md font-light'>
                        <li><input type="checkbox" /><span className='ml-2'>10 to 12 Inches</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>13 to 14 Inches</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>15 Inches</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>17 Inches and Above</span></li>
                    </ul>
                </div>
                <div className='bg-[#e3f5f8] p-5'>
                    <span className='font-semibold'>Software</span>
                    <ul className='bg-[#d6e5e7] mt-3 p-3 rounded-lg text-md font-light'>
                        <li><input type="checkbox" /><span className='ml-2'>Windows</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>MacOS</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Chrome OS</span></li>
                    </ul>
                </div>
                <div className='bg-[#e3f5f8] p-5'>
                    <span className='font-semibold'>Style</span>
                    <ul className='bg-[#d6e5e7] mt-3 p-3 rounded-lg text-md font-light'>
                        <li><input type="checkbox" /><span className='ml-2'>Cool</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Cute & Pretty</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Regular</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Business</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Funky</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Gaming</span></li>
                    </ul>
                </div>
                <div className='bg-[#e3f5f8] p-5'>
                    <span className='font-semibold'>Brands</span>
                    <ul className='bg-[#d6e5e7] mt-3 p-3 rounded-lg text-md font-light'>
                        <li><input type="checkbox" /><span className='ml-2'>Acer</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Ailienware</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Apple</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Asus</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Dell</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Gigabyte</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>HP</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Huawei</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Lenovo</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>LG Electronics</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Microsoft</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>MSI</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Razer</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Samsung</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Toshiba</span></li>
                    </ul>
                </div>
                <div className='bg-[#e3f5f8] p-5'>
                    <span className='font-semibold'>Price</span>
                    <ul className='bg-[#d6e5e7] mt-3 p-3 rounded-lg text-md font-light'>
                        <li><input type="checkbox" /><span className='ml-2'>Under $200</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Under $300</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Under $500</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Under $700</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Under $1,000</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Under $1,500</span></li>
                        <li><input type="checkbox" /><span className='ml-2'>Under $2,000</span></li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default BrandSideBar