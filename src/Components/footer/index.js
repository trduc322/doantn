import Container from "../container"

const Footer = () => {
    return (
        <div className="mt-auto bg-[#15b9d5] ">
            <Container>
                <div className="flex mb-16 mt-4 justify-between">
                    <div>
                        <div className="text-2xl text-white font-semibold"> LOGO</div>
                        <span className="text-white font-semibold block">Laptop Articles</span>
                        <span className="text-white font-semibold">Laptops for your needs</span>
                    </div>
                    <div>
                        <div className="text-2xl text-white font-semibold">Terms</div>
                        <span className="text-white font-semibold block">Terms</span>
                        <span className="text-white font-semibold">Privacy Policy</span>
                    </div>
                    <div>
                        <div className="text-2xl text-white font-semibold">Regions</div>
                        <span className="text-white font-semibold block">Vietnam</span>
                        <span className="text-white font-semibold">Thailand</span>
                    </div>    
                        
                        <div className="text-md text-white font-thin">Logo</div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
