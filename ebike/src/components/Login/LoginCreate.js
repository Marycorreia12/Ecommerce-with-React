import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Checkbox from '../CheckboxButton/Checkbox';
import Error from '../Helper/Error';
import useForm from '../Hooks/useForm';
import Input from '../Input/Input';
import styles from './LoginCreate.module.css'

const LoginCreate = () => {
  const [error, setError] = React.useState(null);
  const [response, setResponse] = React.useState(null);
  const email = useForm('email');
  const password = useForm('password');
  const firsName = useForm('');
  const lastName = useForm('');

  const [termos, setTermos] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && password.validate()) {
      fetch('https://62bc5d236b1401736cf8df8f.mockapi.io/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
          firsName: firsName.value,
          lastName: lastName.value
      }),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setResponse(json);
        })
        .catch((error) => {
          setError(error);
    })
   }
  }

  return (
    <section className={`${styles.container} animeLeft`}>
      <div className={styles.wrapper}>
      <h3 className={styles.title}>Create an Account</h3>
      <form onSubmit={handleSubmit}>
        <Input placeholder='Email' type="email" name="email" {...email}/>
        <Input placeholder='Password' type="password" name="password" {...password}/>
        <Input placeholder='Confirm Password' type="password" name="password" />
        <Input placeholder='First Name' type="text" name="fist" {...firsName}/>
        <Input placeholder='Last Name' type="text" name="last" {...lastName}/>
        <div className={styles.terms}>
          <Checkbox options={['Sign Me Up To Receive Email Offers And Updates', 'I Accept The Specialized Terms & Conditions.*', 'I Accept The Specialized Terms Of Use.*']} value={termos} setValue={setTermos}/>  
        </div>
          <p className={styles.text}>I acknowledge Specialized will use my information in accordance with its Privacy Policy.</p>
          <Button texto='Create Account' padding='.6em 1.2em' width='100%'/>
          <Error error={error} />
          {response && response.ok && <p className={styles.p}>Usuário criado</p>}

      </form>
      <div className={styles.create_account}>
          Already have an account?<Link to="/login" className={styles.login}>Login</Link>
      </div>
      
      </div>
    
    </section>
  );
};

export default LoginCreate
