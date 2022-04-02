import Link from 'next/link';
import NavlinkItem from './navlink-item';
import { useState } from 'react';
import DropdownList from './dropdown-list';

export default function Navbar() {
  const [dataState, setDataState] = useState<string>('closed');

  const opposite = dataState === 'closed' ? 'open' : 'closed';

  return (
    <nav className="nv-navbar" data-state={dataState}>
      <Link href="/">
        <a className="logo-link" aria-label="Homepage">
          <img src="/images/logo.svg" alt="" className="logo" />
        </a>
      </Link>
      <ul className="navlinks" data-state={dataState}>
        <DropdownList label="Product">
          <NavlinkItem href="/" text="Overview" />
          <NavlinkItem href="/" text="Pricing" />
          <NavlinkItem href="/" text="Marketplace" />
          <NavlinkItem href="/" text="Features" />
          <NavlinkItem href="/" text="Integrations" />
        </DropdownList>

        <DropdownList label="Company">
          <NavlinkItem href="/" text="About" />
          <NavlinkItem href="/" text="Team" />
          <NavlinkItem href="/" text="Blog" />
          <NavlinkItem href="/" text="Careers" />
        </DropdownList>

        <DropdownList label="Connect">
          <NavlinkItem href="/" text="Contact" />
          <NavlinkItem href="/" text="Newsletter" />
          <NavlinkItem href="/" text="LinkedIn" />
        </DropdownList>
        <li className="navbar-sep" aria-hidden='true'></li>
        <NavlinkItem href="/" text="Login" className="cta-secondary" />
        <NavlinkItem href="/" text="Sign Up" className="cta-primary" />
      </ul>
      <button
        className="toggle-menu"
        aria-label="toggle menu"
        onClick={() => setDataState(() => opposite)}
        data-state={dataState}
      ></button>
    </nav>
  );
}
