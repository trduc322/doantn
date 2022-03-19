import { useContext } from 'react';
import Spinner from 'react-spinner-material';
import './App.css';
import { AuthContext } from './Context/authContext/AuthContext';
import { ProductsContext } from './Context/productsContext/ProductsContext';
import Approuter from './routes'
function App() {
  const { user } = useContext(AuthContext)
  const { laptops, brands, loading} = useContext(ProductsContext)
  return (
      loading? <div><Spinner radius={500} color={"#15b9d5"} stroke={2} visible={true} /></div> 
      : <Approuter user = {user} laptops = {laptops} brands = {brands}/>
  );
}

export default App;
