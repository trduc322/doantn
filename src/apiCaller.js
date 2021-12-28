import axios from 'axios';


export default function callApi(endpoint, method, body){
    return axios({
        method: method,
        url: `https://localhost:44383/api/${endpoint}`,
        data: body,
        // withCredentials: true
      }).catch((err) => {
          console.log(err);
        });
        
}