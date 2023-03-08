export const GET_CRYPTO_DATA = 'GET_CRYPTO_DATA';
export const SEARCH_DATA = 'SEARCH_DATA'
export const CHANGE_FAVORITE = 'CHANGE_FAVORITE'

const API_KEY = '8898e112-e83c-4637-847a-49ff450b9bea'

export const getCryptoData = () =>  async (dispatch) => {
    const res = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY}`)
    const payload = await res.json()
    payload.data.forEach(element => element.favorite = false);


    if(localStorage.getItem('crypto')){
        console.log('Hello')
    }else{
        localStorage.setItem('crypto',JSON.stringify(payload.data))
    }

    dispatch({
        type:GET_CRYPTO_DATA,
        payload
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
