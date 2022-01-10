import React from 'react';
import PropTypes from 'prop-types';
import styles from './Options.module.css';
import './Options.css'

const Options = ({options}) => {
    return <>
        {options.map((car, index) =>
            <ul key={index} className='container'>
                <li className={styles.options__list}>{car.name}</li>
                <li className={styles.options__list}>{car.type}</li>
                <li className={styles.options__list}>{car.id}</li>
            </ul>
            )} 
    </>;
}


Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })),
}
export default Options;