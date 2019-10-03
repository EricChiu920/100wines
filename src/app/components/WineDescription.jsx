import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const WineDescription = ({ description }) => {
  return (
    <div className="description">
      <p>
        {ReactHtmlParser(description)}
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
