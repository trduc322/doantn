import axios from 'axios';
import { loginFailure, loginStart, loginSuccess} from './Context/authContext/AuthAction';


// export default function callApi(endpoint, method, body){
//     return axios({
//         method: method,
//         url: `https://localhost:44383/api/${endpoint}`,
//         data: body,
//       }).catch((err) => {
//           console.log(err);
//         });
        
// }
export default function callApi(endpoint, method, body){
  return axios({
      method: method,
      url: `https://datn-api-trduc.herokuapp.com/api/${endpoint}`,
      data: body,
    }).catch((err) => {
        console.log(err);
      });
      
}
export const login = async (user, dispatch) => {
  dispatch(loginStart())
  try{
    const res = await axios.post("https://datn-api-trduc.herokuapp.com/api/login/authenticate", user)
    dispatch(loginSuccess(res.data))
  }
  catch(err){
    dispatch(loginFailure())
  }
}
