import React from 'react';
import PropTypes from 'prop-types';
import { fetchWine } from '../util/WineAPIUtil';

let debounceId;
const WineRow = ({
  wine: {
    id,
    color,
    country,
    region,
    top100_rank: rank,
    vintage,
    winery_full: winery,
    wine_full: name,
  },
  setDescription,
}) => {
  const getWine = (wineId) => {
    return () => {
      clearTimeout(debounceId);
      debounceId = setTimeout(() => {
        fetchWine(wineId).then(({ data: { note } }) => {
          setDescription(note);
        });
      }, 1000);
    };
  };

  return (
    <tr onMouseEnter={getWine(id)}>
      <td>{rank}</td>
      <td>{name}</td>
      <td>{winery}</td>
      <td>{vintage}</td>
      <td>{color}</td>
      <td>{country}</td>
      <td>{region}</td>
    </tr>
  );
};

export default WineRow;

WineRow.propTypes = {
  wine: PropTypes.shape({
    id: PropTypes.string,
    color: PropTypes.string,
    country: PropTypes.string,
    region: PropTypes.string,
    top100_rank: PropTypes.number,
    vintage: PropTypes.string,
    winery_full: PropTypes.string,
    wine_full: PropTypes.string,
  }),
  setDescription: PropTypes.func,
};

WineRow.defaultProps = {
  wine: {},
  setDescription: () => {},
};
