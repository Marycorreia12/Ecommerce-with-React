import { ReactComponent as StarFull } from '../../images/star.svg';
import './star.css'
function Star(){
    return(
        <div className="stars-container">
        <StarFull />
        <StarFull />
        <StarFull />
        <StarFull />
        <StarFull />
      </div>
    );
}

export default Star;