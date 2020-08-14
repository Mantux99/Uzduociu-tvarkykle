import React, {useState} from 'react';
import styles from './index.module.scss';


const Dropdown = ({ title, options, onChange }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={styles.dropdown}
      onClick={() => setShow(!show)}
    >
      <button className={styles.btn}>{title}</button>
      <div className={`${styles.body} ${show? styles.show: false}`}>
        {
          options.map(({ id, value }) =>
            <div
              key={id}
              onClick={() => onChange(id)}
              className={styles.link}
            >{value}</div>
          )
        }
      </div>
    </div>
  )
}

export default Dropdown;
