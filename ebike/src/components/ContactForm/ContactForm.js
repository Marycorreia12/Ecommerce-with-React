import React from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import SubTitle from '../../components/SubTitle/SubTitle'
import styles from './ContactForm.module.css'
import useForm from '../Hooks/useForm'
import Textarea from '../Textarea/Textarea'
import Checkbox from '../CheckboxButton/Checkbox'

const ContactForm = () => {
  const name = useForm();  
  const phone = useForm('phone');
  const email = useForm('email');
  const textarea = useForm('');
  const [termos, setTermos] = React.useState([]);
  const [response, setResponse] = React.useState(null);

    function handleSubmit(event){
      event.preventDefault();
      if(phone.validate() && email.validate() && name.validate() && textarea.validate() && termos.length > 0){
        fetch('https://62bc5d236b1401736cf8df8f.mockapi.io/api/v1/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name.value,
            phone: phone.value,
            email: email.value,
            message: textarea.value
          }),
        })
        .then((response) => {
          setResponse(response);
        });
        return true;
      }
      else{
        alert('Não enviado');
        return false;
      }
  }

  return (
      <div className={styles.form_container}>
        <SubTitle texto='CONTACT US'/>
        <form onSubmit={handleSubmit} >
          <div className={styles.form_group}>
             <div className={styles.input_form_group}>
                <Input placeholder='Name' id='name' type='text' value={name} {...name} 
                />
                <Input placeholder='Phone' id='phone' type='text' value={phone} {...phone}/>
                <Input placeholder='Email' id='email' type='email' value={email} {...email}/>
              </div>
              <Textarea id='textarea' type='text' placeholder='Message' value={textarea} {...textarea}/>
              <div className={styles.checkbox_container}>
                <Checkbox options={['By using this form you agree with the storage and handling of your data by this website.*']} value={termos} setValue={setTermos} />
              </div>
              
              <Button texto='SUBMIT COMMENT' padding='0.813em 1.563em'/> 
              {response && response.ok && <p className={styles.p}>Formulário Enviado</p>}
          </div>
        </form>
      </div>
  )
}

export default ContactForm
