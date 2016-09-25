import React, {PropTypes} from 'react';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

import styles from './styles.css';

const Toggle = ({onClick, isMenuClosed}) => (
  <button className={styles['Menu-toggle']} onClick={onClick} type="button">
    {isMenuClosed
      ? <FaEllipsisV className={styles['Menu-toggleIcon']}/>
      : <FaAngleLeft className={styles['Menu-toggleIcon']}/>
    }
    <span>{isMenuClosed ? 'Open' : 'Close'} menu</span>
  </button>
);

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  isMenuClosed: PropTypes.bool
};

export default Toggle;
