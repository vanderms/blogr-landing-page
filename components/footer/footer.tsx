import Link from 'next/link';
import NavlinkItem from './../navbar/navlink-item';

export default function Footer() {
  return (
    <footer className="nv-footer">
      <Link href="/">
        <a className="logo-link" aria-label="Homepage">
          <img src="/images/logo.svg" alt="" className="logo" />
        </a>
      </Link>
      <div className="list-container">
        <p className="list-name">Product</p>
        <ul className="navlinks-list">
          <NavlinkItem href="/" text="Overview" />
          <NavlinkItem href="/" text="Pricing" />
          <NavlinkItem href="/" text="Marketplace" />
          <NavlinkItem href="/" text="Features" />
          <NavlinkItem href="/" text="Integrations" />
        </ul>
      </div>
      <div className="list-container">
        <p className="list-name">Company</p>
        <ul className="navlinks-list">
          <NavlinkItem href="/" text="About" />
          <NavlinkItem href="/" text="Team" />
          <NavlinkItem href="/" text="Blog" />
          <NavlinkItem href="/" text="Careers" />
        </ul>
      </div>

      <div className="list-container">
        <p className="list-name">Connect</p>
        <ul className="navlinks-list">
          <NavlinkItem href="/" text="Contact" />
          <NavlinkItem href="/" text="Newsletter" />
          <NavlinkItem href="/" text="LinkedIn" />
        </ul>
      </div>
    </footer>
  );
}
