import './PageDescription.scss';

import React from 'react';
import PropTypes from 'prop-types';

const PageDescription = (props) => (
    <p className="page-description">
        {props.description}
    </p>);

PageDescription.propTypes = {
    description: PropTypes.string
};

export default PageDescription;