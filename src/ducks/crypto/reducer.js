// import {ADD_CRYPTO_DATA} from './actions'
import { GET_CRYPTO_DATA } from "./actions"

export const initialCryptoState ={
    data:[],
    error:null,
    loading:false
}

export const cryptoReducer = (state,action) => {
    switch(action.type){
        case GET_CRYPTO_DATA:
            return{
                ...state,
                data:action.payload,
            }
        default: {
            return {
                ...state
            }
        }
    }
}
    