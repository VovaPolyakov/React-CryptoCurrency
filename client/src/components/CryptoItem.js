import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../styles/Home.module.scss'
import { changeFavorite } from '../ducks/crypto/actions'

const CryptoItem = ({item,time,check}) => {
    const [checked,setChecked] = useState(true)
    const dispatch = useDispatch()


    const handleChange = (e) => {
        setChecked(false)
        dispatch(changeFavorite(e.target.id,false))
    }
    
    let period = `percent_change_${time}`
    const trend = item.quote.USD[period] > 0
    // useEffect(() => {
    //     if(Math.sign(item.quote.USD[period]) === -1){
    //         setTrend(false)
    //     }else{
    //         setTrend(true)
    //     }
    // },[time])
  return (
    <div>
        { item.favorite ? <div className={styles.crypto_item}>
            <p className={styles.crypto_name}>
                {item.name}
            </p>
            <div className={styles.crypto_info}>
                {time && <p>{`${item.quote.USD[period].toFixed(2)}%`}</p> }
                {trend ? <i className={styles.gg_trending}></i> : <i className={styles.gg_trending_down}></i>}
                <div className={styles.crypto_price}>{`${item.quote.USD.price.toFixed(2)}$`}</div>
                <label className={styles.crypto_checkbox}>
                    <input id={item.id} checked={true} onChange={handleChange} type="checkbox"></input>
                    <div className={styles.checkmark}>
                        <svg viewBox="0 0 256 256">
                            <rect fill="none" height="256" width="256"></rect>
                            <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" strokeWidth="20px" stroke="#FFF" fill="none"></path>
                        </svg>
                    </div>
                </label>
            </div>
        </div> : ''}
    </div>

  )
}

export default CryptoItem
