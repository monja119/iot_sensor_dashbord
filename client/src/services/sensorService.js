import axios from 'axios';

const api_endpoint = import.meta.env.VITE_API_ENDPOINT

export const getData = () => {
     return axios.get(
         `${api_endpoint}/api/sensors/batch/`,
            {
              responseType: 'arraybuffer'
            }
     );
}

export const getDataJson = () => {
     return axios.get(
         `${api_endpoint}/api/sensors/json/`,
            {
              responseType: 'json'
            }
     );
}