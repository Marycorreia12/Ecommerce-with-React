import React from 'react'
import new1 from '../../images/news1.svg'
import new2 from '../../images/news2.svg'
import new3 from '../../images/news3.svg'
import date from '../../images/date.svg'
import user from '../../images/user.svg'
import styles from './NewsCard.module.css'

const NewsCard = () => {
    const newsCards = [
        {
         title: 'Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae',
         img : new1,
         date: 'Dec 26, 2020',
         user: 'By Samson',
         text: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque'
        },
        {
        title: 'At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducim',
        img : new2,
        date: 'Dec 26, 2020',
        user: 'By Samson',
        text: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque'
        },
        {
        title: 'On The Other Hand, We Denounce With Righteous Indignation A',
        img : new3,
        date: 'Dec 26, 2020',
        user: 'By Samson',
        text: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque'
        }

    ]
  return (
    <section className={styles.cards}>
        {newsCards.map(card => (
            <article className={styles.card}>
                <h5 className={styles.title}>{card.title}</h5>
                <img src={card.img} alt="NewsImages" className={styles.imageInfo}/>
                <div className={styles.date}>
                    <div className={styles.info}>
                        <img src={date} alt="Date" className={styles.imageIcon} />
                        <small>{card.date}</small>
                    </div>
                    <div className={styles.info}>
                        <img src={user} alt='' className={styles.imageIcon}/>
                        <small>{card.user}</small>
                    </div>
                </div>
                <div>
                    <p className={styles.text}>{card.text}</p>
                    <a href="https" className={styles.btn}>READ MORE</a>
                </div>

            </article>
        ))}
      
    </section>
  )
}

export default NewsCard
