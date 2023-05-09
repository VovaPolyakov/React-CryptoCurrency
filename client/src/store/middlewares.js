import axios from "axios";
import { GET_CRYPTO_DATA } from "../ducks/crypto/actions";


const API_KEY = '8898e112-e83c-4637-847a-49ff450b9bea'

async function fetchData(){
    const res = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY}`)
    const payload = await res.json()
    // payload.data.slice(0,5).forEach(element => element.favorite = true);
    // payload.data.slice(5).forEach(element => element.favorite = false);
    payload.data.forEach((element,index) => {
        if(index < 5){
            element.favorite = true
        }else{
            element.favorite = false
        }
    })

    setItemToLocalStorage(payload.data)
    return payload
}
function setItemToLocalStorage(data){
    return localStorage.setItem('crypto',JSON.stringify(data))
}

function getDataFromLocalStorage(){
    return JSON.parse(localStorage.getItem('crypto'))
}

const setDataToDataBase = (result) => {
    console.log('RESULT',result[0]?.name)
    axios.post('http://localhost:3001/api/insert',{cryptoName:[result[0].name],cryptoPrice:[result[0].quote.USD.price]}).then(() => {alert('successful insert')})
}



export const getDataMiddleWares = (store) => (dispatch) => async (action) => {
    if(action.type === GET_CRYPTO_DATA){
        try{
            let result = []
            if(localStorage.getItem('crypto')){
                    result = getDataFromLocalStorage()
            }else{
                result = await fetchData()
                setDataToDataBase(result)
            }   
            dispatch({
                type:GET_CRYPTO_DATA,
                result
            })
        }catch(e){
            console.log(e)
        }
    }else{
        dispatch(action)
    }
}