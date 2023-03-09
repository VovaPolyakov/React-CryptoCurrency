export const GET_CRYPTO_DATA = 'GET_CRYPTO_DATA';
export const SEARCH_DATA = 'SEARCH_DATA'
export const CHANGE_FAVORITE = 'CHANGE_FAVORITE'

const API_KEY = '8898e112-e83c-4637-847a-49ff450b9bea'

function getDataFromLocalStorage(){
    return JSON.parse(localStorage.getItem('crypto'))
}

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

export const getCryptoData = () =>  async (dispatch) => {
    // let payload = []
    // if(localStorage.getItem('crypto')){
    //     console.log('Hello')
    //     payload = JSON.parse(localStorage.getItem('crypto'))
    // }else{
    //     const res = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY}`)
    //     payload = await res.json()
    //     payload.data.forEach(element => element.favorite = false);
    //     localStorage.setItem('crypto',JSON.stringify(payload.data))
    // }
    let result = []

    if(localStorage.getItem('crypto')){
        result = getDataFromLocalStorage()
    }else{
        result = await fetchData()
        console.log('result',result)
    }
    console.log('result1',result)
    dispatch({
        type:GET_CRYPTO_DATA,
        result
    })
};

export const searchCrypto = (search) => {
    return {
        type: SEARCH_DATA,
        search,
    };
}

export const changeFavorite = (id,check) => {
    return{ 
        type: CHANGE_FAVORITE,
        id,
        check
    }
}
