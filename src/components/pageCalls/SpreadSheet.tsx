import React, { useEffect, useLayoutEffect, useState } from 'react';

import HeaderTable from './SpreadSheet/HeaderTable';
import Content from './SpreadSheet/Content';

const SpreadSheet = () => {
  const [allChecked, setAllChecked] = useState(false);

  const handleCheckbox = () => {
    setAllChecked(!allChecked);
  };

  return (
    <div className="spreadsheet">
      <HeaderTable handleCheckbox={handleCheckbox} checked={allChecked} />
      <Content allChecked={allChecked} />
    </div>
  );
};

export default SpreadSheet;
