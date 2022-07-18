import React from 'react'
import Spon1 from '../../images/spon1.svg'
import Spon2 from '../../images/spon2.svg'
import Spon3 from '../../images/spon3.svg'
import Spon4 from '../../images/spon4.svg'

const Sponsorship = () => {
  return (
    <section className='margin-top margin-botton'>
        <div className='container'>
          <div className="sponsorship-flex">
          <img src={Spon1} alt="Spon1" style={{width: '18.125rem'}}/>
            <img src={Spon2} alt="Spon2" style={{width: '18.125rem'}}/>
            <img src={Spon3} alt="Spon3" style={{width: '18.125rem'}}/>
            <img src={Spon4} alt="Spon4" style={{width: '18.125rem'}}/>
          </div>
        </div>
    </section>
  )
}

export default Sponsorship
