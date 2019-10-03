import React from 'react';
import PropTypes from 'prop-types';

const WineDescription = ({ description }) => {
  return (
    <div className="description">
      <p>
        {description}
      </p>
    </div>
  );
};

export default WineDescription;

WineDescription.propTypes = {
  description: PropTypes.string,
};

WineDescription.defaultProps = {
  description: '',
};
