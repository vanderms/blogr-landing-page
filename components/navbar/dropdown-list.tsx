import { useState, useEffect, useRef } from 'react';
import { isInside } from '../../lib/util';

const DropdownList: React.FC<{ label: string }> = ({ label, children }) => {
  const [dataState, setDataState] = useState<string>('closed');
  const root = useRef<HTMLLIElement | null>(null);

  const opposite = dataState === 'closed' ? 'open' : 'closed';

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (root.current && !isInside(event.target as HTMLElement, root.current)) {
        setDataState('closed');
      }
    };
    window.addEventListener('click', listener);
    return () => {
      window.removeEventListener('click', listener);
    };
  }, []);

  return (
    <li className="dropdown-list" ref={root}>
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
