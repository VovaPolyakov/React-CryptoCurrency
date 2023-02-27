import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CryptoItem from './CryptoItem'
import styles from '../styles/Home.module.scss'

const CryptoList = () => {
    const [data,setData] = useState()
    const items = useSelector((state) => state.crypto.data.data)
  return (
    <div className={styles.crypto_list}>
      {items?.slice(0,10).map((item) => (
        <CryptoItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default CryptoList
