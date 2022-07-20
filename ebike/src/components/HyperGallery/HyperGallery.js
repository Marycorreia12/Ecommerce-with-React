import React from 'react'
import Hyper1 from '../../images/hyper1.svg'
import Hyper2 from '../../images/hyper2.svg'
import Hyper3 from '../../images/hyper3.svg'
import Hyper4 from '../../images/hyper4.svg'
import Hyper5 from '../../images/hyper5.svg'
import styles from './HyperGallery.module.css'
import Hyper6 from '../../images/hyper_msg.svg'
import Hyper7 from '../../images/hyper_love.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const HyperGallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            }
          }
        ]
      };
  return (
    <section className={styles.container}>
        <Slider {...settings}>
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
        </Slider>
    </section>
  )
}

export default HyperGallery
