import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ wineList, setWineList }) => {
  const sortBy = (field) => {
    return () => {
      const newWineList = wineList.slice().sort((a, b) => {
        return Math.sign(a[field] > b[field]) === 0 ? -1 : 1;
      });
      setWineList(newWineList);
    };
  };

  return (
    <thead className="table-head">
      <tr>
        <th onClick={sortBy('top100_rank')}>Rank</th>
        <th onClick={sortBy('wine_full')}>Wine</th>
        <th onClick={sortBy('winery_full')}>Winery</th>
        <th onClick={sortBy('vintage')}>Vintage</th>
        <th onClick={sortBy('color')}>Color</th>
        <th onClick={sortBy('country')}>Country</th>
        <th onClick={sortBy('region')}>Region</th>
      </tr>
    </thead>
  );
};

export default TableHead;

TableHead.propTypes = {
  wineList: PropTypes.arrayOf(PropTypes.object),
  setWineList: PropTypes.func,
};

TableHead.defaultProps = {
  wineList: [],
  setWineList: () => {},
};
