import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div className="tc pt6">
            <div className="white f2">{`${name}, your current entry count is ${entries}`}</div>
        </div>
      );
}  

export default Rank;