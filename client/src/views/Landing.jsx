import React from 'react';
/* import LoginText from '../components/LoginText'; */
import styles from './Landing.module.css'
import { Link } from 'react-router-dom';

const Landing = ()=> {
  return(
    <div className={styles.container}>
      <div>
        <div>
        <h1 className={styles.title}>Countries Individual Project</h1>
        <h4 className={styles.littleText}>For <Link to='https://www.soyhenry.com/'>HENRY</Link></h4>
        </div>
        <Link to='/home'>
        <button>Enter</button>
        </Link>
      </div>
    </div>
  )

};


export default Landing;