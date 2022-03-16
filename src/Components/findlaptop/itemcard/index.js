import {useNavigate} from "react-router-dom"
const ItemCard = ({id, name, price, image}) => {
    const navigate = useNavigate()
    return (
      <div
        className="text-center hover:border-2 rounded-md p-3 bg-white"
        onClick={() => {
          navigate(`/laptopdetails/${id}`);
          window.location.reload();
        }}
      >
        <img
          className="h-48 w-96 object-scale-down"
          src={`data:image/png;base64,${image}`}
          alt=""
        />
          <div className="text-lg text-center font-light">{name}</div>
          {/* <span className ="block text-md font-extralight">{desc}</span> */}
          <span className="text-xl font-semibold">$ {price}</span>
      </div>
    );
}

export default ItemCard
