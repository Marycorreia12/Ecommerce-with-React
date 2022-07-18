import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './LoginPasswordLost.module.css'

const LoginPasswordLost = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Forgot your password?</h3>
        <form>
          <Input placeholder='Email' type="email" name="email" />
          <Button texto='Send email' padding='.6em 1.2em' width='100%'/>
        </form>
        <Link to="/login" className={styles.cancel}>Cancel</Link>
      </div>
    </section>
  );
};

export default LoginPasswordLost;
