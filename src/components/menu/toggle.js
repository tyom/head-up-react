import React, {PropTypes} from 'react';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

import styles from './styles.css';

const Toggle = ({onClick, isMenuClosed}) => (
  <button className={styles['Menu-toggle']} onClick={onClick} type="button">
    {isMenuClosed
      ? <FaAngleRight className={styles['Menu-toggleIcon']}/>
      : <FaAngleLeft className={styles['Menu-toggleIcon']}/>
    }
    <span>{isMenuClosed ? 'Open' : 'Close'} menu</span>
  </button>
);

export default Toggle;
