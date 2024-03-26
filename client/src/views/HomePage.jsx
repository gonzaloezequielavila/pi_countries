import React from 'react';
import styles from './HomePage.module.css'
import Card from '../components/Card';

const HomePage = () => {

  const message = () => {
    alert('This button will search')
  }

  return(
    <div className={styles.container}>
      <h1>This is the home page</h1>
      <div className={styles.searchBar}>
        <input className={styles.input} placeholder='Search for a Country'></input>
        <button onClick={message}>Search</button>
      </div>
    </div>
  )
}

export default HomePage;