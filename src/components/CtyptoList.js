import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CryptoItem from './CryptoItem'
import styles from '../styles/Home.module.scss'
import {IoIosArrowDropdown} from 'react-icons/io'

const CryptoList = () => {
    const [data,setData] = useState()
    const items = useSelector((state) => state.crypto.data.data)
    const [time,setTime] = useState('1h')
    const [menu,setMenu] = useState(false)
    const handleClick = (e) => {
        setMenu(!menu)
    }
    const changeTime = (e) => {
        console.log(e.target.id)
        setTime(e.target.id)
    }
  return (
    <div className={styles.crypto}>
        <div className={styles.crypto_title}>
            <h1>Favorite Crypto</h1>
            <div className={styles.crypto_filter} onClick={handleClick}>
                <button className={styles.crypto_time}>
                    Filter: {time}
                </button>
                <IoIosArrowDropdown/>
            </div>
            {menu ? 
                <nav className={styles.dropdown_menu}>
                    <ul>
                        <li id='1h' onClick={changeTime}>1h</li>
                        <li id='24h' onClick={changeTime}>24h</li>
                        <li id='7d' onClick={changeTime}>7d</li>
                    </ul>
                </nav>
             : ''

            }
        </div>
        <div className={styles.crypto_list}>
            {items?.slice(0,10).map((item) => (
                <CryptoItem time={time} key={item.id} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default CryptoList
