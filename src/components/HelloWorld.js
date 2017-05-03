import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = props => (
  <div className="container">
    <h1>{props.text}</h1>
  </div>
);

HelloWorld.defaultProps = {
  text: '',
};

HelloWorld.propTypes = {
  text: PropTypes.string,
};

export default HelloWorld;
