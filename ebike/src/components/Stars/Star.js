import { ReactComponent as StarFull } from '../../images/star.svg';
import styles from './Star.module.css'
function Star(){
    return(
      <div className={styles.container}>
        <StarFull />
        <StarFull />
        <StarFull />
        <StarFull />
        <StarFull />
      </div>
    );
}

export default Star;