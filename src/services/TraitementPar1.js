import axios from 'axios';

const API_URL = 'http://localhost:9090/api/';

class traitement{

    getQ1(){
        return axios.get(API_URL+'Q1')
    }

    getQ2a1(n){
        return axios.post(API_URL+'Q2a1',{
            n})
    }
    getQ2a2(){
        return axios.get(API_URL+'Q2a22/${lemme}')

    }
    getQ2b(lemme){
        return axios.post(API_URL+'Q2a1',{
            lemme}).then(response => {
            if(response.data.accessToken){
                localStorage.setItem(lemme,JSON.stringify(response.data));
            }
            return response.data
        })
    }


}
export default new traitement();
