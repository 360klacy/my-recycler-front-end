import axios from 'axios';

export default(data)=>{
    const loginUrl = `${window.apiHost}/users/login`
    const axiosResponse = axios.post(loginUrl,data);

    return {
        type: "login",
        payload: axiosResponse
    }
}