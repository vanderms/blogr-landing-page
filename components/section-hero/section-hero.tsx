import Link from 'next/link';

export default function SectionHero() {
  return (
    <header className="nv-section-hero">
      <picture className="bg-picture">
        <source
          media="(min-width: 1120px)"
          srcSet="/images/bg-pattern-intro-desktop.svg"
        />
        <img
          src="/images/bg-pattern-intro-mobile.svg"
          alt=""
          className="bg-pattern"
        />
      </picture>
      <h1 className="title">A modern publishing platform</h1>
      <p className="text">Grow your audience and build your online brand</p>
      <div className="cta-container">
        <Link href="/">
          <a className="cta-primary">Start for Free</a>
        </Link>
        <Link href="/">
          <a className="cta-secondary">Learn More</a>
        </Link>
      </div>
    </header>
  );
}
