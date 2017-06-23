import React from 'react';
import PropTypes from 'prop-types';

const PageDescription = (props) => <p>{props.description}</p>;

PageDescription.propTypes = {
    description: PropTypes.string
};

export default PageDescription;