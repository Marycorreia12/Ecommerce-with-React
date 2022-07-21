import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react' 

const SocialMedia = ({color, background, padding}) => { 
  return ( 
    <div style={{display: 'flex', gap: '1.6rem', cursor: 'pointer', marginBottom: '1rem'}}>
        <FontAwesomeIcon icon={['fab', 'facebook']} style={{color: color, background: background, padding: padding}}/>
        <FontAwesomeIcon icon={['fab', 'instagram']} style={{color: color, background: background, padding: padding}}/>
        <FontAwesomeIcon icon={['fab', 'youtube']} style={{color: color, background: background, padding: padding}}/>
        <FontAwesomeIcon icon={['fab', 'twitter']} style={{color: color, background: background, padding: padding}}/>  
    </div>
  )
}

export default SocialMedia
