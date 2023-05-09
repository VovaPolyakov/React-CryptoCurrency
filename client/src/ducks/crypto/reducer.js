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
                ...action.result
            }
            
        case CHANGE_FAVORITE:
            const updateArray = JSON.parse(localStorage.getItem('crypto')).map((item) => {
                if(item.id == action.id){
                    return{
                        ...item,
                        favorite:action.check
                    }
                }
                return item
            })
            localStorage.setItem('crypto',JSON.stringify(updateArray))
            return {...state,data:updateArray}
        default: {
            return {
                ...state
            }
        }
    }
}
    