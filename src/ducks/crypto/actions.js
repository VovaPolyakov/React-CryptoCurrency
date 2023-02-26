export const GET_CRYPTO_DATA = 'GET_CRYPTO_DATA';

const API_KEY = '8898e112-e83c-4637-847a-49ff450b9bea'

export const getCryptoData = () =>  async (dispatch) => {
    const res = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY}`)
    const payload = await res.json()

    dispatch({
        type:GET_CRYPTO_DATA,
        payload
    })
};
