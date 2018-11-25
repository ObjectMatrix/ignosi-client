import React from 'react';
import Select from 'react-select';

export default (props) => {

  const optionsLevel = props.level
  const optionsSubject = props.subject
  const handleSelect = props.handle
  return (
    <div>
      <div className="divStyleLevel">
          <Select
            name="level"
            options={optionsLevel}
            onChange={handleSelect}
          />
      </div>

      <div className="divStyleSubject">
          <Select
            name="subject"
            options={optionsSubject}
            onChange={handleSelect}
          />
      </div>
    </div>
  );
 };

