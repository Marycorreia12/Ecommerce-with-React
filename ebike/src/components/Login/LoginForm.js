import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './LoginForm.module.css'
import Checkbox from '../CheckboxButton/Checkbox';
import Error from '../Helper/Error';
import useForm from '../Hooks/useForm';

const LoginForm = () => {
  const [termos, setTermos] = React.useState([]);
  const email = useForm('email');
  const password = useForm('password');
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

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
      }),
    }).then((response) => {
      setResponse(response);
    }).catch((err) =>{
      setError(err);
    })
  }
}

  return (
    <section className={`${styles.container} animeUp`}>
      <div className={styles.wrapper}>
      <h3 className={styles.title}>Sign in to your Account</h3>
      <form onSubmit={handleSubmit}>
        <Input placeholder='Email' type="text" name="email" {...email}/>
        <Input placeholder='Password' type="password" name="password" {...password}/>
        <div className={styles.terms}>
          <Checkbox options={['Remember Me']} value={termos} setValue={setTermos} />
          <Link to="/login/lost">Forgot your password?</Link>   
        </div>
        <p className={styles.text}>I accept the Specialized Terms of Use and acknowledge Specialized will use my information in accordance with its Privacy Policy.</p>
        <Button texto='Sign in' padding='.6em 1.2em' width='100%'/>
        <Error error={error} />
        {response && response.ok && <p style={{color: 'green', marginTop: '.5rem'}}>Usuário Logado!</p>}
      </form>
      <Link to="/login/create" className={styles.create_account}>Create Account</Link>
      </div>
    </section>
  );
};

export default LoginForm;
