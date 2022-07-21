import React from 'react'
import {ReactComponent as Iconic} from '../../images/Iconic-ebikes.svg';
import SocialMedia from '../SocialMedia/SocialMedia';
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import MasterCard from '../../images/mastercard.svg'
import VisaEletron from '../../images/visa-electron.svg'
import Paypal from '../../images/paypal.svg'
import Visa from '../../images/visa.svg'
import EmailSubscribe from '../EmailSubscribe/EmailSubscribe';


const Footer = () => {
  return (
    <footer className="container">
        <div className={styles.wrapper}>
        <section className={styles.content_1}>
            <div className={styles.content_1_left}>
                <Iconic/>
                <div className={styles.subscribe_input}>
                    <h4>SUBSCRIBE</h4>
                    <p>Subscribe us and you won't miss the new arrivals, as well as discounts and sales.</p>
                    <EmailSubscribe/>
                </div>
                <div className={styles.icons}>
                    <h4>STAY IN TOUCH</h4>
                    <SocialMedia color= '#fff' background='#8DC63F' padding='4px'/>
                    <p>Questions? Please write us at: ABC@gmail.com</p>
                </div>
            </div>
            <div className={styles.content_1_right}>
                <div className={styles.content_1_right_navbar}>
                    <h4>INFORMATION</h4>
                    <ul className={styles.links_content}>
                        <li className={styles.link}>
                        <Link to="/about">About Us</Link>
                        </li>
                        <li className={styles.link}>
                        <Link to="/services">Services</Link>
                        </li>
                        <li className={styles.link}>
                        <Link to="/shops">Shops</Link>
                        </li>
                        <li className={styles.link}>
                        <Link to="/gallery">Gallery</Link>
                        </li>
                        <li className={styles.link}>
                        <Link to="/news">News</Link>
                        </li>
                        <li className={styles.link}>
                        <Link to="/contact">Contact Us</Link>
                        </li>    
                    </ul>
                </div>
                <div className='footer-right-nav'>
                    <h4>SHOP</h4>
                    <ul className={styles.links_content}>
                        <li className={styles.link}>
                        <Link to="">Road Bike</Link>
                        </li>
                        <li className={styles.link}>
                        <Link to="">Mountain Bike</Link>
                        </li>
                        <li className={styles.link}>
                        <Link to="">BMX bike</Link>
                        </li>
                        <li className={styles.link}>
                        <Link to="">City Bike</Link>
                        </li>
                        <li className={styles.link}>
                        <Link to="">Kids Bike</Link>
                        </li>   
                    </ul>
                </div>
            </div>
        </section>
        <section className={styles.content_2}>
            <div className={styles.content_2_copyright}>
                <p className={styles.copyright}>ICONIC<span className={styles.copyright_link}> © 2022. All Rights Reserved.</span></p>
                <div className={styles.credit_cards}>
                    <img src={MasterCard} alt="MasterCard" style={{cursor: 'pointer'}} />
                    <img src={VisaEletron} alt="VisaEletron" style={{cursor: 'pointer'}}/>
                    <img src={Paypal} alt="Paypal" style={{cursor: 'pointer'}}/>
                    <img src={Visa} alt="Visa" style={{cursor: 'pointer'}}/>
                </div>
            </div>
        </section>

        </div>
        
    </footer>
    
  )
}

export default Footer
