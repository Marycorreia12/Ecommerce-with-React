import React from 'react'
import ContactInfoImage from '../../images/contactinfo.svg'
import './contactInfo.css'
import SocialMedia from '../SocialMedia/SocialMedia'
import ContactCard from '../../components/ContactCard/ContactCard'
import phone from '../../images/phone.svg'
import envelope from '../../images/envelope.svg'


const ContactInfo = () => {
  return (
    <section className='contact-info-container'>
        <div className='contact-info-flex'>
            <img src={ContactInfoImage} alt="ContactInfoImage" className='image'/>
            <div className='contact-info-content'>
                <h3 className='contact-info-title'>CONTACT INFORMATION</h3>
                <div className='contact-info-text'>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit totam rem aperiam, eaque sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim Nor again is there anyone who loves or pursues or desires to obtain.</p>
                </div>
                <SocialMedia/>
            </div>
        </div>
        <div className='contact-cards'>
          <ContactCard img = {phone} title = 'NEED HELP' text1 = '1-800-488-6040' text2 = '1-800-578-4090'/>
          <ContactCard img = {envelope} title = 'QUESTIONS' text1 = 'team@gmail..com' text2 = 'help@gmail..com'/>
          <ContactCard img = {phone} title = 'ADDRESS' text1 = '8500,Lorem Street,Chicago' text2 = 'IL,55030'/>
        </div> 
    </section> 
  )
}

export default ContactInfo
