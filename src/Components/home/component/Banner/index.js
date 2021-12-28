const Banner = () => {
    return (
        
        <div className="w-full h-[700px]">
            <div className="w-full">
                <img className="w-full brightness-50 h-[800px] object-cover absolute top-[-50px] z-[-1]" src="https://www.choosist.com/img/img-2.jpg?v=2" alt="" />
            </div>
            <div className="text-center py-[200px]">
                <span className="text-white font-semibold text-5xl block mb-[35px]">Find the perfect laptop</span>
                <span className="text-white text-2xl">Personalised recommendations because we're all different</span>
                <div>
                    <button className="mt-[35px] uppercase rounded-md bg-[#e26e2c] text-white py-3 px-10 font-semibold hover:bg-[#e68042]">Get Started</button>
                </div>
            </div>
        </div>  
    )
}

export default Banner
