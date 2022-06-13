import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react' 

const SocialMedia = ({color, background}) => { 
  return ( 
    <div style={{display: 'flex', gap: '25px'}}>
        <FontAwesomeIcon icon={['fab', 'facebook']} style={{color: color, background: background}}/>
        <FontAwesomeIcon icon={['fab', 'instagram']} style={{color: color, background: background}}/>
        <FontAwesomeIcon icon={['fab', 'youtube']} style={{color: color, background: background}}/>
        <FontAwesomeIcon icon={['fab', 'twitter']} style={{color: color, background: background}}/>  
    </div>
  )
}

export default SocialMedia
