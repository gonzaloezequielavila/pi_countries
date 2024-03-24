import React from 'react';
/* import LoginText from '../components/LoginText'; */
import styles from './Landing.module.css'

const Landing = ()=> {
  return(
    <div className={styles.container}>
      <div>
        <LoginText/>
      </div>
    </div>
  )

};


export default Landing;