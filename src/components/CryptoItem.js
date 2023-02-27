import React from 'react'
import styles from '../styles/Home.module.scss'

const CryptoItem = ({item}) => {
  return (
    <p className={styles.crypto_name}>
        {item.name}
    </p>
  )
}

export default CryptoItem
