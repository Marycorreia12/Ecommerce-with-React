import React from 'react'
import styles from './EmailSubscribe.module.css'

const EmailSubscribe = () => {
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState(null);

    function validateEmail(value){
      if(value.length === 0){
        setError('Campo obrigatório');
        return false;
      }
      else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)){
        setError('Preencha um email válido');
        return false;
      }
      else{
        setError(null);
        return true;
      }
    }

    function handleBlur({target}){
      validateEmail(target.value);
    }
  
    function handleSubmit(event){
      event.preventDefault();
      if(validateEmail(email)){
        console.log('Enviou');
      }else{
        console.log('Não Enviou');
      }
  }
  
  function handleChange({target}){
      const {id, value} = target;
      console.log(id, value);
      if(error) validateEmail(target.value);
      setEmail(target.value);
  }
  return (
    <>
     <form onSubmit={handleSubmit} className={styles.input_group}>
        <input type="email" name={email} id="email" placeholder='Enter email' className={styles.inp}
        onChange={handleChange}
        onBlur={handleBlur}/>
        <button className={styles.btn} type='submit'>Send</button>
    </form>
    {error && <p style={{color: 'red'}}>{error}</p>}
   </>
  )
}

export default EmailSubscribe
