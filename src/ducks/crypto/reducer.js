// import {ADD_CRYPTO_DATA} from './actions'
import { GET_CRYPTO_DATA, CHANGE_FAVORITE} from "./actions"


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
                ...action.payload
            }
        case CHANGE_FAVORITE:
            const updateArray = state.data.map((item) => {
                if(item.id == action.id){
                    return{
                        ...item,
                        favorite:action.check
                    }
                }
                return item
            })
            return {...state,data:updateArray}
        default: {
            return {
                ...state
            }
        }
    }
}
    