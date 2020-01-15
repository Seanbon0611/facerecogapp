import React from 'react';
import './rank.styles.scss';

const Rank = ({ name, entries }) => (
  <div>
    <div className='center rank-text'>
      {`${name} , your current entry count is...`}
    </div>
    <div className='center rank-text'>
      {entries}
    </div>
  </div>
);

export default Rank;