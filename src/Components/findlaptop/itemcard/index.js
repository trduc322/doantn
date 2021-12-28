

const ItemCard = ({name, price}) => {
    return (
        <div className="text-center">
            <div className="text-2xl font-light text-center">{name}</div>
            {/* <img src={img} alt=""/> */}
            {/* <span className ="block text-md font-extralight">{desc}</span> */}
            <span className="text-xl font-light">{price}</span>  
        </div>
    )
}

export default ItemCard
