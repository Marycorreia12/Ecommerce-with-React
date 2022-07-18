import React from 'react'
import Hyper1 from '../../images/hyper1.svg'
import Hyper2 from '../../images/hyper2.svg'
import Hyper3 from '../../images/hyper3.svg'
import Hyper4 from '../../images/hyper4.svg'
import Hyper5 from '../../images/hyper5.svg'
import styles from './HyperGallery.module.css'
import Hyper6 from '../../images/hyper_msg.svg'
import Hyper7 from '../../images/hyper_love.svg'


const HyperGallery = () => {
  return (
    <section className={styles.container}>
        <div className={styles.items}>
            <img src={Hyper1} alt="Hyper_Image" />
            <div className={styles.content}>
                <span className={styles.content_items}>230
                <img src={Hyper6} alt="Hyper_comments" className={styles.image}/>
                </span>
                <span  className={styles.content_items}>17
                <img src={Hyper7} alt="Hyper_likes" className={styles.image}/>
                </span>
            </div>
        </div>
        <div className={styles.items}>
            <img src={Hyper2} alt="Hyper_Image" />
            <div className={styles.content}>
                <span className={styles.content_items}>130
                <img src={Hyper6} alt="Hyper_comments" className={styles.image}/>
                </span>
                <span  className={styles.content_items}>30
                <img src={Hyper7} alt="Hyper_likes" className={styles.image}/>
                </span>
            </div>
        </div>
       <div className={styles.items}>
            <img src={Hyper3} alt="Hyper_Image" />
            <div className={styles.content}>
                <span className={styles.content_items}>30
                <img src={Hyper6} alt="Hyper_comments" className={styles.image}/>
                </span>
                <span  className={styles.content_items}>7
                <img src={Hyper7} alt="Hyper_likes" className={styles.image}/>
                </span>
            </div>
       </div>
        <div className={styles.items}>
            <img src={Hyper4} alt="Hyper_Image" />
            <div className={styles.content}>
                <span className={styles.content_items}>20
                <img src={Hyper6} alt="Hyper_comments" className={styles.image}/>
                </span>
                <span  className={styles.content_items}>6
                <img src={Hyper7} alt="Hyper_likes" className={styles.image}/>
                </span>
            </div>
        </div>
        <div className={styles.items}>
            <img src={Hyper5} alt="Hyper_Image" />
            <div className={styles.content}>
                <span className={styles.content_items}>150
                <img src={Hyper6} alt="Hyper_comments" className={styles.image}/>
                </span>
                <span  className={styles.content_items}>50
                <img src={Hyper7} alt="Hyper_likes" className={styles.image}/>
                </span>
            </div>
        </div>
    </section>
  )
}

export default HyperGallery
