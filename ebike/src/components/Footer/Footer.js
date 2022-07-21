import React from 'react'
import {ReactComponent as Iconic} from '../../images/Iconic-ebikes.svg';
import SocialMedia from '../SocialMedia/SocialMedia';
import { Link } from 'react-router-dom'
import './footer.css'
import MasterCard from '../../images/mastercard.svg'
import VisaEletron from '../../images/visa-electron.svg'
import Paypal from '../../images/paypal.svg'
import Visa from '../../images/visa.svg'
import EmailSubscribe from '../EmailSubscribe/EmailSubscribe';


const Footer = () => {
  return (
    <footer id='footer'>
        <section className='footer-container-1 container'>
            <div className='footer-left'>
                <Iconic/>
                <div className='footer-left-input'>
                    <h4>SUBSCRIBE</h4>
                    <p>Subscribe us and you won't miss the new arrivals, as well as discounts and sales.</p>
                    <EmailSubscribe/>
                </div>
                <div className='footer-left-icons'>
                    <h4>STAY IN TOUCH</h4>
                    <SocialMedia color= '#fff' background='#8DC63F' padding='4px'/>
                    <p className='p'>Questions? Please write us at: ABC@gmail..com</p>
                </div>
            </div>
            <div  className='footer-right'>
                <div className='footer-right-nav'>
                    <h4>INFORMATION</h4>
                    <ul className='nav-content'>
                        <li className='nav-items-f'>
                        <Link to="/about">About Us</Link>
                        </li>
                        <li className='nav-items-f'>
                        <Link to="/services">Services</Link>
                        </li>
                        <li className='nav-items-f'>
                        <Link to="/shops">Shops</Link>
                        </li>
                        <li className='nav-items-f'>
                        <Link to="/gallery">Gallery</Link>
                        </li>
                        <li className='nav-items-f'>
                        <Link to="/news">News</Link>
                        </li>
                        <li className='nav-items-f'>
                        <Link to="/contact">Contact Us</Link>
                        </li>    
                </ul>
                </div>
                <div className='footer-right-nav'>
                    <h4>SHOP</h4>
                    <ul className='nav-content'>
                        <li className='nav-items-f'>
                        <Link to="">Road Bike</Link>
                        </li>
                        <li className='nav-items-f'>
                        <Link to="">Mountain Bike</Link>
                        </li>
                        <li className='nav-items-f'>
                        <Link to="">BMX bike</Link>
                        </li>
                        <li className='nav-items-f'>
                        <Link to="">City Bike</Link>
                        </li>
                        <li className='nav-items-f'>
                        <Link to="">Kids Bike</Link>
                        </li>   
                    </ul>
                </div>
            </div>
        </section>
        <section className='footer-container-2 container'>
            <div className='footer-copyright'>
                <p className='copyright'>ICONIC<span> © 2022. All Rights Reserved.</span></p>
                <div className='credit-cards'>
                    <img src={MasterCard} alt="MasterCard" style={{cursor: 'pointer'}} />
                    <img src={VisaEletron} alt="VisaEletron" style={{cursor: 'pointer'}}/>
                    <img src={Paypal} alt="Paypal" style={{cursor: 'pointer'}}/>
                    <img src={Visa} alt="Visa" style={{cursor: 'pointer'}}/>
                </div>
            </div>
        </section>
    </footer>
    
  )
}

export default Footer
