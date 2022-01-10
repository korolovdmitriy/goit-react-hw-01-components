import React from 'react';
import PropTypes from 'prop-types';

const AppExstension = ({title}) => {
    return (
        <h2>{title}</h2>
    );
}

AppExstension.propTypes = {
    title: PropTypes.string,
}

export default AppExstension;