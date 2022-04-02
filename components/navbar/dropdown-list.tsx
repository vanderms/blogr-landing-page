import { useState } from 'react';

const DropdownList: React.FC<{ label: string }> = ({ label, children }) => {
  const [dataState, setDataState] = useState<string>('closed');

  const opposite = dataState === 'closed' ? 'open' : 'closed';

  return (
    <li className="dropdown-list">
      <p
        className="dropdown-label"
        data-state={dataState}
        onClick={() => setDataState(() => opposite)}
      >
        {label}
      </p>
      <ul className="navlinks-depth-2" data-state={dataState}>
        {children}
      </ul>
    </li>
  );
};

export default DropdownList;
