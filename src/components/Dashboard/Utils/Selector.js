import React from 'react';
import { Tag } from 'antd';

const Selector = ({ rollNumbers, selectedRollNumbers, onSelect }) => {
 
  

  return (
    <div className="border w-52 h-40 overflow-y-scroll shadow rounded">
      <div className="grid grid-cols-3 grid-flow-row ">
        {rollNumbers?.map(rollNumber => (
          <Tag 
            key={rollNumber._id}
            color={selectedRollNumbers?.includes(rollNumber._id) ? 'blue' : 'gray'}
            onClick={() => onSelect(rollNumber._id)}
            className="m-0 h-10  items-center flex rounded-none"
          >
            {rollNumber.rollNum}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default Selector;
