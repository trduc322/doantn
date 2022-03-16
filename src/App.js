import { useContext } from 'react';
import './App.css';
import { AuthContext } from './Context/authContext/AuthContext';
import Approuter from './routes'
function App() {
  const { user } = useContext(AuthContext)
  return (
      <Approuter user = {user}/>
  );
}

export default App;
