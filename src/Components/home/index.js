import Container from "../container"
import Banner from "./component/Banner"

const Home = () => {
    return (
        <div>
            <Banner />
            <div class="bg-gray-100 py-5">
                <Container>
                    <div className="text-center py-10">
                        <span className="text-2xl font-normal">How it works</span>
                    </div>
                    <div className="flex justify-between pb-10">
                        <div className="p-3 text-center w-[30%]">
                            <div className="w-[100px] mx-auto">
                                <img src="https://cdn-icons-png.flaticon.com/512/114/114734.png" alt="laptop" />
                            </div>
                            <span className="block text-xl">Tell us about your needs and lifestyle</span>
                            <span className="underline hover:text-red-500 transition-all cursor-pointer">Learn more</span>
                        </div>
                        <div className="p-3 text-center w-[30%] flex-col">
                            <div className="w-[100px] mx-auto">
                                <img src="https://cdn-icons-png.flaticon.com/512/114/114734.png" alt="laptop" />
                            </div>
                            <span className="block text-xl">We find the best match that suits you</span>
                            <span className="underline hover:text-red-500 transition-all cursor-pointer">Learn more</span>
                        </div>
                        <div className="p-3 text-center w-[30%]">
                            <div className="w-[100px] mx-auto">
                                <img src="https://cdn-icons-png.flaticon.com/512/114/114734.png" alt="laptop" />
                            </div>
                            <span className="block text-xl">We show you the best deals</span>
                            <span className="underline hover:text-red-500 transition-all cursor-pointer">Learn more</span>
                        </div>
                    </div>
                </Container>
            </div>
            {/* <Container>
                <div className="h-[500px]"></div>
            </Container> */}
        </div>
    )
}

export default Home
