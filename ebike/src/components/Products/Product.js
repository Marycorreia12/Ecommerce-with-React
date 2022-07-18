import React from 'react'
import Button from '../Button/Button';
import styles from './Product.module.css'
import heart from '../../images/heart.svg'
import circle from '../../images/circle.svg'

const Product = ({discount, background, contentRef}) => {
    const [modal, setModal] = React.useState(false);
    
    const products = [
    {
      "name": "Kids bicicle",
      "price": "$1.699.00",
      "description": "Hyper E-Ride Bike 700C 20+ Mile Range",
      "image": "https://m.media-amazon.com/images/I/71ZxPve9ZjL._AC_SX522_.jpg",
      "id": "1"
      },
    ]
  return (
    <section className={styles.container} ref={contentRef}>
            {products.map(product => (
            <article className={styles.content}>
            <div className={styles.image}>
                <div className={styles.items}>
                    <span className={styles.sale} style={{background: background}}>{discount}</span>
                    <span className={styles.icons}>
                        <img src={circle} alt='Circle'/>
                        <img src={heart} alt='Heart'/>
                    </span>
                </div>
                <div  className={styles.product_bike}>
                  <img src={product.image} alt="Bike"/>
                </div>
            </div>
            <div className={styles.product_info}>
                <strong className={styles.product_price}>{product.price}</strong>
                <p className={styles.product_description} onClick={() => setModal(!modal)}>{product.description}</p>
                <Button texto='BUY NOW' padding='0.563em 1.063em'/>               
            </div>
            {modal ? 
                <div className={styles.product_info_content}>
                  <p>{'Frame Size: 17'}</p>
                  <p>{'Class: City'}</p>
                  <p>{'Number of speeds: 7'}</p>
                  <p>{'Type: Rigid'}</p>
                  <p>{'Country registration: USA'}</p>
              </div>
               : null
            }
            </article>

            ))}
           
    </section>
  )
}

export default Product
