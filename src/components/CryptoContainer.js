import React from 'react'
import styles from '../styles/Home.module.scss'

const CryptoContainer = ({children}) => {
  return (
    <div className={styles.container}>
        Container
        {children}
    </div>
  )
}

export default CryptoContainer
