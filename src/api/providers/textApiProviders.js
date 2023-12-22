//axios: requete fetch

//ce doc est une api rest en nodejs

const axios= require('axios');
const baseUrl='https://loripsum.com.net/api';


exports.getRandomText = async ()=>{
    let response = await axios.get(baseUrl+'/plaintext',{responseType:'text'});
    return response.data;
}