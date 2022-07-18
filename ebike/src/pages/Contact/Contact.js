import React from 'react'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import ContactForm from '../../components/ContactForm/ContactForm'
import Map from '../../images/map.svg'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import ContactCard from '../../components/ContactCard/ContactCard'
import ContactInfoImage from '../../images/contactinfo.svg'
import phone from '../../images/phone.svg'
import envelope from '../../images/envelope.svg'
import address from '../../images/address.svg'
import Head from '../../components/Head/Head'
import styles from './Contact.module.css'

const Contact = () => {
 
  return (
  <>
   <Head title="Contact" description="Essa é a descrição da Contact" />
    <HeaderTitle texto = 'CONTACT US'/>
    <section className='container'>
        <div className={styles.info}>
            <img src={ContactInfoImage} alt="ContactInfoImage" className={styles.image}/>
            <div className={styles.content}>
                <h3 className={styles.title}>CONTACT INFORMATION</h3>
                <div className={styles.text}>
                    <p className={styles.paragraph}>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit totam rem aperiam, eaque sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.</p>
                    <p className={styles.paragraph}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim Nor again is there anyone who loves or pursues or desires to obtain.</p>
                </div>
                <SocialMedia/>
            </div>
        </div>
        <div className={styles.cards_container}>
              <ContactCard img = {phone} title = 'NEED HELP' text1 = '1-800-488-6040' text2 = '1-800-578-4090'/>
              <ContactCard img = {envelope} title = 'QUESTIONS' text1 = 'team@gmail..com' text2 = 'help@gmail..com'/>
              <ContactCard img = {address} title = 'ADDRESS' text1 = '8500,Lorem Street,Chicago' text2 = 'IL,55030'/>
        </div> 
        <ContactForm/>
    </section> 
    <img src={Map} alt="MAP" style={{marginBottom: '2em'}}/>
  </>
  )
}

export default Contact
